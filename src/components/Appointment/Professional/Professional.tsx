import Indicators from "../Indicators";
import RenderProfessioals from "./RenderProfessionals";
import { useAppointmentContext } from "../../../contexts/AppointmentContext";

function Professional() {
    const { currentStep, nextStep, prevStep, selectedProfessional, setSelectedProfessional } = useAppointmentContext()

    console.log("Professional -> selectedProfessional", selectedProfessional);

    const handleBackClick = () => {
        prevStep();
        setSelectedProfessional(""); // Reset professional selection
    };

    return (
        <>
            <div className="row-span-6 grid grid-rows-6 h-full border-e-2 border-black">
                <Indicators currentStep={currentStep} />
                <div className="row-span-4 flex justify-center items-center text-center">
                    <h1 className="p-2">
                        <i className="fa-solid fa-circle-info pr-2"></i> Select the professional you want to schedule an appointment with
                    </h1>
                </div>
                <span className="row-span-1 flex justify-center items-center text-blue-600 hover:text-blue-700 hover:underline">
                    <a href="/ajuda.html">Need Help?</a>
                </span>
            </div>

            <div className="flex justify-center items-center col-span-5 h-full border-b-2 border-black">
                <h1 className="text-5xl">Professional Selection</h1>
            </div>

            <div className="row-span-4 col-span-5 h-full relative flex flex-col">
                <RenderProfessioals />
            </div>
            <div className="row-span-1 col-span-5 border-t-2 h-full w-full grid grid-cols-8 grid-rows-1">
                    <div className="w-full my-8 md:col-span-2 flex items-center justify-center">
                        <button className="w-8/12 h-full border-2 text-red-500 hover:text-white bg-white hover:bg-red-700 hover:shadow-lg font-medium rounded-lg text-sm
                                                transition-all duration-300 ease-in-out" onClick={handleBackClick}> 
                                                    Back
                        </button>
                    </div>
                    <div className="col-span-4"></div>
                    <div className="w-full my-8 md:col-span-2 flex items-center justify-center">
                        <button className={`w-8/12 h-full text-white bg-cyan-700 hover:bg-cyan-500 hover:shadow-lg font-medium rounded-lg text-sm
                                            transition-all duration-300 ease-in-out ${selectedProfessional === "" ? 'hover:cursor-not-allowed' : ''}`} onClick={selectedProfessional ? nextStep : undefined}> 
                                                    Next
                        </button>
                    </div>
            </div>
        </>
    );
}

export default Professional;
