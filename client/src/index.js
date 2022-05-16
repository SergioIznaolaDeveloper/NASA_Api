import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import Store from './redux/store/store';
const store = Store();
render((
    <Provider store={store}>
    <BrowserRouter>
        <React.StrictMode> 
        <App/>
        </React.StrictMode>
    </BrowserRouter>
    </Provider>
), document.getElementById('root'));