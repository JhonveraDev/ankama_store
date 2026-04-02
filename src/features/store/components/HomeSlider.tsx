// HomeSlider.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { storeData } from "../../../shared";
import type { Category, Store } from "../../../shared";

export const HomeSlider = () => {
  const navigate = useNavigate();
  const [activeGame, setActiveGame] = useState<Store>(storeData[0]);
  const [activeCategory, setActiveCategory] = useState<Category>(storeData[0].categories[0]);

  const banner = activeCategory?.banner;

  if (!banner) return null;

  return (
    <div
      className="hero-slider"
      style={{ backgroundImage: `url(${banner.image})` }}
      onClick={() => navigate(`/store/${activeGame.basePath}/${activeCategory.path}`)}
    >
      <h1>{banner.title}</h1>
      <p>{banner.subtitle}</p>

      <div className="hero-thumbnails" onClick={e => e.stopPropagation()}>
        {storeData.flatMap(game =>
          game.categories.map(cat => (
            <button
              key={`${game.basePath}-${cat.path}`}
              onClick={() => { setActiveGame(game); setActiveCategory(cat); }}
              className={cat.path === activeCategory.path ? "active" : ""}
            >
              <img src={cat.banner.image} alt={cat.name} />
              <span>{cat.name}</span>
            </button>
          ))
        )}
      </div>
    </div>
  );
};