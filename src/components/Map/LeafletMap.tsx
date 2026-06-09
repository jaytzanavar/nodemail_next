'use client'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import logo from '../../../public/logo.jpeg'

const OFFICE_POSITION: [number, number] = [37.9922827, 23.7624542]

const MAPS_URL = 'https://www.google.com/maps/place/%CE%94%CE%B9%CE%BA%CE%B7%CE%B3%CE%BF%CF%81%CE%B9%CE%BA%CE%AE+%CE%95%CF%84%CE%B1%CE%B9%CF%81%CE%B5%CE%AF%CE%B1+%CE%94%CE%B1%CE%BC%CE%BF%CF%85%CE%BB%CE%AE+%CE%A3%CF%84%CE%B5%CF%86%CE%B1%CE%BD%CE%BF%CF%80%CE%BF%CF%8D%CE%BB%CE%BF%CF%85+%CE%91%CE%BD%CF%84%CF%89%CE%BD%CE%BF%CF%80%CE%BF%CF%8D%CE%BB%CE%BF%CF%85+%CE%BA%CE%B1%CE%B9+%CE%A3%CF%85%CE%BD%CE%B5%CF%81%CE%B3%CE%AC%CF%84%CE%B5%CF%82/@37.9922869,23.7598793,17z/data=!3m1!4b1!4m6!3m5!1s0x14a1a2a9e8e91a5b:0xd3567c995783841e!8m2!3d37.9922827!4d23.7624542!16s%2Fg%2F11bzsgp_ht?entry=ttu'

// Custom logo badge instead of the default Leaflet pin (default icon images
// also break under bundlers, so a divIcon avoids that problem entirely).
// The img sizing must be inline styles: leaflet.css sets
// `.leaflet-marker-pane img { width: auto }`, which overrides width/height
// attributes and would render the logo at its natural size.
const logoIcon = L.divIcon({
    className: '',
    iconSize: [60, 60],
    iconAnchor: [30, 30],
    html: `
        <div style="display:flex;align-items:center;justify-content:center;width:60px;height:60px;overflow:hidden;border-radius:20%;background:rgba(15,23,42,0.55);backdrop-filter:blur(5px);box-shadow:0 2px 10px rgba(0,0,0,0.4);">
            <img src="${logo.src}" alt="Damouli law firm logo in map" style="width:46px;height:46px;max-width:none;object-fit:cover;border-radius:50%;" />
        </div>
    `
})

const LeafletMap = () => {
    return (
        <MapContainer
            center={OFFICE_POSITION}
            zoom={17}
            zoomControl={false}
            scrollWheelZoom={false}
            className="h-full w-full"
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={OFFICE_POSITION} icon={logoIcon}>
                <Popup>
                    <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                        Damouli Law Firm — Google Maps
                    </a>
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default LeafletMap
