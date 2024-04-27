import { useAppointmentContext } from "../../../contexts/AppointmentContext";

// Item.tsx
function ServiceItem({ cardImage, text, preco }: { cardImage: string, text: string, preco: number }) {
    const { setSelectedServiceName, setSelectedServicePrice, selectedServiceName } = useAppointmentContext();
    
    const handleServiceSelection = () => {
        setSelectedServiceName(text);
        setSelectedServicePrice(preco);
    };

    return (
        <div onClick={handleServiceSelection} className={`flex rounded-xl border border-gray-200 shadow-md dark:border-gray-700 flex-col h-56 w-52 m-2 hover:cursor-pointer hover:text-white hover:bg-slate-300 ${(selectedServiceName === text) ? 'bg-slate-500 hover:bg-slate-500' : 'bg-white '}`}>
            <img src={cardImage} alt={text} className="rounded-t-lg h-32 mx-2 mt-2 object-cover" />
            <div className="flex h-full flex-col justify-center gap-4 p-6">
                <div className="flex flex-col justify-center items-center">
                    <p className="text-center text-sm font-medium text-black">{text}</p>
                    <p className="text-center text-sm font-medium text-black">{preco}€</p>
                </div>
            </div>
        </div>
    );
}

export default ServiceItem;
