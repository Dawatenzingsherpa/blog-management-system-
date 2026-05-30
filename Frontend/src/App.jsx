import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Home from "./pages/Home.jsx"
import Create from "./pages/Create.jsx"
import Single from "./pages/Single.jsx"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/create" element = {<Create/>}/>
        <Route path = "/single" element = {<Single/>}/>
      </Routes>

      <Footer/>
      

    </BrowserRouter>

    
    </>
  )
}

export default App
