/* eslint-disable max-len */
import {
  FeatureGroup, LayersControl, MapContainer, Marker, Popup, TileLayer, useMap,
} from 'react-leaflet';

// import module L for the creation of icons
import L from 'leaflet';

import markerIconYellow from 'src/data/marker-icon-yellow.png';
import markerIconRed from 'src/data/marker-icon-red.png';
import { useDispatch, useSelector } from 'react-redux';

// Icon creation
const icon1 = L.icon({
  iconUrl: markerIconYellow,
  iconSize: [30, 35],
});
const icon4 = L.icon({
  iconUrl: markerIconYellow,
  iconSize: [45, 50],
});
const icon2 = L.icon({
  iconUrl: markerIconRed,
  iconSize: [30, 35],
});
const icon3 = L.icon({
  iconUrl: markerIconRed,
  iconSize: [45, 50],
});

const Map = () => {
  // const dispatch = useDispatch();
  const events = useSelector((state) => state.event.eventsToDisplay);
  const users = useSelector((state) => state.user.usersToDisplay);
  const markerSelected = useSelector((state) => state.map.nameSelected);

  // Get the location to zoom on the user
  const latUser = useSelector((state) => state.user.latNewUser);
  const lngUser = useSelector((state) => state.user.lngNewUser);
  const center = [latUser, lngUser];

  const ChangeView = () => {
    const map = useMap();
    map.setView(center);
    // console.log('centre de la map');
    return null;
  };

  // I get the name of the page to show or hide the markers
  const main = useSelector((state) => state.nav.main);

  // const isLogged = useSelector((state) => state.user.logged);

  return (
    <div className="map-main">
      {/* default position of the map */}
      <MapContainer
        key={latUser}
        center={center}
        // center={[45.8692, 6.129]}
        // center={(latUser === '' || lngUser === '') ? [48.8692, 6.129] : [latUser, lngUser]}
        // center={!haveLocation ? [48.8692, 6.129] : [latUser, lngUser]}
        zoom={11}
        scrollWheelZoom={false}
      >
        <ChangeView center={center} />
        {/* Used to load and display tile layers on the map */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* display a button to show or hide the markers */}
        <LayersControl position="topright">

          <LayersControl.Overlay
          // I get the name of the page to show or hide the markers
            checked={main === 'event'}
            name="Events"
          >
            <FeatureGroup>
              {/* I map on events to display all markers */}
              {events.map((event) => (
                <Marker
                  position={[event.lat, event.lng]}
                  icon={(event.name === markerSelected) ? icon4 : icon1}
                  key={event.id}
                >
                  <Popup>
                    {event.name} <br /> {event.difficulty}
                  </Popup>
                </Marker>
              ))}
            </FeatureGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay
          // I get the name of the page to show or hide the markers
            checked={main === 'meeting'}
            name="Users"
          >
            <FeatureGroup>
              {users.map((user) => (
                <Marker
                // Use a ternary condition to display different icons if the name matches
                  position={[user.lat, user.lng]}
                  icon={(user.firstname === markerSelected) ? icon3 : icon2}
                  key={user.id}
                >
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
