import React from 'react';
import Logo from '../../Assets/FPMA.png';

import "./Navigation.css";

function Navigation() {

    return (
        
        <div className="navigation">
            <div className='logo'>
                <img className="logo" src={Logo} alt="logo"/>
            </div>
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
                        <a href="./ecoleD">pasteur</a>
                        <a href="./jeunes">Le bureau</a>
                        <a href="./femmes">Le comité paroissial</a>
                        <a href="./hommes">les anciens</a>
                    </div>
                </div>        
                <div className=' dropdown'>
                    <button href="#" className="switch">Sections</button>
                    <div className="dropdown-content">
                        <a href="./ecoleD">Ecole du dimanche</a>
                        <a href="./jeunes">Jeunes chrétiens</a>
                        <a href="./femmes">Femmes chrétiennes</a>
                        <a href="./hommes">Hommes chrétiens</a>
                    </div>
                </div>
                <div className=' dropdown'>
                    <button href='#' className="switch">Vie d'Eglise</button>           
                    <div className="dropdown-content">
                        <a href="./confCall">Calendrier</a>
                        <a href="./lieu">Liturgie</a>
                        <a href="./projet">Projet d'église</a>
                        <a href="./reglement">Règlement interieur</a>
                    </div>
                </div>
                <a href="#" ><button className="switch">Contact</button></a>
            </nav>
            
        </div>
       
    )
}

export default Navigation;
