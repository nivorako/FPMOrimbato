import React from 'react';

import {Link}from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {HashLink} from 'react-router-hash-link';

import Logo from '../../Assets/FPMA.png';
import "./Navigation.css";

function Navigation() {

    

    return (
        
        <div className="navigation">
            
                <div className='logo' id="logo"> 
                    
                        <HashLink to="/#header"><img className="logo" src={Logo} alt="logo"/></HashLink>
                    
                </div>
            
            <nav className="bouton">  
                <div className=' dropdown'>
                    
                    <button className="switch">Accueil</button>
                    <div className="dropdown-content">
                
                        <HashLink to='/#main'>Les paroles de la bible</HashLink>
                    </div>
                    
                </div>   
                <div className=' dropdown'>
                    <button href="#" className="switch">Responsables</button>
                    <div className="dropdown-content">
                        <Link to="/Manager/Pastor">pasteur</Link>
                        <Link to="/Manager/Official">Le bureau</Link>
                        <Link to="/Manager/Comity">Le comité paroissial</Link>
                        <Link to="/Manager/Anciens">les anciens</Link>
                        <HashLink to="/Manager/Anciens/Anciens#scroll">Scroll To Test</HashLink>
                    </div>
                </div>        
                <div className=' dropdown'>
                    <button className="switch">Sections</button>
                    <div className="dropdown-content">
                        <Link to="/Sections/School">Ecole du dimanche</Link>
                        <Link to="/Sections/Young">Jeunes chrétiens</Link>
                        <Link to="/Sections/Women">Femmes chrétiennes</Link>
                        <Link to="/Sections/Men">Hommes chrétiens</Link>
                        
                    </div>
                </div>
                <div className=' dropdown'>
                    <button href='#' className="switch">Vie d'Eglise</button>           
                    <div className="dropdown-content">
                        <Link to="/Church/Diary">Calendrier</Link>
                        <Link to='/Church/Liturgy'>Liturgie</Link>
                        <Link to='/Church/Project'>Projet d'église</Link>
                        <Link to='/Church/Rules'>Règlement interieur</Link>
                    </div>
                </div>
                <a href="#" ><button className="switch">Contact</button></a>
            </nav>
            
        </div>
       
    )
}

export default Navigation;
