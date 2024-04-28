import './App.css'
import Home from './pages/Home'
import Appointment from './pages/Appointment'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppointmentProvider } from './contexts/AppointmentContext';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/appointment' element={
            <AppointmentProvider>
                <Appointment />
            </AppointmentProvider>  
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
