<script>
export default {
  name: 'tabs',
  render: function(h) {
    return (
      <div>
        {this.$slots.default}
      </div>
    )
  }
}
</script>