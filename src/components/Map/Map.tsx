'use client'
import { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import logo from '../../../public/logo.jpeg';
import mapStyle from '../../../public/map_style.json';


const styles = [
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#fcfcfc"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#fcfcfc"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#dddddd"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#dddddd"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#eeeeee"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#dddddd"
            }
        ]
    }
]

const Map = () => {
    const mapRef = useRef<HTMLDivElement>(null);
    const [geocoder, setGeocoder] = useState(null);
    const address = "1600 Amphitheatre Parkway, Mountain View, CA";
    useEffect(() => {

        const initMap = async () => {
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_GOOGLE_KEY as string,
                version: "weekly",
            });
            const { Map } = await loader.importLibrary('maps');
            const { AdvancedMarkerElement } = await loader.importLibrary("marker") as google.maps.MarkerLibrary;


            const position = {
                lat: 37.9922869,
                lng: 23.7624542
            }

            const marker = {
                locationName: "Law Firm",
                lat: 37.9922827,
                lng: 23.7624542
            }

            const mapOptions = {
                center: position,
                zoom: 17.2,
                mapId: process.env.NEXT_PUBLIC_MAP_ID,
                mapTypeId: google.maps.MapTypeId.HYBRID,
                disableDefaultUI: true,
                styles: styles
            }



            const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

            map.setOptions({ styles: styles });

            const divcontainer = document.createElement("div");
            divcontainer.innerText = "Law Firm"
            divcontainer.style.backdropFilter = 'blur(5px)'
            divcontainer.style.font = '25px'
            divcontainer.style.color = 'white'
            divcontainer.style.fontWeight = '600'
            divcontainer.style.width = '70px';
            divcontainer.style.height = '70px';
            divcontainer.style.borderRadius = '20%'
            divcontainer.style.padding = '10px'
            divcontainer.style.display = 'flex'
            divcontainer.style.flexDirection = 'column'
            divcontainer.style.justifyContent = 'center'

            const iconImage = document.createElement("img");
            iconImage.src = logo.src;
            iconImage.width = 50;
            iconImage.style.borderRadius = '50%'
            divcontainer.appendChild(iconImage)
            const markerG = new AdvancedMarkerElement({
                position: { lat: marker.lat, lng: marker.lng },
                map: map,
                content: divcontainer
            })

        }
        initMap()
    }, []);



    return <div className="md:w-[450px] rounded-lg md:h-[350px] sm:w-[250px] w-[350px] h-[250px] " ref={mapRef} />;

}

export default Map