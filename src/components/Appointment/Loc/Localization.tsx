import { useAppointmentContext } from "../../../contexts/AppointmentContext";
import Indicators from "../Indicators";
import Dropdown from "./Dropdown";
import Mapa from "./Map";

function Localization() {
    const { currentStep, nextStep, isDropdownHidden, selectedDistrict, cabeleireirosPorDistrito } = useAppointmentContext();

    console.log("Localization -> selectedDistrict", selectedDistrict);
    
    return (
        <>
            <div className="grid grid-rows-6 row-span-6 h-full border-r-4 border-slate-600">
                <Indicators currentStep={currentStep} />
                <div className="grid grid-rows-6 row-span-5 border-2 border-stone-950">
                    <h1 className="row-span-5 flex justify-center items-center text-center">
                        Selecione o estabelecimento no qual pretende efetuar a
                        marcação
                    </h1>
                    <span className="row-span-1 flex justify-center items-center text-blue-600 hover:text-blue-700 hover:underline">
                        <a href="/ajuda.html">Precisa de ajuda?</a>
                    </span>
                </div>
            </div>
            <div className="flex justify-center items-center col-span-5 h-full border-l-4 border-b-4 border-amber-400">
                <h1 className="text-5xl">Seleção de Estabelecimento</h1>
            </div>

            <div className="row-span-5 col-span-5 h-full relative border-l-4 border-4 border-red-600">
                <Dropdown />

                {isDropdownHidden &&
                    !(selectedDistrict === "Escolha um distrito") && (
                        <div className="row-span-4 flex justify-center items-center mt-5 rounded-3xl border-4 border-red-950">
                            <Mapa />
                        </div>
                    )}

                {isDropdownHidden &&
                    !(selectedDistrict === "Escolha um distrito") && (
                        <div className="absolute bottom-0 inset-x-0 grid grid-cols-8 grid-rows-1 border-4 border-yellow-900 p-4">
                            <div className="col-span-6">
                                {cabeleireirosPorDistrito[
                                    selectedDistrict
                                ].replace(/\+/g, " ")}
                            </div>
                            <button className="col-span-2" onClick={nextStep}>
                                Próximo
                            </button>
                        </div>
                    )}
            </div>
        </>
    );
}

export default Localization;
