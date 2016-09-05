import React from "react";
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import Archived from "./Components/Pages/Archived"
import Featured from "./Components/Pages/Featured"
import Settings from "./Components/Pages/Settings"
import Todos from "./Components/Pages/Todos"
import Layout from "./Components/Layout/Layout"

var routes = 
	<Router>
		<Route path="/" component={Layout}>
			<IndexRoute component={Featured} />
			<Route path="archives" component={Archived} />
			<Route path="settings" component={Settings} />
			<Route path="todos" component={Todos}/>
		</Route>
	</Router>

export default routes;