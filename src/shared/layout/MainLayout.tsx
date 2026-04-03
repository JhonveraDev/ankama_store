import { Outlet } from "react-router-dom";
import { Navbar, GameNav, Footer } from "../";

export function MainLayout() {
  return (
    <main className="main-layout">
      <Navbar />
      <GameNav />
      <Outlet />
      <Footer />
    </main>
  );
}