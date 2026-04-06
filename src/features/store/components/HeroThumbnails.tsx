import { useNavigate, useParams } from "react-router-dom";
import type { Category } from "../../../shared";

interface HeroThumbnailsProps {
  categories: Category[];
  activeCategory: Category;
}

export const HeroThumbnails = ({
  categories,
  activeCategory,
}: HeroThumbnailsProps) => {
  const { game } = useParams();
  const navigate = useNavigate();

  const handleClick = (cat: Category) => {
    navigate(`/store/${game}/${cat.path}`);
  };

  return (
    <div
      className="hero-thumbnails"
      onClick={(e) => e.stopPropagation()}
    >
      {categories
        .filter((cat) => cat.banners?.[0]?.thumbBanner)
        .map((cat) => (
          <button
            key={cat.path}
            onClick={() => handleClick(cat)}
            className={cat.path === activeCategory.path ? "active" : ""}
          >
            <img
              src={cat.banners![0].thumbBanner}
              alt={cat.name}
            />
          </button>
        ))}
    </div>
  );
};