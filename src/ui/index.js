import 'babel-polyfill';
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import Router from './pages/Router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './redux/index';
import initialState from './redux/initialState';

let middlewareList = [thunk];
if (process.env.NODE_ENV === 'development') {
	const logger = createLogger();
	middlewareList = [...middlewareList, logger];
}
const middleware = applyMiddleware(...middlewareList);
const store = createStore(reducers, initialState, composeWithDevTools(middleware)); 

ReactDOM.render(
	<Provider store={store}>
		<Suspense fallback={<span>something's burning...</span>}>
			<Router />
		</Suspense>
	</Provider>
	, document.getElementById('app'));
