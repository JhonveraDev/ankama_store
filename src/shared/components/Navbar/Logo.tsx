import { Link } from "react-router-dom";
import logo from "../../../assets/images/global/ankama_store_logo.png";

export const Logo = () => {
  return (
    <Link to="/" aria-label="Go to homepage" className="navbar__left">
      <img src={logo} className="logo" alt="Ankama Store logo" />
    </Link>
  )
}
