import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home';
import NotFound from '../components/NotFound';



const routes = (
	<Router history={browserHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Home} />
		</Route>
		<Route path='*' component={NotFound} />
	</Router>
);

export default routes;