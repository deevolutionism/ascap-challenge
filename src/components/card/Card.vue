<template>
  <div @click="handleClick" :class="['d-flex', 'flex-column', isSelected]">
    <div>
      <slot name="header"></slot>
    </div>
    <div>
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    name: {
      type: String,
      required: true,
      default: 'title'
    },
    selected: {
      type: String,
      required: false,
      default: null
    }
  },
  methods: {
    handleClick() {
      this.$emit('cardSelected', {name: this.name})
    }
  },
  computed: {
    isSelected() {
      return this.selected === this.name ? 'active' : null
    }
  }
}
</script>

<style scoped>
.active {
  box-shadow: 0 0 15px -1px rgba(0,0,0,.5);
  border: 1px solid #1178ce;
}
</style>