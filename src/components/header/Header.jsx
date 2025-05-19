import React from 'react'
import "./Header.scss"
import { NavLink } from 'react-router-dom'
const Header = () => {
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
      </div>
    </header>
  )
}

export default Header