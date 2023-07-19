<script lang="ts" setup>
    import 'leaflet/dist/leaflet.css'
    import {LMap, LTileLayer, LMarker, LPopup, LIcon} from '@vue-leaflet/vue-leaflet'
    import {ref, onMounted, onBeforeMount} from 'vue'
    import axios from '../../../axios/axios.ts'
    import {workersStore} from "./../../../stores/workers.store.ts";


    var readTextFile = require('read-text-file');
    let contentsPromise = readTextFile.read('D:/AMANDA TRABAJO/PROYECTOS/Proyecto TransO/coordenadas.txt');

    const workers = workersStore()

    const zoom = ref(14)

</script>

<template>
    <div class="bg-white">
        {{contentsPromise}}
    </div>
    <div style="height: 600px" class="w-full">
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
            <l-marker v-for="(item,index) in workers.workers" :key="index" :lat-lng="item.workers_location">
                <l-icon
                        :icon-size=[50,50]
                        :icon-anchor=[3,3]
                        icon-url="/worker.png"
                />
                <l-popup>
                    <div class="text-lg text-center">
                        <p class="text-center text-xl text-dark font-bold mb-0">{{ item.workers_name }}</p>
                        <p class="text-center text-xl text-dark font-bold mb-0">{{ item.workers_ci }}</p>
                    </div>
                </l-popup>
            </l-marker>

            <l-marker v-for="(item,index) in workers.stations" :key="index" :lat-lng="item.station">
                <l-icon
                        :icon-size=[35,35]
                        :icon-anchor=[3,3]
                        icon-url="/bus.png"
                />
                <l-popup>
                    <div class="text-lg text-center">
                        <p class="text-center text-xl text-dark font-bold mb-0">{{ item.route}}</p>
                        <p class="text-center text-xl text-dark font-bold mb-0">{{ item.driver}}</p>
                    </div>
                </l-popup>
            </l-marker>
        </l-map>
    </div>

</template>

<style scoped></style>
