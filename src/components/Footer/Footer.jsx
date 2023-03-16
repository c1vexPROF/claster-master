
import "./styles/footer.css"
import React from "react";
import Subtract from "../imgs/Subtract.png";
import Odnoklassniki from "../imgs/Odnoklassniki.png";
import VK from "../imgs/VK.png";
import Telegram from "../imgs/Telegram.png";
import WhatsApp from "../imgs/WhatsApp.png";
export function Footer(){
    return(
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
    )
}
