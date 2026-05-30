const Create = () =>{
  return (
    <>
    <div className="container">
      <h1 className="main-heading">Create Blog</h1>

      <form className="blog-form">
        <input type="text" placeholder="Enter Title" />

        <input type="text" placeholder="Enter Subtitle" />

        <textarea
          rows="6"
          placeholder="Enter Blog Description"
        ></textarea>

        <input
        type = "submit"
        className="btn">
        </input>
        
      </form>
    </div>
    </>
  )
}

export default Create