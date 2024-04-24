const mongoose = require('mongoose')

// *To check if the id given is valid
const verifyID = (id, res) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such workout' })
  }
}

// *To check if the workout given is exists
const verifyWorkout = (workout, res) => {
  if (!workout) {
    return res.status(404).json({ error: 'No such workout' })
  }
}

module.exports = {
  verifyID,
  verifyWorkout
}