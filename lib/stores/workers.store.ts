import {defineStore} from 'pinia'

export const workersStore = defineStore({
    id: 'workers',
    state: () => ({
        workers: [] as any[],
        stations: [] as any[],
    }),

    actions: {
        // since we rely on `this`, we cannot use an arrow function
        construct() {
            this.workers = [
                {
                    workers_ci: '00021360114',
                    workers_name: 'Amanda Hdez Carreras',
                    workers_location: [23.07165237673358, -82.3913076896006]
                },
                {
                    workers_ci: '82123100107',
                    workers_name: 'Carlos Nunez Lopez',
                    workers_location: [23.062558624022326, -82.4014113480613]
                },
                {
                    workers_ci: '00060612345',
                    workers_name: 'Karla Maceo Leon',
                    workers_location: [23.090141112200655, -82.37966651728225]
                },
                {
                    workers_ci: '00070598312',
                    workers_name: 'Thalia Blanco Martin',
                    workers_location: [23.10155638323919, -82.41085607166096]
                },
                {
                    workers_ci: '96090590123',
                    workers_name: 'Lazaro Cesar del Pino Olivera',
                    workers_location: [23.100647237952273, -82.41898292704623]
                },
                {
                    workers_ci: '04022101502',
                    workers_name: 'Clari Moles Fernandez',
                    workers_location: [23.113778739579207, -82.4332598357407]
                },
                {
                    workers_ci: '03031403561',
                    workers_name: 'Omar David Dominguez',
                    workers_location: [23.14469117411548, -82.38331085593943]
                },
                {
                    workers_ci: '04090373032',
                    workers_name: 'Solange Rodriguez Hdez',
                    workers_location: [23.136480816700615, -82.37650431404978]
                },
                {
                    workers_ci: '03012309234',
                    workers_name: 'Ruben Frias',
                    workers_location: [23.133029936789207, -82.38667530624139]
                },
                {
                    workers_ci: '81022534109',
                    workers_name: 'Yunier de la Concepcion',
                    workers_location: [23.11644759674054, -82.39361561763344]
                }
            ]
            this.stations = [
                {
                    station: [23.116569159766176, -82.39832739359557],
                    route: 'Ruta 1',
                    driver: 'Rodolfo',
                },{
                    station: [23.142508085421333, -82.35931737456848],
                    route: 'Ruta 2',
                    driver: 'Alfredo'
                },{
                    station: [23.107660626766563, -82.44245441755491],
                    route: 'Ruta 3',
                    driver: 'Antonio'
                },{
                    station: [23.144767280735838, -82.38803849231813],
                    route: 'Ruta 4',
                    driver: 'Rolando'
                },{
                    station: [23.135049568706943, -82.38957269298544],
                    route: 'Ruta 5',
                    driver: 'Rodolfo'
                },{
                    station: [23.130353252847996, -82.39570958671514],
                    route: 'Ruta 6',
                    driver: 'Manuel'
                },{
                    station: [23.12656450827386, -82.4075542216312],
                    route: 'Ruta 7',
                    driver: 'Rodolfo'
                },{
                    station: [23.114487171263985, -82.4178109881787],
                    route: 'Ruta 8',
                    driver: 'Ariel'
                },{
                    station: [23.10773759782615, -82.4073396444032],
                    route: 'Ruta 9',
                    driver: 'Carlos'
                },{
                    station: [23.10647448204082, -82.39540917890969],
                    route: 'Ruta 10',
                    driver: 'Lazaro'
                },{
                    station: [23.095588374020707, -82.38166824033635],
                    route: 'Ruta 11',
                    driver: 'Jorge'
                },{
                    station: [23.087953302944054, -82.38383348170898],
                    route: 'Ruta 12',
                    driver: 'Daniel'
                },{
                    station: [23.07127538182053, -82.39862354056879],
                    route: 'Ruta 13',
                    driver: 'Mayito'
                },{
                    station: [23.064395292892577, -82.39232566289994],
                    route: 'Ruta 14',
                    driver: 'Rodolfo'
                },{
                    station: [23.06818579093314, -82.39455726096344],
                    route: 'Ruta 15',
                    driver: 'Juan'
                },{
                    station: [23.0923820412869, -82.42193086066311],
                    route: 'Ruta 16',
                    driver: 'Eduardo'
                },{
                    station: [23.12660911454747, -82.38365676401993],
                    route: 'Ruta 17',
                    driver: 'Cristian'
                },{
                    station: [23.12214931092754, -82.40644481024849],
                    route: 'Ruta 18',
                    driver: 'Lino'
                },{
                    station: [23.073476516005616, -82.38975074244009],
                    route: 'Ruta 19',
                    driver: 'Lester'
                },{
                    station: [23.062144634083797, -82.39760425016492],
                    route: 'Ruta 20',
                    driver: 'Julio'
                },
            ]
        },
    },
})
