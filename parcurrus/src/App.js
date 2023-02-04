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
    <GridLoader
    color={color}
    loading={loading}
    size={30}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
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
