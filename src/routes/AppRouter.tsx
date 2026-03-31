import { Routes, Route } from "react-router-dom";

import { Layout } from "../shared";
import { HomePage } from "../features/home";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}