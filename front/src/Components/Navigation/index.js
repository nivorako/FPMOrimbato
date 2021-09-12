import React from 'react';
import Logo from '../../Assets/FPMA.png';

import "./Navigation.css";

function Navigation() {

    return (
        
        <div className="navigation">
            <div className='logo'>
                <img className="logo" src={Logo} alt="logo"/>
            </div>
            <div className="nav">
                <button className="bouton">Accueil</button>
                <button className="bouton">Vie de l'église</button>
                <button className="bouton">Sections</button>
                <button className="bouton">Contact</button>
            </div>
        </div>
       
    )
}

export default Navigation;
