export interface Category {
  id: number
  title: string
  slug: string
  products: Product[]
}

export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}

export interface Rating {
  rate: number
  count: number
}

export interface CartItem {
    id: number; // product id
    q: number; // quantity
}

export interface Page {
  id: number
  title: string
  slug: string
  content: string
  metaTitle: string
  metaDescription: string
}
