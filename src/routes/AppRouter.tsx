import { Routes, Route } from "react-router-dom";

import { MainLayout, AuthLayout } from "../shared";
import { HomePage } from "../features/home";

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
      </Route>
    </Routes>
  );
}