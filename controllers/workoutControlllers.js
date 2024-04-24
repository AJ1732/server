const Workout = require('../models/workoutModel')
const { verifyID, verifyWorkout } = require('../utils/verify')

// CONTROLLER FUNCTIONS
const getAllWorkouts = async (req, res) => {
  try {
    const allWorkouts = await Workout.find({}).sort({ createdAt: -1 })  
    return res.status(200).json(allWorkouts) 
  } catch (error) {
    return res.status(500).json({ message: error.message }) 
  }
}

const getSingleWorkout = async (req, res) => {
  try {
    const { id } = req.params
    verifyID(id, res)
  
    const singleWorkout = await Workout.findById(id);
    verifyWorkout(singleWorkout, res)
  
    return res.status(200).json(singleWorkout) 
  } catch (error) {
    return res.status(500).json({ message: error.message }) 
  }
}

const deleteWorkout = async (req, res) => {
  try {
    const { id } = req.params
    verifyID(id, res);

    const deleteWorkout = await Workout.findOneAndDelete({ _id: id })
    verifyWorkout(deleteWorkout, res)
    
    return res.status(200).json(deleteWorkout) 
  } catch (error) {
    return res.status(500).json({ message: error.message }) 
  }
}

const updateWorkout = async (req, res) => {
  try {
    const { id } = req.params
    verifyID(id, res);
  
    const updateWorkout = await Workout.findOneAndUpdate({ _id: id }, {
      ...req.body
    })
    verifyWorkout(updateWorkout, res)
  
    return res.status(200).json(updateWorkout)  
  } catch (error) {
    return res.status(500).json({ message: error.message }) 
  }
}

const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;

  let emptyFields = [];

  if(!title) {
    emptyFields.push('title')
  } else if (!load) {
    emptyFields.push('load')
  } else if (!reps) {
    emptyFields.push('reps')
  }

  if(emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please filll in all the fields', emptyFields })
  }
  
  try {
    const workout = await Workout.create({ title, reps, load });
    return res.status(200).json(workout)
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
  // res.json({ mssg: 'POST a new workout' })  
}

module.exports = {
  getAllWorkouts,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout,
  createWorkout
}
