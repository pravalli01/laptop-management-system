// Import the Laptop model
const Laptop = require('./models/Laptop');

// POST route to add a new laptop
app.post('/laptops', async (req, res) => {
  try {
    const { brand, model, serialNumber, status, purchaseDate } = req.body;

    // Create a new laptop document
    const newLaptop = new Laptop({
      brand,
      model,
      serialNumber,
      status,
      purchaseDate
    });

    // Save the laptop to the database
    await newLaptop.save();

    // Send a success response
    res.status(201).json(newLaptop);
  } catch (error) {
    // Handle errors (e.g., missing data, database issues)
    res.status(400).json({ error: error.message });
  }
});
