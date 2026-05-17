import type { Product } from "@/components/cart-context"

export const products: Product[] = [
  // Anime
  {
    id: 1,
    name: "Taza Naruto Uzumaki",
    price: 15.99,
    image: "/images/products/naruto.jpg",
    category: "anime",
    description: "Taza con diseño del ninja favorito de Konoha. Cerámica de alta calidad, apta para microondas."
  },
  {
    id: 2,
    name: "Taza Attack on Titan",
    price: 16.99,
    image: "/images/products/aot.jpg",
    category: "anime",
    description: "Diseño épico del Cuerpo de Exploración. Perfecta para los fans de la serie."
  },
  {
    id: 3,
    name: "Taza My Hero Academia",
    price: 15.99,
    image: "/images/products/mha.jpg",
    category: "anime",
    description: "Taza con los héroes más populares de U.A. High School."
  },
  {
    id: 4,
    name: "Taza Dragon Ball Z",
    price: 17.99,
    image: "/images/products/dbz.jpg",
    category: "anime",
    description: "Goku en Super Saiyan. Un clásico para los verdaderos fans del anime."
  },
  {
    id: 5,
    name: "Taza Demon Slayer",
    price: 16.99,
    image: "/images/products/demon-slayer.jpg",
    category: "anime",
    description: "Tanjiro y su espada Nichirin. Diseño vibrante y detallado."
  },
  {
    id: 6,
    name: "Taza One Piece",
    price: 15.99,
    image: "/images/products/one-piece.jpg",
    category: "anime",
    description: "El Rey de los Piratas te espera. Diseño con Luffy y la tripulación."
  },
  // Gamer
  {
    id: 7,
    name: "Taza PlayStation Retro",
    price: 14.99,
    image: "/images/products/playstation.jpg",
    category: "gamer",
    description: "Diseño retro con los iconos clásicos de PlayStation. Nostalgia pura."
  },
  {
    id: 8,
    name: "Taza Xbox Series",
    price: 14.99,
    image: "/images/products/xbox.jpg",
    category: "gamer",
    description: "Para los fans de Xbox. Diseño minimalista y elegante."
  },
  {
    id: 9,
    name: "Taza Nintendo Classics",
    price: 15.99,
    image: "/images/products/nintendo.jpg",
    category: "gamer",
    description: "Mario, Zelda, Pokemon y más. Todos tus clásicos en una taza."
  },
  {
    id: 10,
    name: "Taza Minecraft",
    price: 13.99,
    image: "/images/products/minecraft.jpg",
    category: "gamer",
    description: "Diseño pixelado del juego más vendido de todos los tiempos."
  },
  {
    id: 11,
    name: "Taza Fortnite",
    price: 14.99,
    image: "/images/products/fortnite.jpg",
    category: "gamer",
    description: "Victory Royale cada mañana con tu café."
  },
  {
    id: 12,
    name: "Taza League of Legends",
    price: 16.99,
    image: "/images/products/lol.jpg",
    category: "gamer",
    description: "Campeones legendarios para gamers legendarios."
  },
  // Series
  {
    id: 13,
    name: "Taza Breaking Bad",
    price: 15.99,
    image: "/images/products/breaking-bad.jpg",
    category: "series",
    description: "Heisenberg te observa. Perfecta para química matutina."
  },
  {
    id: 14,
    name: "Taza Game of Thrones",
    price: 16.99,
    image: "/images/products/got.jpg",
    category: "series",
    description: "Winter is coming... y tu café también."
  },
  {
    id: 15,
    name: "Taza Stranger Things",
    price: 15.99,
    image: "/images/products/stranger-things.jpg",
    category: "series",
    description: "Mundo del Revés en tu escritorio. Diseño retro ochentero."
  },
  {
    id: 16,
    name: "Taza The Office",
    price: 14.99,
    image: "/images/products/the-office.jpg",
    category: "series",
    description: "World's Best Boss mug. La taza que Michael Scott aprobaría."
  },
  {
    id: 17,
    name: "Taza Friends",
    price: 14.99,
    image: "/images/products/friends.jpg",
    category: "series",
    description: "Central Perk en tu casa. Para los fanáticos de la serie."
  },
  {
    id: 18,
    name: "Taza The Mandalorian",
    price: 17.99,
    image: "/images/products/mandalorian.jpg",
    category: "series",
    description: "This is the way. Baby Yoda te acompaña en tu café."
  }
]

export function getProductsByCategory(category: "anime" | "gamer" | "series" | "all") {
  if (category === "all") return products
  return products.filter((p) => p.category === category)
}

export function getProductById(id: number) {
  return products.find((p) => p.id === id)
}
