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
  };

  return (
    <div
      className={`${
        confirmed ? "pointer-events-none shadow-lg" : ""
      } z-0 flex flex-col min-h-screen`}
    >
      <div className="z-20">
        <Navbar />
      </div>
      {!appointment && (
        <>
          <div
            className="flex-grow bg-gray-100 px-8 mt-8"
            style={{ paddingTop: "60.8px" }}
          >
            <div className="bg-white rounded-xl p-8 mb-8 min-h-160 shadow-lg">
              <div className="flex flex-wrap items-center justify-between">
                <h2 className="text-4xl font-semibold mb-4">My Appointments</h2>
                <button
                  className={`w-64 h-10 text-white bg-cyan-700 hover:bg-cyan-500 hover:shadow-lg font-medium rounded-lg text-md
                                              transition-all duration-300 ease-in-out`}
                  onClick={handleMakeAppointment}
                >
                  <i className="fa-solid fa-plus pr-1"></i> Create New
                  Appointment
                </button>
              </div>
              <div className="w-full mt-5 mb-4">
                <Marcação />
              </div>
            </div>
          </div>
        </>
      )}
      {appointment && (
        <>
          <div className="flex flex-grow bg-gray-100 justify-center items-center">
            <MakeAppointment />
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

export default Appointment;
