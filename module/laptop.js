const mongoose = require('mongoose');

const LaptopSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  serialNumber: {
    type: String,
    unique: true,
    required: true,
  },
  status: {
    type: String,
    enum: ['available', 'assigned', 'maintenance'],
    default: 'available',
  },
  purchaseDate: {
    type: Date,
    required: true,
  },
});

// Create the Laptop model from the schema
const Laptop = mongoose.model('Laptop', LaptopSchema);

// Export the model to use it in other files
module.exports = Laptop;
app.post('/laptops', (req, res) => {
  // Handle the creation of a new laptop here
});
