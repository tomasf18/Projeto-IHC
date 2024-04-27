import "flowbite";
import DateComponent from "./DateComponent";
import Indicators from "../Indicators";

function DateTime({
    prevStep,
    currentStep,
    nextStep,
}: {
    prevStep: () => void;
    currentStep: number;
    nextStep: () => void;
}) {
    return (
        <>
            <div className="grid grid-rows-6 row-span-6 h-full border-r-4 border-slate-600">
                <Indicators currentStep={currentStep} />
                <div className="grid grid-rows-6 row-span-5 border-2 border-stone-950">
                    <h1 className="row-span-5 flex justify-center items-center text-center">
                        Selecione a data e a hora que deseja
                    </h1>
                    <span className="row-span-1 flex justify-center items-center text-blue-600 hover:text-blue-700 hover:underline">
                        <a href="/ajuda.html">Precisa de ajuda?</a>
                    </span>
                </div>
            </div>

            <div className="flex justify-center items-center col-span-5 h-full border-l-4 border-b-4 border-amber-400">
                <h1 className="text-5xl">Seleção de Data & Hora</h1>
            </div>

            <div className="row-span-5 col-span-5 h-full relative border-l-4 border-4 border-red-600">
                <DateComponent />

                <div className="absolute bottom-0 inset-x-0 border-4 border-yellow-900 p-4 grid grid-cols-8 grid-rows-1">
                    <button className="mr-2 col-span-2" onClick={prevStep}>
                        Voltar
                    </button>
                    <div className="col-span-4"></div>
                    <button className="ml-2 col-span-2 pr-2" onClick={nextStep}>
                        Próximo
                    </button>
                </div>
            </div>
        </>
    );
}

export default DateTime;
