import * as workouts from './exersice_model.mjs';
import express from 'express';

const PORT = 3000;

const app = express();

app.use(express.json());

/**
 * Create a new workout with the name, weight, unit, reps, date provided in the body
 */
app.post("/exercises", (req, res) => {
    {workouts.createWorkout(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
    .then(workout => {
        res.status(201).json(workout)
        })
    .catch(error => {
        console.error(error)
        res.status(500).json({Error: "Request Failed"})
        });
    }
});




/**
 * Retrieve workouts. 
 * all movies are returned.
 */
 app.get('/exercises', (req, res) => {
    workouts.findWorkout()
    .then(workout =>{
        res.status(200).json(workout)
    })
    .catch(error => {
        console.error(error)
        res.status(500).json({Error: "Request Failed"})
    });
    
});

/**
 * Update the workout whose id is provided in the path parameter and set
 * its parameters to the values provided in the body.
 */
app.put('/exercises/:_id', (req, res) => {
    console.log(req.params._id)
    workouts.editWorkout(req.params._id, req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
    .then(numUpdated =>{
        if (numUpdated === 1){
            res.status(200).json({_id: req.params._id, name: req.body.name, reps: req.body.reps, weight: req.body.weight, unit: req.body.unit, date: req.body.date})
        } else{
            res.status(500).json({Error: "Resourse Not Found"})
        }
    }
    )
    .catch(error => {
        console.error(error)
        res.status(500).json({Error: "Request Failed"})
    })
});

/**
 * Delete the movie whose id is provided in the query parameters
 */
app.delete('/exercises/:_id', (req, res) => {
    workouts.deleteWorkout(req.params._id)
    .then(numDeleted => {
        if (numDeleted === 1){
            res.status(204).send();
        } else{
            res.status(500).json({Error: "Resourse Not Found"})
        };
    })
    .catch( error => {
        console.error(error)
        res.status(400).json({Error: "Reqeust Failed"})
    })
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});