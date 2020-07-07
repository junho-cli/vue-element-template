<template>
  <div class="app-container">
    <div class="on-mask" @click="clickHiddenNav" v-if="isMinScreen && showNav"></div>
    <verticle-menu />
    <div
      ref="appContent"
      :style="isMinScreen ? `marginLeft: 0px;width: 100%` : ``"
      :class="['app-content-box', {'is-collapse': menuFold}]"
      >
      <headerBar />
      <tab-list />
      <!--  内容占位符  -->
      <div
        class="app-content-box__inner">
        <vue-progress-bar></vue-progress-bar>
        <router-view
          :style="`padding:20px;min-height:${maxHeight}px`"/>
        <app-footer />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import tabList from './tabList.vue';
import headerBar from './headerBar.vue';
import verticleMenu from './verticleMenu.vue';
import appFooter from './footer.vue';
export default {
  name: 'app',

  components: {
    tabList,
    headerBar,
    verticleMenu,
    appFooter
  },
  
  data() {
    return {
      maxHeight: 500
    }
  },
  
  computed: {
    ...mapState({
      menuFold: state => state.config.menuFold,
      isMinScreen: state => state.config.isMinScreen,
      showNav: state => state.config.showNav
    })
  },
  
  created() {
    this.initRouteProgress();
  },

  mounted() {
    this.getMaxHeight()
  },

  methods: {
    // 路由进度条
    initRouteProgress() {
      this.$Progress.start()
      this.$router.beforeEach((to, from, next) => {
        this.$Progress.start()
        next()
      })
      this.$router.afterEach((to, from) => {
        this.$Progress.finish()
      })
    },
    clickHiddenNav() {
     this.$store.commit('config/setShowNav', false) 
    },
    // 获取最大高度
    getMaxHeight() {
      this.$nextTick(() => {
        this.maxHeight = this.$refs['appContent'].offsetHeight - 210 // 减少已存在的元素占位
      })
    },
  }
}
</script>