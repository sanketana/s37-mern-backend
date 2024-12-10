require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);

//testing purpose
app.get('/', (req, res) => {res.send('Base URL');})

//catch al route
app.use('*', (req, res) => res.status(404).send('Route Not Found'));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));