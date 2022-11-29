import React from 'react';
import Home from './home/Home';
import Market from "./market/Market";

import Industries from "./industries/Industries"
import { 
  BrowserRouter, 
  Routes, Route 
   } from 'react-router-dom';

import Navbar from "../Components/Navbar"
import Memoriam from './memoriam/Memoriam';



function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/home" element={<Home/>}/>
        <Route path="/market" element={<Market/>}/>
        <Route path="/memoriam" element={<Memoriam/>}/>
        <Route path="/industries" element={<Industries/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default Router;