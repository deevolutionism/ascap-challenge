<template>
  <div @click="selectTab">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tab",
  props: {
    tabIndex: {
      type: Number,
      default: 0
    },
    data: {
      default: null
    }
  },
  methods: {
    selectTab() {
      console.log('select tab ', this.tabIndex)
      this.$emit('selectedTab', { 
        tabIndex: this.tabIndex, 
        data: this.data 
      });
    }
  },
}
</script>