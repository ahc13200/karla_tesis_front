import { defineStore } from 'pinia'

export const workersStore = defineStore({
  id: 'workers',
  state: () => ({
    workers: [] as any[],
    stations: [] as any[],
    students: [] as any[],
    vehicles: Number,
    bus_capacity: Number,
    max_walk_distance: Number,
    firsLocation: [],
  }),

  actions: {
    // since we rely on `this`, we cannot use an arrow function
    construct() {
      this.workers = [
        {
          workers_ci: '00021360114',
          workers_name: 'Amanda Hdez Carreras',
          workers_location: [23.07165237673358, -82.3913076896006],
        },
        {
          workers_ci: '82123100107',
          workers_name: 'Carlos Nunez Lopez',
          workers_location: [23.062558624022326, -82.4014113480613],
        },
        {
          workers_ci: '00060612345',
          workers_name: 'Karla Maceo Leon',
          workers_location: [23.090141112200655, -82.37966651728225],
        },
        {
          workers_ci: '00070598312',
          workers_name: 'Thalia Blanco Martin',
          workers_location: [23.10155638323919, -82.41085607166096],
        },
        {
          workers_ci: '96090590123',
          workers_name: 'Lazaro Cesar del Pino Olivera',
          workers_location: [23.100647237952273, -82.41898292704623],
        },
        {
          workers_ci: '04022101502',
          workers_name: 'Clari Moles Fernandez',
          workers_location: [23.113778739579207, -82.4332598357407],
        },
        {
          workers_ci: '03031403561',
          workers_name: 'Omar David Dominguez',
          workers_location: [23.14469117411548, -82.38331085593943],
        },
        {
          workers_ci: '04090373032',
          workers_name: 'Solange Rodriguez Hdez',
          workers_location: [23.136480816700615, -82.37650431404978],
        },
        {
          workers_ci: '03012309234',
          workers_name: 'Ruben Frias',
          workers_location: [23.133029936789207, -82.38667530624139],
        },
        {
          workers_ci: '81022534109',
          workers_name: 'Yunier de la Concepcion',
          workers_location: [23.11644759674054, -82.39361561763344],
        },
      ]
      this.stations = []
      this.students = []
      this.vehicles = 0
      this.bus_capacity = 0
      this.max_walk_distance = 0
      this.firsLocation = []
    },
  },
})
