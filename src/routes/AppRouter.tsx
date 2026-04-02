import { Routes, Route, Navigate } from "react-router-dom";

import { MainLayout, AuthLayout } from "../shared";
import { StorePage, HomePage, StoreRedirect, ProductDetailPage, StoreLayoutPage } from "../features";

export default function AppRouter() {
  return (
    <Routes>
      {/* 🔓 Rutas de auth (sin navbar) */}
      <Route path="/auth" element={<AuthLayout />}>
      </Route>

      {/* 🌐 Rutas normales (con navbar) */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="store">
          <Route index element={<Navigate to="dofus/weekly-deals" replace />} />
          <Route path=":game">
            <Route index element={<StoreRedirect />} />
            <Route path=":category" element={<StorePage />} />
            <Route path=":category/:slug" element={<StoreLayoutPage />}>
              <Route index element={<ProductDetailPage />} />
            </Route>
          </Route>
        </Route>
      </Route>

      {/* 🚨 Catch all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}