const blogs = require("./../Model/blogModel.js");

const createBlog = async (req,res)=>{
  
  const blogTitle = req.body.blogTitle;
  const blogDescription = req.body.blogDescription;
  const blogSubtitle = req.body.blogSubtitle;

  if(!blogDescription || !blogSubtitle || !blogTitle){
    console.log('fill all the required fields ');
  }

  await blogs.create({
    blogTitle,
    blogSubtitle,
    blogDescription
  })
    res.status(201).json({
    "message" : "Data post Successfully"
  })

}


const getBlogs = async (req,res)=>{
  const blogss = await blogs.find();
  res.status(200).json({
    message : "Data Fetched Successfully",
    data : blogss
  })
}

const getSingleBlog = async(req,res)=>{
  const id = req.params.id;
  const blog = await blogs.findById(id);
  res.status(200).json({
    message : 'Data Fetched Successfully',
    data : blog
  })
}

const updateBlog = async (req,res)=>{
  const id = req.params.id;
  const {blogTitle , blogSubtitle, blogDescription} = req.body;

  if(!blogDescription || !blogSubtitle || !blogTitle){
    console.log('fill all the required fields ');
  }

  await blogs.findByIdAndUpdate(id,{
    blogTitle,
    blogSubtitle,
    blogDescription
  })
  res.status(201).json({
  "message" : "Data updated Successfully"
  })
}

const deleteBlog = async (req,res)=>{
  const id = req.params.id;

  
  await blogs.findByIdAndDelete(id);

  res.status(200).json({
    message : 'Data Deleted Successfully'
  })
}


module.exports = {
  createBlog,
  getBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog
}