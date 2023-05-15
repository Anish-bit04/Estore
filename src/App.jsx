import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './component/Home'
import Cart from './component/Cart'
import { Provider } from 'react-redux'
import store from './store/store'
import Header from './component/Header'

const App = () => {
  return (
    <div>
    <Provider store={store}>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
    </Provider>
    </div>
  )
}

export default App