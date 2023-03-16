import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import './styles/lk.css'
import userlogo from "../../components/imgs/userlogo.png";
export function LK() {
    return (
        <div className="lk">
            <Header/>
            <div className="lk-div">
                <div className="lk-text">
                    <span>
                        Личный кабинет
                    </span>
                </div>
                <div className="lk-data">
                    <div className="lk-field-info-1">
                        <div className="avatar">
                            <img height={48} src={userlogo}/>
                        </div>
                        <div className="FIO">
                            <span>Иванов Иван Иванович</span>
                        </div>
                    </div>
                    <div className="lk-field-info-2">
                        <div className="lk-field-text">
                            <span className="">+7 (900) 123-45-67</span>
                            <button className="lk-btn">Изменить</button>
                        </div>
                        <div className="lk-field-text">
                            <span className="">aboba@gmail.com</span>
                            <button className="lk-btn">Изменить</button>
                        </div>
                        <div className="lk-field-text">
                            <span className="">ГАПОУ РС (Я) «ЯКСЭ имени П.И.Дудкина» </span>
                            <button className="lk-btn">Изменить</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}