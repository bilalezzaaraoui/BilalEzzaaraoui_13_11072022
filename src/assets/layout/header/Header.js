import "./Header.scss";
import { NavLink, Link } from "react-router-dom";
import logo from "../../img/argentBankLogo.png";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../../store/auth";

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const name = useSelector((state) => state.user.firstName);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
      </NavLink>
      <div className="header-btn-layout">
        {isAuth === false && (
          <Link className="main-nav-item" to="/login">
            <FaUserCircle />
            Sign In
          </Link>
        )}

        {isAuth === true && (
          <Link className="main-nav-item" to="/profil">
            <FaUserCircle />
            {name}
          </Link>
        )}

        {isAuth === true && (
          <button className="main-nav-btn" onClick={logoutHandler}>
            <FaSignOutAlt />
            Sign Out
          </button>
        )}
      </div>
    </nav>
  );
};

export default Header;
