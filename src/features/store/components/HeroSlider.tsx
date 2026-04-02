import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCurrentGame } from "../";
import { HeroThumbnails } from "./";
import type { Category } from "../../../shared";

export const HeroSlider = () => {
  const { game } = useParams();
  const navigate = useNavigate();
  const currentGame = useCurrentGame();
  const categories = currentGame?.categories ?? [];

  const [activeCategory, setActiveCategory] = useState<Category>(categories[0]);
  const banner = activeCategory?.banner;

  if (!banner) return null;

  return (
    <div
      className="hero-slider"
      style={{ backgroundImage: `url(${banner.image})` }}
      onClick={() => navigate(`/store/${game}/${activeCategory.path}`)}
    >
      <h1>{banner.title}</h1>
      <p>{banner.subtitle}</p>
      <HeroThumbnails
        categories={categories}
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
      />
    </div>
  );
};