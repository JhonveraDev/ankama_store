import { storeData } from "../../../shared";

export const searchProducts = (query: string) => {
  const results: any[] = [];

  storeData.forEach(store => {
    store.categories.forEach(category => {
      category.products.forEach(product => {
        if (
          product.name.toLowerCase().includes(query.toLowerCase())
        ) {
          results.push({
            ...product,
            game: store.basePath,
            category: category.path,
          });
        }
      });
    });
  });

  return results;
};