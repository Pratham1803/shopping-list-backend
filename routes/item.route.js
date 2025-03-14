// Initialize express router
// Define route for the item
// Export the router

const express = require('express') // Import express module
const router = express.Router() // Create express router instance for item route
const { addItemHandler,
    getAllItemsHandler,
    deleteSingleItemHandler } = require('../controller/item.controller') // Import the item controller functions

// Define the route for the item on /shopping-list
router.route('/')
    .post(addItemHandler) // Add a new item post request
    .get(getAllItemsHandler) // Get all items get request

// Define the route for the item on /shopping-list/:id
// Delete a single item delete request
router.delete('/:id', deleteSingleItemHandler)

module.exports = router; // Export the router