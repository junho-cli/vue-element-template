/**
 * 全局配置 包括配置菜单  面包屑以及tab页
 */
export default {
  namespaced: true,
  state: {
    showNav: false, // 仅当小屏幕才有效显示/隐藏导航
    isMinScreen: false, // 是否是小屏幕
    tabInstance: null, // tab元素实例
    menuFold: false, // 菜单折叠
    breadcrumbData: [], // 面包屑数据
    tabData: [
      { 
        id: '1',
        name: '首页',
        icon: 'el-icon-location',
        path: '/home'
      }
    ]
  },
  mutations: {
    setMenuFold(state, payload) {
      state.menuFold = payload;
    },
    setMinScreen(state, payload) {
      state.isMinScreen = payload;
    },
    setTabData(state, payload) {
      state.tabData = payload;
    },
    setShowNav(state, payload) {
      state.showNav = payload;
    },
    addTabData(state, payload) {
      state.tabData.push(payload)
    },
    // 设置面包屑数据
    setBreadcrumbData(state, payload) {
      state.breadcrumbData = payload || [];
    },
    setTabInstance(state, payload) {
      state.tabInstance = payload;
    }
  },
  strict: true
};
