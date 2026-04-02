import { NavLink, useParams } from "react-router-dom";
import { useCurrentGame } from "../";

export function CategorySidebar() {
  const { game } = useParams();
  const currentGame = useCurrentGame();

  if (!currentGame) return null;

  return (
    <aside className="sidebar">
      {currentGame.categories.map(cat => (
        <NavLink
          key={cat.path}
          to={`/store/${game}/${cat.path}`}
          className={({ isActive }) => isActive ? "active" : ""}
        >
          {cat.name}
        </NavLink>
      ))}
    </aside>
  );
}