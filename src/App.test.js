import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import store from './store'
import './index.css';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}>
  <BrowserRouter>
      <App/>
  </BrowserRouter>
</Provider>, div);

  ReactDOM.unmountComponentAtNode(div);
});
