import { Link } from "react-router-dom";
import { useAppointmentContext } from "../../contexts/AppointmentContext";
import { useMixContext } from "../../contexts/MixContext";
import Indicators from "./Indicators";

function LeftColumn({ helpText } : { helpText: string }) {

    const { currentStep, reset } = useAppointmentContext();

    const { setCreateAppointment } = useMixContext();

    const handleBackToAppointments = () => {
        reset();
        setCreateAppointment(false);
    }

    return (
        <div className="row-span-6 grid grid-rows-6 h-full border-e-2 border-black">
            <Indicators currentStep={currentStep} />
            <div className="row-span-1"></div>
            <div className="row-span-2 flex justify-center items-center text-center">
                <h1 className="p-2">
                    <i className="fa-solid fa-circle-info pr-2"></i> {helpText}
                </h1>
            </div>
            <span className="row-span-1 flex justify-center items-center text-blue-600 hover:text-blue-700 hover:underline">
                <Link to="/help">Need Help?</Link>
            </span>
            <div className="row-span-1 flex items-center justify-center">
                    <button className={`w-44 h-10 text-white bg-cyan-700 hover:bg-cyan-500 hover:shadow-lg font-medium rounded-lg text-sm
                                        transition-all duration-300 ease-in-out`} onClick={handleBackToAppointments}> 
                                                Back to My Appointments
                    </button>
            </div>
        </div>
    );
}

export default LeftColumn;