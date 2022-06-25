import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 5000; // can be any number...

// initialise bodyParser middlware
app.use(bodyParser.json()); // will be using .json data in our application

/**
 * starting path, route them to usersRoutes
 */
app.use('/users', usersRoutes) 

// ROUTES
app.get("/", (req, res) => res.send("Hello from home"));

// listen for incoming requests.
app.listen(PORT, () =>
    console.log(`Server running on port: http://localhost:${PORT}`)
);
