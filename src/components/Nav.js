import React from 'react';
import Button from './Button';
import searchIcon from '../icons/basic_magnifier.svg';
import mapIcon from '../icons/basic_geolocalize-05.svg';
import helpIcon from '../icons/basic_question.svg';

function Nav(props) {
    return (
        <nav className="grid">
            <Button
                onClick={props.toggleView}
                value={'sök'}
                type={'nav'}
                icon={searchIcon}
                content={'Sök'}
                className="btn border-none btn__nav text-white"
            />

            <Button
                onClick={props.toggleView}
                value={'karta'}
                type={'nav'}
                icon={mapIcon}
                content={'Karta'}
                className="btn border-none btn__nav text-white"
            />

            <Button
                onClick={props.toggleView}
                value={'hjälp'}
                type={'nav'}
                icon={helpIcon}
                content={'Hjälp'}
                className="btn border-none btn__nav text-white"
            />
        </nav>
    );
}

export default Nav;
