import OME from "./OME.vue"

export default {
  title: "OME Page"
}

export const Default = () => ({
  components: {OME},
  template: `
    <div>
      <o-m-e></o-m-e>
    </div>
  `
})