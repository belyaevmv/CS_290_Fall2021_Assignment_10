import React from "react";
import { Link } from "react-router-dom";
import WorkoutList from "../components/TableWorkoutList";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../App.css"

function HopePage({setWorkoutToEdit}) {
    const [workouts, setWorkouts] = useState([]);
    const history = useHistory();

    const onDelete = async _id =>{
        const response = await fetch(`/exercises/${_id}`, {method: 'DELETE'})
        if (response.status === 204){
            const newWorkouts = workouts.filter(w => w._id !== _id);
            setWorkouts(newWorkouts)
        } else {
            console.error(`Failed to delete workout with _id = ${_id}, status code = ${response.status}`)
        }
    };

    const onEdit = workout => {
        setWorkoutToEdit(workout);
        history.push("/EditWorkout");
    }

    const loadWorkouts = async () => {
        const response = await fetch("/exercises");
        const workoutData = await response.json();
        setWorkouts(workoutData);
    }

    useEffect( () => {
        loadWorkouts()
    }, []);

    return (
        <div>
            <h1>Home Page</h1>
            <WorkoutList workouts={workouts} onDelete={onDelete} onEdit={onEdit}></WorkoutList>
            <Link to="/AddNewWorkout"> Add Workout</Link>      
        </div>    
    );
}

export default HopePage;