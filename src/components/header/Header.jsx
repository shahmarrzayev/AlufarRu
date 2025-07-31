import React, { useState } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../../assets/logos/logoGroup.png";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      <div className="navContainer">
        <div className="navLinks">
          <ul>
            <li>
              <HashLink smooth to="/#homeAbout">О нас</HashLink>
            </li>
            <li>
              <HashLink smooth to="/#OurCompany">Наша компания</HashLink>
            </li>
            <li>
              <HashLink smooth to="/#projects">Портфель</HashLink>
            </li>
            <li>
              <HashLink smooth to="/#accardion">Системы</HashLink>
            </li>
            {/* <li>
              <HashLink smooth to="/#teamMate">Команда</HashLink>
            </li> */}
            <li>
              <HashLink smooth to="/#contact">Контакты</HashLink>
            </li>
          </ul>
        </div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="mobileNavbar">
          <div
            className={`menu-toggle ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          
            <div className={`mobileNavItems ${isOpen ? "active" : ""}`}>
            <ul>
            <li>
              <HashLink smooth to="/#homeAbout">О нас</HashLink>
            </li>
            <li>
              <HashLink smooth to="/#OurCompany">Наша компания</HashLink>
            </li>
            <li>
              <HashLink smooth to="/#projects">Портфель</HashLink>
            </li>
            <li>
              <HashLink smooth to="/#accardion">Системы</HashLink>
            </li>
            {/* <li>
              <HashLink smooth to="/#teamMate">Команда</HashLink>
            </li> */}
            <li>
              <HashLink smooth to="/#contact">Контакты</HashLink>
            </li>
          </ul>
            </div>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
