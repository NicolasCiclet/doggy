import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
// import for the creation of the icon
import L from 'leaflet';

import './map.scss';

import markerIconBlue from 'src/data/marker-icon.png';
import { useSelector } from 'react-redux';

// Icon creation
const icon1 = L.icon({
  iconUrl: markerIconBlue,
  iconSize: [25, 35],
});

const Map = () => {
  const events = useSelector((state) => state.eventsToDisplay);
  return (
    <div className="map-main">
      <MapContainer center={[46.0546, 6.025]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {events.map((event) => (
          <Marker position={[event.lat, event.lng]} icon={icon1}>
            <Popup>
              {event.name} <br /> {event.difficulty}.
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
