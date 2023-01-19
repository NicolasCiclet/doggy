import { FeatureGroup, LayersControl, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
// import for the creation of the icon
import L from 'leaflet';

import './map.scss';

import markerIconYellow from 'src/data/marker-icon-yellow.png';
import markerIconRed from 'src/data/marker-icon-red.png';
import { useSelector } from 'react-redux';

// Icon creation
const icon1 = L.icon({
  iconUrl: markerIconYellow,
  iconSize: [30, 35],
});
const icon2 = L.icon({
  iconUrl: markerIconRed,
  iconSize: [30, 35],
});

const Map = () => {
  const events = useSelector((state) => state.event.eventsToDisplay);
  const users = useSelector((state) => state.user.usersToDisplay);
  return (
    <div className="map-main">
      <MapContainer center={[46.0546, 6.025]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LayersControl position="topright">

          <LayersControl.Overlay checked name="Events">
            <FeatureGroup>
              {events.map((event) => (
                <Marker position={[event.lat, event.lng]} icon={icon1}>
                  <Popup>
                    {event.name} <br /> {event.difficulty}
                  </Popup>
                </Marker>
              ))}
            </FeatureGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay checked name="Users">
            <FeatureGroup>
              {users.map((user) => (
                <Marker position={[user.lat, user.lng]} icon={icon2}>
                  <Popup>
                    {user.firstname} <br /> {user.gender}
                  </Popup>
                </Marker>
              ))}
            </FeatureGroup>
          </LayersControl.Overlay>

        </LayersControl>

      </MapContainer>
    </div>
  );
};

export default Map;
