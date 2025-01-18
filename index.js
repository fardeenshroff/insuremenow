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
