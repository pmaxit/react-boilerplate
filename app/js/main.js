import React from "react";
import ReactDOM from "react-dom";

import {Router, Route, IndexRoute, hashHistory} from "react-router";
import Routes from "./routes"

const app = document.getElementById('app');

ReactDOM.render(
	Routes, app
);