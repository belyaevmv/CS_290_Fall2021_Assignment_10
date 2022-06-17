import React from "react";
import {MdDeleteForever} from 'react-icons/md'
import {AiFillEdit} from 'react-icons/ai'

function TableRow({workout, onDelete, onEdit}) {
    return(
        <tr>
            <td className="name">
                {workout.name}
            </td>
            <td className="reps">
                {workout.reps}
            </td>
            <td className="weight">
                {workout.weight}
            </td>
            <td className="unit">
                {workout.unit}
            </td>
            <td className="date">
                {workout.date}
            </td>
            <td className="edit">
                <AiFillEdit onClick={() => onEdit(workout)}></AiFillEdit>
            </td>
            <td className="delete">
                <MdDeleteForever onClick={() => onDelete(workout._id)}></MdDeleteForever>
            </td>
        </tr>
    )
}

export default TableRow