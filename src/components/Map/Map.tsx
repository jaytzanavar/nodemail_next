'use client'
import { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";


const Map = () => {
    const mapRef = useRef(null);
    const [geocoder, setGeocoder] = useState(null);
    const address = "1600 Amphitheatre Parkway, Mountain View, CA";
    useEffect(() => {
        const loader = new Loader({
            apiKey: process.env.NEXT_PUBLIC_GOOGLE_KEY,
            version: "weekly",
        });
        console.log(loader);
        loader.load().then((google) => {
            console.log('google', google);
            if (google) {

                setGeocoder(new google.maps.Geocoder());
            }

        })
        // loader.load().then(() => {
        //     console.log(new google.maps);
        // setGeocoder(new google.maps.Geocoder());
        // geocoder.geocode({ address: address }, (results, status) => {
        //     if (status === "OK") {
        //         const map = new google.maps.Map(mapRef.current, {
        //             center: results[0].geometry.location,
        //             zoom: 8,
        //         }); const marker = new google.maps.Marker({
        //             map: map,
        //             position: results[0].geometry.location,
        //         });
        //     } else {
        //         console.error(`Geocode was not successful for the following reason: ${status}`);
        //     }
        // });
        // });
    }, []);

    useEffect(() => {
        console.log(geocoder);
        if (geocoder)
            geocoder.geocode({ address: address }, (results, status) => {
                if (status === "OK") {
                    const map = new google.maps.Map(mapRef.current, {
                        center: results[0].geometry.location,
                        zoom: 8,
                    }); const marker = new google.maps.Marker({
                        map: map,
                        position: results[0].geometry.location,
                    });
                } else {
                    console.error(`Geocode was not successful for the following reason: ${status}`);
                }
            });
    }, [geocoder])

    return <div style={{ height: "400px" }} ref={mapRef} />;

}

export default Map