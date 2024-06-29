// import react from "react";

// import About from "./components/About";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import TextForm from "./components/TextForm";

function App() {

 
  return (
    <>
      <Navbar  tittlename = "TextUtils"/>
      <TextForm heading = "Enter the text to analyze below"/>
      {/* <About/> */}
    </>
  );
}

export default App;
