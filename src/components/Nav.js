import React, { Component } from 'react';

function Nav (props) {
    return (
        <nav className="grid">
            <button onClick={props.onClick} value={'sök'}>sök</button>
            <button onClick={props.onClick} value={'karta'}>karta</button>
            <button onClick={props.onClick} value={'hjälp'}>hjälp</button>
        </nav>
    )
}

export default Nav;