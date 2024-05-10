import { useAppointmentContext } from "../../../contexts/AppointmentContext";

function Time({ id, valor, list }: { id: string, valor: string, list: number[]}) {
    const { selectedTime, setSelectedTime } = useAppointmentContext(); 

    const handleClick = () => {
        setSelectedTime(valor);
    };
    
    return (
        <>
            {list.includes(parseInt(id)) && <div className="w-full flex items-center justify-center">
                <button className={`w-full h-full border-2 font-medium rounded-lg text-sm pointer-events-none bg-red-400 text-white`} onClick={handleClick}> 
                            {valor}
                </button>
            </div>}
            {!list.includes(parseInt(id)) && <div className="w-full flex items-center justify-center">
                <button className={`w-full h-full border-2 hover:shadow-lg font-medium rounded-lg text-sm
                                    transition-all duration-300 ease-in-out ${selectedTime === valor ? 'bg-cyan-700 text-white hover:bg-cyan-700 ' : 'hover:bg-cyan-200 bg-white text-cyan-700'}`} onClick={handleClick}> 
                            {valor}
                </button>
            </div>}
        </>
    );
}

export default Time;