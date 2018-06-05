import React from 'react';
import Button from './Button';

function Nav (props) {
    return (
        <nav className="grid">

            <Button
                onClick={props.toggleView}
                value={'sök'}
                content={'Sök'}
            />

            <Button
                onClick={props.toggleView}
                value={'karta'}
                content={'Karta'}
            />

            <Button
                onClick={props.toggleView}
                value={'hjälp'}
                content={'Hjälp'}
            />

        </nav>
    )
}

export default Nav;