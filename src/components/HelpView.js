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
            <div className="card">
                <h1 className="margin-none line-height-normal">
                    Symbolförklaring
                </h1>
                <div>
                    <h2 className="margin-none">
                        <p className="text-normal line-height-normal">
                            På stationer markerade med
                            <img
                                src={recyclingIcon}
                                alt="allmän återvinning"
                                className="icon--small margin-left-5 margin-right-5 vertical-sub"
                            />
                            kan du slänga följande
                        </p>
                    </h2>
                    <div className="margin-y-20 line-height-extra flex">
                        <img
                            src={plasticIcon}
                            alt="plastflaska"
                            className="icon margin-right-5"
                        />
                        <div>
                            <span className="bold margin-right-5 outlined">
                                Plast
                            </span>
                            <span className="line-height-normal">
                                t.ex. plastbestick, korkar och olika
                                plastförpackningar.
                            </span>
                        </div>
                    </div>
                    <div className="margin-y-20 line-height-extra flex">
                        <img
                            src={paperIcon}
                            alt="take away mugg"
                            className="icon margin-right-5"
                        />
                        <div>
                            <span className="bold margin-right-5 outlined">
                                Papper
                            </span>
                            <span className="line-height-normal">
                                t.ex. kaffe-muggar, pappersbestick och andra
                                typer av pappersförpackningar.
                            </span>
                        </div>
                    </div>
                    <div className="margin-y-20 line-height-extra flex">
                        <img
                            src={glassIcon}
                            alt="trasigt glas"
                            className="icon margin-right-5"
                        />
                        <div>
                            <span className="bold margin-right-5 outlined">
                                Glas
                            </span>
                            <span className="line-height-normal">
                                t.ex. glasflaskor och glasburkar.
                            </span>
                        </div>
                    </div>
                    <div className="margin-y-20 line-height-extra flex">
                        <img
                            src={miscIcon}
                            alt="papperskorg"
                            className="icon margin-right-5"
                        />
                        <div>
                            <span className="bold margin-right-5 outlined">
                                Övrigt avfall
                            </span>
                            <span className="line-height-normal">
                                t.ex. servetter, ciggarettfimpar och tuggumi.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="card margin-top">
                    <h2>
                        <p className="text-normal line-height-normal">
                            På stationer markerade med
                            <img
                                src={grillIcon}
                                alt="återvinning för engångsgrill"
                                className="icon--small margin-left-5 vertical-sub"
                            />
                        </p>
                    </h2>
                    <div className="margin-y-20 line-height-extra flex">
                        <img
                            src={grillIcon}
                            alt="grill"
                            className="icon margin-right-5 margin-left-5"
                        />
                        <div>
                            <span className="bold margin-right-5 outlined">
                                Engångsgrillar
                            </span>
                            <span className="line-height-normal">
                                i de särskilda återvinningskärlen för
                                engångsgrillar får endast engångsgrillar
                                slängas.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="margin-y-30 card">
                    <h1 className="margin-none">Aktuellt</h1>
                    <article>
                        <h2 className="margin-y-5">
                            Nu kan du återvinna igen!
                        </h2>
                        <small className="uppercase text-green-dark">
                            Publicerat 2 April 2018
                        </small>
                        <p>
                            Nu står de olika återvinningskärlen ute på
                            stockholms gator och stränder för iår!
                        </p>
                    </article>
                </div>
            </div>
        </div>
    );
}

export default HelpView;
