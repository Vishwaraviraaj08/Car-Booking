import React, {useEffect, useState} from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComponent = ({showMap, setShowMap, location, setLocation}) => {



    const handleMapClick = (event) => {
        setLocation({
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
        });
        setShowMap(false);
    };

    return (
        <div style={mapContainer}>
                <div style={mapContainerStyle}>
                        <GoogleMap
                            mapContainerStyle={mapStyle}
                            center={{ lat: -34.397, lng: 150.644 }}
                            zoom={8}
                            onClick={handleMapClick}
                        >
                            {location && <Marker position={location} />}
                        </GoogleMap>
                </div>
            <div style={{fontSize:'40px', position:'absolute', top:80, left:"95%", fontFamily: 'sans-serif', color:'white', cursor:'pointer'}} onClick={() => setShowMap(false)}>X</div>
        </div>
    );
};


const mapContainer = {
    backgroundColor: 'rgba(0,0,0,0.6)',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',



};

const mapContainerStyle = {
    position: 'fixed',
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: '80%',
    height: '80%',
    zIndex: 1000,
    backgroundColor: 'rgba(0,0,0,0.5)'
};

const mapStyle = {
    width: '100%',
    height: '100%'
};

export default MapComponent;
