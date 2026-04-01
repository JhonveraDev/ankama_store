import { useStore } from "../";
import { NavLink } from "react-router-dom";

export function CategorySidebar() {
  const { categories, basePath } = useStore();

  return (
    <aside className="sidebar">
      {categories.map(cat => (
        <NavLink
          key={cat.path}
          to={`/${basePath}/${cat.path}`}
          className={({ isActive }) => isActive ? "active" : ""}
        >
          {cat.name}
        </NavLink>
      ))}
    </aside>
  );
}