export interface Category {
  id: number;
  title: string;
  slug: string;
}

export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}
