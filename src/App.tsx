import './App.css'
import Home from './pages/Home'
import Appointment from './pages/Appointment'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/appointment' element={<Appointment />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
