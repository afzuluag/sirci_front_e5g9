import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Init from "./components/Init";
//import SideBar from "./components/Sidebar";


function App() {
  //return <Init />;
  //return <SideBar />;
  //return <RegistroUser />;
  //return <ModalLink />;

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Init />} />
        
      </Routes>
    </div>
  );
}

export default App;
