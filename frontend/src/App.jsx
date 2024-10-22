import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route,Routes } from 'react-router'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <><div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/order' element={<PlaceOrder />}></Route>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App
