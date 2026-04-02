import type { Category } from "../../../shared";

interface HeroThumbnailsProps {
  categories: Category[];
  activeCategory: Category;
  onSelect: (category: Category) => void;
}

export const HeroThumbnails = ({ categories, activeCategory, onSelect }: HeroThumbnailsProps) => {
  return (
    <div
      className="hero-thumbnails"
      onClick={e => e.stopPropagation()}
    >
      {categories.map(cat => (
        <button
          key={cat.path}
          onClick={() => onSelect(cat)}
          className={cat.path === activeCategory.path ? "active" : ""}
        >
          <img src={cat.banner.image} alt={cat.name} />
          <span>{cat.name}</span>
        </button>
      ))}
    </div>
  );
};