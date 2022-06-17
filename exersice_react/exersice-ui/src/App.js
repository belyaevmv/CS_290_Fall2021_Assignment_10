import React, {useState} from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage'
import CreateWorkout from './pages/CreateWorkoutPage';
import EditWorkout from './pages/EditWorkoutPage';

function App() {
  const [workoutToEdit, setWorkoutToEdit] = useState();

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Route path="/" exact>
            <HomePage setWorkoutToEdit={setWorkoutToEdit} />
          </Route>
          <Route path="/AddNewWorkout">
            <CreateWorkout/>
          </Route>
          <Route path="/EditWorkout">    
            <EditWorkout workoutToEdit={workoutToEdit} />
          </Route>
        </header>
      </Router>
    </div>
  );
}

export default App;
