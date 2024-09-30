

import '@fortawesome/fontawesome-free/css/all.css';
import React from 'react'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Home'
// import Productdetails from './Pages/ProducrDetails'
// import Cart from './Components/Cart'
// import Footer from './Components/Footer'
import Productdetails from './Pages/ProducrDetails';
import Cart from '../src/Components/Cart'


function App() {
  return (
    <>
      <div>
       <Navbar />
       <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/product/:id' element={<Productdetails />} />
        <Route path='/Cart' element={<Cart />} />
      </Routes>
    
      </div>
    </>
  );
}

export default App;
