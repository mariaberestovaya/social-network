import React from 'react';
import header from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={header.header}>
        <div className={header.header__inner}>
          <a href="https://active-be.ru" className={header.logo}>BeActive</a>
            <NavLink to={'./login'}><div className={header.login_block}>{ props.isAuth
                ? props.login
                : "Login"}</div></NavLink>
        </div>
  </header>
}

export default Header;