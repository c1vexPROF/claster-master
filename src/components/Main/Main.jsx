import React, { useState } from 'react';
import "./styles/main.css"
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { Button } from '@consta/uikit/Button';
import ReactDOM from 'react-dom';

import bg from "./images/bg.png"
import minobr from "./images/minobr.png"
import svfu from "./images/svfu.png"
import yakse from "./images/yakse.png"
import yakstar from "./images/yakstar.png"


export function Main() {
    // const [someData, setSomeData] = useState();
    return (
        <div className="main-div">
            <div className="main-images">
                <div className="main-image-1">
                    <img className="main-image-1-img" src={bg} />
                    <span className="main-textonimage">ClastYak</span>
                    <span className="main-textonimage-descr">Площадка для взаимодействия государства, бизнеса, науки и образования в сфере информационных технологий. </span>
                </div>
            </div>
            <div className='main-second'>
                <div className='main-second-div'>
                    <div className='main-second-div-text'>
                        <span>
                            Процессы IT-кластера РС(Я)
                        </span>
                    </div>
                    <div className='main-second-div-box-1'>
                        <div className='main-second-div-box-item-1'>Разработка</div>
                        <div className='main-second-div-box-item-1'>Курсы</div>
                    </div>
                    <div className='main-second-div-box-1'>
                        <div className='main-second-div-box-item-1'>Взаимопомощь</div>
                        <div className='main-second-div-box-item-1'>Бизнес</div>
                    </div>
                    <div className='main-second-div-box-1'>
                        <div className='main-second-div-box-item-1'>Трудоустройство</div>
                        <div className='main-second-div-box-item-1'>Образование</div>
                    </div>
                </div>
                <div className='main-second-div'>
                    <div className='main-second-div-text'>
                        <span>
                            Наши партнеры
                        </span>
                    </div>
                    <div className='main-partners'>
                        <img className="main-image-partner" src={minobr} />
                        <img className="main-image-partner" src={svfu} />
                        <img className="main-image-partner" src={yakse} />
                        <img className="main-image-partner" src={yakstar} />
                    </div>
                </div>
            </div>

        </div>

    )
}