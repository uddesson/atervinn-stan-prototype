import React from 'react';
import Button from './Button';

function Nav (props) {
    return (
        <nav className="grid">

            <Button
                onClick={props.toggleView}
                value={'sök'}
                content={'Sök'}
                className='btn'
            />

            <Button
                onClick={props.toggleView}
                value={'karta'}
                content={'Karta'}
                className='btn'
            />

            <Button
                onClick={props.toggleView}
                value={'hjälp'}
                content={'Hjälp'}
                className='btn'
            />

        </nav>
    )
}

export default Nav;