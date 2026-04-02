import { Outlet } from "react-router-dom";
import { Navbar, GameNav } from "../";

export function MainLayout() {
  return (
    <main className="layout">
      <Navbar />
      <GameNav />
      <Outlet />
    </main>
  );
}