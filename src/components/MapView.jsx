// components/MapView.jsx
'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { items } from '@/data/items';

const defaultIcon = new Icon({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

export default function MapView() {
  // compute map center as the average of all item coordinates
  const avgLat = items.reduce((sum, i) => sum + i.lat, 0) / items.length;
  const avgLng = items.reduce((sum, i) => sum + i.lng, 0) / items.length;
  const center = [avgLat, avgLng];

  return (
    <MapContainer
      center={center}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {items.map(item => (
        <Marker
          key={item.id}
          position={[item.lat, item.lng]}
          icon={defaultIcon}
        >
          <Popup>
            <strong>{item.title}</strong>
            <br />
            {item.distance} • ${item.price}/day
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
