export type GameName = "DOFUS" | "WAKFU";

export interface Banner {
  mainBanner: string;
  thumbBanner: string;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  discount?: number;
}

export interface Category {
  name: string;
  path: string;
  banners?: Banner[];
  products: Product[];
}

export interface Store {
  game: GameName;
  basePath: string;
  categorieImage: string;
  categories: Category[];
}

export type StoreData = Store[];
export type StorePageData = Store;