<script>
export default {
  name: "Tab",
  props: {
    tabIndex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    toggleTab(e, tabIndex) {
      this.$emit('selectedTab', { tabIndex })
    }
  },
  render: function(h) {
    let tabIndex = 1;
    console.log(this.$slots.default) 
    return (
      <div onClick={ e => this.toggleTab(e, tabIndex)}>
        {this.$slots.default}
      </div>
    )
  }
}
</script>