
import "./styles/header.css"
import logo from "../imgs/logo.png";
import arrowdown from "../imgs/Line 10.png";
import React from "react";
// import App from "../../App";
export function Header(){
    return(
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
                    <span className="header-btn-text">Для обучающихся &nbsp;</span>
                    <img height={7} src={arrowdown}></img>
                </a>
            </div>
        </div>
    </header>
    )
}
