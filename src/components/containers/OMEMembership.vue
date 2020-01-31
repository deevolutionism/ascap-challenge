<template>
  <div>
    <div>
      <p>Select your membership type below:</p>
    </div>
    <div>
      <div class="d-flex flex-row myx-0--15">
        <Tab 
          v-for="(data, index) in cardContent" 
          :key="data.header" 
          :tabIndex="index" 
          @selectedTab="handleSelectedTab" 
          :data="data.header"
          class="pyx-0-15 mb-16 flx-basis-33"
        >
          <ascap-card 
            :cardStyle="cardStyle" 
            @cardSelected="handleSelectedCard" 
            :selected="selectedCard" 
            :name="data.header"
            :classObjectFunc="handleClassObjFunc"
          >
            <template v-slot:header>
              <div class="p-24 center bg-transparent">
                <h3 class="myx-0-0">{{data.header}}</h3>
              </div>
            </template>
            <template v-slot:body>
              <p>{{data.body.description}}</p>
              <p>
                <span class="fs-16 bold-600 color-prime mxy-0-0">{{data.body.fee}}</span>
                <br>
                <span class="fs-14 mxy-0-0">{{data.body.feeCondition}}</span>
              </p>
              <h5 class="capital myx-16-0">{{data.body.list.title}}</h5>
              <ul class="no-list-style-type">
                <li v-for="item in data.body.list.items" :key="item" class="checkmark">
                  {{item}}
                </li>
              </ul>
            </template>
          </ascap-card>
        </Tab>
      </div>

      <p class="alert" v-show="allowContinue === false && selectedCard === null">Please select your membership type.</p>
      
      <p class="fs-14">* if you are under 18 years of age please <a href="">read more about how to join ASCAP</a></p>

      <div v-show="activeTab === 0" class="myx-40-0">
        <h2 class="bold-600">Publisher Company Type</h2>
        <p>Please select the federal tax classification of your publisher company.</p>
        <ascap-dropdown-selection
          :description="dropdownOptions.description" 
          :options="dropdownOptions.options"
          @selectedOption="handleDropdownSelection"
          :dropdownStyle="dropdownStyle"
          class="w-66"
          :reset="activeTab"
        />

        <p class="alert" v-show="allowContinue === false && dropdownSelection === null">Please select your publisher company type.</p>
      </div>

      <div v-show="activeTab === cardContent[0].header || activeTab === cardContent[2].header" class="myx-40-0">
        <h2 class="bold-600">Publisher Company Type</h2>
        <p>Please select the federal tax classification of your publisher company.</p>
        <!-- key set to a unique string (the active tab name) to trigger component reload / state refresh -->
        <ascap-dropdown-selection
          :key="activeTab"
          :description="dropdownOptions.description" 
          :options="dropdownOptions.options"
          @selectedOption="handleDropdownSelection"
          :dropdownStyle="dropdownStyle"
          class="w-66"
          :reset="activeTab"
        />

        <p class="alert" v-show="allowContinue === false && dropdownSelection === null">Please select your publisher company type.</p>
      </div>

      <!-- <div v-show="activeTab === 2" class="myx-40-0">
        <h2 class="bold-600">Publisher Company Type</h2>
        <p>Please select the federal tax classification of your publisher company.</p>
        <ascap-dropdown-selection
          :description="dropdownOptions.description" 
          :options="dropdownOptions.options"
          @selectedOption="handleDropdownSelection"
          :dropdownStyle="dropdownStyle"
          class="w-66"
        />

        <p class="alert" v-show="allowContinue === false && dropdownSelection === null">Please select your publisher company type.</p>
      </div> -->

      <p class="fs-14">ASCAP uses TINCheck and SmartyStreets to verify certain information provided by you in connection with your application. Any information processed by TINCheck and SmartyStreets shall be subject to the privacy policies of <a href="">TINCheck</a> and <a href="">SmartyStreets</a>.</p>
      
      <ascap-button :buttonType="'btn-white'" class="mtrbl-0-10-0-0"><p class="fs-16 bold-600 myx-0-0">cancel</p></ascap-button>
      <ascap-button 
        :buttonType="'primary'" 
        @handleClick="handleContinue"
      >
        <span class="fs-16 bold-600"><p class="fs-16 bold-600 myx-0-0">continue</p></span>
      </ascap-button>
    </div>
  </div>
</template>

<script>
import ascapButton from "../button/ascap-button.vue";
import ascapCard from "../card/ascap-Card.vue";
import ascapDropdownSelection from "../DropDown/ascap-DropdownSelection.vue";
import Tab from "../tabs/Tab.vue";

export default {
  name: 'ome-membership',
  components: {
    ascapButton,
    ascapCard,
    ascapDropdownSelection,
    Tab,
  },
  methods: {
    handleSelectedCard(data) {
      if(this.selectedCard !== data.name) {
        // reset the dropdown selection if 
        // the user selected a different
        // membership type
        this.dropdownSelection = null
      }
      this.selectedCard = data.name;
      this.$emit('handleSelection', { name: data.name });
    },
    handleSelectedTab(data) {
      this.activeTab = data.data;
    },
    handleDropdownSelection(data) {
      this.dropdownSelection = data.value;
    },
    handleClassObjFunc(data) {
      return {
        "bg-primary": data.name === this.selectedCard,
        "bg-grey": data.name !== this.selectedCard,
        "white": data.name === this.selectedCard,
        }
    },
    handleContinue() {
      /** 
       * This function contains the meat - all the business logic for
       * validating each possible form selection permutation.
       * It's not very pretty. and it mutates state.
       * Potential for a Vuex module to be created to keep track of
       * the status and the end result.
       * 
      */

      let data = {
        "writerPublisher": this.cardContent[0].header,
        "writer": this.cardContent[1].header,
        "publisher": this.cardContent[2].header,
      }


      if(this.selectedCard == null) {
          // membership type not selected by the user

          this.allowContinue = false
      } else if ( 
        (
          this.selectedCard == data.writerPublisher 
          || 
          this.selectedCard == data.publisher 
        ) 
        && 
        ( this.dropdownSelection == null ) ) {
          // business tax classification not selected 
          console.log('tax classifcation not selected')
          this.allowContinue = false
      } else if(this.selectedCard === data.writer) {
          // allow continue if the user just selected writer membership type
          this.allowContinue = true;
      } else if(
        this.selectedCard === data.writerPublisher 
        || 
        this.selectedCard === data.publisher ) {
          // allow continue if the user picked either writer/publisher or publisher
          // AND they selected their business tax classification
          this.allowContinue = true;
      } else {
          // if I somehow missed another condition, prevent continue
          console.log('missed a case')
          this.allowContinue = false;
      }

      console.log(data, this.dropdownSelection, this.allowContinue)
      if(this.allowContinue) {
        // emit the results the user selected from the options
        // this lets parent components know when
        // the user successfully filled out all required options
        this.$emit('formSuccess', {membership: this.selectedMembershipType, taxClassification: this.dropdownSelection});
      }
      
    }
  },
  computed: {
    cardStyle() {
      // reacts to form validation and
      // applies the appropriate style, if any
      // to the tab/card.
      if(this.allowContinue === null) {
        return null
      } else if(this.allowContinue === false && this.selectedCard === null) {
        return  "alert--b"
      } else if(this.allowContinue === true) {
        return null
      } else {
        return null
      }
    }
  },
  data() {
    return {
      // self explanatory, holds the name value of the selected card
      selectedCard: null,
      // used for toggling active/inactive styles on tabs
      activeTab: null,
      // holds the dropdown selection result, if any
      dropdownSelection: null,
      // 
      dropdownStyle: null,
      allowContinue: null,
      dropdownOptions: {
        description: "Publisher Company Type",
        options: [
          { value: "Individual / Sole proprietor or Single-member LLC", id: 1 },
          { value: "C Corporation", id: 2 },
          { value: "S Corporation", id: 3 },
          { value: "LLC - C Corporation", id: 4 },
          { value: "LLC - S Corporation", id: 5 },
          { value: "LLC - Partnership", id: 6 },
          { value: "Partnership", id: 7 },
          { value: "Trust / Estate", id: 8 },
          { value: "Other", id: 8 }
        ] 
      },
      cardContent: [
        {
          header: "Writer & Publisher",
          body: {
            description: "ASCAP royalties are split evenly between Writers and Publishers. Join as both to ensure you get paid everything you deserve.",
            fee: "$100 application fee",
            feeCondition: "non-refundable",
            list: {
              title: "requirements",
              items: [
                "Legan Name",
                "Mailing Address",
                "Valid Email Address",
                "SSN/ITIN or EIN",
                "Must be 18 or older*"
              ]
            }
          }
        },
        {
          header: "Writer",
          body: {
            description: "A Writer is someone who creates a musical composition: the melody, harmony, lyrics, arrangements, beats, etc.",
            fee: "$50 application fee",
            feeCondition: "non-refundable",
            list: {
              title: "requirements",
              items: [
                "Legan Name",
                "Mailing Address",
                "Valid Email Address",
                "SSN/ITIN or EIN",
                "Must be 18 or older*"
              ]
            }
          }
        },
        {
          header: "Publisher",
          body: {
            description: "A Publisher is a person or company that handles the business side of music. Publishers may control the copyrights of a musical composition, licensing, etc.",
            fee: "$50 application fee",
            feeCondition: "non-refundable",
            list: {
              title: "requirements",
              items: [
                "Legan Name",
                "Mailing Address",
                "Valid Email Address",
                "SSN/ITIN or EIN",
                "Must be 18 or older*"
              ]
            }
          }
        }
      ]
    }
  }
}
</script>