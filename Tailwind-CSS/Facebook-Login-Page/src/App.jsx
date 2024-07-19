import React from "react";
import "./App.css";
import Fb from "../src/assets/Facebook.svg";
function App () {
  return (
    <>
    <div className="container mt-44 flex mx-auto items-center justify-center">
      <div className="left w-1/3 mx-14">
        <img src={Fb} alt="Facebook picture" className="w-80"/>
        <p className="text-3xl mx-8">Facebook helps you connect and share with the people in your life.</p>
      </div>
      <div className="right flex flex-col bg-[#FFFFFF] p-4 rounded-xl w-1/4 shadow-xl">
        <input className="px-4 h-12 my-2 border border-1 border-gray-200 rounded outline-blue-600" type="text" placeholder="Email adress or phone number"/>
        <input className="px-4 h-12 my-2 border border-1 border-gray-200 rounded outline-blue-600" type="password" placeholder="Password"/>
        <button className="bg-[#0765FF] pt-3 pb-3 text-white rounded-lg my-2 font-bold hover:bg-blue-600">Log In</button>  
         <span className="text-[#0765FF] text-center my-3 cursor-pointer hover:underline ">Forgotten password?</span>
         <hr className="my-2 mb-4" /> 
         <button className="bg-[#35A420] hover:bg-green-700 rounded-lg pt-3 pb-3 px-4 mx-auto w-fit text-white">Create new Account</button>
      </div>
    </div>
    </>
  ); 
}

export default App;