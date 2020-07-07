<template>
  <div class="tab-list-wrap">
    <jc-tab-list
      ref="tabList"
      :tabProp="tabProp"
      :tabData.sync="tabData"
      @click-tab="clickTab"
      @trigger-event="handleTriggerEvnet" />
  </div>
</template>

<script>
export default {
  name: 'AppTabList',

  data() {
    return {
      tabProp: {
        id: 'id',
        label: 'name'
      }
    }
  },

  mounted() {
    this.$store.commit('config/setTabInstance', this.$refs['tabList'])
  },

  computed: {
    tabData() {
      return this.$store.state.config.tabData;
    }
  },

  methods: {
    clickTab(tab, index) {
      console.log(tab, index)
    },
    handleTriggerEvnet(eventName, tabData) {
      this.$store.commit('config/setTabData', tabData)
    }
  }
}
</script>