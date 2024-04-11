import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import MainDiv from "./components/MainDiv";
import Overview from "./components/Overview"
import Transaction from "./components/Transaction";

const App = () => {
  return (
    <div className="w-full flex relative">
      <Sidebar></Sidebar>
      <MainDiv>
        <Navbar></Navbar>
        <Overview></Overview>
        <Transaction></Transaction>
      </MainDiv>  
    </div>
  );
};

export default App;
