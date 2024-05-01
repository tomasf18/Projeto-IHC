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
            <div className="relative grid grid-rows-6 row-span-6 h-full border-r-4 border-slate-600 z-0">
                <Indicators currentStep={currentStep} />
                <div className="grid grid-rows-6 row-span-5 border-2 border-stone-950">
                    <h1 className="row-span-5 flex justify-center items-center text-center">
                        Selecione o Professional que deseja
                    </h1>
                    <span className="row-span-1 flex justify-center items-center text-blue-600 hover:text-blue-700 hover:underline">
                        <a href="/ajuda.html">Precisa de ajuda?</a>
                    </span>
                </div>
            </div>

            <div className="flex justify-center items-center col-span-5 h-full border-l-4 border-b-4 border-amber-400">
                <h1 className="text-5xl">Seleção do Professional</h1>
            </div>

            <div className="row-span-5 col-span-5 h-full relative border-l-4 border-4 border-red-600 flex flex-col">
                <RenderProfessioals />
                <div className="border-4 border-yellow-900 p-4 grid grid-cols-8 grid-rows-1">
                    <button className="mr-2 col-span-2" onClick={handleBackClick}>
                        Voltar
                    </button>
                    <div className="col-span-4"></div>
                    <button
                        className="ml-2 col-span-2 pr-2"
                        onClick={(selectedProfessional !== "") ? nextStep : undefined}
                    >
                        Próximo
                    </button>
                </div>
            </div>
        </>
    );
}

export default Professional;
