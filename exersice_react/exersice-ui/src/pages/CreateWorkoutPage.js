import React, {useState} from "react";
import { useHistory } from "react-router-dom";

export const CreateWorkoutPage = () => {
    const [name, setName] = useState('');
    const [reps, setReps] = useState('')
    const [weight, setWeight] = useState('')
    const [unit, setUnit] = useState('kgs')
    const [date, setDate] = useState('')

    const history = useHistory();

    const addWorkout = async () => {
        const newWorkout = {name, reps, weight, unit, date};
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newWorkout),
            headers: { 
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert("Sucsessully added a workout")
        } else{
            alert(`Failed to add movie, status code = ${response.body}`)
        }
        history.push("/");
    }


    return (
        <div>
            <h1> Add Your Workout </h1>
                <ui className="List">
                    <li><input
                        type='text'
                        value={name}
                        placeholder='Name of your workout'
                        onChange={e => setName(e.target.value)}
                    /></li>
                    <li><input
                        type='number'
                        value={reps}
                        placeholder='Number of repetitions completed'
                        onChange={e => setReps(e.target.value)}
                    /></li>
                    <li><input
                        className="ListWeight"
                        type='number'
                        value={weight}
                        placeholder='Weight'
                        onChange={e => setWeight(e.target.value)}
                    />

                    <select className="ListUnit" id="unit" name="unit" onWaiting onChange={e => setUnit(e.target.value)}>
                        <option value="kgs">kgs</option>
                        <option value="lbs">lbs</option>
                    </select>
                    </li>

                    <li><input  
                        type='text'
                        value={date}
                        placeholder='Date of workout (MM-DD-YY)'
                        onChange={e => setDate(e.target.value)}
                    /></li>
                    <li><button
                        onClick={addWorkout}>Add</button>
                    </li>
                </ui>       
        </div>
    );
    };

    export default CreateWorkoutPage;