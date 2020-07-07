/**
 * 用户信息
 */
export default {
  namespaced: true,
  state: {
    userInfo: null // 用户信息
  },
  mutations: {
    updateUserInfo(state, payload) {
      state.userInfo = payload;
    },
    clearUserInfo(state, payload) {
      state.userInfo = null;
    }
  },
  strict: true
};
