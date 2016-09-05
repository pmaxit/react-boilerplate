import React from "react"

import {Link} from "react-router"
export default class Nav extends React.Component{

  navigate(){
    this.props.history.replaceState(null,"/")
  }
	render(){
    const {location} = this.props;

    const featuredClass = location.pathname === "/" ? "active" : ""
    const archiveClass = location.pathname.match(/^\/archives/) ? "active" : ""
    const settingsClass = location.pathname.match(/^\/settings/)? "active" : ""
    const TodoClass = location.pathname.match(/^\/todos/)? "active" : ""
		return(
			 
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Project name</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li class={featuredClass}>
              <Link to="/"> Featured </Link>
            </li>
            <li class={archiveClass}>
              <Link to="archives"> Archives </Link>
            </li>
            <li class={settingsClass}>
              <Link to="settings"> Settings </Link>
            </li>
            <li class={TodoClass}>
              <Link to="todos"> Todos </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

			);
	}
}