import React from "react"

import TodoStore from "../../stores/TodoStore"
import Todo from "../Todo"
import * as TodoActions from "../../actions/AppActions"

export default class Todos extends React.Component{

	constructor(){
		super();
		this.state = {
			todos: TodoStore.getAll()
		}
	}

	componentWillMount(){
		TodoStore.on("change", () => {
			this.setState({ todos: TodoStore.getAll(), })
		});
	}

	createTodo(){
		TodoActions.createTodo(Date.now())
	}

	deleteTodo(item){
		console.log("Delete item ", item)
		TodoActions.deleteTodo(item);
	}

	render(){

		const {todos} = this.state;

		const TodoComponents = todos.map((todo) => {
			return <Todo key={todo.id} todo={todo} deleteTodo={this.deleteTodo.bind(this, todo.id)} />;
		});

		return(
			<div>
			<button onClick={this.createTodo.bind(this)}> Create ! </button>
			<h1> Todo </h1>
			<ul> {TodoComponents} </ul>
			</div>
		);
	}
}