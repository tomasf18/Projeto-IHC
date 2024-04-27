import { useAppointmentContext } from "../../../contexts/AppointmentContext";

// Item.tsx
function TypeOfServiceItem({ cardImage, text }: { cardImage: string, text: string }) {
    const { setSelectedTypeOfService, selectedTypeOfService } = useAppointmentContext();
    
    const handleTypeOfServiceSelection = () => {
        setSelectedTypeOfService(text);
    };


    return (
        <div onClick={handleTypeOfServiceSelection} className={`flex rounded-xl border border-gray-200 shadow-md dark:border-gray-700 flex-col h-48 w-52 m-2 hover:cursor-pointer hover:text-white hover:bg-slate-300 ${(selectedTypeOfService === text) ? 'bg-slate-500 hover:bg-slate-500' : 'bg-white '}`}>
            <img src={cardImage} alt={text} className="rounded-t-lg h-32 mx-2 mt-2 object-cover" />
            <div className="flex h-full flex-col justify-center gap-4 p-6">
                <div className="flex felx justify-center items-center">
                    <p className="ml-2 text-sm font-medium text-black">{text}</p>
                </div>
            </div>
        </div>
    );
}

export default TypeOfServiceItem;
