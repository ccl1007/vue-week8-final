/* eslint-disable vue/multi-word-component-names */
import { createApp } from 'vue'
// 匯入bootstrap-icons
import 'bootstrap-icons/font/bootstrap-icons.css'
import App from './App.vue'
import router from './router'
// 匯入axios
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap'
// 匯入 vee-validate
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
// 匯入規則
import AllRules from '@vee-validate/rules'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
// 匯入多國語系的功能
import { localize, setLocale } from '@vee-validate/i18n'

import AOS from 'aos'
// importing AOS css style globally
import 'aos/dist/aos.css'

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})
// 設定 vee-validate 全域規則
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})
// 設定預設語系
setLocale('zh_TW')

const app = createApp(App)
app.use(router)
// 載入axios要放在router後面!!!
app.use(VueAxios, axios)
app.use(VueSweetalert2)
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)
app.component('Loading', Loading)
app.mount('#app')

AOS.init()
