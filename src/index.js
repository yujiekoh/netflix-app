import React from 'react';
import ReactDOM from 'react-dom';
// instead of using import ReactDOM from 'react-dom'; above, you can also use import { render } from 'react-dom';
// if you do that, then line 7 would be render(<App />, document.getElementById('root'));
import 'normalize.css';
import App from './app';
import { GlobalStyles } from './global-styles';


// Render global styles first, then add styles from app.js. You have to use a JSX fragment.
ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("root")
);
