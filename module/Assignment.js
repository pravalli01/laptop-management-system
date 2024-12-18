const mongoose = require('mongoose');

const AssignmentSchema = new mongoose.Schema({
  laptopId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Laptop', // Reference to the Laptop model
    required: true,
  },
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee', // Reference to the Employee model
    required: true,
  },
  assignedAt: {
    type: Date,
    default: Date.now,
  },
  returnedAt: {
    type: Date,
  },
});

// Create the Assignment model from the schema
const Assignment = mongoose.model('Assignment', AssignmentSchema);

// Export the model to use it in other files
module.exports = Assignment;
