import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './App';

const routes = () => {
	return (
		<div className="App">
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/api/password/find/:token" exact component={Home} />
			</Switch>
		</div>
	);
};

export default routes;
