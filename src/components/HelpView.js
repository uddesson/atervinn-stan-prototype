import React from 'react';
import plasticIcon from '../icons/icons8-plastic-80.png';
import paperIcon from '../icons/icons8-coffee-to-go-80.png';
import tinIcon from '../icons/icons8-tin-can-80.png';
import glassIcon from '../icons/icons8-fragile-80.png';
import recyclingIcon from '../icons/icons8-recycling-80.png';
import grillIcon from '../icons/icons8-grill-80.png';

function HelpView(props) {
    return (
        <div className="container">
            <h2>Det här kan du slänga på stationerna</h2>
            <div>
                <h3>
                    <span style={{ verticalAlign: 'super' }}>
                        Stationer markerade med
                    </span>
                    <img
                        src={recyclingIcon}
                        alt="allmän återvinning"
                        style={{ height: '30px', width: '30px' }}
                    />
                </h3>
                <div>
                    <img
                        src={plasticIcon}
                        alt="plastflaska"
                        style={{ height: '40px', width: '40px' }}
                    />
                    <span>plastbestick etc</span>
                </div>
                <div>
                    <img
                        src={paperIcon}
                        alt="take away mugg"
                        style={{ height: '40px', width: '40px' }}
                    />
                    <span>pappersmuggar etc</span>
                </div>
                <div>
                    <img
                        src={tinIcon}
                        alt="öppen konservburk"
                        style={{ height: '40px', width: '40px' }}
                    />
                    <span>kapsyler etc</span>
                </div>
                <div>
                    <img
                        src={glassIcon}
                        alt="trasigt glas"
                        style={{ height: '40px', width: '40px' }}
                    />
                    <span>glasflaskor etc</span>
                </div>
            </div>
            <div>
                <h3>
                    <span style={{ verticalAlign: 'super' }}>
                        Stationer markerade med
                    </span>
                    <img
                        src={grillIcon}
                        alt="återvinning för engångsgrill"
                        style={{ height: '30px', width: '30px' }}
                    />
                </h3>
                <div>
                    <img
                        src={grillIcon}
                        alt="grill"
                        style={{ height: '40px', width: '40px' }}
                    />
                    <span>endast engångsgrillar</span>
                </div>
            </div>
            <h4>Aktuellt</h4>
            <p>Inga nyheter</p>
        </div>
    );
}

export default HelpView;
