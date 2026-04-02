import { useParams, Navigate } from "react-router-dom";
import { StoreProvider, HeroSlider, CategorySidebar, ProductGrid, RecentProducts } from "../";
import { storeData } from "../../../shared";

export const StorePage = () => {
  const { game, category } = useParams();

  const currentGame = storeData.find(g => g.basePath === game);
  const currentCategory = currentGame?.categories.find(c => c.path === category);

  if (!currentGame || !currentCategory) return <Navigate to="/404" replace />;

  return (
    <StoreProvider key={game}>
      <div className="store-page">
        <HeroSlider />
        <div className="store-layout">
          <CategorySidebar />
          <ProductGrid />
        </div>
        <RecentProducts />
      </div>
    </StoreProvider>
  );
};