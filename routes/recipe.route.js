const express = require("express");
const {recipeModel}=require("../models/recipe.model")
const recipeRouter = express.Router();


// - Post API

recipeRouter.post("/api/recipes", async (req,res) => {
    try {
        const recipe = new recipeModel(req.body);
        await recipe.save();
        res.status(201).json({"recipe":recipe});
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
});

// - Retrieve API

recipeRouter.get("/api/recipes", async (req,res) => {
    try {
        const recipe=await recipeModel.find()       
        res.status(200).json({"recipe":recipe})
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

// - Delete API

recipeRouter.delete("/api/recipes/:id", async (req,res) => {
    try {
        const recipe = await recipeModel.findByIdAndDelete(req.params.id);
        if (!recipe) {
          return res.status(404).json({ error: 'Recipe not found' });
        }
        res.json(recipe);
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
})

// - Filter Data

recipeRouter.get("/filter",async(req,res)=>{
    try {

        const recipe=await recipeModel.find({category: req.query.category});
        res.status(200).json({"recipe":recipe})
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

// - Sort Data

recipeRouter.get("/sort",async(req,res)=>{
    const {price}=req.params;
    try {
       const recipe=await recipeModel.find().sort({price:1});
        res.status(200).json({"recipe":recipe})
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})


// {
//     "name":"Chicken curry",
//     "category":"Main Course",
//     "ingredients":"chicken",
//     "instructions":"pqr",
//     "price":200
//   }


module.exports={recipeRouter}