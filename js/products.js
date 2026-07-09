/* ================================
   PRODUCTOS - Consumo de API REST con fetch
   Los datos se obtienen desde un endpoint JSON (nuestra propia API REST)
   ================================ */

// URL del endpoint de la API REST de productos
const PRODUCTS_API_URL = 'data/products.json';

// Array donde se almacenan los productos una vez cargados desde la API
let products = [];

/**
 * Consume los productos desde la API REST usando fetch.
 * Devuelve una promesa con el array de productos.
 */
async function fetchProducts() {
    try {
        const response = await fetch(PRODUCTS_API_URL);

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();
        products = data;
        return products;
    } catch (error) {
        console.error('[v0] No se pudieron cargar los productos desde la API:', error);
        products = [];
        return products;
    }
}

// Promesa global: se resuelve cuando los productos terminan de cargarse.
// Las demas paginas (inicio y catalogo) esperan a esta promesa antes de renderizar.
const productsReady = fetchProducts();

// Funcion para obtener todos los productos
function getAllProducts() {
    return products;
}

// Funcion para obtener productos destacados
function getFeaturedProducts() {
    return products.filter(product => product.featured);
}

// Funcion para obtener productos por categoria
function getProductsByCategory(category) {
    if (category === 'todos' || !category) {
        return products;
    }
    return products.filter(product => product.category === category);
}

// Funcion para buscar productos
function searchProducts(query) {
    const searchTerm = query.toLowerCase();
    return products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
}

// Funcion para obtener un producto por ID
function getProductById(id) {
    return products.find(product => product.id === id);
}

// Funcion para ordenar productos
function sortProducts(productsArray, sortBy) {
    const sorted = [...productsArray];
    
    switch (sortBy) {
        case 'precio-asc':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'precio-desc':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'nombre':
            sorted.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'destacados':
        default:
            sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
            break;
    }
    
    return sorted;
}

// Funcion para renderizar una tarjeta de producto
function renderProductCard(product) {
    const badgeHTML = product.badge 
        ? `<span class="product-badge ${product.badge}">${product.badge === 'sale' ? 'Oferta' : 'Nuevo'}</span>` 
        : '';
    
    const originalPriceHTML = product.originalPrice 
        ? `<span class="price-original">$${product.originalPrice.toFixed(2)}</span>` 
        : '';

    return `
        <article class="product-card" data-product-id="${product.id}">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                ${badgeHTML}
                <div class="product-actions">
                    <button class="product-action-btn" title="Agregar a favoritos">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                        </svg>
                    </button>
                    <button class="product-action-btn" title="Vista rapida">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                            <circle cx="12" cy="12" r="3"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">
                    <span class="price-current">$${product.price.toFixed(2)}</span>
                    ${originalPriceHTML}
                </div>
                <button class="product-add-btn" onclick="addToCart(${product.id})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
                        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
                    </svg>
                    Agregar al carrito
                </button>
            </div>
        </article>
    `;
}
