import React, {Component} from 'react';
import Tasks from './Tasks.js'
import AddTask from './AddTask.js'


class App extends Component {
	state ={
		tasks: [
			{id:1, content: 'Learn React'},
			{id:2, content: 'Play Witcher 3'}

		]
	}
	addTask = (item) =>{
		console.log(item);
		item.id = Math.random();
		let new_tasks = [...this.state.tasks, item];
		this.setState({
			tasks: new_tasks
		})

	}
	deleteTask = (id) =>{

			let new_tasks = this.state.tasks.filter( t =>{
				if(t.id == id){ return false}
				else{return true}
			})

			this.setState({
				tasks: new_tasks
			})

		}
	render(){
	  	return (
	    	<div className="todo-app container">
				<h1 className="center red-text">To-do List</h1>
				<Tasks tasks={this.state.tasks} deleteTask={this.deleteTask}/>
				<AddTask  addTask={this.addTask}/>
			</div>
	  		);
		}

}


export default App;
