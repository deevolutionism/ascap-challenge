import ascapCard from "./ascap-Card.vue";

export default {
  title: "Card"
}

const defaultCardTemplate = `
<ascap-card :name="'test card'">
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
</ascap-ard>`

const activeCardTemplate = `
<ascap-card :name="'test card'" :selected="'test card'">
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
</ascap-ard>
`

const blurredCardTemplate = `
<ascap-card :name="name" selected="selected">
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
</ascap-ard>
`



export const cardContent = {
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
}

export const Default = () => ({
  components: {
    ascapCard
  },
  template: defaultCardTemplate,
  props: {
    name: {
      default: 'Test Card',
    },
    data: {
      default: cardContent
    }
  }
});


export const Selected = () => ({
  components: {
    ascapCard
  },
  template: activeCardTemplate,
  props: {
    name: {
      default: 'Test Card'
    },
    selected: {
      default: 'Test Card'
    },
    data: {
      default: cardContent
    }
  }
});

export const Blurred = () => ({
  components: {
    ascapCard
  },
  template: blurredCardTemplate,
  props: {
    name: {
      default: 'Test Card'
    },
    selected: {
      default: 'A Different Card'
    },
    data: {
      default: cardContent
    }
  }
})