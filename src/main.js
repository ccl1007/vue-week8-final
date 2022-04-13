/* eslint-disable vue/multi-word-component-names */
import Vue, { createApp } from 'vue'
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
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)
app.mount('#app')

Vue.prototype.$scrollToTop = () => window.scrollTo(0, 0)
