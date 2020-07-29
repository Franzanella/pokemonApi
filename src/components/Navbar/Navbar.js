import React from 'react';
import './style.css';
import Logo from '../../assets/logo.png'

function Navbar() {
    return (
        <div className="Navbar">
            <img className="Logo" src={Logo} alt="pokedex"/>
        </div>
    );
}

export default Navbar;
