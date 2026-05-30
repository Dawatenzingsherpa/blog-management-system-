const mongoose = require("mongoose");
const connectionString = "mongodb://dawa:dawa@ac-00ffko4-shard-00-00.hhs0da5.mongodb.net:27017,ac-00ffko4-shard-00-01.hhs0da5.mongodb.net:27017,ac-00ffko4-shard-00-02.hhs0da5.mongodb.net:27017/?ssl=true&replicaSet=atlas-ai4qkr-shard-0&authSource=admin&appName=Cluster0";

async function connectToDatabase(){
  try{
     await mongoose.connect(connectionString);
    console.log("connected to Database successfully");
  } catch(error){
    console.log(error);
  }
  }
 

module.exports = connectToDatabase;