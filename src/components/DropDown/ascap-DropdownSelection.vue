<template>
  <div :class="selectorClassObject" ref="comproot">
    <label :class="labelClassObject">{{ description }}</label>
    <button class="d-flex flex-row justify-between align-center w-100" @click="toggleDropdown">
      <p class="p-16 bold-600 myx-0-0">{{ dropdownValue }}</p>
      <chevron class="d-inline-b" :orientation="computeChevronOrientation"/>
    </button>
    <div>
      <ul class="no-list-style-type max-h-300 overflow-y-scr" v-show="showDropdown">
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
  name: 'ascap-dropdown-selection',
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
    },
    reset: {
      required: false,
      default: false
    }
  },
  data() {
    return {
      showDropdown: false,
      selection: null
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
      this.selection = option;
      this.$emit('selectedOption', { ...option });
      this.toggleDropdown('close');
    },
    handleWasComponentClicked(e) {
      /**
       * close the dropdown if a click was detected outside of the
       * element.
       * There's more than one way to do this.
       * I'm only aware of a couple ways to solve this, 
       * but would like to know alternative solutions.
       * What I did was attach a global click event listener on component mount
       * When the user clicks, it runs a simple calculation to 
       * determine if the click coordinates fall inside the target elements box.
       * The downside to this is that its polluting and maybe not so efficient b/c
       * this function gets called on every-single-click.
       * My hunch is there's a better solution.
       */
      if(this.$refs.comproot === undefined) {
        return
      }
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
    },
    labelClassObject() {
      return {
        "fs-18": true,
        "bold-600": true,
        "pos-abs": true,
        "selector-label": true,
        "active": this.selection !== null ? true : false
      }
    },
    selectorClassObject() {
      return {
        "d-inline-b": true,
        "pos-rel": true,
        "border-trbl": !this.showDropdown,
        "border-active": this.showDropdown
      }
    }
  }
}
</script>

<style lang="scss">
  @import "../../index.scss";
  .selector-label {
    top: 13px;
    left: 20px;
    visibility: hidden;
    transition: all 300ms ease;
  }
  .selector-label.active {
      visibility: visible;
      top: -8px;
      font-size: 14px;
      color: $ascap-steel;
      background-color: white;
      padding: 0 2px;
      margin-left: -2px;
  }
</style>

