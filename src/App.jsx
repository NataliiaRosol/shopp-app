import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Header from './components/header/Header'

function App() {


  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/cart' element={<Cart/>}></Route>
      </Routes>
    </div>
  )
}

export default App
