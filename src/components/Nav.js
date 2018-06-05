import React, { Component } from 'react';

function Nav (props) {
    return (
        <nav className="grid">
            <div onClick={props.handleView} view={'sök'}>sök</div>
            <div onClick={props.handleView}>karta</div>
            <div onClick={props.handleView}>hjälp</div>
        </nav>
    )
}

export default Nav;