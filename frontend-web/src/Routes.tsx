import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Records from "./pages/Records";

const Routes = () => (
	<BrowserRouter>
		<Header></Header>
		<Switch>
			<Route path="/" exact>
				<Home></Home>
			</Route>
			<Route path="/records">
				<Records></Records>
			</Route>
		</Switch>
	</BrowserRouter>
);

export default Routes;