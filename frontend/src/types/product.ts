export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  description: string;
  imageUrl: string;
  stock: number;
  origin: string;
  harvestDate?: string;
  nutritionFacts?: {
    calories?: number;
    protein?: number;
    carbs?: number;
    fat?: number;
  };
  isOrganic: boolean;
  rating: number;
  reviews: number;
}

export type ProductCategory = 
  | "vegetables"
  | "fruits"
  | "grains"
  | "dairy"
  | "meat"
  | "seafood"
  | "herbs";

export interface CartItem extends Product {
  quantity: number;
} 