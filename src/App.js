import React,{useState ,useEffect} from "react"
import Home from "./components/Home";
import About from "./components/About";
import "./App.css"
import Footer from "./components/Footer"
import GridLoader from "react-spinners/GridLoader";
import Navbar from "./components/Navbar";

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
 <Navbar />
  <Home />
  <About />
   <Footer />
  
</div>
}

  
 </div>
  )
}
