'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/marker-icon-2x.png',
  iconUrl:       '/marker-icon.png',
  shadowUrl:     '/marker-shadow.png',
});

export default function MapView() {
  const center = [37.78, -122.41];

  return (
    <div className="h-80 w-full rounded-xl overflow-hidden shadow my-8">
      <MapContainer center={center} zoom={13} scrollWheelZoom={false} className="h-full">
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center}>
          <Popup>Rentopia HQ — your starting point!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
