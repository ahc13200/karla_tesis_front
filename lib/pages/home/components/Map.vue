<script lang="ts" setup>
  import 'leaflet/dist/leaflet.css'
  import { LIcon, LMap, LMarker, LPopup, LTileLayer } from '@vue-leaflet/vue-leaflet'
  import { ref } from 'vue'
  import { workersStore } from './../../../stores/workers.store.ts'
  import ChooseFile from './ChooseFile.vue'

  const workers = workersStore()
  const zoom = ref(1.4)
</script>

<template>
  <div style="height: 600px" class="w-full">
    <p class="text-white">Capacidad de omnibus: {{ workers.bus_capacity }}</p>
    <p class="text-white">Cantidad de estudiantes: {{ workers.students.length }}</p>
    <p class="text-white">Cantidad de paradas: {{ workers.stations.length }}</p>
    <p class="text-white">Cantidad de omnibus: {{ workers.vehicles }}</p>
    <p class="text-white">Maximos Km acaminar: {{ workers.max_walk_distance }}</p>
    <div class="bg-white">
      <ChooseFile />
    </div>
    <l-map
      ref="map"
      v-model:zoom="zoom"
      :use-global-leaflet="false"
      :center="[23.13302, -82.38304]"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      />
      <l-marker v-for="(item, index) in workers.students" :key="index" :lat-lng="item">
        <l-icon :icon-size="[50, 50]" :icon-anchor="[3, 3]" icon-url="/worker.png" />
        <l-popup>
          <div class="text-lg text-center">
            <p class="text-center text-xl text-dark font-bold mb-0"> Estudiante{{ index + 1 }}</p>
          </div>
        </l-popup>
      </l-marker>

      <l-marker v-for="(item, index) in workers.stations" :key="index" :lat-lng="item">
        <l-icon :icon-size="[35, 35]" :icon-anchor="[3, 3]" icon-url="/bus.png" />
        <l-popup>
          <div class="text-lg text-center">
            <p class="text-center text-xl text-dark font-bold mb-0">Parada No.{{ index + 1 }}</p>
          </div>
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<style scoped></style>
