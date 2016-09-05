import {EventEmitter} from "events";
import dispatcher from "../dispatcher/dispatcher";

class TodoStore extends EventEmitter{
	constructor(){
		super();
		this.todos = [
			{
				id: 12323,
				text: "Go shopping",
				complete: false
			},
			{
				id:23233,
				text: "Pay bills",
				complete: true,
			}
		]
	}

	createTodo(text){
		const id = Date.now();

		this.todos.push({
			id,
			text,
			complete: false
		});
		this.emit("change");
	}

	deleteTodo(id){
		var _ = require('underscore');
		
		this.todos = _.reject(this.todos, function(x){ return x.id === id })
		
		this.emit("change")
	}

	getAll(){
		return this.todos;
	}

	handleAction(action){

		switch(action.type){
			case 'CREATE_TODO':
				this.createTodo(action.text);
				break;

			case 'DELETE_TODO':
				this.deleteTodo(action.id);
				break;
		}
	}
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleAction.bind(todoStore));

export default todoStore;