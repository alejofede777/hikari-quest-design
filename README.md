# Hikari Quest Design - Tienda de Tazas

## Descripcion

Hikari Quest Design es una tienda online de tazas personalizadas con disenos de anime, videojuegos y series de television. El sitio permite a los usuarios explorar el catalogo de productos, filtrar por categorias, agregar productos al carrito de compras y contactar con la tienda.

## Estructura del Proyecto

```
├── index.html          # Pagina principal
├── productos.html      # Catalogo de productos
├── contacto.html       # Pagina de contacto
├── css/
│   └── styles.css      # Estilos del sitio
├── js/
│   ├── products.js     # Base de datos de productos
│   ├── cart.js         # Funcionalidad del carrito
│   ├── main.js         # Funcionalidad general
│   ├── productos-page.js # Filtros y busqueda
│   └── contacto.js     # Validacion del formulario
├── images/
│   ├── logo.jpg
│   └── products/       # Imagenes de productos
└── videos/
    └── hero-video.mp4  # Video del hero
```

## Tecnologias Utilizadas

- **HTML5**: Estructura semantica del sitio
- **CSS3**: Estilos, animaciones y diseño responsive
- **JavaScript**: Interactividad, carrito de compras y validaciones
- **Formspree**: Servicio para envio de formularios
- **LocalStorage**: Persistencia del carrito de compras

## Funcionalidades

- Navegacion entre paginas (Inicio, Productos, Contacto)
- Carrito de compras funcional con persistencia en localStorage
- Filtrado de productos por categoria (Anime, Gamer, Series)
- Busqueda de productos en tiempo real
- Ordenamiento por precio y nombre
- Formulario de contacto con validacion y envio via Formspree
- Diseño responsive para dispositivos moviles y desktop

## Como Ejecutar

1. Descargar o clonar el repositorio
2. Abrir el archivo `index.html` en un navegador web

No se requiere instalacion de dependencias ni servidor local.

## Autor

Hikari Quest Design
