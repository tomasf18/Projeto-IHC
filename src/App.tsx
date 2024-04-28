import './App.css'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Trending from './pages/Trending'
import Appointment from './pages/Appointment'
import Establishments from './pages/Establishments'
import Help from './pages/Help'
import Appointments from './pages/Appointments'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/establishments' element={<Establishments />} />
        <Route path='/help' element={<Help />} />
        <Route path='/appointments' element={<Appointments />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
