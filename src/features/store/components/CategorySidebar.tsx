import { NavLink, useParams } from "react-router-dom";
import { useCurrentGame } from "../";
import dot from "../../../assets/images/global/dot_title.svg";

export function CategorySidebar() {
  const { game, category } = useParams();
  const currentGame = useCurrentGame();
  const currentCategory = currentGame?.categories.find(c => c.path === category);

  if (!currentGame) return null;

  return (
    <aside className="sidebar">

      <div className="sidebar__dot">
        <img src={dot} alt="" />
        <h2>{currentGame.game}</h2>
      </div>

      <div className="sidebar__total-items">
        <p>{currentCategory?.products.length} ITEMS</p>
      </div>

      {currentGame.categories.map(cat => (
        <NavLink
          key={cat.path}
          to={`/store/${game}/${cat.path}`}
          className={({ isActive }) => `sidebar__link ${isActive ? "sidebar__link--active" : ""}`}
        >
          <span>{cat.name}</span>
        </NavLink>
      ))}
    </aside>
  );
}