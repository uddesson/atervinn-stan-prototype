import React from 'react';
import Button from './Button';

function ShowNearestButton(props){
    return(
        <React.Fragment>
                <div className="pin"></div>

                <div className="pulse"></div>

                <Button
                    onClick={props.toggleView}
                    value={'karta'}
                    content={'Visa närmsta station ⇾'}
                    className={'btn__call-to-action'}
                />
    </React.Fragment>
    );
}


export default ShowNearestButton;