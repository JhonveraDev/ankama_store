import { NavLink } from "react-router-dom";
import { storeData } from "../../../shared";
import arrow from "../../../assets/images/categories/arrow.svg";

export const GameNavItem = () => {
  return (
    <ul className="game-nav-list">
      {storeData.map((store) => (
        <li key={store.basePath}>
          <NavLink
            to={`/store/${store.basePath}`}
            className="game-nav-link"
          >
            <img src={store.categorieImage} alt="" className="game-nav__icon"/>
            <span className="game-nav__category">{store.game}</span>
            <img src={arrow} alt="Arrow Down" className="game-nav__arrow"/>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};