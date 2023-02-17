import React,{useState ,useEffect} from "react"
import Home from "./components/Home"
import "./App.css"
import Footer from "./components/Footer"
import GridLoader from "react-spinners/GridLoader";
import Navbar from "./components/Navbar";
import Call from "./components/Call";
import Embedd from "./components/Embedd";
import "./components/style.css"


export default function App() {
  const [loading, setLoading]= useState(false);
  const [color, setColor] = useState("#ffffff");
  useEffect(()=>{
    setLoading(true) 
    setTimeout(()=>{
      setLoading(false)
    },2000)
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
  <Embedd />

 
 <Footer />
  
</div>
}

  
 </div>
  )
}
