import { Routes, Route } from "react-router-dom";

import { MainLayout, AuthLayout } from "../shared";
import { StorePage, HomePage } from "../features";

export default function AppRouter() {
  return (
    <Routes>
      {/* 🔓 Public routes (without navbar) */}
      <Route path="/auth" element={<AuthLayout />}>
        {/* <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} /> */}
      </Route>

      {/* 🌐 Normal routes (with navbar) */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="store">
          <Route index element={<StorePage />} />
          <Route path=":game" element={<StorePage />} />
          <Route path=":game/:category" element={<StorePage />} />
          <Route path=":game/:category/:subCategory" element={<StorePage />} />
        </Route>
      </Route>
    </Routes>
  );
}