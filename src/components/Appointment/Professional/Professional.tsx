import RenderProfessioals from "./RenderProfessionals";
import { useAppointmentContext } from "../../../contexts/AppointmentContext";
import LeftColumn from "../LeftColumn";

function Professional() {
    const { nextStep, prevStep, selectedProfessional, setSelectedProfessional } = useAppointmentContext()

    console.log("Professional -> selectedProfessional", selectedProfessional);

    const handleBackClick = () => {
        prevStep();
        setSelectedProfessional(""); // Reset professional selection
    };

    return (
        <>
            <LeftColumn helpText="Select the professional you want to schedule an appointment with." />

            <div className="flex justify-center items-center col-span-5 h-full border-b-2 border-black">
                <h1 className="text-5xl">4. Professional Selection</h1>
            </div>

            <div className="row-span-4 col-span-5 h-full relative flex flex-col">
                <RenderProfessioals />
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
                                            transition-all duration-300 ease-in-out ${selectedProfessional === "" ? 'hover:cursor-not-allowed' : ''}`} onClick={selectedProfessional ? nextStep : undefined}> 
                                                    Next
                        </button>
                    </div>
            </div>
        </>
    );
}

export default Professional;
