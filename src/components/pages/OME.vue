<template>
  <div>
    <div>
      <h1>Membership</h1>
      <p>Select your membership type below:</p>
    </div>
    <div>
      <!-- <Tabs> -->
        <Tab v-for="(data, index) in cardContent" :key="data.header" :tabIndex="index" @selectedTab="handleSelectedTab">
          <Card @cardSelected="handleSelectedCard" :selected="selectedCard" :name="data.header">
            <template v-slot:header>
              <h1>{{data.header}}</h1>
            </template>
            <template v-slot:body>
              <p>{{data.body.description}}</p>
              <h4>{{data.body.fee}}</h4>
              <h6>{{data.body.feeCondition}}</h6>
              <h5>{{data.body.list.title}}</h5>
              <ul>
                <li v-for="item in data.body.list.items" :key="item">
                  {{item}}
                </li>
              </ul>
            </template>
          </Card>
        </Tab>
      <!-- </Tabs> -->
      
      <p>* if you are under 18 years of age please <a href="">read more about how to join ASCAP</a></p>
          
      <div v-if="activeTab === 1">
        <drop-down-selection 
          :options="dropdownOptions"
        />
      </div>
      <div v-if="activeTab === 2">

      </div>
      <div v-if="activeTab === 3">
        <drop-down-selection 
          :options="dropdownOptions"
        />
      </div>

      <p>ASCAP uses TINCheck and SmartyStreets to verify certain information provided by you in connection with your application. Any information processed by TINCheck and SmartyStreets shall be subject to the privacy policies of <a href="">TINCheck</a> and <a href="">SmartyStreets</a>.</p>
      
    </div>
  </div>
</template>

<script>
import Tabs from "../tabs/Tabs.vue";
import Tab from "../tabs/Tab.vue";
import Card from "../card/Card.vue";
import DropdownSelection from "../DropDown/DropdownSelection.vue";
export default {
  name: 'o-m-e',
  components: {
    Tabs,
    Tab,
    DropdownSelection,
    Card
  },
  methods: {
    handleSelectedCard(data) {
      this.selectedCard = data.name
    },
    handleSelectedTab(data) {
      this.activeTab = data.tabIndex
    }
  },
  data() {
    return {
      selectedCard: null,
      activeTab: null,
      dropdownOptions: [
        { value: "Individual / Sole proprietor or Single-member LLC", id: 1 },
        { value: "C Corporation", id: 2 },
        { value: "S Corporation", id: 3 },
        { value: "LLC - C Corporation", id: 4 },
        { value: "LLC - S Corporation", id: 5 },
        { value: "LLC - Partnership", id: 6 },
        { value: "Partnership", id: 7 },
        { value: "Trust / Estate", id: 8 },
        { value: "Other", id: 8 } 
      ],
      cardContent: [
        {
          header: "writer & publisher",
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
          header: "Publisher",
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
      ]
    }
  }
}
</script>