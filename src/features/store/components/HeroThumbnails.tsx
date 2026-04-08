import { useNavigate, useParams } from "react-router-dom";
import type { Category } from "../../../shared";

interface HeroThumbnailsProps {
  activeCategory: Category;
  activeIndex: number;
  onThumbClick: (index: number) => void;
}

export const HeroThumbnails = ({ activeCategory, activeIndex, onThumbClick }: HeroThumbnailsProps) => {
  const thumbnails = activeCategory.banners?.filter(b => b.thumbBanner) ?? [];

  if (thumbnails.length === 0) return null;

  return (
    <div className="hero-thumbnails" onClick={(e) => e.stopPropagation()}>
      {thumbnails.map((banner, index) => (
        <button
          key={index}
          onClick={() => onThumbClick(index)}
          className={index === activeIndex ? "active" : ""}
        >
          <img src={banner.thumbBanner!} alt={`${activeCategory.name} ${index + 1}`} />
        </button>
      ))}
    </div>
  );
};