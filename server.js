const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const templateRouter = require('./routes/templateRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/templates', templateRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

