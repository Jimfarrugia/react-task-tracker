import { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
	const [showAddTask, setShowAddTask] = useState(false);
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: "Doctors Appt.",
			day: "5th Feb at 2:30pm",
			reminder: true
		},
		{
			id: 2,
			text: "Band Practice",
			day: "7th Feb at 7:00pm",
			reminder: true
		},
		{
			id: 3,
			text: "Food Shopping",
			day: "5th Feb at 3:30pm",
			reminder: false
		},
		{
			id: 4,
			text: "Lunch Meeting",
			day: "8th Feb at 1:00pm",
			reminder: true
		},
	])

	const addTask = (task) => {
		const id = Math.floor(Math.random() * 10000)+1;
		const newTask = { id, ...task };
		setTasks([newTask, ...tasks]);
		setShowAddTask(false);
	}

	const deleteTask = id => {
		setTasks(tasks.filter(task => task.id !== id))
	}

	const toggleReminder = id => {
		setTasks(tasks.map(task => 
			task.id === id
				? {...task, reminder: !task.reminder}
				: task
			)
		);
	}

  return (
    <div className="container">
      <Header
				onAdd={() => setShowAddTask(!showAddTask)}
				showAdd={showAddTask}
			/>
			{showAddTask && 
				<AddTask onAdd={addTask}/>
			}
			{tasks.length > 0 ? (
				<Tasks
					tasks={tasks}
					onDelete={deleteTask}
					onToggle={toggleReminder}
				/>
			) : (
				<p>There are no tasks right now.</p>
			)}
    </div>
  );
}

export default App;
