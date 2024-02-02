import search from "../assets/search.png";
import menu from "../assets/menu.png";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const HomeHeader = () => {
  return (
    <>
      <header className="header">
        <div className="header__box header__box--primary">
          <ul className="header__list">
            <li className="header__list-item">
              <Link
                to={"./login"}
                className="header__link header__link--personal"
              >
                Personal
              </Link>
            </li>
            <li className="header__list-item">
              <Link to={'./login'} className="header__link">
                Business
              </Link>
              
            </li>
            <li className="header__list-item">
              <Link to={'./login'} className="header__link">
                Commercial
              </Link>
            </li>
          </ul>
          <ul className="header__list">
            <li className="header__list-item">
              <Link
                to={'./login'} 
                className="header__link header__link--schedule"
              >
                Schedule a meeting
              </Link>
            </li>
            <li className="header__list-item">
              <Link
                to={'./login'} 
                className="header__link header__link--customer"
              >
                Customer service
              </Link>
            </li>
            <li className="header__list-item">
              <Link
                to={'./login'} 
                className="header__link header__link--english"
              >
                English
              </Link>
            </li>
            <li className="header__list-item">
              <Link
                to={'./login'} 
                className="header__link header__link--icon"
              >
                <img src={search} alt="search" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="header_box header__box--secondary">
          <img src={logo} alt="logo" />
        </div>
        <div className="header_box header__box--tertiary">
          <ul className="header__list">
            <li className="header__list-item">
              <Link
                to={'./login'} 
                className="header__link header__link--hover"
              >
                Checking
              </Link>
            </li>
            <li className="header__list-item">
              <Link
                to={'./login'} 
                className="header__link header__link--hover"
              >
                Savings &amp; CDs
              </Link>
            </li>
            <li className="header__list-item">
              <Link
                to={'./login'} 
                className="header__link header__link--hover"
              >
                Credit cards
              </Link>
            </li>
            <li className="header__list-item">
              <Link
                to={'./login'} 
                className="header__link header__link--hover"
              >
                Home loans
              </Link>
            </li>
            <li className="header__list-item">
              <Link
                to={'./login'} 
                className="header__link header__link--hover"
              >
                Auto
              </Link>
            </li>
            <li className="header__list-item">
              <Link
                to={'./login'} 
                className="header__link header__link--hover"
              >
                Investing by J.P. Morgan
              </Link>
            </li>
            <li className="header__list-item">
              <Link
                to={'./login'} 
                className="header__link header__link--hover"
              >
                Education &amp; goals
              </Link>
            </li>
          </ul>
        </div>
        <div className="header__box header__box--mobile">
          <div>
            <img src={menu} alt="menu" />
          </div>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div>
            <Link className="header__button" to={'./login'} >
              Sign In
            </Link>
            <img src={search} alt="search" />
          </div>
        </div>
      </header>
    </>
  );
};
export default HomeHeader;
