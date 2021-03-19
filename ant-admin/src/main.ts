import { createApp } from 'vue'
import ant from "./utils/ant"
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).
  use(store).
  use(router).
  use(ant).
  mount('#app')
