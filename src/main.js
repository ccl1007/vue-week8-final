import { createApp } from 'vue'
// 匯入bootstrap-icons
import 'bootstrap-icons/font/bootstrap-icons.css'
import App from './App.vue'
import router from './router'
// 匯入axios
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap'

const app = createApp(App)
app.use(router)
// 載入axios要放在router後面!!!
app.use(VueAxios, axios)
app.mount('#app')
