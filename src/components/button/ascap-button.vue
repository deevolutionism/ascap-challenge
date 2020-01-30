<template>
  <div class="d-inline-b">
    <button @click="$emit('handleClick')" :class="classObject"><slot></slot></button>
  </div>
</template>

<script>
export default {
  name: "ascap-button",
  props: {
    active: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    highlight: {
      type: Boolean,
      required: false,
      default: false
    },
    buttonType: {
      type: String,
      required: false,
      default: "normal"
    }
  },
  computed: {
    classObject: function() {
      return {
        "active": this.active,
        "disabled": this.disabled,
        "highlight": this.highlight,
        [this.buttonType]: true
      }
    }
  }
}
</script>