/* eslint-disable max-len */
import {
  FeatureGroup, LayersControl, MapContainer, Marker, Popup, TileLayer, useMap,
} from 'react-leaflet';

// import module L for the creation of icons
import L from 'leaflet';

import markerIconYellow from 'src/data/marker-icon-yellow.png';
import markerIconRed from 'src/data/marker-icon-red.png';
import markerIconBlack from 'src/data/marker-icon-black.png';
import markerIconBlue from 'src/data/marker-icon-blue.png';
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
const icon5 = L.icon({
  iconUrl: markerIconBlack,
  iconSize: [30, 35],
});
const icon6 = L.icon({
  iconUrl: markerIconBlack,
  iconSize: [45, 53],
});
const icon7 = L.icon({
  iconUrl: markerIconBlue,
  iconSize: [30, 35],
});
const icon8 = L.icon({
  iconUrl: markerIconBlue,
  iconSize: [45, 53],
});

const Map = () => {
  const itineraries = useSelector((state) => state.itinerary.itinerariesApi);
  const users = useSelector((state) => state.user.usersApi);
  const events = useSelector((state) => state.event.eventsApi);
  const professionals = useSelector((state) => state.pro.professionalsApi);
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
            checked={main === 'itinerary'}
            name="Itineraries"
          >
            <FeatureGroup>
              {/* I map on events to display all markers */}
              {itineraries.map((itinerary) => (
                <Marker
                  position={[itinerary.location.latitude, itinerary.location.longitude]}
                  icon={(itinerary.name === markerSelected) ? icon4 : icon1}
                  key={itinerary.id}
                >
                  <Popup>
                    <Link to={`/itinerary/${itinerary.id}`}>
                      {itinerary.name}
                    </Link>
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

          <LayersControl.Overlay
          // I get the name of the page to show or hide the markers
            checked={main === 'event'}
            name="Events"
          >
            <FeatureGroup>
              {events.map((event) => (
                <Marker
                // Use a ternary condition to display different icons if the name matches
                  position={[event.itinerary.location.latitude, event.itinerary.location.longitude]}
                  icon={(event.name === markerSelected) ? icon8 : icon7}
                  key={event.id}
                >
                  <Popup>
                    <Link to={`/event/${event.id}`}>
                      {event.name}
                    </Link>
                  </Popup>
                </Marker>
              ))}
            </FeatureGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay
          // I get the name of the page to show or hide the markers
            checked={main === 'professional'}
            name="Professionals"
          >
            <FeatureGroup>
              {professionals.map((professional) => (
                <Marker
                // Use a ternary condition to display different icons if the name matches
                  position={[professional.location.latitude, professional.location.longitude]}
                  icon={(professional.name === markerSelected) ? icon6 : icon5}
                  key={professional.id}
                >
                  <Popup>
                    <Link to={`/professional/${professional.id}`}>
                      {professional.name}
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
