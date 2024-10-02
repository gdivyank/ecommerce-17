// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cartRoutes = require('./routes/cartRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', cartRoutes);
app.use('/api', adminRoutes);

const PORT = process.env.PORT || 5018;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
