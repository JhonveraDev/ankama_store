import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { storeData } from "../../../shared";
import arrow from "../../../assets/images/categories/arrow.svg";

export const GameNavItem = () => {
  const [activeGame, setActiveGame] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (basePath: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveGame(basePath);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveGame(null);
    }, 350);
  };

  return (
    <ul className="game-nav-list">
      {storeData.map((store) => (
        <li
          key={store.basePath}
          className="game-nav-item"
          onMouseEnter={() => handleMouseEnter(store.basePath)}
          onMouseLeave={handleMouseLeave}
        >
          <NavLink
            to={`/store/${store.basePath}`}
            className={`game-nav-link ${activeGame === store.basePath ? "game-nav-link--active" : ""}`}
          >
            <img src={store.categorieImage} alt="" className="game-nav__icon" />
            <span className="game-nav__category">{store.game}</span>
            <img
              src={arrow}
              alt="Arrow Down"
              className={`game-nav__arrow ${activeGame === store.basePath ? "game-nav__arrow--open" : ""}`}
            />
          </NavLink>

          <ul className={`game-nav-dropdown ${activeGame === store.basePath ? "game-nav-dropdown--visible" : ""}`}>
            {store.categories.map((cat) => (
              <li key={cat.path}>
                <NavLink
                  to={`/store/${store.basePath}/${cat.path}`}
                  className="game-nav-dropdown__link"
                >
                  {cat.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};