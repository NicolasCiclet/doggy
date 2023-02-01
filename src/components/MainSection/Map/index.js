/* eslint-disable max-len */
import {
  FeatureGroup, LayersControl, MapContainer, Marker, Popup, TileLayer, useMap,
} from 'react-leaflet';

// import module L for the creation of icons
import L from 'leaflet';

import markerIconYellow from 'src/data/marker-icon-yellow.png';
import markerIconRed from 'src/data/marker-icon-red.png';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Icon creation
const icon1 = L.icon({
  iconUrl: markerIconYellow,
  iconSize: [30, 35],
});
const icon4 = L.icon({
  iconUrl: markerIconYellow,
  iconSize: [45, 53],
});
const icon2 = L.icon({
  iconUrl: markerIconRed,
  iconSize: [30, 35],
});
const icon3 = L.icon({
  iconUrl: markerIconRed,
  iconSize: [45, 53],
});

const Map = () => {
  // const dispatch = useDispatch();
  // const events = useSelector((state) => state.event.eventsToDisplay);
  const walks = useSelector((state) => state.walk.walksApi);
  const users = useSelector((state) => state.user.usersApi);
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
            checked={main === 'walk'}
            name="Walks"
          >
            <FeatureGroup>
              {/* I map on events to display all markers */}
              {walks.map((walk) => (
                <Marker
                  position={[walk.location.latitude, walk.location.longitude]}
                  icon={(walk.name === markerSelected) ? icon4 : icon1}
                  key={walk.id}
                >
                  <Popup>
                    {walk.name}
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
                  position={[user.location.latitude, user.location.longitude]}
                  icon={(user.lastname === markerSelected) ? icon3 : icon2}
                  key={user.id}
                >
                  <Popup>
                    <Link to={`/user/${user.id}`}>
                      {user.firstname} <br /> {user.nickname}
                    </Link>
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
