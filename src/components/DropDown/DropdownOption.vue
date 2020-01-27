<template>
  <div>
    <a @click="select"><span>{{ this.value }}</span></a>
  </div>
</template>

<script>
export default {
  name: 'dropdown-option',
  props: {
    value: {
      type: String,
      required: true,
      default: 'drop down option'
    },
    id: {
      type: Number,
      required: true,
      default: 1
    }
  },
  methods: {
    select() {
      this.$emit('select', { value: this.value, id: this.id });
    }
  }
}
</script>