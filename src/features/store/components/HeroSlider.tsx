import { useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCurrentGame } from "../";
import { HeroThumbnails } from "./";
import type { Category } from "../../../shared";
import { motion, AnimatePresence } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/swiper-bundle.css";

export const HeroSlider = () => {
  const { category } = useParams();
  const currentGame = useCurrentGame();
  const categories = currentGame?.categories ?? [];
  const currentCategory: Category | undefined =
    categories.find((cat) => cat.path === category) || categories[0];

  const navigate = useNavigate();
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!currentCategory) return null;

  const banners = currentCategory.banners;
  if (!banners || banners.length === 0) return null;

  const hasMultiple = banners.length > 1;

  return (
    <div className="hero-slider">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentCategory.path}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Swiper
            key={currentCategory.path}
            navigation={hasMultiple}
            loop={hasMultiple}
            speed={900}
            modules={[Navigation, Autoplay]}
            autoplay={hasMultiple ? { delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true } : false}
            preventClicks={true}
            preventClicksPropagation={true}
            className="swiper-container"
            onSwiper={(swiper) => { swiperRef.current = swiper; }}           // 👈
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}     // 👈
          >
            {banners.map((banner, index) => (
              <SwiperSlide
                key={index}
                onClick={() => { if (banner.link) navigate(banner.link); }}
                style={{ cursor: banner.link ? "pointer" : "default" }}
              >
                <img src={banner.mainBanner} alt={`${currentCategory.name} banner`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </AnimatePresence>

      <HeroThumbnails
        activeCategory={currentCategory}
        activeIndex={activeIndex}
        onThumbClick={(i) => swiperRef.current?.slideTo(i)}
      />
    </div>
  );
};