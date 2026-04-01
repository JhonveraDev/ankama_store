import { HeroSlider, CategorySidebar, ProductGrid, StoreProvider } from "../";

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