import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

export function MainLayout() {
  return (
    <main className="layout">
      <Navbar />
      <Outlet />
    </main>
  );
}