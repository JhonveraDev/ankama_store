import Fuse from "fuse.js";
import { storeData } from "../../../shared";

const allProducts = storeData.flatMap(store =>
  store.categories.flatMap(category =>
    category.products.map(product => ({
      ...product,
      game: store.basePath,
      category: category.path,
    }))
  )
);

const fuse = new Fuse(allProducts, {
  keys: ["name"],
  threshold: 0.4,
});

export const searchProducts = (query: string) => {
  if (!query.trim()) return [];
  return fuse.search(query).map(result => result.item);
};