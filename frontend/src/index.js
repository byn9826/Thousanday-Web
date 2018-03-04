import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store.js';
import getRouter from './routers/router';

ReactDom.render(
	<Provider store={store}>{getRouter()}</Provider>, document.getElementById('root')
);