<template>
  <div @click="handleClick" :class="['d-flex', 'flex-column','border-normal', 'pointer', isSelected, cardStyle]">
    <div :class="headerClassObject">
      <slot name="header"></slot>
    </div>
    <div class="p-24">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ascap-card',
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
    },
    cardStyle: {
      type: String,
      required: false,
      default: null
    },
    data: {
      required: false,
      default: null
    },
    classObjectFunc: {
      type: Function,
      required: false,
      default: () => ({})
    }
  },
  methods: {
    handleClick() {
      this.$emit('cardSelected', {name: this.name, data: this.data })
    }
  },
  computed: {
    isSelected() {
      switch(this.selected) {
        case null:
          return null
        case this.name:
          return 'active'
        default:
          return 'blurred'
      }
      //return this.selected === this.name ? 'active' : null
    },
    headerClassObject() {
      return this.classObjectFunc(this.$props)
    }
  }
}
</script>

<style scoped lang="scss">
.active {
  box-shadow: 0 0 15px -1px rgba(0,0,0,.5);
  border: 1px solid #1178ce;
}
.blurred {
  filter: grayscale(100%);
  opacity: 0.5;
  &:hover {
    filter: grayscale(0%);
    opacity: 1;
  }
}
</style>