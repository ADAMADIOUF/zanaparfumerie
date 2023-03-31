import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Sidebar from './Sidebar'
import Home from './components/Home'
import Shop from './components/Shop'
import SingleProduct from "./components/SingleProduct"
import Footer from './components/Footer'
import About from './components/About'
import TopNav from './components/TopNav'
const App = () => {
  return (
    <BrowserRouter>
    <TopNav/>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/product/:id' element={<SingleProduct />} />
        <Route path='/about/' element={<About />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App