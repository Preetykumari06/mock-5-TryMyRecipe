const mongoose=require("mongoose");

const recipeSchema=mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    category: {
        type:String,
        enum:["Starters", "Main Course", "Desserts"], 
        required:true
    },
    ingredients: {
        type:String,
        required:true,
    },
    instructions: {
        type:String,
        required:true,
    },
    price: {
        type:Number,
        required:true,
    },
});

const recipeModel=mongoose.model("recipe",recipeSchema);

module.exports = {recipeModel};

// - Recipe Name
// - Category (select tag with Starters, Main Course and Desserts as options)
// - Ingredients (a textarea where users can enter a list of ingredients)
// - Instructions (a textarea where users can enter instructions for the recipe)
// - Price