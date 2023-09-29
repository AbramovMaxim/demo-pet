import React from "react";
import s from './Navbar.module.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.nav1}>
        <a className={s.item}>
          <div className={`${s.item} ${s.active}`}><NavLink to="/profile">Profile</NavLink></div>
          <div><NavLink to="/dialogs">Message</NavLink></div>
          <div><NavLink to="/">News</NavLink></div>
          <div><NavLink to="/">Music</NavLink></div>
          <div><NavLink to="/">Settings</NavLink></div>
        </a>
      </div>
    </nav>
  )
}

export default Navbar;