import React from 'react';

import {Link}from 'react-router-dom';

import Logo from '../../Assets/FPMA.png';
import "./Navigation.css";

function Navigation() {

    return (
        
        <div className="navigation">
            <Link to="/">
                <div className='logo'>
                    <img className="logo" src={Logo} alt="logo"/>
                </div>
            </Link>
            <nav className="bouton">  
                <div className=' dropdown'>
                    <button href="/" className="switch">Accueil</button>
                    <div className="dropdown-content">
                        <a href="./ecoleD">Les paroles de la bible</a>
                    </div>
                </div>   
                <div className=' dropdown'>
                    <button href="#" className="switch">Responsables</button>
                    <div className="dropdown-content">
                        <a href="/Manager/Pastor">pasteur</a>
                        <a href="/Manager/Official">Le bureau</a>
                        <a href="/Manager/Comity">Le comité paroissial</a>
                        <Link to="/Manager/Anciens">les anciens</Link>
                        
                    </div>
                </div>        
                <div className=' dropdown'>
                    <button href="#" className="switch">Sections</button>
                    <div className="dropdown-content">
                        <a href="/Sections/School">Ecole du dimanche</a>
                        <a href="/Sections/Young">Jeunes chrétiens</a>
                        <a href="/Sections/Women">Femmes chrétiennes</a>
                        <a href="/Sections/Men">Hommes chrétiens</a>
                    </div>
                </div>
                <div className=' dropdown'>
                    <button href='#' className="switch">Vie d'Eglise</button>           
                    <div className="dropdown-content">
                        <a href="/Church/Diary">Calendrier</a>
                        <a href="/Church/Liturgy">Liturgie</a>
                        <a href="/Church/Project">Projet d'église</a>
                        <a href="/Church/Rules">Règlement interieur</a>
                    </div>
                </div>
                <a href="#" ><button className="switch">Contact</button></a>
            </nav>
            
        </div>
       
    )
}

export default Navigation;
