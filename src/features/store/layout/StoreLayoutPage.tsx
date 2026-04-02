import { Outlet } from "react-router-dom";
import { CategorySidebar } from "../";

export const StoreLayoutPage = () => {
  return (
    <div className="store-layout">
      <CategorySidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};