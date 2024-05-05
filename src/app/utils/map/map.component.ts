import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit  {

  map: mapboxgl.Map | undefined;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat: number = 20.141344912198253;
  lng: number = -101.17617483338364;

  ngOnInit(): void {
    this.initializeMap();
  }

  initializeMap() {
    this.map = new mapboxgl.Map({
      accessToken: environment.mapbox.accessToken,
      container: 'map',
      style: this.style,
      zoom: 15,
      center: [this.lng, this.lat]
    });

    this.map.on('load', () => {
      // El mapa está completamente cargado, ahora puedes agregar el marcador
      const marker = new mapboxgl.Marker()
        .setLngLat([this.lng, this.lat])
        .addTo(this.map!); // Utiliza el operador de coacción para evitar errores de tipo
    });
  }
}
