# ascap-ome-membership-code-challenge

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
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


# project overview
At ASCAP we are in the process of creating a library of reusable components following the concept of atomic design. We believe that being able to standardize components allows us to ensure high-quality, testable code that is manageable and predictable. 

 

Our Online Membership Enrollment application is one of the first places people go to become members of ASCAP. 

 

What we would like is for you to reverse engineer and recreate the entire Membership section of OME. This section consists of three Membership type cards that the user can select. It includes validation that ensures the user has selected a card before being able to continue. If the user selects the "Writer & Publisher" or the "Publisher" card a drop-down is displayed asking the user for more information. This dropdown also has validation that does not allow the user to continue unless a selection is made. 

 

Things to consider when recreating the Membership section of OME:

· Javascript Library/Framework (VueJS)

· SASS/CSS namespacing

· Card Hover effects

· Card and drop-down validation functionality 

· Card and drop-down validation styles

· Custom drop-down styles

· Cancel and continue button

· Browser compatibility (Chrome, Safari, Firefox, Edge)

· Component reusability

Extras (not mandatory and time permitting):

· Mobile design

· Unit testing (Jest, Mocha, Chai)

# components

# improvements

### dropdown/dropdownSelection open/close toggle
- the chevron could be replaced with a slot to allow customization
- alternative to global onclick event handler to determine if the user wanted to collapse the dropdown. might be polluting + cause a performance hit because it gets called on every click.

### component customization
- components could be more customizable with the usage of slots


### themeing
- consider design system
- 

### design considerations and questions

- how reusable should a component be?
  - purely functional vs mixed form + function?



### challenges

building a reusable component system and a css design system requires thinking about
the context in which the system might be used. It also requires lots of testing in order
to prove and disprove assumptions about the context in which the components might be used.
