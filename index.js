const express=require("express");
const {connection}=require("./config/db")
require('dotenv').config()

const port=process.env.PORT || 4000;

const app=express()
app.use(express.json())

app.get("/", (req,res) => {
    res.send("Welcome To Try My Receipe Backend Routes")
})

app.listen(port, async () => {
  try{
    await connection;
    console.log("Connected to the DB...")
  } catch(error){
    console.log(error.message)
    console.log("Something went wrong...")
  }

  console.log(`Server is running at ${port}`)
});