/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import Contact from './Pages/Contact/Contact';
import Rating from './Pages/Rating/Rating';
import Employee from './Pages/Employee/Employee';

const App = () => {
  return (
    <div>
      <Router future={{v7_startTransition: true, v7_relativeSplatPath: true,}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rating" element={<Rating />} />
          <Route path="/employee" element={<Employee />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
