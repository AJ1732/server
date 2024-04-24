const express = require('express');
const router = express.Router();
const { getAllWorkouts, getSingleWorkout, deleteWorkout, updateWorkout, createWorkout } = require('../controllers/workoutControlllers');

// Sending responses to requests
// *GET ALL WORKOUTS
router.get('/', getAllWorkouts)

// *POST A SINGLE WORKOUT
router.post('/', createWorkout) // *To accept the form data 

// *GET A SINGLE WORKOUT
router.get('/:id', getSingleWorkout)

// *DELETE A SINGLE WORKOUT
router.delete('/:id', deleteWorkout)

// *UPDATE A SINGLE WORKOUT
router.patch('/:id', updateWorkout)

module.exports = router;