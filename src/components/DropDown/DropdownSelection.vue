<template>
  <div class="drop-down-selection d-inline-b" ref="comproot">
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
import { componentClicked } from "../mixins/mixins.js";
export default {
  name: 'drop-down-selection',
  mixins: [componentClicked],
  components: {
    DropdownOption,
    Chevron
  },
  props: {
    options: {
      type: Array,
      required: true,
      default: () => {[]}
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
  mounted() {
    document.addEventListener('click', e => {
      this.handleWasComponentClicked(e)
    })
  },
  methods: {
    toggleDropdown(state) {
      switch(state) {
        case 'open':
          this.showDropdown = true;
          break;
        case 'close':
          this.showDropdown = false;
          break;
        default:
          this.showDropdown = !this.showDropdown;
      }
    },
    handleSelect(option) {
      this.selection = option
      this.toggleDropdown()
    },
    handleWasComponentClicked(e) {
      /*
        close the dropdown if the user clicked outside of the element
      */
      let userClickedComponent = this.checkIfComponentClicked(
            this.$refs.comproot.offsetLeft,
            this.$refs.comproot.offsetTop,
            this.$refs.comproot.offsetWidth,
            this.$refs.comproot.offsetHeight,
            e.clientX,
            e.clientY
          )
      if(userClickedComponent === false) {
        this.toggleDropdown('close');
      }
    }
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

