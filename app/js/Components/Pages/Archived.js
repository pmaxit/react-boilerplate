import React from "react"
import Article from "../Article"

export default class Archived extends React.Component{

	render(){

		const Articles = [
			"Some article",
			"Some other article",
			"Random article",
			"New article",
			"Old article",

		].map((title, i) => <Article key={i} title={title} />)

		return(
			<div class="row">
				{Articles}
			</div>
			);
	}
}