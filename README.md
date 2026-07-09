# Hikari Quest Design - Tienda de Tazas

## Descripcion

Hikari Quest Design es una tienda online (e-commerce) de tazas personalizadas con disenos de anime, videojuegos y series de television. El sitio permite a los usuarios explorar el catalogo de productos (obtenido desde una API REST mediante fetch), filtrar por categorias, agregar productos al carrito de compras y contactar con la tienda. Esta construido unicamente con HTML, CSS y JavaScript.

## Estructura del Proyecto

```
├── index.html          # Pagina principal (hero, destacados, categorias, resenas)
├── productos.html      # Catalogo de productos
├── contacto.html       # Pagina de contacto + FAQ
├── css/
│   └── styles.css      # Estilos del sitio (Flexbox, CSS Grid y Media Queries)
├── js/
│   ├── products.js     # Consumo de la API REST con fetch y helpers
│   ├── cart.js         # Funcionalidad del carrito (localStorage)
│   ├── main.js         # Funcionalidad general
│   ├── productos-page.js # Filtros, busqueda y orden
│   └── contacto.js     # Validacion del formulario
├── data/
│   └── products.json   # Endpoint JSON (API REST de productos)
├── images/
│   ├── logo.jpg
│   └── products/       # Imagenes de productos
└── videos/
    └── hero-video.mp4  # Video del hero
```

## Tecnologias Utilizadas

- **HTML5**: Estructura semantica (header, nav, main, section, footer)
- **CSS3**: Estilos, diseño responsive con Flexbox, CSS Grid (seccion Resenas) y Media Queries
- **Google Fonts**: Playfair Display y Poppins
- **JavaScript**: Interactividad, consumo de API REST con fetch, carrito y validaciones
- **Formspree**: Servicio para envio de formularios
- **LocalStorage**: Persistencia del carrito de compras

## Funcionalidades

- Productos obtenidos desde una API REST (`data/products.json`) usando fetch y renderizados como tarjetas
- Navegacion entre paginas (Inicio, Productos, Contacto)
- Carrito de compras funcional con persistencia en localStorage, contador dinamico, edicion de cantidades y total en tiempo real
- Filtrado de productos por categoria (Anime, Gamer, Series)
- Busqueda de productos en tiempo real y ordenamiento por precio y nombre
- Seccion de resenas de clientes maquetada con CSS Grid
- Formulario de contacto con validacion y envio via Formspree
- Contenido multimedia (video en el hero)
- SEO basico (metaetiquetas) y accesibilidad (alt en imagenes, navegacion por teclado con foco visible)
- Diseño responsive para dispositivos moviles y desktop

## Como Ejecutar

El sitio consume los productos con `fetch` desde `data/products.json`, por lo que debe servirse a traves de un servidor local (no abriendo el HTML con `file://`).

```bash
# Opcion con Python
python -m http.server 8000

# Opcion con Node
npx serve
```

Luego abrir `http://localhost:8000` en el navegador. Al estar publicado en un hosting (Netlify o GitHub Pages) funciona directamente.

## Autor

Hikari Quest Design
