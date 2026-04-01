import { StoreProvider } from "../context/StoreProvider";
import { HeroSlider } from "../components/HeroSlider";
import { CategorySidebar } from "../components/CategorySidebar";
import { ProductGrid } from "../components/ProductGrid";

export const StorePage = () => {
  return (
    <StoreProvider>
      <div className="store-page">
        <HeroSlider />
        <div className="store-layout">
          <CategorySidebar />
          <ProductGrid />
        </div>
      </div>
    </StoreProvider>
  );
};