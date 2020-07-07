import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const modules = {};
const files = require.context('./modules', false, /\.js$/);

files.keys().forEach(key => {
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default;
});

export default new Vuex.Store({
  modules,

  state: {
  },

  mutations: {
    // 重置vuex本地储存状态
    resetStore(state, payload) {
      Object.keys(state).forEach((key) => {
        state[key] = payload[key];
      });
    },
  },
  
  actions: {
    /**
     * @param 获取存储在session中的信息,并判断session中是否有存入信息
     */
    getSessionStorage({commit}, payload) {
      if (window.sessionStorage.getItem('store')) {
        commit('resetStore',
          Object.assign(
            {},
            JSON.parse(window.sessionStorage.getItem('store'))
          )
        );
        window.sessionStorage.removeItem('store');
      }
    }
  }
});
