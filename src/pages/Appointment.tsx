import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import MakeAppointment from "../components/Appointment/MakeAppointment";
import { useAppointmentContext } from "../contexts/AppointmentContext";

function Appointment() {
  const { confirmed } = useAppointmentContext();

  return (
    <div className={`${confirmed ? 'pointer-events-none shadow-lg' : ''} z-0 flex flex-col min-h-screen`}>
      <div className="z-10">
        <Navbar  />
      </div>
            <div className="flex flex-grow bg-gray-100 justify-center items-center" style={{ paddingTop: '60.8px' }}>
              <MakeAppointment />
            </div>
        <Footer />
    </div>
  )
}

export default Appointment;
