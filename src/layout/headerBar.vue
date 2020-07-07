<template>
  <div class="header-bar-wrap">
    <div class="header-left">
      <el-button
        v-if="!isMinScreen"
        type="text"
        class="jc-icon"
        @click="toggleFold"
        :icon="menuFold ? `el-icon-s-fold`: `el-icon-s-unfold`"
      />
      <el-button
        v-else
        type="text"
        class="jc-icon"
        @click="handleCLickShowNav"
        icon="el-icon-s-management"
      />
     <el-breadcrumb separator-class="el-icon-arrow-right" class="m-l-20">
      <el-breadcrumb-item>
        <em class="el-icon-s-platform p-r-5"></em>首页
      </el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    </div>
    
    <div class="header-right">
      <el-dropdown @command="handleCommand">
        <span class="header-right-userInfo__wrapper">
          <img class="avator" alt="用户头像" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1210640503,3994190038&fm=26&gp=0.jpg" /> 
          <span class="username">junho</span>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-circle-plus" command="existSystem">个人中心</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus" command="existSystem">退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'AppHeaderBar',

  computed: {
    ...mapState({
      menuFold: state => state.config.menuFold,
      showNav: state => state.config.showNav,
      isMinScreen: state => state.config.isMinScreen
    })
  },

  methods: {
    toggleFold() {
      this.$store.commit('config/setMenuFold', !this.menuFold)
    },
    handleCommand() {
      console.log(1312)
    },
    handleCLickShowNav() {
      this.$store.commit('config/setShowNav', true)
    }
  }
}
</script>
