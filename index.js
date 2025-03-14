// Description: Entry point of the application
// It connects to the MongoDB database and starts the server.
// It also sets up the routes and middleware for the application.

const dotenv = require('dotenv'); // Import dotenv module
dotenv.config(); // Load environment variables from the .env file

// Import express module and create an express application
const express = require('express') // Import express module
const app = express() // Create express application

// Connect to the MongoDB database using the provided URL
const connectDb = require('./db') // Import the connectDb function from db.js

connectDb(process.env.DB_URL) // Connect to the database using the provided URL
    .then(() => console.log('Connected With Mongo Database')) // Log success message if connected
    .catch((error) => console.log(`Error in Connecting DB: ${error}`)) // Log error message if connection fails

// Set up middleware for parsing JSON and URL-encoded data
const cors = require('cors');
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Set up middleware for logging requests
const logRequest = require('./middlewares/log') // Import the logRequest middleware from log.js
app.use(logRequest); // Use the logRequest middleware

// Set up routes for the application 
const itemRoute = require('./routes/item.route') // Import the item route from item.route.js
app.use('/shopping-list', itemRoute) // Use the item route on /shopping-list

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on Port: ${process.env.PORT}`);
}) // Start the server and listen on the provided port