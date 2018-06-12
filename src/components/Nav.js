import React from 'react';
import Button from './Button';
import SearchIcon from './SearchIcon';
import MapIcon from './MapIcon';
import HelpIcon from './HelpIcon';

function Nav(props) {
    return (
        <nav className="flex">
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
                className={`btn border-none btn__nav margin-none ${
                    props.searchView ? 'active bold' : 'text-white'
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
                className={`btn border-none btn__nav margin-none ${
                    props.mapView ? 'active bold' : 'text-white'
                }`}
            />

            <Button
                onClick={props.toggleView}
                value={'hjälp'}
                type={'nav'}
                icon={<HelpIcon helpView={props.helpView} />}
                content={'Hjälp'}
                className={`btn border-none btn__nav margin-none ${
                    props.helpView ? 'active bold' : 'text-white'
                }`}
            />
        </nav>
    );
}

export default Nav;
