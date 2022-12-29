import React from "react";
import telegramIcon from "../resources/icons/telegram.png"
const Footer = () =>{
    return(
        <footer className="footer">
            <section className="footer__info">
                <div className="about_us">
                    <p className="title">Trade App</p>
                    <p>Биржа криптовалют</p>
                    <nav className="links">
                        <li>Главная</li>
                        <li>биржа</li>
                        <li>API</li>
                        <li>Валюта</li>
                        <li>Комиссии</li>
                        <li>Партнеры</li>
                    </nav>
                </div>
                <ul className="info__support">
                    <section className="support__section">
                        <p className="section__title">Поддержка: </p>
                        <a className="section__content" href="https://www.google.ru/">support@google.ru</a>
                    </section>
                    <section className="support__section">
                        <p className="section__title">Общий вопросы: </p>
                        <a className="section__content" href="https://www.google.ru/">info@google.ru</a>
                    </section>
                    <section className="support__section">
                        <p className="section__title">Юридические вопросы: </p>
                        <a className="section__content" href="https://www.google.ru/">legal@google.ru</a>
                    </section>
                </ul>
                <div className="info__legal_documents">
                    <p className="legal_documents__title">Юридические документы</p>
                    <a className="section__content" href="https://www.google.ru/">Правила и комиссии</a>
                    <a className="section__content" href="https://www.google.ru/">Политика конфиденциальности</a>
                    <a className="section__content" href="https://www.google.ru/">Пользовательское соглашение</a>
                    <a className="section__content" href="https://www.google.ru/">Политика использования Cookie</a>
                    <a className="section__content" href="https://www.google.ru/">Лицензионное соглашение об использовании API</a>
                </div>
            </section>
            <section className="footer__messangers">
                <div className="messangers__messanger">
                    <p className="messanger__title">Новости биржи: </p>
                    <div className="messanger__content">
                        <img className="content__item" src={telegramIcon} width="15" height="15" alt="telegram"></img>
                        <p className="content__text">@platform_trade</p>
                    </div>
                </div>
                <div className="messangers__messanger">
                    <p className="messanger__title">Официальная группа: </p>
                    <div className="messanger__content">
                        <img className="content__icon" src={telegramIcon} width="15" height="15" alt="telegram"></img>
                        <p className="content__text">@platform_trade</p>
                    </div>
                </div>
                <div className="messangers__messanger">
                    <p className="messanger__title">Группа майнинг пула: </p>
                    <div className="messanger__content">
                        <img className="content__item" src={telegramIcon} width="15" height="15" alt="telegram"></img>
                        <p className="content__text">@platform_trade</p>
                    </div>
                </div>
            </section>
            <p className="footer__copy_right">COPYRIGHT © 2022-2023 Platform</p>
        </footer>
    )
} 

export default Footer