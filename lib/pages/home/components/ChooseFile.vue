<script lang="ts" setup>
  import { ref } from 'vue'
  import { workersStore } from './../../../stores/workers.store.ts'
  import { stringify } from 'querystring'

  const workers = workersStore()

  const file = ref()
  const content = ref()
  const header = ref()
  const firstLocation = ref()
  const doc = ref()
  const studentsCounts = ref()
  const stopsCounts = ref()
  const vehiclesCounts = ref()

  const readFile = () => {
    file.value = doc.value.files[0]
    const reader = new FileReader()
    if (file.value.name.includes('.xpress') || file.value.name.includes('.txt')) {
      reader.onload = (res) => {
        /*Cojo el encabezado*/
        header.value = res.target!.result!.split('\r\n')[0].split(' ')

        /*Cojo el punto desde donde salen todas las guaguas*/
        firstLocation.value = res.target!.result!.split('\r\n')[1].split(' ')
        /*Construyo el arraeglo saltandome las 2 primeras posiciones*/
        content.value = res
          .target!.result!.split('\r\n')
          .filter((e, index) => index > 1 && e != '')
          .map((e) => e.replace(' ', ','))

        /*Cojo la cantidad de elementos de cada arreglo*/
        stopsCounts.value = header.value[0]
        studentsCounts.value = header.value[1]
        vehiclesCounts.value = header.value[2]
        /*Guardo los valores del header en el store*/
        workers.vehicles = header.value[2]
        workers.bus_capacity = header.value[3]
        workers.max_walk_distance = header.value[4]
        workers.firsLocation = firstLocation.value
        workers.stations = content.value.slice(0, stopsCounts.value).map((e) => {
          const array_coordinate = e.split(',')
          return { lng: parseFloat(array_coordinate[0]), lat: parseFloat(array_coordinate[1]) }
        })
        workers.students = content.value.slice(-studentsCounts.value).map((e) => {
          const array_coordinate = e.split(',')
          return { lng: parseFloat(array_coordinate[0]), lat: parseFloat(array_coordinate[1]) }
        })
      }
      reader.onerror = (err) => console.log(err)
      reader.readAsText(file.value)
    } else {
      content.value = 'check the console for file output'
      reader.onload = (res) => {
        console.log(res.target!.result)
      }
      reader.onerror = (err) => console.log(err)
      reader.readAsText(file.value)
    }
  }
</script>

<template>
  <div style="border-style: solid">
    <input ref="doc" type="file" @change="readFile()" />
  </div>
</template>

<style scoped></style>
