// Description: This file contains the code to connect to the MongoDB database.
// It uses the mongoose module to connect to the database.
const monogose = require('mongoose'); // Import mongoose module

// Function to connect to the MongoDB database using the provided URL
async function connectDb(url) {
    return await monogose.connect(url)         // Connect to the database using the provided URL
}

module.exports = connectDb; // Export the connectDb function