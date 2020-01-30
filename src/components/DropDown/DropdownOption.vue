<template>
  <div>
    <a class="d-block pyx-12-10 hov-silver" @click="select"><span class="fs-18">{{ this.value }}</span></a>
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