import "./styles/login.css"
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import { Button } from "@consta/uikit/Button";
import { Theme, presetGpnDefault } from "@consta/uikit/Theme";

export function Login() {
    return (
        <div className="main-login-div">
            <Header/>
            <div className="login-div">
                <div className="login-text">
                    Вход
                </div>
                <div className="login-email">
                    <div className="login-email-text">
                        Email
                    </div>
                    <div className="login-email-input-div">
                        <input className="login-email-input" placeholder="somegmail@gmail.com"/>
                    </div>
                </div>
                <div className="login-password">
                    <div className="login-password-text">
                        Password
                    </div>
                    <div className="login-password-input-div">
                        <input className="login-password-input" placeholder="somepassword"/>
                    </div>
                </div>
                <div className="btn">
                    <Theme preset={presetGpnDefault}>
                    <Button
                        className="btn-login"
                        label="Войти">
                    </Button>
                    </Theme>
                </div>
            </div>
            {/*<Footer/>*/}
        </div>
    );
}