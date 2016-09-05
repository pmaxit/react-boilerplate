import React from "react"

import TodoStore from "../../stores/TodoStore"
import Todo from "../Todo"

export default class Featured extends React.Component{

	constructor(){
		super();
		this.state = {
			todos: TodoStore.getAll()
		}
	}

	render(){

		const {todos} = this.state;

		const TodoComponents = todos.map((todo) => {
			return <Todo key={todo.id} todo={todo} />;
		});

		return(
			<div>
				<h1> Featured </h1>
				<ul> {TodoComponents} </ul>
			</div>
		);
	}
}