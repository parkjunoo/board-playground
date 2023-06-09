import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementPlus from 'element-plus';

const app = createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus)
  .mount('#app');

import './assets/tailwind.css';
import 'element-plus/dist/index.css';
