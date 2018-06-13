import React from 'react';
import plasticIcon from '../icons/icons8-plastic-80.png';
import paperIcon from '../icons/icons8-coffee-to-go-80.png';
import miscIcon from '../icons/icons8-disposal-80.png';
import glassIcon from '../icons/icons8-fragile-80.png';
import RecyclingIcon from '../icons/icons8-recycling-96.png';
import GrillIconWhite from '../icons/icons8-grill-filled-80.png';
import grillIconColor from '../icons/icons8-grill-80.png';

function HelpView() {
    return (
        <div className="container">
            <div className="card">
                <h1 className="margin-none">Symbolförklaring</h1>
                <p className="margin-none line-height-medium">
                    På kartan finns två typer av markeringar som representerar
                    olika stationer. Nedan beskrivs vad du kan återvinna på
                    respektive station.
                </p>
                <div className="margin-y-20">
                    <h2 className="margin-none line-height-normal text-normal bold">
                        På stationer märkta med
                        <div className="marker marker--small inline margin-x-5">
                            <img
                                className="icon--small marker__icon--small marker__icon"
                                src={RecyclingIcon}
                            />
                        </div>
                        kan du återvinna följande.
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
                <div className="card margin-y-30">
                    <h2 className="text-normal line-height-normal bold">
                        På Stationer märkta med
                        <div className="marker marker--small inline margin-x-5">
                            <img
                                className="icon--small marker__icon"
                                src={GrillIconWhite}
                            />
                        </div>
                        kan du återvända följande.
                    </h2>
                    <div className="margin-y-20 line-height-extra flex">
                        <img
                            src={grillIconColor}
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
                <div className="margin-last card">
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
                            stockholms gator och stränder för i år!
                        </p>
                    </article>
                </div>
            </div>
        </div>
    );
}

export default HelpView;
