### **Backend Code**

#### `backend/index.js`
```javascript
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const insuranceRoutes = require('./routes/insurance');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/insurance', insuranceRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
```

#### `backend/routes/insurance.js`
```javascript
const express = require('express');
const router = express.Router();

// POST endpoint to collect user insurance data
router.post('/', (req, res) => {
    const { name, gender, dob, email, phone, insuranceType } = req.body;

    // Basic validation
    if (!name || !email || !insuranceType) {
        return res.status(400).json({ error: 'Please fill in all required fields.' });
    }

    // Simulate saving data to a database
    console.log('Insurance data received:', req.body);

    return res.status(201).json({
        message: 'Insurance request submitted successfully.',
        data: req.body,
    });
});

module.exports = router;
```

#### `backend/package.json`
```json
{
  "name": "insurenow-backend",
  "version": "1.0.0",
  "description": "Backend for InsureNow app",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2"
  }
}
```

---
