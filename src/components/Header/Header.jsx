import React from "react";
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header1}>
        {/* <img src='https://srv-cdn.onedio.com/store/5735a8b9b1662cf83cf3659a7fdfb5143ed89d097275662b73504d3f636c145d.png' /> */}
        <strong><center>Aplication</center></strong>
      </div>
    </header>
  )
}

export default Header;