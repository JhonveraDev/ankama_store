import { useParams } from "react-router-dom";
import { useStore } from "../context/useStore"; 
import { HeroThumbnails } from "./";

export const HeroSlider = () => {
  const { categories } = useStore();
  const { category } = useParams();

  const activeCategory = categories.find(cat => cat.path === category) ?? categories[0];
  const { banner } = activeCategory;

  return (
    <div className="hero-slider" style={{ backgroundImage: `url(${banner.image})` }}>
      <h1>{banner.title}</h1>
      <p>{banner.subtitle}</p>
      <HeroThumbnails />
    </div>
  );
};