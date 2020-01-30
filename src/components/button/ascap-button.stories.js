import ascapButton from "./ascap-button.vue";

export default {
  title: "Button"
}


export const Default = () => ({
  components: { ascapButton },
  template: `
    <div>
      <ascap-button>click me</ascap-button>
    </div>
  `
})

export const Active = () => ({
  components: { ascapButton }, 
  props: {
    active: { 
      default: true
    }
  },
  template: `
    <div>
      <ascap-button :active="active">active button</ascap-button>
    </div>
  `
})

export const Primary = () => ({
  components: { ascapButton },
  props: {
    buttonType: {
      default: "primary"
    }
  },
  template: `
    <div><ascap-button :buttonType="buttonType">primary button</ascap-button></div>
  `
})

export const Alert = () => ({
  components: { ascapButton },
  props: {
    buttonType: {
      default: "alert--b"
    }
  },
  template: `
    <div><ascap-button :buttonType="buttonType"></ascap-button></div>
  `
})