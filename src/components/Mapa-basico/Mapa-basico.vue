<template>

  <div style="height: 550px;">
    <div class="info" style="height: 10%">
      <span>Latitud, Longitud: {{ center }}</span>
      <br/>
      <span>Zoom: {{ zoom }}</span>
      <br/>
    </div>
    <l-map
      style="height: 90%; width: 100%"
      :zoom="zoom"
      :center="center"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
    >
    <!--
      l-map es el componente principal para los mapas
      todo lo que se quiera agregar ya sea una capa, un marcador, figuras y demas va adentro
      de l-map como el l-tile-layer
    -->
      <l-tile-layer :url="url"></l-tile-layer>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer } from 'vue2-leaflet'
export default {
  components: {
    LMap,
    LTileLayer
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 14,
      center: [-34.9187, -57.956]
    }
  },
  methods: {
    zoomUpdated (zoom) {
      this.zoom = zoom
    },
    centerUpdated (center) {
      // center devuelve un objeto con las claves latitud y longitud
      // con hacer this.center = center alcanza, yo solo agregue estas funciones matematicas
      // para que se vea mejor en la vista
      this.center = [Math.round(center.lat * 10000) / 10000, Math.round(center.lng * 10000) / 10000]
    }
  }
}
</script>
