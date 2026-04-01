import { useParams } from "react-router-dom";
import { StoreProvider } from "../context/StoreProvider";
import { HeroSlider } from "../components/HeroSlider";
import { CategorySidebar } from "../components/CategorySidebar";
import { ProductGrid } from "../components/ProductGrid";

export const StorePage = () => {
  const { game } = useParams();
  return (
    <StoreProvider key={game}>
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