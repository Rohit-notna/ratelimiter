require('dotenv').config();
const express = require('express');
const taskRoutes = require('./src/routes/taskRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/task', taskRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));