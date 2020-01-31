<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "gated-linear-accordian",
  props: {
    items: {
      type: Object,
      required: false,
      default: () => ({})
    },
  },
  data() {
    return {
      accordianIndex: 0,
    }
  },
  components: {
  },
  computed: {
  },
  methods: {
    handleSuccessEvent(data) {
      this.$emit('incrementAccordian', data);
    }
  }

}
</script>