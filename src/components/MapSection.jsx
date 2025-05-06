'use client';

import dynamic from 'next/dynamic';

// Lazy‐load MapView only on the client, skip SSR entirely.
const MapView = dynamic(() => import('./MapView'), { ssr: false });

export default function MapSection() {
  return <MapView />;
}
