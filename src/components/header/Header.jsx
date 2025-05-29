import React, { useState } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
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
              <NavLink>О нас</NavLink>
            </li>
            <li>
              <NavLink>Наша компания</NavLink>
            </li>
            <li>
              <NavLink>Портфель</NavLink>
            </li>
            <li>
              <NavLink>Системы</NavLink>
            </li>
            <li>
              <NavLink>Команда</NavLink>
            </li>
            <li>
              <NavLink>Контакт</NavLink>
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
                  <NavLink>О нас</NavLink>
                </li>
                <li>
                  <NavLink>Наша компания</NavLink>
                </li>
                <li>
                  <NavLink>Портфель</NavLink>
                </li>
                <li>
                  <NavLink>Системы</NavLink>
                </li>
                <li>
                  <NavLink>Команда</NavLink>
                </li>
                <li>
                  <NavLink>Контакт</NavLink>
                </li>
              </ul>
            </div>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
