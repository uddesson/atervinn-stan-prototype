import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

// Left from testsession
class GoogleMap extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33,
        },
        odenplan: {
            lat: 59.34,
            lng: 18.04,
        },
        locations: [],
        zoom: 12,
    };

    render() {
        const allMarkers = this.props.locations.map(location => (
            <Marker
                lat={location.lat}
                lng={location.lng}
                text={location.text}
                key={location.text}
            />
        ));
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '90vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: 'AIzaSyCT5AuY2Mf3nQ_YgE7LXakaBT_KQEDDa6U',
                    }}
                    defaultCenter={this.props.odenplan}
                    defaultZoom={this.props.zoom}
                >
                    {allMarkers}
                </GoogleMapReact>
            </div>
        );
    }
}

export default GoogleMap;
