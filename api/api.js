const express = require('express');
const cors = require('cors');

// const logRoutes = require('./middleware/logger');
// const showRoutes = require('./routers/show');

const api = express();

api.use(cors());
api.use(express.json());
// api.use(logRoutes);

api.get('/', (req, res) => {
    res.json({
        name: "Welcome to MoodFlix",
        description: "This is a simple API for a randomiser for in progress tv series",
    });
});

// api.use("/shows", showRoutes);

module.exports = api;
