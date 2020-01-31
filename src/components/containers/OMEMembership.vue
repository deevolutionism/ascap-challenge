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
          :data="data.component"
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

      <div v-if="activeTab === 0" class="myx-40-0">
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
      </div>
      <div v-if="activeTab === 1">

      </div>
      <div v-if="activeTab === 2" class="myx-40-0">
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
      </div>

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
      this.selectedCard = data.name;
      this.$emit('handleSelection', { name: data.name });
    },
    handleSelectedTab(data) {
      this.activeTab = data.tabIndex;
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
      
      let data = {
        "selectedMembershipType": this.selectedCard,
        "selectedBusinessStructureType": this.dropdownSelection,
        "writerPublisher": this.cardContent[0].header,
        "writer": this.cardContent[1].header,
        "publisher": this.cardContent[2].header,
      }
      console.log(data, this.selectedCard)
      if(data.selectedMembershipType == null) {
          
          this.allowContinue = false
          console.log('membership not selected')
      } else if ( 
        (
          this.selectedCard == data.writerPublisher 
          || 
          this.selectedCard == data.publisher 
        ) 
        && 
        ( data.selectedBusinessStructureType == false ) ) {
          
          this.allowContinue = false
          console.log('dropdown not selected')
      } else if(this.selectedCard === data.writer) {
          
          this.continue = true;
          console.log('allow continue')
      } else if(
        this.selectedMembershipType === data.writerPublisher 
        || 
        this.selectedMembershipType === data.publisher ) {
          
          this.allowContinue = true;
          console.log('allow continue')
      } else {
          this.allowContinue = false;
          console.log('default', this.allowContinue)
      }


      if(this.continue) {
        this.$emit('formSuccess', {membership: this.selectedMembershipType, taxClassification: this.dropdownSelection});
      }
      
    }
  },
  computed: {
    cardStyle() {
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
      selectedCard: null,
      activeTab: null,
      dropdownSelection: null,
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