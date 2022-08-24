import { AnimatePresence } from 'framer-motion'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Base from './Components/Base/Base'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Order from './Components/Order/Order'
import Toppings from './Components/Toppings/Toppings'

function App() {
  let location = useLocation();
  return (
    <div className="App">
      <Header />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/base' element={<Base />} />
          <Route path='/toppings' element={<Toppings />} />
          <Route path='/order' element={<Order />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
