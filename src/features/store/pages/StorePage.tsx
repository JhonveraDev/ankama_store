import { useParams } from "react-router-dom";
import { StoreProvider, HeroSlider, CategorySidebar, ProductGrid } from "../";

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