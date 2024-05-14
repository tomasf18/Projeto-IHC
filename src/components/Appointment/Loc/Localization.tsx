import { useAppointmentContext } from "../../../contexts/AppointmentContext";
import Dropdown from "./Dropdown";
import Mapa from "./Map";
import LeftColumn from "../LeftColumn";

function Localization() {
    const { nextStep, isDropdownHidden, selectedDistrict, establishmentsPerDistrict } = useAppointmentContext();

    console.log("Localization -> selectedDistrict", selectedDistrict);
    
    return (
        <>
            <LeftColumn helpText="Select the establishment where you want to make an appointment." />

            <div className="row-span-1 flex justify-center items-center col-span-5 h-full border-b-2 border-black">
                <h1 className="text-5xl">1. Establishment Selection</h1>
            </div>

            <div className="row-span-4 col-span-5 h-full">
                <Dropdown />

                {isDropdownHidden &&
                    !(selectedDistrict === "--- Select a District ---") && (
                        <div className="flex justify-center items-center mt-8 bg-gray-200 rounded-3xl shadow-lg md:m-7">
                            <Mapa />
                        </div>
                    )}

            </div>
            {isDropdownHidden &&
                !(selectedDistrict === "--- Select a District ---") && (
                    <div className="row-span-1 col-span-5 w-full h-full grid grid-cols-8 grid-rows-1 border-t-2">
                        <div className="col-span-5 lg:col-span-4 pl-4 text-center flex flex-col justify-center items-center">
                            <h1 className="text-xs"><i className="fa-solid fa-location-dot pr-1"></i> Selected Establishment</h1> 
                            <p className="text-2xl">{establishmentsPerDistrict[selectedDistrict].replace(/\+/g, " ")}</p>
                        </div>
                        <div className="hidden md:block md:col-span-1 lg:col-span-2"></div>
                        <div className="w-full my-8 md:col-span-2 flex items-center justify-center">
                            <button className="w-8/12 h-full text-white bg-cyan-700 hover:bg-cyan-500 hover:shadow-lg font-medium rounded-lg text-sm
                                                transition-all duration-300 ease-in-out" onClick={nextStep}> 
                                                        Next
                            </button>
                        </div>
                    </div>
                )}
        </>
    );
}

export default Localization;
