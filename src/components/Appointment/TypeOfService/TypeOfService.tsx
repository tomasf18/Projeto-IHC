import TypeOfServiceItem from "./TypeOfServiceItem";
import { useAppointmentContext } from "../../../contexts/AppointmentContext";
import LeftColumn from "../LeftColumn";

function TypeOfService() {
    const { nextStep, prevStep, typeOfServiceItems, handleSexChange, isManSelected, selectedTypeOfService, setSelectedTypeOfService, handleDistrictChange } = useAppointmentContext();
    
    console.log("TypeOfService -> selectedTypeOfService", selectedTypeOfService);

    const handleSelectionChange = (isManSelected: boolean) => {
        handleSexChange(isManSelected);

    };

    const handleBackClick = () => {
        prevStep();
        setSelectedTypeOfService(""); // Reset service selection
        handleDistrictChange("--- Select a District ---"); // Reset district selection
    };
    
    const renderServiceItems = () => {
        return (
            <div style={{ maxHeight: '374px' }} className="flex-grow overflow-auto grid grid-cols-3 justify-items-center border-t-2" >
                {typeOfServiceItems.map((item) => (
                    <TypeOfServiceItem
                        key={item.id}
                        cardImage={`https://via.placeholder.com/150`}
                        text={item.text}
                    />
                ))}
            </div>
        );
    };

    return (
        <>
            <LeftColumn helpText="Select the type of service you want to schedule an appointment for." />

            <div className="row-span-1 flex justify-center items-center col-span-5 h-full border-b-2 border-black">
                <h1 className="text-5xl">2. Type Of Service Selection</h1>
            </div>

            <div className="row-span-4 col-span-5 h-full">
                <div className="flex flex-row justify-center items-center">
                    <h1
                        className={`text-xl w-24 border-2 border-black rounded-l-lg px-2 my-2 hover:cursor-pointer hover:text-white hover:shadow-lg font-medium text-center transition-all duration-300 ease-in-out ${
                            isManSelected ? "bg-cyan-700 text-white" : "hover:bg-cyan-500"
                        }`}
                        onClick={() => handleSelectionChange(true)}
                    >
                        Man
                    </h1>
                    <h1
                        className={`text-xl w-24 border-2 border-black rounded-r-lg px-2 my-2 hover:cursor-pointer hover:text-white hover:shadow-lg font-medium text-center transition-all duration-300 ease-in-out ${
                            !isManSelected ? "bg-cyan-700 text-white" : "hover:bg-cyan-500"
                        }`}
                        onClick={() => handleSelectionChange(false)}
                    >
                        Woman
                    </h1>
                </div>

                {renderServiceItems()}

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
                                            transition-all duration-300 ease-in-out ${selectedTypeOfService === "" ? 'hover:cursor-not-allowed' : ''}`} onClick={selectedTypeOfService ? nextStep : undefined}> 
                                                    Next
                        </button>
                    </div>
            </div>
        </>
    );
}

export default TypeOfService;
