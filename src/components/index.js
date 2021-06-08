// You have to be careful about what you are pulling in to your bundle for a particular page.
// You could do relative imports and exports in this file - import { comp1, comp2 } from './components' etc. but that would not make much sense.

// This index.js will be our export reference for all the components we are creating in the components folder


export { default as Jumbotron } from './jumbotron';