import React from 'react'

const Tasks = ({tasks, deleteTask}) =>{

	const todoList = tasks.length ? (
		tasks.map(t =>{
			return(
				<div className="collection-item" key={t.id}>
					<span onClick={()=>{deleteTask(t.id)}}>{t.content}</span>

				</div>
			)
		})

	) : (
		<p className = "center" >You are done for the day! Good job!</p>
	)
	return(
		<div className="tasks collections">
			{todoList}
		</div>

	)



}

export default Tasks
