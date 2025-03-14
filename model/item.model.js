// Purpose: Define the schema for the shopping item.
// Details: This file defines the schema for the shopping item. The schema includes the name, quantity, and category of the item. The schema is then exported as a model.
const monogose = require('mongoose'); // Import mongoose module

// Define the schema for the shopping item with name, quantity, and category
// The schema also includes timestamps for createdAt and updatedAt
const itemSchema = new monogose.Schema({
    name: {
        type: String,
        required: true,
    }, // Name of the item is required
    quantity: {
        type: Number,
        required: true,
    }, // Quantity of the item is required
    category: {
        type: String,
        required: true,
    }, // Category of the item is required 
}, { timestamps: true }) // Include timestamps for createdAt and updatedAt

// Create a model for the shopping item using the item schema and export it
const shoppingItem = monogose.model('ShoppingItem', itemSchema);

module.exports = shoppingItem // Export the shopping item model