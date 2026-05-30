const express = require('express');
const app = express();
const connectToDatabase = require('./database');
const cors = require("cors");
connectToDatabase();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
 
app.use(cors({
  origin: "http://localhost:5173",
  optionsSuccessStatus : 200
}))


const blogRoutes = require('./Routes/blogRoutes.js');
app.use("/api",blogRoutes);



app.listen(3000,()=>{
  console.log('NodeJs Project has started at 3000 port');
})