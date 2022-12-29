import speedIcon from "../resources/icons/speedometer.png";
import shieldIcon from "../resources/icons/shield.png";
import growIcon from "../resources/icons/investment.png";
import medalIcon from "../resources/icons/medal.png";
import networkingIcon from "../resources/icons/networking.png";
import moneyIcon from "../resources/icons/money-exchange.png";
import warningIcon from '../resources/icons/danger.png'
import messageIcon from '../resources/icons/mes.png'
import ethIcon from '../resources/icons/ethereum.png';

import React from "react";
const Body = () =>{
    return(
        <main className="main">
            {/* Секция трейда */}
           <div className="main__trade">
            {/* Секция Отдаем */}
                <section className="trade__give">
                    <p className="give__title">Отдаете</p>
                    <div className="give__inputs">
                        <div className="inputs__select_money">
                            <button className="select_money__btn">
                                <div>.</div>
                                <div></div>
                            </button>
                            <div className="select_money__standart">.</div>
                        </div>
                        <div className="inputs__email">
                            <img className="email__icon" src={messageIcon} width="25" height="20" alt="message"></img>
                            <input className="email__input" placeholder="E-mail"></input>
                        </div>
                    </div>
                    <div className="give__notification">
                        <img src={warningIcon} width="25" height="25" alt="notification"></img>
                        <p>
                            Для отправки на наши кошельки используйте только сеть
                            Bep-20, использование другой сети повлечет за собой потерю средств!
                         </p>
                    </div>
                </section>
            {/* Секция Получаем */}
            <section className="trade__take">
                    <div className="take__title">
                        <span className="title__title">Получаете</span>
                        <span className="title__info_change">Курс обмена: 1 ETH = 85523.68 RUB</span>
                    </div>
                    <div className="take__inputs">
                        <div className="inputs__select_output">
                            <button className="select_output__btn">
                                <div>label</div>
                                <div></div>
                            </button>
                            <div className="select_output__info">
                                <div className="select_output__money_cost">2500</div>
                                <div className="select_output__we_get">
                                    <span className="we_get__сurrency">RUB</span>
                                    <span className="we_get__total">68786218.59</span>
                                </div>
                            </div>
                        </div>
                        <div className="inputs__wallet">
                            <img className="wallet__icon" src={ethIcon} width="25" height="20" alt="message"></img>
                            <input className="wallet__input" placeholder="Номер кошелька Advcash"></input>
                        </div>
                    </div>
                    <div className="take__create_request">
                        <div className="take__agree">
                            <input type="checkbox"></input>
                            <p>Я согласен на обработку персональных данных и принимаю правила обмена</p>
                        </div>
                        <button>Создать заявку</button>
                    </div>
                </section>
           </div>
            {/* Cекция валют */}
            {/* О нас */}
            <section className="main__about_us">
                <div className="about_us__section">
                    <img className="section__icon" src={growIcon} alt="grow" width="100" height="100"></img>
                    <p className="section__title">ВЫГОДНЫЙ ОБМЕН 24/7</p>
                    <p className="section__content">Качественно меняем валюту онлайн вот уже на протяжении 5 лет.</p>
                </div>
                <div className="about_us__section">
                    <img className="section__icon" src={shieldIcon} alt="protect" width="100" height="100"></img>
                    <p className="section__title">НАДЕЖНОСТЬ НА ПРЕДЕЛЕ</p>
                    <p className="section__content">Сомневаетесь? Если что-то пошло не так, мы всегда вернем Вам деньги. Помните об этом.</p>
                </div>
                <div className="about_us__section">
                    <img className="section__icon" src={speedIcon} alt="speed" width="100" height="100"></img>
                    <p className="section__title">БЫСТРЫЙ ОБМЕН ДО 7 МИН.</p>
                    <p className="section__content">Нас любят не только за надежность и лучший курс, но и за быстрый обмен.</p>
                </div>
                <div className="about_us__section">
                    <img className="section__icon" src={networkingIcon} alt="grow" width="100" height="100"></img>
                    <p className="section__title">3160 НАПРАВЛЕНИЙ ОБМЕНА</p>
                    <p className="section__content">Совершаем обмены в самых популярных направлениях. Вы всегда сможете обменять свои средства.</p>
                </div>
                <div className="about_us__section">
                    <img className="section__icon" src={medalIcon} alt="grow" width="100" height="100"></img>
                    <p className="section__title">100% ГАРАНТИЯ ОБМЕНА</p>
                    <p className="section__content">Многочисленные положительные отзывы подтверждают высокое качество нашей работы</p>
                </div>
                <div className="about_us__section">
                    <img className="section__icon" src={moneyIcon} alt="grow" width="100" height="100"></img>
                    <p className="section__title">ЭКОНОМИЧНЫЙ ОБМЕН</p>
                    <p className="section__content">У нас всегда лояльные курсы. Мы всегда открыты к сотрудничеству, обращайтесь.</p>
                </div>
            </section>
            {/* Видео */}
            <section className="main__video">
            <iframe class="video__frame" width="1000" height="500"
                 src="https://www.youtube.com/embed/qJeGwT_bZbE?autoplay=0&amp;loop=1&amp;rel=0&amp;disablekb=1&amp;modestbranding=1&amp;iv_load_policy=3&amp;fs=0&amp;showinfo=0"
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
            </iframe>
            
            </section>
        </main>
    )
} 

export default Body