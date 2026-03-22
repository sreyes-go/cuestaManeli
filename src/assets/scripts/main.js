/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

document.addEventListener('DOMContentLoaded', () => {
  const mapElement = document.getElementById('map');

  if (!mapElement) {
    return;
  }

  const cuestaManeliCoords = [37.069717, -6.688036];
  const map = L.map('map', {
    scrollWheelZoom: false,
    zoomControl: true,
    tap: true
  }).setView(cuestaManeliCoords, 10);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
  }).addTo(map);

  const customIcon = L.divIcon({
    className: 'location__marker',
    html: '<i class="fa-solid fa-location-dot" aria-hidden="true"></i>',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });

  L.marker(cuestaManeliCoords, { icon: customIcon })
    .addTo(map)
    .bindPopup('Playa de Cuesta Maneli');

  map.dragging.enable();
  map.touchZoom.enable();
  map.doubleClickZoom.enable();
  map.boxZoom.enable();
  map.keyboard.enable();

  window.addEventListener('resize', () => {
    map.invalidateSize();
  });
});