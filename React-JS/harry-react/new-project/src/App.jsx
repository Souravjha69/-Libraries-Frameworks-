// import react from "react";

// import About from "./components/About";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import TextForm from "./components/TextForm";
import { useState } from "react";


function App() {

  const [mode, setMode] = useState('dark');


  const toggleMode= () => {
    if (mode === 'dark'){
      setMode('light');
    }else( mode === 'light')
    {
      setMode('dark')
    }
  }
 
  return (
    <>
      <Navbar  tittlename = "TextUtils" mode={mode} toggleMode={toggleMode}/>
      <TextForm heading = "Enter the text to analyze below"/>
      {/* <About/> */}
    </>
  );
}

export default App;
