import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'
import demoBlock from './components/demo-block.vue';
import 'highlight.js/styles/a11y-light.css';

import coucou from '../package/index.js';

let app = createApp(App);
app.component('demo-block', demoBlock)
app.use(router).use(store).use(coucou).mount('#app')
