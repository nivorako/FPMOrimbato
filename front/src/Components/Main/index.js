import React from 'react'
import Reflexion from '../Reflexion';
import Diary from '../Diary'; 
import Edito from "../Edito";

import './Main.css';

function Main() {
    return (
        <div className="main">
            <div className="gospel">
                Ici, quelques extraits de la bible
            </div>
            <div className="churchLife">
                <Diary />
                <Reflexion />
                <Edito />
            </div>
            
        </div>
    )
}

export default Main;
