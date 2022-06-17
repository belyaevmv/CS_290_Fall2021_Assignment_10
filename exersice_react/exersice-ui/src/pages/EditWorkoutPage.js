import React, {useState} from "react";
import { useHistory } from "react-router-dom";

export const EditWorkoutPage = ({workoutToEdit}) => {
    const [name, setName] = useState(workoutToEdit.name);
    const [reps, setReps] = useState(workoutToEdit.reps);
    const [weight, setWeight] = useState(workoutToEdit.weight);
    const [unit, setUnit] = useState(workoutToEdit.unit);
    const [date, setDate] = useState(workoutToEdit.date);

    const history = useHistory();

    const editWorkout = async () => {
        const editedWorkout = {name, reps, weight, unit, date};
        const response = await fetch(`/exercises/${workoutToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedWorkout),
            headers: { 
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            alert("Sucsessully edited a workout")
        } else{
            alert(`Failed to edit movie, status code = ${response.status}`)
        }
        history.push("/");

    }

    return (
        <div>
            <h1> Edit Your Workout </h1>
            <ui className="List">
                <li><input
                    type='text'
                    value={name}
                    onChange={e => setName(e.target.value)}
                /> </li>
            
                <li><input
                    type='number'
                    value={reps}
                    onChange={e => setReps(e.target.value)}
                /> </li>
                <li><input
                    className="ListWeight"
                    type='number'
                    value={weight}
                    onChange={e => setWeight(e.target.value)}
                />

                <select className="ListUnit" id="unit" name="unit"  onChange={e => setUnit(e.target.value)}>
                    <option value="kgs">kgs</option>
                    <option value="lbs">lbs</option>
                </select>
                </li>
                <li><input
                    type='text'
                    value={date}
                    onChange={e => setDate(e.target.value)}
                /></li>
                <li><button
                    onClick={editWorkout}>Save</button>
                </li>
            </ui>
        </div>
    );
    };


export default EditWorkoutPage