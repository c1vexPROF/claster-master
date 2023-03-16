import React, {useEffect, useState} from 'react';
import "./styles/main.css"
import axios from 'axios';

import bg from "./images/bg.png"
import minobr from "./images/minobr.png"
import svfu from "./images/svfu.png"
import yakse from "./images/yakse.png"
import yakstar from "./images/yakstar.png"
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";

// const client = axios.create({
//     baseURL: "https:/api.foxworld.online"
// });


// const { postdata } = someData


export function Main() {
    const [todos, setTodos] = useState([]);
    // axios.create({
    //      baseURL: 'https:/api.foxworld.online'
    //  });
    async function getPost() {
        const response = await axios.get("https:/api.foxworld.online/api/post/all");
        setTodos(response.data);
        // debugger
    }


    React.useEffect(() => {
        getPost();

    }, []);


    return (
        <div className="main-div">
            <Header/>
            <div className="main-images">
                <div className="main-image-1">
                    <img className="main-image-1-img" src={bg}/>
                    <span className="main-textonimage">ClastYak</span>
                    <span className="main-textonimage-descr">Площадка для взаимодействия государства, бизнеса, науки и образования в сфере информационных технологий. </span>
                </div>
            </div>
            <div className='main-second'>
                <div className='main-second-div'>
                    <div className='main-second-div-text'>
                        Статьи
                    </div>
                    {/*{todos.map(todo => (*/}
                    {/*    <div className='main-second-div-box-1'>*/}
                    {/*        <span className='main-second-div-box-item-1' key={todo.post_id}>*/}
                    {/*            {todo.post_title}<br/>*/}
                    {/*            <span className='main-second-div-box-item-2'>{todo.post_data}</span>*/}
                    {/*        </span>*/}

                    {/*    </div>*/}
                    {/*))}*/}
                </div>
                <div className='main-second-div'>
                    <div className='main-second-div-text'>
                        <span>
                            Наши партнеры
                        </span>
                    </div>
                    <div className='main-partners'>
                        <img className="main-image-partner" src={minobr}/>
                        <img className="main-image-partner" src={svfu}/>
                        <img className="main-image-partner" src={yakse}/>
                        <img className="main-image-partner" src={yakstar}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    )
}
