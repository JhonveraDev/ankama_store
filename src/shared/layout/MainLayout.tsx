import { Outlet } from "react-router-dom";
import { Navbar, GameNav } from "../components";

export function MainLayout() {
  return (
    <main className="layout">
      <Navbar />
      <GameNav />
      <Outlet />
    </main>
  );
}