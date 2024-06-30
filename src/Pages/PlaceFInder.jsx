import React, { useState } from 'react';
import { GoogleMap, LoadScript, Autocomplete } from '@react-google-maps/api';

const DistanceCalculator = () => {
    const [place1, setPlace1] = useState(null);
    const [place2, setPlace2] = useState(null);
    const [distance, setDistance] = useState(null);

    // Function to calculate distance between two places
    const calculateDistance = () => {
        if (place1 && place2) {
            const origin = { lat: place1.geometry.location.lat(), lng: place1.geometry.location.lng() };
            const destination = { lat: place2.geometry.location.lat(), lng: place2.geometry.location.lng() };

            const service = new window.google.maps.DistanceMatrixService();
            service.getDistanceMatrix(
                {
                    origins: [origin],
                    destinations: [destination],
                    travelMode: 'DRIVING',
                },
                (response, status) => {
                    if (status === 'OK') {
                        const result = response.rows[0].elements[0];
                        if (result.status === 'OK') {
                            setDistance(result.distance.value); // distance in meters
                        } else {
                            alert('Error calculating distance: ' + result.status);
                        }
                    } else {
                        alert('Error calculating distance: ' + status);
                    }
                }
            );
        }
    };

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyANlHK0u60OeB61jRC-wdpY_djhheq3P98"
            libraries={['places']}
        >
            <div>
                <h2>Distance Calculator</h2>
                <Autocomplete
                    onLoad={(autocomplete) => setPlace1(autocomplete)}
                    onPlaceChanged={() => setPlace1(place1.getPlace())}
                >
                    <input
                        type="text"
                        placeholder="Enter place 1"
                        style={{ width: '100%', padding: '0.5rem' }}
                    />
                </Autocomplete>
                <Autocomplete
                    onLoad={(autocomplete) => setPlace2(autocomplete)}
                    onPlaceChanged={() => setPlace2(place2.getPlace())}
                >
                    <input
                        type="text"
                        placeholder="Enter place 2"
                        style={{ width: '100%', padding: '0.5rem' }}
                    />
                </Autocomplete>
                <br />
                <button onClick={calculateDistance}>Calculate Distance</button>
                <br />
                {distance !== null && (
                    <p>
                        Distance between {place1.name} and {place2.name} is approximately {distance} meters.
                    </p>
                )}
            </div>
        </LoadScript>
    );
};

export default DistanceCalculator;
