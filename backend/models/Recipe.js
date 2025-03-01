const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    recipeName: { type: String, required: true },
    imageURL: { type: String, required: true },
    process: { type: String, required: true }, // Description of the recipe
    createdAt: { type: Date, default: Date.now } // Optional timestamp
});

module.exports = mongoose.model('Recipe', RecipeSchema);
