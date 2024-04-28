import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import MakeAppointment from "../components/Appointment/MakeAppointment";
import { useAppointmentContext } from "../contexts/AppointmentContext";

function Appointment() {
  const { confirmed } = useAppointmentContext();

  return (
    <div className={`${confirmed ? 'pointer-events-none shadow-lg' : ''} z-0 flex flex-col min-h-screen`}>
        <Navbar />
            <div className="flex flex-grow justify-center items-center border-4 border-blue-500">
              <MakeAppointment />
            </div>
        <Footer />
    </div>
  )
}

export default Appointment;
