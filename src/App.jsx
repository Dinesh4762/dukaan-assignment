import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import MainDiv from "./components/MainDiv";
import Overview from "./components/Overview"
import Transaction from "./components/Transaction";

const App = () => {
  const [sidebar,setSidebar] = useState(false);

  return (
    <div className="w-full flex relative gap-7">
      <Sidebar setSidebar={setSidebar} sidebar={sidebar}></Sidebar>
      <MainDiv>
        <Navbar setSidebar={setSidebar}></Navbar>
        <Overview></Overview>
        <Transaction></Transaction>
      </MainDiv>
    </div>
  );
};

export default App;
