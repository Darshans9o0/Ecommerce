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

const App = () => {
  return (
    <div className='px-4 sm:px-[5vm] md:px[7vm] lg:[9vm]' >
      <NavBar/>

      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/collection' element={<Collection/>}  />
        <Route path='/about' element={<Collection/>}  />
        <Route path='/cart' element={<Collection/>}  />
        <Route path='/login' element={<Collection/>}  />
        <Route path='/place-order' element={<Collection/>}  />
        <Route path='/contact' element={<Collection/>}  />
        <Route path='/product/:product-id' element={<Collection/>}  />
        <Route path='/orders' element={<Collection/>}  />
      </Routes>
      
    </div>
  )
}

export default App
