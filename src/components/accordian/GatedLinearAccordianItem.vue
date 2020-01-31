<template>
  <div>
    <slot></slot>
    <slot name="content" v-show="showItem"></slot>
  </div>
</template>

<script>
export default {
  name: 'gated-linear-accordian-item',
  props: {
    index: {
      type: Number,
      required: true,
      default: 0
    },
    activeItemIndex: {
      type: Number,
      required: true,
      default: 0
    }
  },
  computed: {
    showItem() {
      console.log('show template ? ', this.activeItemIndex, this.index)
      return this.activeItemIndex === this.index ? true : false;
    }
  }
}
</script>

