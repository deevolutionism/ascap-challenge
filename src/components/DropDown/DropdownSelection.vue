<template>
  <div>
    <label>{{ label }}</label>
    <button @click="toggleDropdown"><span>{{ dropdownValue }}</span><chevron :orientation="computeChevronOrientation"/></button>
    <div>
      <ul v-show="showDropdown">
        <dropdown-option 
          v-for="(option, index) in options" 
          :key="index" 
          :value="option.value"
          :id="option.id"
          @select="handleSelect"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import DropdownOption from "./DropdownOption.vue";
import Chevron from "../chevron/Chevron.vue";
export default {
  name: 'drop-down-selection',
  props: {
    options: {
      type: Object,
      required: true,
      default: () => ({})
    },
    description: {
      type: String,
      required: true,
      default: "description"
    },
    label: {
      type: String,
      required: false,
      default: "label"
    }
  },
  data() {
    return {
      showDropdown: false,
      selection: null,
    }
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    handleSelect(option) {
      this.selection = option
      this.toggleDropdown()
    }
  },
  components: {
    DropdownOption,
    Chevron
  },
  computed: {
    dropdownValue() {
      return this.selection ? this.selection.value : this.description;
    },
    computeChevronOrientation() {
      return this.showDropdown ? 'up' : 'down'
    }
  }
}
</script>

