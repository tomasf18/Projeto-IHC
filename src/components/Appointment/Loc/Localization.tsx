import { Link } from "react-router-dom";
import { useAppointmentContext } from "../../../contexts/AppointmentContext";
import Indicators from "../Indicators";
import Dropdown from "./Dropdown";
import Mapa from "./Map";

function Localization() {
    const { currentStep, nextStep, isDropdownHidden, selectedDistrict, cabeleireirosPorDistrito } = useAppointmentContext();

    console.log("Localization -> selectedDistrict", selectedDistrict);
    
    return (
        <>
            <div className="grid grid-rows-6 row-span-6 h-full">
                <Indicators currentStep={currentStep} />
                <div className="grid grid-rows-6 row-span-5 border-e-2 border-black">
                    <h1 className="row-span-5 flex justify-center items-center text-center">
                        Selecione o estabelecimento no qual pretende efetuar a
                        marcação
                    </h1>
                    <span className="row-span-1 flex justify-center items-center text-blue-600 hover:text-blue-700 hover:underline">
                        <Link to="/help">Precisa de ajuda?</Link>
                    </span>
                </div>
            </div>

            <div className="row-span-1 flex justify-center items-center col-span-5 h-full border-b-2 border-black">
                <h1 className="text-5xl">Seleção de Estabelecimento</h1>
            </div>

            <div className="row-span-4 col-span-5 h-full">
                <Dropdown />

                {isDropdownHidden &&
                    !(selectedDistrict === "Escolha um distrito") && (
                        <div className="flex justify-center items-center mt-8 bg-gray-200 rounded-3xl shadow-lg md:m-7">
                            <Mapa />
                        </div>
                    )}

            </div>
            {isDropdownHidden &&
                !(selectedDistrict === "Escolha um distrito") && (
                    <div className="row-span-1 col-span-5 w-full h-full grid grid-cols-1 md:grid-cols-8 grid-rows-2 md:grid-rows-1 border-2">
                        <div className="col-span-5 lg:col-span-4 pl-4 text-center flex flex-col justify-center items-center">
                            <h1 className="text-xs"><i className="fa-solid fa-location-dot pr-1"></i> Estabelecimento selecionado</h1> 
                            <p className="text-2xl">{cabeleireirosPorDistrito[selectedDistrict].replace(/\+/g, " ")}</p>
                        </div>
                        <div className="hidden md:block md:col-span-1 lg:col-span-2"></div>
                        <button className="w-full md:col-span-2 flex items-center justify-center" onClick={nextStep}>
                            Próximo
                        </button>
                    </div>
                )}
        </>
    );
}

export default Localization;
