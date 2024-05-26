import { useAppointmentContext } from "../../../contexts/AppointmentContext";
import LeftColumn from "../LeftColumn";

function Summary() {
    const { prevStep, selectedLocalization, selectedTypeOfService, selectedServiceName, selectedServicePrice, 
        selectedProfessional, selectedDate, selectedTime, setSelectedDate, setSelectedTime, setConfirmed } = useAppointmentContext();
    
    const handleBackClick = () => {
        prevStep();
        setConfirmed(false);
        setSelectedDate(""); // Reset date selection
        setSelectedTime(""); // Reset time selection;
    };

    const handleConfirmClick = () => {
        setConfirmed(true);
        let userAppointment = {
            localization: selectedLocalization,
            typeOfService: selectedTypeOfService,
            serviceName: selectedServiceName,
            servicePrice: selectedServicePrice,
            professional: selectedProfessional,
            date: selectedDate,
            time: selectedTime,
        };

        let userAppointments = JSON.parse(localStorage.getItem('userAppointments') || '[]');
        userAppointments.push(userAppointment)
        localStorage.setItem("userAppointments", JSON.stringify(userAppointments))
    };

    return (
        <>
            <LeftColumn helpText="Confirm the appointment details." />

            <div className="flex justify-center items-center col-span-5 h-full border-b-2 border-black">
                <h1 className="text-5xl">6. Appointment Summary</h1>
            </div>

            <div className="row-span-4 col-span-5 h-full relative flex flex-col justify-center items-center">
                <div className="row-span-6 my-6 w-1/2 grid grid-cols-3 bg-gray-100 rounded-xl">
                    <div className="col-span-2 grid grid-rows-5 border-r border-r-black my-2">
                        <div className="m-3">
                            <h1 className="text-xs">Establishment</h1>
                            <p className="text-xl">{selectedLocalization}</p>
                        </div>
                        <div className="m-3">
                            <h1 className="text-xs">Type of Service</h1>
                            <p className="text-xl">{selectedTypeOfService}</p>
                        </div>
                        <div className="m-3">
                            <h1 className="text-xs">Service</h1>
                            <p className="text-xl">{selectedServiceName}</p>
                        </div>
                        <div className="m-3">
                            <h1 className="text-xs">Professional</h1>
                            <p className="text-xl">{selectedProfessional}</p>
                        </div>
                        <div className="m-3">
                            <h1 className="text-xs">Date & Time</h1>
                            <p className="text-xl">
                                {selectedDate}, {selectedTime}
                            </p>
                        </div>
                    </div>

                    <div className="col-span-1h-full grid grid-rows-1 items-end justify-items-end my-2">
                        <div className="m-3">
                            <h1 className="text-xl">
                                Total: {selectedServicePrice}€
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row-span-1 col-span-5 border-t-2 h-full w-full grid grid-cols-8 grid-rows-1">
                    <div className="w-full my-8 md:col-span-2 flex items-center justify-center">
                        <button className="w-8/12 h-full border-2 text-cyan-700 bg-white hover:bg-cyan-500 hover:text-white hover:shadow-lg font-medium rounded-lg text-sm
                                            transition-all duration-300 ease-in-out" onClick={handleBackClick}> 
                                                    Back
                        </button>
                    </div>
                    <div className="col-span-4"></div>
                    <div className="w-full my-8 md:col-span-2 flex items-center justify-center">
                        <button className={`w-8/12 h-full text-white bg-green-400 hover:bg-cyan-200 hover:shadow-lg font-medium rounded-lg text-sm
                                            transition-all duration-300 ease-in-out`} onClick={handleConfirmClick}> 
                                                    Confirm Appointment
                        </button>
                    </div>
            </div>
        </>
    );
}

export default Summary;
