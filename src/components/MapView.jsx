// src/components/MapView.jsx
'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// point Leaflet’s default markers at the files in /public
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/marker-icon-2x.png',
  iconUrl:       '/marker-icon.png',
  shadowUrl:     '/marker-shadow.png',
});

export default function MapView() {
  // Center on Erasmus University
  const center = [51.9187, 4.4795];
  
  // Three extra random points in Rotterdam
  const extraMarkers = [
    { position: [51.9172, 4.4859], label: 'Witte de Withstraat' },
    { position: [51.9097, 4.4723], label: 'Euromast' },
    { position: [51.9194, 4.4821], label: 'Markthal' },
  ];

  return (
    <div className="h-80 w-full rounded-xl overflow-hidden shadow my-8">
      <MapContainer center={center} zoom={14} scrollWheelZoom={false} className="h-full">
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Main campus marker */}
        <Marker position={center}>
          <Popup>Erasmus University Rotterdam</Popup>
        </Marker>

        {/* Extra random markers */}
        {extraMarkers.map(({ position, label }) => (
          <Marker key={label} position={position}>
            <Popup>{label}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
