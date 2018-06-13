import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import CurrentMarker from './CurrentMarker';
import mapStyle from '../mapStyle.json';

class GoogleMap extends Component {
    static defaultProps = {
        locations: [],
        zoom: 14,
    };

    render() {
        const allMarkers = this.props.locations.map(location => (
            <Marker
                lat={location.lat}
                lng={location.lng}
                text={location.text}
                type={location.type}
                key={location.text}
            />
        ));

        const options = {
            styles: mapStyle,
        };

        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '88vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: 'AIzaSyCT5AuY2Mf3nQ_YgE7LXakaBT_KQEDDa6U',
                    }}
                    defaultCenter={this.props.currentPosition}
                    defaultZoom={this.props.zoom}
                    options={options}
                >
                    {allMarkers}

                    <CurrentMarker
                        lat={this.props.currentPosition.lat}
                        lng={this.props.currentPosition.lng}
                        key={this.props.currentPosition.text}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default GoogleMap;
