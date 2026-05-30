const mongoose = require("mongoose");

const blogScheme = new mongoose.Schema({
  blogTitle : {
    type : String
  },
  blogSubTitle : { 
    type : String
  },
  blogDescription : {
    type : String
  }
} )

  


const blogs = mongoose.model("blogs",blogScheme);
module.exports = blogs;