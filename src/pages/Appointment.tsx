import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import MakeAppointment from "../components/Appointment/MakeAppointment";
import { useAppointmentContext } from "../contexts/AppointmentContext";
import Marcação from "../components/ClientPage/MarcaçõesClientes";
import { useState } from "react";

function Appointment() {
  const { confirmed } = useAppointmentContext();
  const [appointment, setAppointment] = useState(false);

  const handleMakeAppointment = () => {
    setAppointment(true);
  }

  return (
    <div className={`${confirmed ? 'pointer-events-none shadow-lg' : ''} z-0 flex flex-col min-h-screen`}>
      <div className="z-20" style={{ paddingBottom: '60.8px' }}>
        <Navbar  />
      </div>
      {!appointment &&  <>
                          <div className="flex-grow bg-gray-100 px-8">
                            <p className="text-4xl w-full mb-8 mt-8">My Appointments</p>
                            <div className="w-full mt-5 mb-4">
                              <Marcação />
                            </div>
                            <div className="w-full flex items-center justify-center">
                              <button className={`w-64 h-10 text-white bg-cyan-700 hover:bg-cyan-500 hover:shadow-lg font-medium rounded-lg text-md
                                              transition-all duration-300 ease-in-out`} onClick={handleMakeAppointment}> 
                                                      <i className="fa-solid fa-plus pr-1"></i> Create New Appointment
                              </button>
                            </div>
                          </div>
                        </>
      }
      {appointment && <div className="flex flex-grow bg-gray-100 justify-center items-center">
                        <MakeAppointment />
                      </div>
      }
      <Footer />
    </div>
  )
}

export default Appointment;
