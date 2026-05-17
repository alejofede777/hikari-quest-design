/* ================================
   PRODUCTOS - Base de datos de productos
   ================================ */

const products = [
    // ANIME
    {
        id: 1,
        name: "Taza Naruto Uzumaki",
        category: "anime",
        price: 15.99,
        originalPrice: 19.99,
        image: "images/products/naruto.jpg",
        badge: "sale",
        featured: true,
        description: "Taza con diseño del ninja mas famoso de Konoha"
    },
    {
        id: 2,
        name: "Taza Attack on Titan",
        category: "anime",
        price: 16.99,
        image: "images/products/aot.jpg",
        badge: "new",
        featured: true,
        description: "Emblema del Cuerpo de Exploracion"
    },
    {
        id: 3,
        name: "Taza My Hero Academia",
        category: "anime",
        price: 14.99,
        image: "images/products/mha.jpg",
        featured: false,
        description: "Diseño Plus Ultra con los heroes de UA"
    },
    {
        id: 4,
        name: "Taza Dragon Ball Z",
        category: "anime",
        price: 15.99,
        image: "images/products/dbz.jpg",
        featured: true,
        description: "Goku Super Saiyan en toda su gloria"
    },
    {
        id: 5,
        name: "Taza Demon Slayer",
        category: "anime",
        price: 17.99,
        originalPrice: 21.99,
        image: "images/products/demon-slayer.jpg",
        badge: "sale",
        featured: false,
        description: "Tanjiro y los cazadores de demonios"
    },
    {
        id: 6,
        name: "Taza One Piece",
        category: "anime",
        price: 15.99,
        image: "images/products/one-piece.jpg",
        badge: "new",
        featured: true,
        description: "La tripulacion del Sombrero de Paja"
    },

    // GAMER
    {
        id: 7,
        name: "Taza PlayStation Classic",
        category: "gamer",
        price: 14.99,
        image: "images/products/playstation.jpg",
        featured: true,
        description: "Iconos clasicos de PlayStation"
    },
    {
        id: 8,
        name: "Taza Xbox Gamer",
        category: "gamer",
        price: 14.99,
        image: "images/products/xbox.jpg",
        featured: false,
        description: "Diseño verde Xbox para gamers"
    },
    {
        id: 9,
        name: "Taza Nintendo Retro",
        category: "gamer",
        price: 16.99,
        originalPrice: 19.99,
        image: "images/products/nintendo.jpg",
        badge: "sale",
        featured: true,
        description: "Iconos retro de Nintendo"
    },
    {
        id: 10,
        name: "Taza Minecraft",
        category: "gamer",
        price: 13.99,
        image: "images/products/minecraft.jpg",
        badge: "new",
        featured: false,
        description: "Creeper y bloques pixelados"
    },
    {
        id: 11,
        name: "Taza Fortnite",
        category: "gamer",
        price: 14.99,
        image: "images/products/fortnite.jpg",
        featured: false,
        description: "Battle Royale en tu taza"
    },
    {
        id: 12,
        name: "Taza League of Legends",
        category: "gamer",
        price: 16.99,
        image: "images/products/lol.jpg",
        featured: true,
        description: "Champions legendarios"
    },

    // SERIES
    {
        id: 13,
        name: "Taza Breaking Bad",
        category: "series",
        price: 15.99,
        image: "images/products/breaking-bad.jpg",
        featured: true,
        description: "Heisenberg en tu escritorio"
    },
    {
        id: 14,
        name: "Taza Game of Thrones",
        category: "series",
        price: 17.99,
        originalPrice: 22.99,
        image: "images/products/got.jpg",
        badge: "sale",
        featured: false,
        description: "El Trono de Hierro te espera"
    },
    {
        id: 15,
        name: "Taza Stranger Things",
        category: "series",
        price: 15.99,
        image: "images/products/stranger-things.jpg",
        badge: "new",
        featured: true,
        description: "El Upside Down en estilo retro"
    },
    {
        id: 16,
        name: "Taza The Office",
        category: "series",
        price: 14.99,
        image: "images/products/the-office.jpg",
        featured: true,
        description: "World's Best Boss"
    },
    {
        id: 17,
        name: "Taza Friends",
        category: "series",
        price: 14.99,
        image: "images/products/friends.jpg",
        featured: false,
        description: "Central Perk en tu hogar"
    },
    {
        id: 18,
        name: "Taza The Mandalorian",
        category: "series",
        price: 16.99,
        image: "images/products/mandalorian.jpg",
        badge: "new",
        featured: false,
        description: "This is the way"
    }
];

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
