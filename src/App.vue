<template>
  <div>
    <Content>
      <GatedLinearAccordian class="border-l ptrbl-0-0-0-50">

        <gated-linear-accordian-item :index="0" :activeItemIndex="activeAccordianIndex" class="pos-rel">
          <span :class="['pos-abs', 'left--72', 'mtrbl--8-0-0-0', 0 === activeAccordianIndex ? 'bg-ascap' : 'bg-inactive', 'white', 'wpx-28', 'hpx-28', 'fs-12', 'center', 'justify-center', 'd-flex', 'align-center', 'border-bubble']">
              {{ 1 }}
            </span>
          <div><h2 :class="['bold-800', 0 === activeAccordianIndex ? null : 'color-inactive']">Membership</h2></div>
          <template v-slot:content>
            <o-m-e-membership v-show="0 === activeAccordianIndex" @handleSelection="handleMembershipSelection" @formSuccess="incrementAccordianIndex"/>
          </template>
        </gated-linear-accordian-item>



        <gated-linear-accordian-item v-for="(item, index) in selectedMemebershipType" :key="item" :index="index" :activeItemIndex="activeAccordianIndex" class="myx-30-0 pos-rel">
          <span :class="['pos-abs', 'left--72', 'mtrbl--8-0-0-0', index+1 === activeAccordianIndex ? 'bg-ascap' : 'bg-inactive', 'white', 'wpx-28', 'hpx-28', 'fs-12', 'center', 'justify-center', 'd-flex', 'align-center', 'border-bubble']">{{index + 2}}</span>
          <div><h2 :class="['bold-800', index+1 === activeAccordianIndex ? null : 'color-inactive']">{{item}}</h2></div>
        </gated-linear-accordian-item>
      </GatedLinearAccordian>
    </Content>
  </div>
</template>

<script>
import OMEMembership from "./components/containers/OMEMembership.vue";
import GatedLinearAccordian from "./components/accordian/GatedLinearAccordian.vue";
import GatedLinearAccordianItem from "./components/accordian/GatedLinearAccordianItem.vue";
import Content from "./components/content/Content.vue";
export default {
  name: 'app',
  data() {
    return {
      activeAccordianIndex: 0,
      activeMembershipType: "Writer & Publisher",
      memberships: {
        "Writer & Publisher": [
          "Writer General",
          "Writer Royalties",
          "Writer Required Documents",
          "Writer Account Creation",
          "Publisher General",
          "Publisher Royalties",
          "Publisher Required Documents",
          "Publisher Account Creation",
          "Payment"
        ],
        "Writer": [
          "General",
          "Royalties",
          "Required Documents",
          "Account Creation",
          "Payment"
        ],
        "Publisher": [
          "General",
          "Royalties",
          "Required Documents",
          "Account Creation",
          "Payment"
        ],
      }
    }
  },
  components: {
    Content,
    OMEMembership,
    GatedLinearAccordian,
    GatedLinearAccordianItem,
  },
  methods: {
    handleFormSuccess() {
      this.activeAccordianIndex = this.activeAccordianIndex + 1;
    },
    handleMembershipSelection(data) {
      console.log(data)
      this.activeMembershipType = data.name
    },
    incrementAccordianIndex() {
      console.log('increment accordian index')
      this.activeAccordianIndex = this.activeAccordianIndex + 1;
    }
  },
  computed: {
    selectedMemebershipType() {
      console.log(this.activeMembershipType)
      return this.memberships[this.activeMembershipType]
    }
  }
}
</script>

<style lang="scss">
@import "./index.scss";

</style>
