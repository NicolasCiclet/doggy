/* eslint-disable max-len */
import {
  FeatureGroup, LayersControl, MapContainer, Marker, Popup, TileLayer, useMap,
} from 'react-leaflet';

// Import the Leaflet module and store it in the "L" variable.
// Now we can access Leaflet functions and properties. L.map(), L.marker(), L.icon() etc.
import L from 'leaflet';

// Import of different markers
import markerIconYellow from 'src/data/marker-icon-yellow.png';
import markerIconRed from 'src/data/marker-icon-red.png';
import markerIconBlack from 'src/data/marker-icon-black.png';
import markerIconBlue from 'src/data/marker-icon-blue.png';
import markerDog from 'src/data/dog.svg';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import 'leaflet/dist/leaflet.css';

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
const icon9 = L.icon({
  iconUrl: markerDog,
  iconSize: [35, 45],
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

  // Center the map on the user
  const latUser = useSelector((state) => state.user.latNewUser);
  const lngUser = useSelector((state) => state.user.lngNewUser);
  const center = [latUser, lngUser];

  // "setView" allows to update the map position.
  const ChangeView = () => {
    const map = useMap();
    map.setView(center);
    return null;
  };

  // I get the section name, to display its markers
  const main = useSelector((state) => state.nav.main);

  return (
    <div className="map-main">
      {/* default position of the map */}
      <MapContainer
        key={latUser}
        center={center}
        // center={[45.8692, 6.129]}
        zoom={10}
        scrollWheelZoom // true by default, can use ={false}
      >
        <ChangeView center={center} />
        {/* Displays on the map the data source and the url */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* displays a list of layers to show the markers */}
        <LayersControl position="topright">

          {/* LayersControl.Overlay create a checkbox in the layer list of the LayersControl component */}
          <LayersControl.Overlay
            // Position of the current user
            checked
            name="Me"
          >
            <Marker
              position={center}
              icon={icon9}
            >
              {/* when clicking on the marker */}
              <Popup>
                Ma position
              </Popup>
            </Marker>
          </LayersControl.Overlay>

          {/* *********************
            Itinerary section
          ********************* */}
          <LayersControl.Overlay
          // I get the name of the page to show or hide the markers
            checked={main === 'itinerary'}
            name="Itineraries"
          >
            {/* <FeatureGroup> is used to group multiple components into a single layer. */}
            <FeatureGroup>
              {/* I map on itineraries to display all markers */}
              {itineraries.map((itinerary) => (
                <Marker
                // Exemple from the documentation <Marker position={[51.505, -0.09]}>
                  position={[itinerary.location.latitude, itinerary.location.longitude]}
                  // I use a ternary condition. if the condition is true it will display icon3, if it's wrong icon1
                  icon={(itinerary.name === markerSelected) ? icon3 : icon1}
                  key={itinerary.id}
                >
                  <Popup>
                    {/* On clicking, we arrive on the specific page */}
                    <Link to={`/itinerary/${itinerary.id}`}>
                      {itinerary.name}
                    </Link>
                  </Popup>
                </Marker>
              ))}
            </FeatureGroup>
          </LayersControl.Overlay>

          {/* *********************
            Meeting section
          ********************* */}
          <LayersControl.Overlay
            checked={main === 'meeting'}
            name="Users"
          >
            <FeatureGroup>
              {users.map((user) => (
                <Marker
                  position={[user.location.latitude, user.location.longitude]}
                  icon={(user.id === markerSelected) ? icon4 : icon2}
                  key={user.id}
                >
                  <Popup>
                    <Link to={`/user/${user.id}`}>
                      {user.nickname}
                    </Link>
                  </Popup>
                </Marker>
              ))}
            </FeatureGroup>
          </LayersControl.Overlay>

          {/* *********************
            Event section
          ********************* */}
          <LayersControl.Overlay
            checked={main === 'event'}
            name="Events"
          >
            <FeatureGroup>
              {events.map((event) => (
                <Marker
                  position={[event.itinerary.location.latitude, event.itinerary.location.longitude]}
                  icon={(event.description === markerSelected) ? icon6 : icon7}
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

          {/* *********************
            Professional section
          ********************* */}
          <LayersControl.Overlay
            checked={main === 'professional'}
            name="Professionals"
          >
            <FeatureGroup>
              {professionals.map((professional) => (
                <Marker
                  position={[professional.location.latitude, professional.location.longitude]}
                  icon={(professional.name === markerSelected) ? icon8 : icon5}
                  key={professional.id}
                >
                  <Popup>
                    <Link to={`/professional/${professional.id}`}>
                      {professional.name} <br /> {professional.category.name}
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
