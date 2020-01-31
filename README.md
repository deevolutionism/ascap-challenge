# ascap-ome-membership-code-challenge

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Browsersync for cross-browser testing
```
yarn run serve:bs
```

### Launch Storybook
```
yarn storybook
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```


# Project Requirements
At ASCAP we are in the process of creating a library of reusable components following the concept of atomic design. We believe that being able to standardize components allows us to ensure high-quality, testable code that is manageable and predictable. 

 

Our Online Membership Enrollment application is one of the first places people go to become members of ASCAP. 

 

What we would like is for you to reverse engineer and recreate the entire Membership section of OME. This section consists of three Membership type cards that the user can select. It includes validation that ensures the user has selected a card before being able to continue. If the user selects the "Writer & Publisher" or the "Publisher" card a drop-down is displayed asking the user for more information. This dropdown also has validation that does not allow the user to continue unless a selection is made. 

 

Things to consider when recreating the Membership section of OME:

· Javascript Library/Framework (VueJS)

- project initialized with Vue CLI
- Storybook used for component driven development and visual testing

· SASS/CSS namespacing

- @use At-Rule automatically handles namespacing ( i think )

· Card Hover effects

· Card and drop-down validation functionality 

· Card and drop-down validation styles

- 

· Custom drop-down styles

- developed a custom component to match the style of the OME dropdown.

· Cancel and continue button

- cancel links back to ASCAP home site
- continue functionality baked into the OMEMembership container component

· Browser compatibility (Chrome, Safari, Firefox, Edge)
- .browserlistrc file for tageting browser versions

· Component reusability
- 

Extras (not mandatory and time permitting):

· Mobile design

· Unit testing (Jest, Mocha, Chai)

# Project Overview

I used this challenge as an opportunity to apply active learning and experimentation.

Every time I use Vue I seem to uncover more and more about design / dev patterns.

The primary goal for this project was to hit all of the considerations listed above - but top priority was to achieve expected functionality. Nothing is perfect on the first pass, and this project is no exception. Though an effort was made towards full component reuse, a coherent design pattern, and a compregensive library, Further iteration or even multiple complete re-writes would be required to get this project in a state where the components could provide actual utility value to others beyond this one-time project.

Designing a reusable library of components requires careful thought, testing, and consideration for the context in which the components are expected - or not - to be used.

For this project I chose not to implement Vuex store/flux pattern because I thought it would lead to stronger component coupling and add another dependency. The project isn't interacting with an API/making REST calls and isn't dealing with asyncronisity - 2 areas where Vuex shines - so it seemed unneccesary overkill for this small project. If, however, the project were dependent on something like a headless CMS backend for retrieving content then I would implement Vuex.

How did I attempt to achieve component reusability?
Here are a few heuristics for this project, which were likely not achieved in a wholeistic way:

- components should be structural in nature
- components should be decoupled and pure
- components should be functional
- separation between structural components and functional components https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0 (article was written for React, but some of the same concepts are still applicable)

It may not always be possible to achieve this pure separation between form and function.
Buttons, for example have a form and a function. Tabs have a form and a function. There are also so many variations in which a tab can be represented so designing a component for that flexibility can be a challenge and in some cases lead to component bloat as you try to cover every possible case. as an example compare [vue-bootstaps tab component](https://github.com/bootstrap-vue/bootstrap-vue/blob/dev/src/components/tabs/tabs.js) with [vue-slim-tabs](https://github.com/egoist/vue-slim-tabs/blob/master/src/index.js). Two libraries trying to achieve component reusability, but the goals and execution are completely different. One covers many possible configurations and tab features while the other keeps it simple and light weight. 

Some ways in which I attempted to achieve these goals:

used storybook for the first time!

storybook allows for a sort of bottom up ( or component up ) approach to development because it gives you an environment where you can test components individually, outside of the app they were initially intended for. I started following this [component driven development](https://blog.hichroma.com/component-driven-development-ce1109d56c8e) style in the early stages of the app. Though I foud CDD to be time consuming and dropped it after the second day. Though with more time definitely would continue using it because its an awesome way to provide visual test coverage which really encourages development of robust components.


# component overview

#### accordian
The accordian component is actually more specific so i named it "Gated linar accordian" because the functionality is such that, given a set of children components, the components should only be accessible in a linear fashion by "unlocking" each component in order. Conceptually, this was the goal. The goal likely was not achieved because I didn't have time to write any visual storybook tests.

#### [button](./src/components/button/ascap-button.vue)
The button is pretty much what you would expect. This app contained 2 buttons with 2 different visual styles ( cancel vs continue ) so I made sure to create a prop that allows devs to pick the style type of their button. Though, philisophically, should there be a finite set of styles already baked into the button or not? to me, this seems like something where themes come in - but the introduction of themes seemed way out of scope for this project.

#### [card](./src/components/card/ascap-Card.vue)
The card, in this case is more complex than it probably should be. but it was designed in a way where there are many states. (focused, hovered, and blurred states)

#### [chevron](./src/components/chevron/Chevron.vue)
a chevron. can be toggled to rotate.

#### [containers](./src/components/containers/OMEMembership.vue)
components which contain business logic and generally composed of other presentational or functional components. Containers are where state can be centralized and managed for a collection of components to achieve a complete user story. in this case - i have a specific container for the membership type form. I might create separate containers for each additional form, which may contain unique business logic and data.

#### [content](./src/components/content/Content.vue)
the content component is a simple structural component and style wrapper that applies a max width to its children components.

#### [DropDown](./src/components/DropDown/ascap-DropdownSelection.vue)
This component is meaty. 

#### formContainer
Doesn't exist, but perhaps could be a wrapper component for a set of forms that collects the final combined input and emits a success or fail event along with the combined input data.

#### [mixins](./src/components/mixins/mixins.js)
currently just one mixin. utility function for determing if a click was made outside
a bounding box.

#### [tabs](./src/components/tabs/Tab.vue)
this component simply emits an event if it was clicked to keep track of which tab is currently active. This component might make better use of the dynamic component...

# improvements / known bugs / incomplete 
- the chevron could be replaced with a slot to allow customization
- alternative to global onclick event handler to determine if the user wanted to collapse the dropdown. might be polluting + cause a performance hit because it gets called on every click.
- no border style on the inside of the card component.
- utilize the render function and JSX for more fine-grained control and better manipulation of slots and props. my huntch is that the render function opens the door to better component reusability - simply based on the fact that i see it used in many libraries.
- tabs component and accordian component could have made use of [Vue's dynamic component](https://vuejs.org/v2/guide/components.html#Dynamic-Components), which I stumbled across late in the project.
- components could be namespaced with an ascap prefix.
- atomic style scss is overly verbose, but also allows for high customization and reuse and eliminates potential redundancy.
- clicking the chevron on the dropdown doesn't toggle
- cards have incomplete hover states (arguably this doesnt impact usability or functionality in a significant way, but it is a divergence)
- doesnt have the same font (couldn't find the font on the original site)
- 


### challenges

building a reusable component system and a css design system requires thinking about
the context in which the system might be used. It also requires lots of testing in an individual and in integrated environemts to ensure reusability and utility.

### Takeaways

designing a feature complete, reusable component system is hard. using existing component systems is easy(er).

components occupy a multidimentional space where reusability, custimizability, form, and function ultimately all interact to varying degrees.