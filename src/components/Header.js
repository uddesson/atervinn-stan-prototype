import React from 'react';
import Logo from '../logo/atervinn_stan.png';

function Header(){
    return(
        <header>
            <img
                className="logo"
                src={Logo}
                alt="Logga för Återvinn Stan">
            </img>
        </header>
    );
}

export default Header;