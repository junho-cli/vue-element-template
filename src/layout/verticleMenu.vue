<template>
  <div
    :style="currentStyle"
    :class="['verticle-navMenu-wrap', {'is-collapse': menuFold}]">
    <div class="navMenu-link">
      <img alt="" src="@/assets/svg/theme.svg" class="navMenu-link-icon" />
      <span v-show="!menuFold">Smart Admin</span>
    </div>
    <jc-nav-menu
      :mode="mode"
      :collapse="menuFold"
      :navProp="navProp"
      :navData="navData"
      subBackgroundColor="#000C17"
      navBackgroundColor="#001529"
      fontColor="#fff"
      activeBackgroundColor="#2D8CF0"
      @click-menu="handleClcikMenu"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { routerData } from '@/router/routes'
import Utils from '@/utils';
export default {
  name: 'AppVerticleMenu',

  data() {
    return {
      navData: routerData,
      mode: 'vertical', // horizontal / vertical
      navProp: {
        label: 'name',
        icon: 'icon',
        path: 'path',
        children: 'children'
      }
    }
  },
  
  computed: {
    ...mapState({
      menuFold: state => state.config.menuFold,
      tabInstance: state => state.config.tabInstance,
      showNav: state => state.config.showNav,
      isMinScreen: state => state.config.isMinScreen
    }),
    currentStyle() {
      return this.isMinScreen ? {
        left: this.showNav ? '0px' : '-220px',
      } : null;
    }
  },

  created() {
    console.log(routerData)
  },

  mounted() {
    this.handleResize(true);
  },

  destroyed() {
    this.handleResize();
  },

  methods: {
    handleClcikMenu(router) {
      this.tabInstance && this.tabInstance.openTab(router)
    },
    // 处理页面尺寸变化
    handleResize(isRegister) {
      const handleEvnet = Utils.debounce((event) => {
        this.$store.commit('config/setMinScreen', event.target.innerWidth < 1400)
        if (this.isMinScreen) this.$store.commit('config/setMenuFold', false) // 如果隐藏导航，就将导航展开
      }, 1000);
      isRegister ? window.addEventListener('resize', handleEvnet, false) : window.removeEventListener('resize', handleEvnet, false)
    }
  }
}
</script>

<style>
.jc-menu-wrap {
  height: calc(100% - 67px);
  overflow: auto;
}
.jc-vervicle-menu {
  border-right: 1px solid #001529;
  background-color: #001529 !important;
}
</style>