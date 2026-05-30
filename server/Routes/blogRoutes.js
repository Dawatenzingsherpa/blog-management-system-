const { createBlog, getBlogs, updateBlog, deleteBlog, getSingleBlog } = require('../controller/blogController');


const router = require('express').Router();

router.route("/blogs").post(createBlog).get(getBlogs);

router.route("/blogs/:id").patch(updateBlog).delete(deleteBlog).get(getSingleBlog);


module.exports = router;