import { useAppointmentContext } from "../../../contexts/AppointmentContext";
import ServiceItem from "./ServiceItem";

const SelectedTypeOfService = () => {
    const { isManSelected, selectedTypeOfService } = useAppointmentContext();

    let sexo = isManSelected ? "Man" : "Woman";
    let tipoDeServico = selectedTypeOfService;

    // Obtém os itens de serviço com base no sexo e tipo de serviço selecionados
    const priceByServiceType: { [key: string]: { [key: string]: { name: string, price: number, id: number }[] } } = {
        Man: {
            "Hair": [
                { name: "Mullet", price: 20, id: 1 },
                { name: "Fade", price: 25, id: 2 },
                { name: "Undercut", price: 30, id: 3 },
                { name: "Buzz Cut", price: 15, id: 4 },
                { name: "Quiff", price: 25, id: 5 },
                { name: "Pompadour", price: 30, id: 6 },
            ],
            "Beard": [
                { name: "Simple Beard", price: 15, id: 1 },
                { name: "Full Beard", price: 20, id: 2 },
                { name: "Designer Beard", price: 25, id: 3 },
                { name: "Fade Beard", price: 30, id: 4 },
            ],
            "Eyebrows": [
                { name: "Eyebrow Design", price: 10, id: 1},
                { name: "Eyebrow Tinting", price: 15, id: 2},
                { name: "Eyelash Extensions", price: 20, id: 3},
                { name: "Eyelash Perm", price: 25, id: 4},
            ],
            "Skin": [
                { name: "Skin Cleaning", price: 35, id: 1 },
                { name: "Acne Treatment", price: 40, id: 2 },
                { name: "Wrinkle Treatment", price: 45, id: 3 },
                { name: "Spot Treatment", price: 50, id: 4 },
            ],
        },
        Woman: {
            "Hair": [
                { name: "Haircut", price: 30, id: 1 },
                { name: "Coloring", price: 40, id: 2 },
                { name: "Highlights", price: 45, id: 3 },
                { name: "Perm", price: 50, id: 4 },
                { name: "Hair Treatment", price: 30, id: 5 },
                { name: "Brushing", price: 20, id: 6 },
                { name: "Extensions", price: 60, id: 7 },
                { name: "Straightening", price: 50, id: 8 },
            ],
            "Eyebrows": [
                { name: "Eyebrow Design", price: 10, id: 1},
                { name: "Eyebrow Tinting", price: 15, id: 2},
                { name: "Eyelash Extensions", price: 20, id: 3},
                { name: "Eyelash Perm", price: 25, id: 4},
            ],
            "Skin": [
                { name: "Skin Cleaning", price: 35, id: 1},
                { name: "Acne Treatment", price: 40, id: 2},
                { name: "Wrinkle Treatment", price: 45, id: 3},
                { name: "Spot Treatment", price: 50, id: 4},
            ],
            "Relaxation": [
                { name: "Relaxing Massage", price: 45, id: 1 },
                { name: "Facial Treatment", price: 50, id: 2 },
                { name: "Body Treatment", price: 55, id: 3 },
                { name: "Spa", price: 60, id: 4 },
            ],
            "Manicure": [
                { name: "Simple Manicure", price: 15, id: 1 },
                { name: "French Manicure", price: 20, id: 2 },
                { name: "Gel Manicure", price: 25, id: 3 },
                { name: "Spa Manicure", price: 30, id: 4 },
            ],
            "Pedicure": [
                { name: "Simple Pedicure", price: 20, id: 1 },
                { name: "French Pedicure", price: 25, id: 2 },
                { name: "Gel Pedicure", price: 30, id: 3 },
                { name: "Foot Spa", price: 30, id: 4},
            ],
        },
    };


    const services = priceByServiceType[sexo][tipoDeServico];

    return (
        <div style={{ maxHeight: '424px' }} className="flex-grow overflow-auto grid grid-cols-3 justify-items-center">
            {services.map((service: { name: string, price: number, id: number }) => (
                <ServiceItem key={service.name} cardImage={`https://via.placeholder.com/150`} text={service.name} preco={service.price} />
            ))}
        </div>
    );
};

export default SelectedTypeOfService;
