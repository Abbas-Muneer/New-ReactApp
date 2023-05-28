import './App.css';
import React from 'react';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/pages/Home';
import Services from './component/pages/Services';
import Products from './component/pages/Products';
import SignUp from './component/pages/SignUp';



function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home}> </Route> 
        <Route path='/services' exact Component={Services}> </Route> 
        <Route path='/products' exact Component={Products}> </Route> 
        <Route path='/sign-up' exact Component={SignUp}> </Route>
       
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
