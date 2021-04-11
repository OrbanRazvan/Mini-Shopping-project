import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from './Provider';
import reducer, { initialShopping } from './reducer';

ReactDOM.render(
  <React.StrictMode>
    <Provider initialShopping={initialShopping} reducer={reducer}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);