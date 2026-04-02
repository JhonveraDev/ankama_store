import { useParams } from "react-router-dom";
import { useCurrentGame } from "../";
import { HeroThumbnails } from "./";

export const HeroSlider = () => {
  const { category } = useParams();
  const currentGame = useCurrentGame();

  const categories = currentGame?.categories ?? [];
  const activeCategory = categories.find(cat => cat.path === category) ?? categories[0];
  const banner = activeCategory?.banner;

  if (!banner) return null;

  return (
    <div className="hero-slider" style={{ backgroundImage: `url(${banner.image})` }}>
      <h1>{banner.title}</h1>
      <p>{banner.subtitle}</p>
      <HeroThumbnails />
    </div>
  );
};