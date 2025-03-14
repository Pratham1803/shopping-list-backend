// Description: It has all the controller functions for the item model.
// It has three functions:
// 1. addItemHandler: It adds a new item to the database.
// 2. getAllItemsHandler: It fetches all the items from the database.
// 3. deleteSingleItemHandler: It deletes a single item from the database.
// It uses the item model to interact with the database.
// It uses ApiResponse and ApiError to send the response and error.
// It exports all the functions to be used in the item route.

const itemModel = require('../model/item.model') // Importing the item model to interact with the database
const ApiResponse = require('../utils/ApiResponse'); // Importing the ApiResponse class to send the response
const ApiError = require('../utils/ApiError') // Importing the ApiError class to send the error

// Function to add a new item to the database
// It takes name, quantity, and category as input from the request body
// It creates a new item in the database with the given input
const addItemHandler = async (req, res) => {
    const { name, quantity, category } = req.body; // Destructuring the name, quantity, and category from the request body

    // If name, quantity, or category is not provided, it throws an error
    if (!(name || quantity || category)) {
        throw new ApiError(400, "name, quantity and category is required ") // Sending a 400 error if name, quantity, or category is not provided
    }

    // Creating a new item in the database with the given input
    // It returns the newly created item in the response
    const newItem = await itemModel.create({
        name: name,
        quantity: quantity,
        category: category
    })

    // Sending the response with the newly created item
    // It sends a 201 status code with the newly created item
    return res
        .status(201)
        .json(new ApiResponse(201, newItem, 'New Shopping Item Added Successfully'))
}

// Function to get all the items from the database
// It fetches all the items from the database
// It returns all the items in the response
const getAllItemsHandler = async (req, res) => {
    data = await itemModel.find({}) // Fetching all the items from the database
    
    // Sending the response with all the items fetched from the database
    return res
        .status(200) // Sending a 200 status code
        .json(new ApiResponse(200, data, 'All Items Received Succesfully')) // Sending the response with all the items
}

// Function to delete a single item from the database
// It takes the item id as input from the request params
// It deletes the item with the given id from the database
const deleteSingleItemHandler = async (req, res) => {
    const itemId = req.params.id // Getting the item id from the request params

    // If the item id is not provided, it throws an error
    if (!itemId) {
        throw new ApiError(404, 'Invalid Item Id!!') // Sending a 404 error if the item id is not provided
    }

    // Deleting the item with the given id from the database
    const data = await itemModel.deleteOne({ _id: itemId }); // Deleting the item with the given id

    // Sending the response with the item removed from the database
    // It sends a 200 status code with the item removed from
    return res
        .status(200)
        .json(new ApiResponse(200, data, 'Item Removed sucessfully'))
}

// Exporting the functions to be used in the item route
module.exports = {
    addItemHandler,
    getAllItemsHandler,
    deleteSingleItemHandler
}