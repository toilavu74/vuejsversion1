import './assets/backend/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'uikit/dist/css/uikit.min.css';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);
const app = createApp(App)

app.use(router)

app.mount('#app')
