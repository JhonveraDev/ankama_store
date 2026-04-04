import avatar from "../../../assets/images/global/default_avatar.png";
import ogrines from "../../../assets/images/global/ogrine_coin.svg";

export const UserMenu = () => {
  return (
    <div className="user-menu">
      <div className="user-menu__info">
        <span className="user-menu__username">RussianHate#1027</span>
        <span className="user-menu__ogrines">
          <p className="user-menu__amount">78.846</p>
          <img src={ogrines} alt="Ogrines Coin" className="user-menu__coin-icon"/>
        </span>
      </div>
      <object data={avatar} type="image/png" className="user-menu__avatar"/>
    </div>
  )
}
