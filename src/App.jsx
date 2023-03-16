import './App.css';
import { Main } from "./components/Main/Main";
import { Login } from "./components/Login/Login";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {LK} from "./components/LK/LK";


function App() {
    return (
        <div className="allsite">
            <BrowserRouter>
                <Routes>
                    <Route exact path='/main' element={<Main/>}/>
                    <Route exact path='/login' element={<Login/>}/>
                    <Route exact path='/lk' element={<LK/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
