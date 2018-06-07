import React from 'react';
import Logo from '../logo/atervinn_stan.png';

function Header(){
    return(
        <header>
            <img className="logo" src={Logo}></img>
        </header>
    );
}

export default Header;