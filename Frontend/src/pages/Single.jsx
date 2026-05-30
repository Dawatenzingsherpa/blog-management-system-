import { Link } from "react-router-dom"

const Single = () => {
  return (
    <>
    <div className="container">
      <div className="single-blog">
        <h1>React Blog System</h1>

        <h3>Learning MERN Stack</h3>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Doloremque laboriosam reprehenderit cumque modi obcaecati
          distinctio error animi quisquam illo dolorem.
        </p>
       
        <Link to = "/"><button className="btn">Back</button></Link>
      </div>
    </div>
    </>
  )
}

export default Single
