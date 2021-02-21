const express = require('express');
const connectDB = require('./config/db');
const event = require('./models/Event');

const app = express();

// Connect Database
connectDB();

const EventRoutes = require("./routes/api/events");
const StudRoutes = require("./routes/api/students");

//to parse the params
const bodyParcer = require('body-parser');

//init middleware
app.use(express.json({ extended: false }));

app.use(bodyParcer.urlencoded({
    extended : true
}));
app.use(bodyParcer.json());

app.use("/api", EventRoutes);
app.use("/api", StudRoutes);
app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));