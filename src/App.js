import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import About from "./components/About";
import "./App.css";
import Footer from "./components/Footer";
// import GridLoader from "react-spinners/GridLoader";
import Navbar from "./components/Navbar";
import "./components/style.css";
import Preloader from "./components/Preloader";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#ffffff");
  useEffect(() => {
    // setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 2100);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <Navbar />
          <Home />
          {/* <About /> */}
          <Footer />
        </div>
      )}
    </div>
  );
}
