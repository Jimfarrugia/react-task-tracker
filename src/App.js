import { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
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

  return (
    <div className="container">
      <Header title="Task Tracker" />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
