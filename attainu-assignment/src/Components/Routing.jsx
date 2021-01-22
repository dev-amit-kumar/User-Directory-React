import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
const Routing = () => {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				{/* <Route exact path="/addUser" component={AddUser} /> */}
				{/* <Route exact path="/editUser" component={EditUser} /> */}
				{/* <Route component={PageNotFound} /> */}
			</Switch>
		</BrowserRouter>
	);
};

export default Routing;
