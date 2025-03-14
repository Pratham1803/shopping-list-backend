const fs = require('fs'); // Import the file system module
const FileSystem = fs; // Assign the file system module to a constant

// Define a middleware function
function logRequest(req, res, next) {
    console.log('Request received:', req.method, req.url); // Log the request method and URL
    FileSystem.appendFileSync('log.txt', `Request received at ${Date.now()}: ${req.method} ${req.url}\n`); // Append the request details to a log file
    next(); // Call the next middleware
}

module.exports = logRequest; // Export the middleware function