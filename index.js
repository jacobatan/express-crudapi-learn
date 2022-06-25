import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000; // can be any number... 

// initialise bodyParser middlware

app.use(bodyParser.json()); // will be using .json data in our application


// listen for incoming requests.

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))
