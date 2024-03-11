import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import './mapper-styles.css';

import { MAP_CENTER_LAT_LONG, DEFAULT_ZOOM, MOCK_LOCATIONS } from './constants';

function Mapper() {
  return (
    <div>
      <h2>Mapper</h2>

      {MOCK_LOCATIONS && (
        <MapContainer
          center={MAP_CENTER_LAT_LONG}
          zoom={DEFAULT_ZOOM}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {MOCK_LOCATIONS.map((location) => {
            return (
              <Marker key={location.id} position={location.position}>
                <Popup>
                  <h4 className="marker-title">{location.name}</h4>
                  <button className="marker-button">DETAILS</button>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      )}
    </div>
  );
}

export default Mapper;
