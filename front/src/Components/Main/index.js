import React from 'react';
import {Link} from 'react-router-dom';

import './Main.css';

function Main() {
    return (
        <div className="main">
            <div className="gospel">
                Ici, quelques extraits de la bible
            </div>
            <div className="churchLife">
                <Link to="/Pericope">
                    <div>
                        ci le pericope
                    </div>
                </Link>
                <Link to="/Edito">
                    <div>
                        ici Edito
                    </div>
                </Link>
                <Link to="/Reflexion">
                    <div>
                        ici Reflexion
                    </div> 
                </Link> 
            </div>
            
        </div>
    )
}

export default Main;
