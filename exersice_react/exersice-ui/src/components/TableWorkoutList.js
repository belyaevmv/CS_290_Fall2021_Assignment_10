import React from "react";
import TableRow from "./TableRow"

function WorkoutList({workouts, onDelete, onEdit}) {
    return(
        <table className="Table">
            <caption>List of recorded excersices</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Reps</th>
                        <th>Weight</th>
                        <th>Unit</th>
                        <th>Date</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {workouts.map((workout, i) => <TableRow  workout={workout} 
                    onDelete={onDelete}
                    onEdit={onEdit}
                    key={i} />)}
                </tbody>
            </table>
        
    );
}

export default WorkoutList