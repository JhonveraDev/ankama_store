import { storeData } from "../../../shared";

const STORAGE_KEY = "recent_products";
const MAX_RECENT = 6;

export type RecentProduct = {
  slug: string;
  game: string;
  category: string;
};

export const addRecentProduct = (slug: string, game: string, category: string) => {
  const stored = getRecentProducts();
  const filtered = stored.filter(p => p.slug !== slug);
  const updated = [{ slug, game, category }, ...filtered].slice(0, MAX_RECENT);
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};

export const getRecentProducts = (): RecentProduct[] => {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? "[]");
  } catch {
    return [];
  }
};

export const useRecentProducts = () => {
  const recents = getRecentProducts();

  return recents.map(recent => {
    const game = storeData.find(g => g.basePath === recent.game);
    const category = game?.categories.find(c => c.path === recent.category);
    const product = category?.products.find(p => p.slug === recent.slug);
    return product ? { ...product, game: recent.game, category: recent.category } : null;
  }).filter(Boolean);
};