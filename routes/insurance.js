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
