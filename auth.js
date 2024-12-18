const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Employee = require('./models/Employee');

// Authentication route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const employee = await Employee.findOne({ email });
  if (!employee) {
    return res.status(400).send('Employee not found');
  }

  // Assuming employee stores password, you would use bcrypt to compare.
  const isMatch = await bcrypt.compare(password, employee.password);
  if (!isMatch) {
    return res.status(400).send('Invalid credentials');
  }

  const token = jwt.sign({ id: employee._id, role: 'employee' }, 'your_jwt_secret_key', { expiresIn: '1h' });

  res.json({ token });
});
