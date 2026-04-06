import { useParams } from "react-router-dom";
import { useCurrentGame } from "../";
import { HeroThumbnails } from "./";
import type { Category } from "../../../shared";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

export const HeroSlider = () => {
  const { category } = useParams();
  const currentGame = useCurrentGame();
  const categories = currentGame?.categories ?? [];
  const activeCategory: Category | undefined = categories.find((cat) => cat.path === category) || categories[0];

  if (!activeCategory) return null;

  const banners = activeCategory.banners;

  if (!banners || banners.length === 0) return null;

  const hasMultiple = banners.length > 1;

  return (
    <div className="hero-slider">
      <Swiper
        key={activeCategory.path}
        navigation={hasMultiple}
        loop={hasMultiple}
        speed={900}
        modules={[Navigation, Autoplay]}
        autoplay={ hasMultiple ? { delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true } : false }
        className="mySwiper"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
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