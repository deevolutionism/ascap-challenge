<template>
  <div>
    <dropdown-selection :title="'hello world'"/>
  </div>
</template>

<script>

import DropdownSelection from "./components/DropDown/DropdownSelection";
export default {
  name: 'app',
  components: {
    DropdownSelection
  }
}
</script>

<style>

</style>
