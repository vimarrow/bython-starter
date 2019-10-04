import 'babel-polyfill';
import React from "react";
import Home from './home/Home';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function Router(props) {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={Home} />
			</Switch>
		</BrowserRouter>
	);
}

export default Router;
