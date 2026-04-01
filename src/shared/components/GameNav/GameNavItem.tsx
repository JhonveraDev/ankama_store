import { NavLink } from "react-router-dom";
import { storeData } from "../../../shared";

export const GameNavItem = () => {
  return (
    <ul className="">
      {storeData.map((store) => (
        <li key={store.basePath}>
          <NavLink
            to={`/store/${store.basePath}`}
            className={({ isActive }) => isActive ? "active" : ""}
          >
            {store.game}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};