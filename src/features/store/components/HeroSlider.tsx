import { useNavigate, useParams } from "react-router-dom";
import { useCurrentGame } from "../";
import { HeroThumbnails } from "./";
import type { Category } from "../../../shared";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

export const HeroSlider = () => {
  const { game, category } = useParams();
  const navigate = useNavigate();
  const currentGame = useCurrentGame();

  const categories = currentGame?.categories ?? [];

  // 🔥 La categoría ahora depende SOLO de la URL
  const activeCategory: Category | undefined =
    categories.find((cat) => cat.path === category) || categories[0];

  if (!activeCategory) return null;

  const banners = activeCategory.banners;

  if (!banners || banners.length === 0) return null;

  return (
    <div className="hero-slider">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {banners.map((banner, index) => (
          <SwiperSlide
            key={index}
            onClick={() => navigate(`/store/${game}/${activeCategory.path}`)}
          >
            <img src={banner.mainBanner} alt={activeCategory.name} />
          </SwiperSlide>
        ))}
      </Swiper>

      <HeroThumbnails
        categories={categories}
        activeCategory={activeCategory}
      />
    </div>
  );
};