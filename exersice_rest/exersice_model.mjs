// Get the mongoose object
import mongoose from 'mongoose';

// Prepare to the database movies_db in the MongoDB server running locally on port 27017
mongoose.connect(
    "mongodb://localhost:27017/exercises",
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// Connect to to the database
const db = mongoose.connection;
// The open event is called when the database connection successfully opens
db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

/**
 * Define the schema
 */
 const workoutSchema = mongoose.Schema({
    name: { type: String, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, required: true },
    unit: { type: String, required: true, enum: ['kgs', 'lbs'], description: "Unit of weight must be in kgs or lbs" },
    date: { type: String, required: true }
});

/**
 * Compile the model from the schema. This must be done after defining the schema.
 */
const Workout = mongoose.model("Workout", workoutSchema);


const createWorkout = async (name, reps, weight, unit, date) => {
    // Call the constructor to create an instance of the model class Workout
    const workout = new Workout({ name: name, reps: reps, weight: weight, unit: unit, date: date });
    // Call save to persist this object as a document in MongoDB
    return workout.save();
}

 /**
  * Retreves all workouts
  * 
  */
  const findWorkout = async () => {
    const query = Workout.find();
return query.exec();
};

 /**
  * Updates specified wourkout values
  * 
  */
  const editWorkout = async (_id, name, reps, weight, unit, date) => {
    const result = await Workout.replaceOne({_id},{name: name, reps: reps, weight: weight, unit: unit, date: date});
    console.log(result)
    return result.modifiedCount;
};


/**
 * 
 */
 const deleteWorkout = async (_id) => {
    const result = await Workout.deleteOne({_id})
    console.log(result)
    return result.deletedCount
 }
export{createWorkout, findWorkout, editWorkout, deleteWorkout}