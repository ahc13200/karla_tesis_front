import 'uno.css'
import 'virtual:unocss-devtools'
import '@regiondev/vue-components/lib/style.css'
import '@regiondev/vue-components/lib/antd.css'

import {workersStore} from "./stores/workers.store.ts";


import App from './App.vue'
import { router } from './router'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(router)
app.use(createPinia())

const workers = workersStore()
workers.construct()

app.mount('#app')
