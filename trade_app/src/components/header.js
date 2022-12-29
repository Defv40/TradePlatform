import React from "react";
import logo from "../resources/icons/exchange_logo.png"
const Header = () =>{
    return(
        <header className="header">
            <div className="header__logo">
                <img className="logo__item" src={logo} height="50" alt="logo"></img>
            </div>
            <nav className="header__links">
                <a className="links__item" href="https://www.google.ru/">Биржа</a>
                <a className="links__item" href="https://www.google.ru/">О нас</a>
                <a className="links__item" href="https://www.google.ru/">Партнеры</a>
                <a className="links__item" href="https://www.google.ru/">Телеграм</a>
            </nav>
            <div className="header__localization">RU/EN</div>
        </header>
    )
} 

export default Header