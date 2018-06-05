import React, { Component } from 'react';
import Button from './Button';

function SearchView (props) {
    return (
        <div>
            Visar sökvyn
        </div>
    )
                <Button
                    onClick={this.props.toggleView}
                    value={'karta'}
                    content={'Hitta närmsta'}
                />
}

export default SearchView;