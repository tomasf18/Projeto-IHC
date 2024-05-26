import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { useAppointmentContext } from "../../../contexts/AppointmentContext";
import { useMixContext } from "../../../contexts/MixContext";

function Confirmed(){
    const{ selectedDate, selectedTime, selectedServiceName, selectedLocalization, selectedProfessional } = useAppointmentContext();
    const { setCreateAppointment } = useMixContext();
    const { reset } = useAppointmentContext();
    const handleClick = () => {
        setCreateAppointment(false);
        reset();
    }
    return (
      <>
        <div className="fixed inset-0 bg-black opacity-50 z-5"></div>
        <div className="pointer-events-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white h-9/12 w-9/12 rounded-xl z-10 shadow-md p-8">
          <div className="flex flex-col items-center justify-center space-y-4 h-full">
              <img src="/public/check.png" alt="Confirmed" className="h-32" />
              <h1 className="text-3xl">Confirmed!</h1>
              <p className="text-center">Your appointment for date <strong>{selectedDate}</strong> at <strong>{selectedTime}</strong>, and for service <strong>{selectedServiceName}</strong>, localization <strong>{selectedLocalization}</strong> and professional <strong>{selectedProfessional}</strong>, has been confirmed successfully. Now you can find it by clicking on <strong>“View Appointments”</strong>.</p>
              <div className="flex flex-row justify-around w-full mt-4">
                  <Link to="/" onClick={handleClick} ><Button color="blue">Back to Home</Button></Link>
                  <Link to="/appointment" onClick={handleClick} ><Button color="success">View Appointments</Button></Link>
              </div>
          </div>
        </div>
      </>
    );
}

export default Confirmed;