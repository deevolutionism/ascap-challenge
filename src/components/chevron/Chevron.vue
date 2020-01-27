<template functional>
  <div :class="['transition']">
    <span :class="['chevron', props.orientation]" />
  </div>
</template>

<script>
export default {
  name: 'chevron',
  props: {
    orientation: {
      type: String,
      default: 'down'
    }
  }
}
</script>

<style scoped>
.chevron {
  background-image: url("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tZG93biBzYy1pd3NLYkkgY25sY29RJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGFyaWEtaGlkZGVuPSd0cnVlJyBkYXRhLXJlYWN0aWQ9JzI2Nic+PHBvbHlsaW5lIHBvaW50cz0nNiA5IDEyIDE1IDE4IDknPjwvcG9seWxpbmU+PC9zdmc+");
  background-size: cover;
  display: block;
  width: 32px;
  height: 32px;
  transition: transform .3s ease;
  
}
.transition {
  transition: transform .3s ease;
}
.up {
  transform: rotate3d(0, 0, 1, 180deg);
}
</style>