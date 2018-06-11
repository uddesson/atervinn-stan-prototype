import React from 'react';
import Button from './Button';
import SearchIcon from './SearchIcon';
import MapIcon from './MapIcon';
import HelpIcon from './HelpIcon';

function Nav(props) {
    return (
        <nav className="grid">
            <Button
                onClick={props.toggleView}
                value={'sök'}
                type={'nav'}
                icon={
                    <SearchIcon
                        searchView={props.searchView}
                        onClick={props.toggleView}
                    />
                }
                content={'Sök'}
                className={`btn border-none btn__nav ${
                    props.searchView ? 'active' : 'text-white'
                }`}
            />

            <Button
                onClick={props.toggleView}
                value={'karta'}
                type={'nav'}
                icon={
                    <MapIcon
                        mapView={props.mapView}
                        onClick={props.toggleView}
                    />
                }
                content={'Karta'}
                className={`btn border-none btn__nav ${
                    props.mapView ? 'active' : 'text-white'
                }`}
            />

            <Button
                onClick={props.toggleView}
                value={'hjälp'}
                type={'nav'}
                icon={<HelpIcon helpView={props.helpView} />}
                content={'Hjälp'}
                className={`btn border-none btn__nav ${
                    props.helpView ? 'active' : 'text-white'
                }`}
            />
        </nav>
    );
}

export default Nav;
