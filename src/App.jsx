import './App.css';
import {Main} from "./components/Main/Main";
import {Login} from "./components/Login/Login";
import logo from "./components/imgs/logo.png";
import arrowdown from "./components/imgs/Line 10.png"
import WhatsApp from "./components/imgs/WhatsApp.png";
import Odnoklassniki from "./components/imgs/Odnoklassniki.png";
import Subtract from "./components/imgs/Subtract.png";
import Telegram from "./components/imgs/Telegram.png";
import VK from "./components/imgs/VK.png";
import {
    BrowserRouter,
    Route, Routes
} from 'react-router-dom';
import React, {Fragment} from 'react';


function App() {
    return (
        <div className="allsite">
            <header className="header">
                <div className="header-div">
                    <div className="header-logo">
                        <a href="#">
                            <img height={48} src={logo}></img>
                        </a>
                    </div>
                    <div className="header-btn">
                        <a href="#">
                            <span className="header-btn-text">Для ИОГВ &nbsp;</span>
                            <img height={7} src={arrowdown}></img>
                        </a>
                    </div>
                    <div className="header-btn">
                        <a href="#">
                            <span className="header-btn-text">Для образовательных организаций &nbsp;</span>
                            <img height={7} src={arrowdown}></img>
                        </a>
                    </div>
                    <div className="header-btn">
                        <a href="#">
                            <span className="header-btn-text">Для бизнеса &nbsp;</span>
                            <img height={7} src={arrowdown}></img>
                        </a>
                    </div>
                    <div className="header-btn">
                        <a href="#">
                            <span className="header-btn-text">Для населения &nbsp;</span>
                            <img height={7} src={arrowdown}></img>
                        </a>
                    </div>
                </div>
            </header>
            <Main/>
            <footer className='footer'>
                <div className='footer-div'>
                    <div className='footer-div-text'>
                        <span>
                            © 2023 «ClastYak» — Площадка для взаимодействия государства, бизнеса, науки и образования в сфере информационных технологий.
                        </span>
                    </div>
                    <div className='footer-div-contacts'>
                        <a href="#"><img src={Subtract}></img></a>
                        <a href="#"><img src={Odnoklassniki}></img></a>
                        <a href="#"><img src={VK}></img></a>
                        <a href="#"><img src={Telegram}></img></a>
                        <a href="#"><img src={WhatsApp}></img></a>
                    </div>
                </div>
            </footer>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/main' element={<Main/>}/>
                    <Route exact path='/login' element={<Login/>}/>
                        {/*<Main/>*/}
                    {/*</Route>*/}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
