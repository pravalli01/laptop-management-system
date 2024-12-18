const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
});

// Create the Employee model from the schema
const Employee = mongoose.model('Employee', EmployeeSchema);

// Export the model to use it in other files
module.exports = Employee;
