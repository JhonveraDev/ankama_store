import { NavLink } from "react-router-dom";
import { storeData } from "../../../shared";

export const GameNavItem = () => {
  return (
    <ul className="game-nav-list">
      {storeData.map((store) => (
        <li key={store.basePath}>
          <NavLink
            to={`/store/${store.basePath}`}
            className="game-nav-link"
          >
            {store.game}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};