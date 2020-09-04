import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Card} from '@material-ui/core';
import {Bar} from 'react-chartjs-2'

import styles from './Map.module.css';

function Map(props) {

    console.log(props)
    return (
        <Card >
            <div className={styles.map}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyBws_Nmjd3JZlydD20cnlXf2KHUKvt2GJI"}}
                    center={{
                    lat: 59.95,
                    lng: 30.33
                    }}
                    zoom= {-5}
                    >
                    <div >
                        <img className={styles.img} src="https://covid19.mathdro.id/api/og" alt="Covid 19 Statuses."/>            
                    </div>
                </GoogleMapReact>
            </div>
        
        </Card>
        
    )
}

export default Map
