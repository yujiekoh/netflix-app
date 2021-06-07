import React from 'react';
import ReactDOM from 'react-dom';
// instead of using import ReactDOM from 'react-dom'; above, you can also use import { render } from 'react-dom';
// if you do that, then line 7 would be render(<App />, document.getElementById('root'));
import App from './app';

ReactDOM.render(<App />, document.getElementById('root'));
