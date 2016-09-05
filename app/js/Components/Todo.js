import React from "react";

export default class Todo extends React.Component{
	render(){
		const { deleteTodo } = this.props;
		return (
			<li>
				<span> {this.props.todo.text} </span>
				<span> <button class="btn btn-delete" onClick={deleteTodo}>  X </button> </span>
			</li>
		);	
	}
}