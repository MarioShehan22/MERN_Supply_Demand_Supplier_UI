import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import React from "react";
import PlaceSupplyPage from "./pages/PlaceSupplyPage";
import SupplyDetailsPage from "./pages/SupplyDetailsPage";
import AboutUsPage from "./pages/AboutUsPage";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/place-supply" element={<PlaceSupplyPage/>}/>
          <Route path="/about-us" element={<AboutUsPage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/supply" element={<SupplyDetailsPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
