import ascapDropdownSelection from "./ascap-DropdownSelection";

export default {
  title: 'DropdownSelection',
  excludeStories: /.*Data$/
}

export const defaultOptionsData = [
  { value: "Individual / Sole proprietor or Single-member LLC", id: 1 },
  { value: "C Corporation", id: 2 },
  { value: "S Corporation", id: 3 },
  { value: "LLC - C Corporation", id: 4 },
  { value: "LLC - S Corporation", id: 5 },
  { value: "LLC - Partnership", id: 6 },
  { value: "Partnership", id: 7 },
  { value: "Trust / Estate", id: 8 },
  { value: "Other", id: 8 } 
];

export const Default = () => ({
  components: { ascapDropdownSelection },
  template: `<ascap-dropdown-selection :options="options" :description="'Publisher Company Type'"/>`,
  props: {
    options: {
      default: defaultOptionsData
    },
    title: "hello world"
  }
})