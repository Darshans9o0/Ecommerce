import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Cart from './pages/Cart'
import About from './pages/About'
import Login from './pages/Login'
import Order from './pages/Order'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import NavBar from './components/NavBar'
import Fotter from './components/Fotter'
import SearchBar from './components/SearchBar'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vm] md:px[7vm] lg:[9vm]' >
      <NavBar/>
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/collection' element={<Collection/>}  />
        <Route path='/about' element={<About/>}  />
        <Route path='/cart' element={<Cart/>}  />
        <Route path='/login' element={<Login/>}  />
        <Route path='/place-order' element={<PlaceOrder/>}  />
        <Route path='/contact' element={<Contact/>}  />
        <Route path='/product/:product-id' element={<Product/>}  />
        <Route path='/orders' element={<Order/>}  />
      </Routes>
      <Fotter/>
      
    </div>
  )
}

export default App
