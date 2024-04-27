import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import MakeAppointment from "../components/Appointment/MakeAppointment";
import { AppointmentProvider } from "../contexts/AppointmentContext";

function Appointment() {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
          <div className="flex flex-grow justify-center items-center border-4 border-blue-500">
          <AppointmentProvider>
            <MakeAppointment />
          </AppointmentProvider>  
          </div>
        <Footer />
    </div>
  )
}

export default Appointment;
