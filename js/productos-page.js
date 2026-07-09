/* ================================
   PRODUCTOS PAGE - Pagina de catalogo
   Filtros, busqueda y ordenamiento
   ================================ */

document.addEventListener('DOMContentLoaded', function() {
    initProductsPage();
});

// Variables de estado
let currentCategory = 'todos';
let currentSort = 'destacados';
let currentSearch = '';

function initProductsPage() {
    // Verificar si estamos en la pagina de productos
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;
    
    // Leer parametros de URL
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('categoria');
    
    if (categoryParam) {
        currentCategory = categoryParam;
        // Marcar el radio button correcto
        const radioBtn = document.querySelector(`input[name="categoria"][value="${categoryParam}"]`);
        if (radioBtn) {
            radioBtn.checked = true;
        }
    }
    
    // Inicializar componentes
    initSearch();
    initFilters();
    initSort();
    initMobileFilters();
    
    // Mostrar estado de carga mientras llega la respuesta de la API
    productsGrid.innerHTML = '<p class="products-loading">Cargando productos...</p>';
    
    // Esperar a que los productos se carguen desde la API REST (fetch) y luego renderizar
    productsReady.then(loadProducts);
}

/* ================================
   BUSQUEDA
   ================================ */
function initSearch() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;
    
    // Busqueda con debounce
    let searchTimeout;
    searchInput.addEventListener('input', function(e) {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            currentSearch = e.target.value.trim();
            loadProducts();
        }, 300);
    });
    
    // Limpiar busqueda con Escape
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            searchInput.value = '';
            currentSearch = '';
            loadProducts();
        }
    });
}

/* ================================
   FILTROS POR CATEGORIA
   ================================ */
function initFilters() {
    const filterOptions = document.querySelectorAll('input[name="categoria"]');
    
    filterOptions.forEach(option => {
        option.addEventListener('change', function() {
            currentCategory = this.value;
            loadProducts();
            
            // Actualizar URL sin recargar pagina
            const url = new URL(window.location);
            if (currentCategory === 'todos') {
                url.searchParams.delete('categoria');
            } else {
                url.searchParams.set('categoria', currentCategory);
            }
            window.history.pushState({}, '', url);
        });
    });
}

/* ================================
   ORDENAMIENTO
   ================================ */
function initSort() {
    const sortSelect = document.getElementById('sort-select');
    if (!sortSelect) return;
    
    sortSelect.addEventListener('change', function() {
        currentSort = this.value;
        loadProducts();
    });
}

/* ================================
   FILTROS MOVIL
   ================================ */
function initMobileFilters() {
    const filtersToggle = document.getElementById('filters-toggle');
    const filtersSidebar = document.querySelector('.filters-sidebar');
    const filtersOverlay = document.getElementById('filters-overlay');
    
    if (!filtersToggle || !filtersSidebar) return;
    
    // Abrir filtros
    filtersToggle.addEventListener('click', function() {
        filtersSidebar.classList.add('active');
        if (filtersOverlay) {
            filtersOverlay.classList.add('active');
        }
        document.body.style.overflow = 'hidden';
    });
    
    // Cerrar filtros al hacer click en overlay
    if (filtersOverlay) {
        filtersOverlay.addEventListener('click', function() {
            filtersSidebar.classList.remove('active');
            filtersOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    // Cerrar filtros al seleccionar una opcion en movil
    const filterOptions = filtersSidebar.querySelectorAll('input[name="categoria"]');
    filterOptions.forEach(option => {
        option.addEventListener('change', function() {
            if (window.innerWidth < 768) {
                setTimeout(() => {
                    filtersSidebar.classList.remove('active');
                    if (filtersOverlay) {
                        filtersOverlay.classList.remove('active');
                    }
                    document.body.style.overflow = '';
                }, 300);
            }
        });
    });
}

/* ================================
   CARGAR PRODUCTOS
   ================================ */
function loadProducts() {
    const productsGrid = document.getElementById('products-grid');
    const productsCount = document.getElementById('products-count');
    const noProducts = document.getElementById('no-products');
    
    if (!productsGrid) return;
    
    // Obtener productos filtrados
    let filteredProducts = [];
    
    if (currentSearch) {
        // Si hay busqueda, buscar en todos los productos
        filteredProducts = searchProducts(currentSearch);
        // Si tambien hay categoria, filtrar por ella
        if (currentCategory !== 'todos') {
            filteredProducts = filteredProducts.filter(p => p.category === currentCategory);
        }
    } else {
        // Solo filtrar por categoria
        filteredProducts = getProductsByCategory(currentCategory);
    }
    
    // Ordenar productos
    filteredProducts = sortProducts(filteredProducts, currentSort);
    
    // Actualizar contador
    if (productsCount) {
        productsCount.textContent = filteredProducts.length;
    }
    
    // Mostrar productos o mensaje de vacio
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '';
        if (noProducts) {
            noProducts.style.display = 'block';
        }
    } else {
        if (noProducts) {
            noProducts.style.display = 'none';
        }
        
        // Renderizar productos con animacion
        productsGrid.innerHTML = filteredProducts.map(product => renderProductCard(product)).join('');
        
        // Animar entrada de productos
        const cards = productsGrid.querySelectorAll('.product-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 50);
        });
    }
}
