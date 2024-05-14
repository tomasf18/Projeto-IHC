import SelectedTypeOfService from "./SelectedTypeOfService";
import { useAppointmentContext } from "../../../contexts/AppointmentContext";
import LeftColumn from "../LeftColumn";

function Service() {
    const { nextStep, prevStep, selectedServiceName, setSelectedServiceName, setSelectedServicePrice } = useAppointmentContext();
    
    console.log("Service -> selectedServiceName", selectedServiceName)

    const handleBackClick = () => {
        prevStep();
        setSelectedServiceName("");
        setSelectedServicePrice(0);
    };

    return (
        <>
            <LeftColumn helpText="Select the service you want to schedule an appointment for." />

            <div className="flex justify-center items-center col-span-5 h-full border-b-2 border-black">
                <h1 className="text-5xl">3. Service Selection</h1>
            </div>

            <div className="row-span-4 col-span-5 h-full relative flex flex-col">
                <SelectedTypeOfService/>
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
                        <button className={`w-8/12 h-full text-white bg-cyan-700 hover:bg-cyan-500 hover:shadow-lg font-medium rounded-lg text-sm
                                            transition-all duration-300 ease-in-out ${selectedServiceName === "" ? 'hover:cursor-not-allowed' : ''}`} onClick={selectedServiceName ? nextStep : undefined}> 
                                                    Next
                        </button>
                    </div>
            </div>
        </>
    );
}

export default Service;