import React,{useState ,useEffect} from "react"
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import "./App.css"
import Footer from "./components/Footer"
import GridLoader from "react-spinners/GridLoader";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "./components/style.css"


export default function App() {
  const [loading, setLoading]= useState(false);
  const [color, setColor] = useState("#ffffff");
  useEffect(()=>{
    setLoading(true) 
    setTimeout(()=>{
      setLoading(false)
    },100)
  },[])
  return (
 <div className="App">
  {
    loading ?
    <div className="fixed m-0 p-0 left-[48%] top-[45%] ">
      <GridLoader className=""
    color={color}
    loading={loading}
    size={25}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
  </div>    
  :
<div>
 <Router>
  <Navbar />
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/home" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/services" element={<Services/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
      <Route exact path="*" Component={NotFound}/>
     </Routes>
     <Footer />
  </Router>
   
  
</div>
}
</div>
  )
}
