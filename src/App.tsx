import "./App.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Trending from "./pages/Trending";
import Appointment from "./pages/Appointment";
import Establishments from "./pages/Establishments";
import Help from "./pages/Help";
import Appointments from "./pages/Appointments";
import ProfessionalProfile from "./pages/ProfessionalProfile";
import ClientProfile from "./pages/ClientProfile";
import PriceListPage from "./pages/PriceListPage";
import Settings from "./pages/Settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppointmentProvider } from "./contexts/AppointmentContext";
import { MixProvider } from "./contexts/MixContext";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/trending" element={<Trending />} />
        <Route
          path="/appointment"
          element={
            <AppointmentProvider>
              <MixProvider>
                <Appointment />
              </MixProvider>
            </AppointmentProvider>
          }
        />
        <Route path="/establishments" element={<Establishments />} />
        <Route path="/help" element={<Help />} />
        <Route path="/price-list" element={<PriceListPage />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/professional" element={<ProfessionalProfile />} />
                <Route
          path="/client"
          element={
            <AppointmentProvider>
              <ClientProfile />
            </AppointmentProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
