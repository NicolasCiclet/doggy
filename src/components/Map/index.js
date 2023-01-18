import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
// import for the creation of the icon
import L from 'leaflet';

import './map.scss';

import markerIconBlue from 'src/data/marker-icon.png';

// Icon creation
const icon1 = L.icon({
  iconUrl: markerIconBlue,
  iconSize: [25, 35],
});

const Map = () => (
  <div className="map-main">
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]} icon={icon1}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  </div>
);

export default Map;
