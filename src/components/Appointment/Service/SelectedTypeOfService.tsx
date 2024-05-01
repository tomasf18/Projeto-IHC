import { useAppointmentContext } from "../../../contexts/AppointmentContext";
import ServiceItem from "./ServiceItem";

const SelectedTypeOfService = () => {
    const { isManSelected, selectedTypeOfService } = useAppointmentContext();

    let sexo = isManSelected ? "Homem" : "Mulher";
    let tipoDeServico = selectedTypeOfService;

    // Obtém os itens de serviço com base no sexo e tipo de serviço selecionados
    const precoPorTipoDeServico: { [key: string]: { [key: string]: { nome: string, preco: number, id: number }[] } } = {
        Homem: {
            "Cabelo": [
                { nome: "Mullet", preco: 20, id: 1 },
                { nome: "Fade", preco: 25, id: 2 },
                { nome: "Undercut", preco: 30, id: 3 },
                { nome: "Buzz Cut", preco: 15, id: 4 },
                { nome: "Quiff", preco: 25, id: 5 },
                { nome: "Pompadour", preco: 30, id: 6 },
            ],
            "Barba": [
                { nome: "Barba Simples", preco: 15, id: 1 },
                { nome: "Barba Completa", preco: 20, id: 2 },
                { nome: "Barba Designer", preco: 25, id: 3 },
                { nome: "Barba Fade", preco: 30, id: 4 },
            ],
            "Sobrancelhas": [
                { nome: "Design de Sobrancelhas", preco: 10, id: 1},
                { nome: "Tintura de Sobrancelhas", preco: 15, id: 2},
                { nome: "Extensão de Pestanas", preco: 20, id: 3},
                { nome: "Permanente de Pestanas", preco: 25, id: 4},
            ],
            "Pele": [
                { nome: "Limpeza de Pele", preco: 35, id: 1 },
                { nome: "Tratamento de Acne", preco: 40, id: 2 },
                { nome: "Tratamento de Rugas", preco: 45, id: 3 },
                { nome: "Tratamento de Manchas", preco: 50, id: 4 },
            ],
        },
        Mulher: {
            "Cabelo": [
                { nome: "Corte de Cabelo", preco: 30, id: 1 },
                { nome: "Coloração", preco: 40, id: 2 },
                { nome: "Madeixas", preco: 45, id: 3 },
                { nome: "Permanente", preco: 50, id: 4 },
                { nome: "Tratamento Capilar", preco: 30, id: 5 },
                { nome: "Brushing", preco: 20, id: 6 },
                { nome: "Extensões", preco: 60, id: 7 },
                { nome: "Alisamento", preco: 50, id: 8 },
            ],
            "Sobrancelhas": [
                { nome: "Design de Sobrancelhas", preco: 10, id: 1},
                { nome: "Tintura de Sobrancelhas", preco: 15, id: 2},
                { nome: "Extensão de Pestanas", preco: 20, id: 3},
                { nome: "Permanente de Pestanas", preco: 25, id: 4},
            ],
            "Pele": [
                { nome: "Limpeza de Pele", preco: 35, id: 1},
                { nome: "Tratamento de Acne", preco: 40, id: 2},
                { nome: "Tratamento de Rugas", preco: 45, id: 3},
                { nome: "Tratamento de Manchas", preco: 50, id: 4},
            ],
            "Relaxamento": [
                { nome: "Massagem Relaxante", preco: 45, id: 1 },
                { nome: "Tratamento Facial", preco: 50, id: 2 },
                { nome: "Tratamento Corporal", preco: 55, id: 3 },
                { nome: "Spa", preco: 60, id: 4 },
            ],
            "Manicure": [
                { nome: "Manicure Simples", preco: 15, id: 1 },
                { nome: "Manicure Francesa", preco: 20, id: 2 },
                { nome: "Manicure Gel", preco: 25, id: 3 },
                { nome: "Manicure Spa", preco: 30, id: 4 },
            ],
            "Pedicure": [
                { nome: "Pedicure Simples", preco: 20, id: 1 },
                { nome: "Pedicure Francesa", preco: 25, id: 2 },
                { nome: "Pedicure Gel", preco: 30, id: 3 },
                { nome: "Spa para Pés", preco: 30, id: 4},
            ],
        },
    };


    const servicos = precoPorTipoDeServico[sexo][tipoDeServico];

    return (
        <div style={{ maxHeight: '388px' }} className="border-4 border-violet-800 flex-grow overflow-auto grid grid-cols-3 justify-items-center">
            {servicos.map((servico: { nome: string, preco: number, id: number }) => (
                <ServiceItem key={servico.nome} cardImage={`https://via.placeholder.com/150`} text={servico.nome} preco={servico.preco} />
            ))}
        </div>
    );
};

export default SelectedTypeOfService;
