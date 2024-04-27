import Indicadores from "../Indicators";

function Summary({
    prevStep,
    currentStep,
    nextStep,
}: {
    prevStep: () => void;
    currentStep: number;
    nextStep: () => void;
}) {
    const estabelecimento = localStorage.getItem("selectedLocal");
    const tipoDeServico = localStorage.getItem("selectedTypeOfServiceName");
    const servico = JSON.parse(localStorage.getItem("selectedService") ?? "");
    const servicoNome = servico.nome;
    const servicoPreco = servico.preco;
    const profissional = localStorage.getItem("selectedProfessional");
    const data = localStorage.getItem("selectedDate");
    const hora = localStorage.getItem("selectedTime");

    return (
        <>
            <div className="grid grid-rows-6 row-span-6 h-full border-r-4 border-slate-600">
                <Indicadores currentStep={currentStep} />
                <div className="grid grid-rows-6 row-span-5 border-2 border-stone-950">
                    <h1 className="row-span-5 flex justify-center items-center text-center">
                        Confirme a marcação
                    </h1>
                    <span className="row-span-1 flex justify-center items-center text-blue-600 hover:text-blue-700 hover:underline">
                        <a href="/ajuda.html">Precisa de ajuda?</a>
                    </span>
                </div>
            </div>

            <div className="flex justify-center items-center col-span-5 h-full border-l-4 border-b-4 border-amber-400">
                <h1 className="text-5xl">Summary da Marcação</h1>
            </div>

            <div className="row-span-5 col-span-5 h-full relative border-l-4 border-4 border-red-600 grid grid-rows-7 justify-items-center">
                <div className="row-span-6 border-4 border-blue-300 my-6 w-11/12 grid grid-cols-3">
                    <div className="col-span-2 border-4 border-gray-700 grid grid-rows-5">
                        <div className="bg-red-200 m-3">
                            <h1 className="text-xs">Estabelecimento</h1>
                            <p className="text-xl">{estabelecimento}</p>
                        </div>
                        <div className="bg-blue-200 m-3">
                            <h1 className="text-xs">Tipo De Serviço</h1>
                            <p className="text-xl">{tipoDeServico}</p>
                        </div>
                        <div className="bg-yellow-200 m-3">
                            <h1 className="text-xs">Serviço</h1>
                            <p className="text-xl">{servicoNome}</p>
                        </div>
                        <div className="bg-green-200 m-3">
                            <h1 className="text-xs">Profissional</h1>
                            <p className="text-xl">{profissional}</p>
                        </div>
                        <div className="bg-gray-200 m-3">
                            <h1 className="text-xs">Data & Hora</h1>
                            <p className="text-xl">
                                {data}, {hora}
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="border-4 border-gray-700 h-full grid grid-rows-1 items-end justify-items-end">
                            <div className="bg-purple-200 m-3">
                                <h1 className="text-xl">
                                    Total: {servicoPreco}€
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row-span-1 border-4 border-yellow-900 p-4 w-full grid grid-cols-8 grid-rows-1">
                    <button className="mr-2 col-span-2" onClick={prevStep}>
                        Voltar
                    </button>
                    <div className="col-span-4"></div>
                    <button className="ml-2 col-span-2 pr-2" onClick={nextStep}>
                        Confirmar
                    </button>
                </div>
            </div>
        </>
    );
}

export default Summary;
