// Home.jsx
import axios from "axios"
import { useEffect,useState } from "react";



export default function Home() {
  const [blogs,setBlogs] = useState([]);

  //function to fetch blogs from the backend
  const fetchBlogs = async ()=>{
    const response = await axios.get("http://localhost:3000/api/blogs")

    console.log(response.data);
  }

  useEffect(()=>{
    fetchBlogs()
  },[])//Empty dependency array to run only once on mount


  return (
    <div className="container">
      <h1 className="main-heading">Blog Management System</h1>

      <div className="blog-grid">
        <div className="blog-card">
          <h2>Blog Title</h2>

          <h4>Blog Subtitle</h4>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, voluptas.
          </p>

          <button className="btn">Read More</button>
        </div>

        <div className="blog-card">
          <h2>Another Blog</h2>

          <h4>Frontend Development</h4>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, voluptas.
          </p>

          <button className="btn">Read More</button>
        </div>
        <div className="blog-card">
          <h2>Blog Title</h2>

          <h4>Blog Subtitle</h4>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, voluptas.
          </p>

          <button className="btn">Read More</button>
        </div>
        
      </div>
    </div>
  );
}