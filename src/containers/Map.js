import React, { Component } from 'react';

import {GoogleMapLoader, GoogleMap, Marker, InfoWindow} from "react-google-maps";

// https://github.com/tomchentw/react-google-maps/issues/333  - infowindow

export default class Map extends Component {
    render () {


    return (
        <div className="map">
            <GoogleMapLoader
                containerElement={
                    <div

                        style={{
                            height: "100%",
                        }}
                    />
                }
                googleMapElement={
                    <GoogleMap
                        ref={(map) => console.log(map)}
                        defaultZoom={14}
                        defaultCenter={{ lat: 55.797774, lng: 49.121631}}

                    >
                        <Marker position={{ lat: 55.797774, lng: 49.121631}}
                     />
                        <Marker position={{ lat: 55.7917, lng: 49.125411}}
                     />
                        <InfoWindow
                            position={{ lat: 55.797774, lng: 49.121631}}

                        >
                            Хорошее место
                        </InfoWindow>

                    </GoogleMap>
                }
            />
        </div>
    );
}}