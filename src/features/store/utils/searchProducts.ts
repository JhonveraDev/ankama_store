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
  distance: 100,
  minMatchCharLength: 2,
  ignoreLocation: true,
});

export const searchProducts = (query: string) => {
  if (!query.trim()) return [];
  const results = fuse.search(query).map(result => result.item);
  console.log("query:", query, "results:", results);
  return results;
};