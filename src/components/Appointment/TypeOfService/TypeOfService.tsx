import Indicators from "../Indicators";
import TypeOfServiceItem from "./TypeOfServiceItem";
import { useAppointmentContext } from "../../../contexts/AppointmentContext";

function TypeOfService() {
    const { currentStep, nextStep, prevStep, typeOfServiceItems, handleSexChange, isManSelected, selectedTypeOfService, setSelectedTypeOfService, handleDistrictChange } = useAppointmentContext();
    
    console.log("TypeOfService -> selectedTypeOfService", selectedTypeOfService);

    const handleSelectionChange = (isManSelected: boolean) => {
        handleSexChange(isManSelected);

    };

    const handleBackClick = () => {
        prevStep();
        setSelectedTypeOfService(""); // Reset service selection
        handleDistrictChange("Escolha um distrito"); // Reset district selection
    };
    
    const renderServiceItems = () => {
        return (
            <div style={{ maxHeight: "332px" }} className="border-4 border-violet-800 flex-grow overflow-auto grid grid-cols-3 justify-items-center" >
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
            <div className="grid grid-rows-6 row-span-6 h-full border-r-4 border-slate-600">
                <Indicators currentStep={currentStep} />
                <div className="grid grid-rows-6 row-span-5 border-2 border-stone-950">
                    <h1 className="row-span-5 flex justify-center items-center text-center">
                        Selecione o tipo de serviço que pretende
                    </h1>
                    <span className="row-span-1 flex justify-center items-center text-blue-600 hover:text-blue-700 hover:underline">
                        <a href="/ajuda.html">Precisa de ajuda?</a>
                    </span>
                </div>
            </div>

            <div className="flex justify-center items-center col-span-5 h-full border-l-4 border-b-4 border-amber-400">
                <h1 className="text-5xl">Seleção do Tipo de Serviço</h1>
            </div>

            <div className="row-span-5 col-span-5 h-full relative border-l-4 border-4 border-red-600 flex flex-col">
                <div className="flex flex-row justify-center items-center border-4 border-gray-600">
                    <h1
                        className={`text-xl border-2 border-black rounded-l-lg px-2 my-2 hover:cursor-pointer hover:bg-slate-300 ${
                            isManSelected ? "bg-slate-500 text-white" : ""
                        }`}
                        onClick={() => handleSelectionChange(true)}
                    >
                        Homem
                    </h1>
                    <h1
                        className={`text-xl border-2 border-black rounded-r-lg px-2 my-2 hover:cursor-pointer hover:bg-slate-300 ${
                            !isManSelected ? "bg-slate-500 text-white" : ""
                        }`}
                        onClick={() => handleSelectionChange(false)}
                    >
                        Mulher
                    </h1>
                </div>

                {renderServiceItems()}

                <div className="border-4 border-yellow-900 p-4 grid grid-cols-8 grid-rows-1">
                    <button className="mr-2 col-span-2" onClick={handleBackClick}>
                        Voltar
                    </button>
                    <div className="col-span-4"></div>
                    <button
                        className="ml-2 col-span-2 pr-2"
                        onClick={selectedTypeOfService ? nextStep : undefined}
                    >
                        Próximo
                    </button>
                </div>
            </div>
        </>
    );
}

export default TypeOfService;
