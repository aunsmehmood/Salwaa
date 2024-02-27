// App.js
import React from "react";
import BeautifulLayout from "./components/Layout";
import Parposal from "./components/Parposal";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Yes from "./components/Yes"; 
import No from "./components/No";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BeautifulLayout/>}/>
          <Route path="/parposal" element={<Parposal/>}/>
          <Route path="/yes" element={<Yes/>}/>
          <Route path="/no" element={<No/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
