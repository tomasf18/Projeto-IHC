import { useAppointmentContext } from "../../../contexts/AppointmentContext";

// Item.tsx
function ServiceItem({ cardImage, text, preco }: { cardImage: string, text: string, preco: number }) {
    const { setSelectedServiceName, setSelectedServicePrice, selectedServiceName } = useAppointmentContext();
    
    const handleServiceSelection = () => {
        setSelectedServiceName(text);
        setSelectedServicePrice(preco);
    };

    return (
        <div onClick={handleServiceSelection} className={`flex rounded-xl border border-gray-200 shadow-md flex-col h-48 w-52 m-2 hover:cursor-pointer hover:text-white hover:shadow-lg focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-center hover:-translate-y-1 transition-all duration-300 ease-in-out ${(selectedServiceName === text) ? 'bg-cyan-700 text-white' : 'bg-white hover:bg-cyan-500'}`}>
            <img src={cardImage} alt={text} className="rounded-t-lg h-32 mx-2 mt-2 object-cover" />
            <div className="flex h-full flex-col justify-center">
                <div className="flex flex-col justify-center items-center">
                    <p className="text-center text-sm font-medium">{text}</p>
                    <p className="text-center text-sm font-medium">{preco}€</p>
                </div>
            </div>
        </div>
    );
}

export default ServiceItem;
