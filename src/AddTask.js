import React, {Component} from 'react'

class AddTask extends Component{

	state = {
		content: ''
	}

	handleChange = (event) =>{
		this.setState({
		 	content: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.addTask(this.state);
		this.setState({
			content: ''
		})
	}
	render(){
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="text" value={this.state.content} onChange={this.handleChange}></input>
					<button>Submit</button>

				</form>

			</div>
		)
	}

}
export default AddTask
