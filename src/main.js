import Vue from 'vue'
import App from './App.vue'
import router from '@/router';
import store from '@/store';
import Element from 'element-ui';
import VueProgressBar from 'vue-progressbar';

import {
  navMenu,
  tabList
} from 'junho-vue-ui';

import './styles/index.scss'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.config.devtools = process.env.NODE_ENV === 'development';

Vue.use(tabList);
Vue.use(navMenu);
Vue.use(Element);

Vue.use(VueProgressBar, {
  color: '#1890FF',
  failedColor: '#874b4b',
  thickness: '3px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
});

export default new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
