import React from 'react';
import plasticIcon from '../icons/icons8-plastic-80.png';
import paperIcon from '../icons/icons8-coffee-to-go-80.png';
import miscIcon from '../icons/icons8-disposal-80.png';
import glassIcon from '../icons/icons8-fragile-80.png';
import recyclingIcon from '../icons/icons8-recycling-80.png';
import grillIcon from '../icons/icons8-grill-80.png';

function HelpView(props) {
    return (
        <div className="container">
            <h1>Det här kan du slänga på stationerna</h1>
            <div>
                <h2>
                    <span style={{ verticalAlign: 'super' }}>
                        ... markerade med
                    </span>
                    <img
                        src={recyclingIcon}
                        alt="allmän återvinning"
                        className="icon--header margin-left-5"
                    />
                </h2>
                <div className="margin-y-20">
                    <img
                        src={plasticIcon}
                        alt="plastflaska"
                        className="icon margin-right-5"
                    />
                    <span className="bold margin-right-5">Plast</span>
                    <span className="line-height-normal">
                        t.ex. plastbestick, plastkorkar och olika
                        plastförpackningar.
                    </span>
                </div>
                <div className="margin-y-20">
                    <img
                        src={paperIcon}
                        alt="take away mugg"
                        className="icon margin-right-5"
                    />
                    <span className="bold margin-right-5">Papper</span>
                    <span className="line-height-normal">
                        t.ex. take away-muggar, pappersbestick och andra typer
                        av pappersförpackningar.
                    </span>
                </div>
                <div className="margin-y-20">
                    <img
                        src={glassIcon}
                        alt="trasigt glas"
                        className="icon margin-right-5"
                    />
                    <span className="bold margin-right-5">Glas</span>
                    <span className="line-height-normal">
                        t.ex. glasflaskor och glasburkar.
                    </span>
                </div>
                <div className="margin-y-20">
                    <img
                        src={miscIcon}
                        alt="papperskorg"
                        className="icon margin-right-5"
                    />
                    <span className="bold margin-right-5">Övrigt avfall</span>
                    <span className="line-height-normal">
                        t.ex. servetter, ciggarettfimpar och tuggumi.
                    </span>
                </div>
            </div>
            <div>
                <h2>
                    <span style={{ verticalAlign: 'super' }}>
                        ... markerade med
                    </span>
                    <img
                        src={grillIcon}
                        alt="återvinning för engångsgrill"
                        className="icon--header margin-left-5"
                    />
                </h2>
                <div className="margin-y-20">
                    <img
                        src={grillIcon}
                        alt="grill"
                        className="icon margin-right-5"
                    />
                    <span className="bold margin-right-5">Engångsgrillar</span>
                    <span className="line-height-normal">
                        endast engångsgrillar.
                    </span>
                </div>
            </div>
            <div className="margin-y-30">
                <h3>Aktuellt</h3>
                <article>
                    <h4 className="margin-y-5">Nu kan du återvinna igen!</h4>
                    <small>Publicerat 2 April 2018</small>
                    <p>
                        Nu står de olika återvinningskärlen ute på stockholms
                        gator och stränder för iår!
                    </p>
                </article>
            </div>
        </div>
    );
}

export default HelpView;
