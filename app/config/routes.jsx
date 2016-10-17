import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Main from '../components/Main.jsx';
import Home from '../components/Home.jsx';
import NotFound from '../components/NotFound.jsx';



let routes = (
	<Router history={browserHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Home} />
		</Route>
		<Route path='*' component={NotFound} />
	</Router>
);

export default routes;