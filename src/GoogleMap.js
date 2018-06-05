import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

// Left from testsession
class GoogleMap extends Component {
    static defaultProps = {
      center: {
        lat: 59.95,
        lng: 30.33
      },
      odenplan: {
        lat: 59.34,
        lng: 18.04
      },
      zoom: 12
    };


    render() {

      return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyCT5AuY2Mf3nQ_YgE7LXakaBT_KQEDDa6U' }}
            defaultCenter={this.props.odenplan}
            defaultZoom={this.props.zoom}
        >

            <div style={{ height: '100px', width: '100px', backgroundColor: 'red' }}
              lat={59.3430301}
              lng={18.0494621}
              text={'Odenplan'}
            />

          </GoogleMapReact>
        </div>
      );
    }
  }

  export default GoogleMap;