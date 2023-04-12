import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 新增引入
import router from "./router"

createApp(App).use(router).mount('#app')
