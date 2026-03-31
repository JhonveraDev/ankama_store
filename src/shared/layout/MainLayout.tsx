import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <main className="layout">
      <Outlet />
    </main>
  );
}