/* ================================
   MAIN.JS - Funcionalidad principal
   ================================ */

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar componentes
    initHeader();
    initMobileMenu();
    initFeaturedProducts();
    initNewsletter();
    initScrollAnimations();
});

/* ================================
   HEADER
   ================================ */
function initHeader() {
    const header = document.getElementById('header');
    
    if (!header) return;
    
    // Efecto de scroll en el header
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Agregar clase cuando se hace scroll
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}

/* ================================
   MENU MOVIL
   ================================ */
function initMobileMenu() {
    const menuBtn = document.getElementById('menu-btn');
    const nav = document.getElementById('nav');
    
    if (!menuBtn || !nav) return;
    
    menuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
        
        // Cambiar icono del menu
        const icon = menuBtn.querySelector('svg');
        if (nav.classList.contains('active')) {
            icon.innerHTML = `
                <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
            `;
        } else {
            icon.innerHTML = `
                <line x1="4" x2="20" y1="12" y2="12"/>
                <line x1="4" x2="20" y1="6" y2="6"/>
                <line x1="4" x2="20" y1="18" y2="18"/>
            `;
        }
    });
    
    // Cerrar menu al hacer click en un enlace
    const navLinks = nav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
        });
    });
    
    // Cerrar menu al hacer click fuera
    document.addEventListener('click', function(e) {
        if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
            nav.classList.remove('active');
        }
    });
}

/* ================================
   PRODUCTOS DESTACADOS (Homepage)
   ================================ */
async function initFeaturedProducts() {
    const container = document.getElementById('featured-products');
    
    if (!container) return;
    
    // Esperar a que los productos se carguen desde la API REST (fetch)
    await productsReady;
    
    // Obtener productos destacados
    const featured = getFeaturedProducts();
    
    // Renderizar productos (maximo 8)
    const productsToShow = featured.slice(0, 8);
    container.innerHTML = productsToShow.map(product => renderProductCard(product)).join('');
    
    // Agregar animacion de entrada
    const cards = container.querySelectorAll('.product-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

/* ================================
   NEWSLETTER
   ================================ */
function initNewsletter() {
    const form = document.getElementById('newsletter-form');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const input = form.querySelector('input[type="email"]');
        const email = input.value.trim();
        
        if (!email) {
            showToast('Por favor ingresa un email valido', 'error');
            return;
        }
        
        // Simular envio
        const btn = form.querySelector('button');
        const originalText = btn.textContent;
        btn.textContent = 'Enviando...';
        btn.disabled = true;
        
        setTimeout(() => {
            showToast('Te has suscrito exitosamente!', 'success');
            input.value = '';
            btn.textContent = originalText;
            btn.disabled = false;
        }, 1500);
    });
}

/* ================================
   ANIMACIONES DE SCROLL
   ================================ */
function initScrollAnimations() {
    // Observador para animaciones al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Observar tarjetas de categoria
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Observar tarjetas de features
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
}

/* ================================
   UTILIDADES
   ================================ */

// Formatear precio
function formatPrice(price) {
    return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN'
    }).format(price);
}

// Debounce function para optimizar eventos
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth scroll a un elemento
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}
