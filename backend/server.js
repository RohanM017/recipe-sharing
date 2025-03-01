const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const User=require('./models/User')
const Recipe = require('./models/Recipe');
const bcrypt=require('bcryptjs')

const app=express()
const PORT=3000
app.use(express.json());

//home page api
app.get('/',(req,resp)=>{
      resp.send("<h1>Welcome to MERN project</h1>")
})

//Registration Page API
app.post('/register',async(req,resp)=>{
      const {username,email,password}=req.body
      try{
            const hashedPassword=await bcrypt.hash(password,10)
            const user=new User({username,email,password:hashedPassword})
            await user.save()
            resp.json({messgae:"User Registered..."})
            console.log("User registered successfully...")
      }catch(err){
            console.log(err)
      }
})
//Login Page
app.post('/login',async(req,resp)=>{
      const {email,password}=req.body
      try{
            const user=await User.findOne({email});
            if(!user || !(await bcrypt.compare(password,user.password))){
                  return resp.status(400).json({message:"Invalid Credentials"});
            }
            resp.json({message: "Login Successfully" ,username:user.username})
      }catch(err){
            console.log(err)
      }
})
//AddRecipe
app.post('/add-recipe', async (req, res) => {
      try {
          const { recipeName, imageURL, process } = req.body;
  
          if (!recipeName || !imageURL || !process) {
              return res.status(400).json({ message: "All fields are required" });
          }
  
          const newRecipe = new Recipe({ recipeName, imageURL, process });
          await newRecipe.save();
  
          res.status(201).json({ message: "Recipe added successfully", recipe: newRecipe });
      } catch (error) {
          res.status(500).json({ message: "Server Error", error: error.message });
      }
  });
  
mongoose.connect(process.env.MONGO_URL).then(
      ()=>console.log(" DB created Successfully")
).catch(
      (err)=>console.log(err)
)
app.listen(PORT,(err)=>{
      if(err){
            console.log(err)
      }
      console.log("Server is running on port :",PORT)
})