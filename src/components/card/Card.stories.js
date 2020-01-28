import Card from "./Card.vue";

export default {
  title: "Card"
}

const defaultCardTemplate = `
<Card :name="'test card'">
  <template v-slot:header>
    <div>
      <svg id="quavers" xmlns="http://www.w3.org/2000/svg" stroke-width="2" width="22px" height="29px" viewBox="-26.663 -25.084 22 21.999" aria-hidden="true" class="c-icon c-icon--size-auto"><path fill="none" d="M-18.997-8.528h-4.443c-1.228,0-2.223,0.996-2.223,2.223c0,1.227,0.996,2.221,2.223,2.221h2.223
  c1.227,0,2.221-0.994,2.221-2.221V-8.528z M-5.663-10.75h-4.445c-1.227,0-2.221,0.994-2.221,2.221s0.994,2.223,2.221,2.223h2.223
  c1.227,0,2.222-0.997,2.222-2.223V-10.75z"></path><polyline fill="none" points="-18.997,-8.528 -18.997,-21.862 -5.663,-24.084 -5.663,-10.75 "></polyline></svg>
      <h2>Writer</h2>
    </div>
  </template>
  <template v-slot:body>
    <p>A Writer is someone who creates a musical composition: the melody, harmony, lyrics, arrangements, beats, etc.</p>
    <p>$50 application fee</p>
    <p>non-refundable</p>
    <p>requirements</p>
    <ul>
      <li>
        <span>
          <polyline points="20 6 9 17 4 12"></polyline>
        </span>
        <span>Legal Name</span>
      </li>
    </ul>
  </template>
</Card>`

const activeCardTemplate = `
<Card :name="name" :selected="selected">
  <template v-slot:header>
    <div>
      <svg id="quavers" xmlns="http://www.w3.org/2000/svg" stroke-width="2" width="22px" height="29px" viewBox="-26.663 -25.084 22 21.999" aria-hidden="true" class="c-icon c-icon--size-auto"><path fill="none" d="M-18.997-8.528h-4.443c-1.228,0-2.223,0.996-2.223,2.223c0,1.227,0.996,2.221,2.223,2.221h2.223
  c1.227,0,2.221-0.994,2.221-2.221V-8.528z M-5.663-10.75h-4.445c-1.227,0-2.221,0.994-2.221,2.221s0.994,2.223,2.221,2.223h2.223
  c1.227,0,2.222-0.997,2.222-2.223V-10.75z"></path><polyline fill="none" points="-18.997,-8.528 -18.997,-21.862 -5.663,-24.084 -5.663,-10.75 "></polyline></svg>
      <h2>Writer</h2>
    </div>
  </template>
  <template v-slot:body>
    <p>A Writer is someone who creates a musical composition: the melody, harmony, lyrics, arrangements, beats, etc.</p>
    <p>$50 application fee</p>
    <p>non-refundable</p>
    <p>requirements</p>
    <ul>
      <li>
        <span>
          <polyline points="20 6 9 17 4 12"></polyline>
        </span>
        <span>Legal Name</span>
      </li>
    </ul>
  </template>
</Card>
`

export const Default = () => ({
  components: {
    Card
  },
  template: defaultCardTemplate,
  props: {
    name: {
      default: 'Test Card'
    }
  }
});


export const Selected = () => ({
  components: {
    Card
  },
  template: activeCardTemplate,
  props: {
    name: {
      default: 'Test Card'
    },
    selected: {
      default: 'Test Card'
    }
  }
});