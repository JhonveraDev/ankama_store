import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { storeData } from "../../../shared";
import type { Category, Store } from "../../../shared";

export const HomeSlider = () => {
  const navigate = useNavigate();
  const [activeGame, setActiveGame] = useState<Store>(storeData[0]);
  const [activeCategory, setActiveCategory] = useState<Category>(storeData[0].categories[0]);
  const [activeBannerIndex, setActiveBannerIndex] = useState(0);

  const banners = activeCategory?.banners;
  const banner = banners?.[activeBannerIndex] ?? banners?.[0];

  if (!banner || !banners) return null;

  if (!banner || !banners) return null;

  if (!banner) return null;

  return (
    <div
      className="hero-slider"
      style={{ backgroundImage: `url(${banner.mainBanner})` }}
      onClick={() => navigate(`/store/${activeGame.basePath}/${activeCategory.path}`)}
    >
      {/* Optional: banner index dots if multiple banners */}
      {banners.length > 1 && (
        <div className="banner-dots" onClick={e => e.stopPropagation()}>
          {banners.map((_, i) => (
            <button
              key={i}
              className={i === activeBannerIndex ? "active" : ""}
              onClick={() => setActiveBannerIndex(i)}
            />
          ))}
        </div>
      )}

      <div className="hero-thumbnails" onClick={e => e.stopPropagation()}>
        {storeData.flatMap(game =>
          game.categories.map(cat => (
            <button
              key={`${game.basePath}-${cat.path}`}
              onClick={() => {
                setActiveGame(game);
                setActiveCategory(cat);
                setActiveBannerIndex(0); // reset to first banner on category change
              }}
              className={cat.path === activeCategory.path ? "active" : ""}
            >
              <img src={cat.banners?.[0]?.thumbBanner} alt={cat.name} />
              <span>{cat.name}</span>
            </button>
          ))
        )}
      </div>
    </div>
  );
};