import { useState } from "react";
import Item from "./Item";


const RenderProfessioals = ({ onClick }: { onClick: (professionalId: number) => void }) => {
    const [professionalSelected, setProfessionalSelected] = useState(0);

    const handleprofessionalSelection = (professionalId: number) => {
        setProfessionalSelected(professionalId);
        onClick(professionalId);
        localStorage.setItem("selectedProfessional", professionalsInfo[professionalId.toString()]);
    };

    // Obtém os itens de serviço com base no sexo e tipo de serviço selecionados
    const professionalsInfo: { [key: string]: string } = {
        "1": "João Gomes",
        "2": "Maria Silva",
        "3": "Carlos Pereira",
        "4": "Sofia Oliveira",
        "5": "Ricardo Costa",
    };

    return (
        <div style={{ maxHeight: '388px' }} className="border-4 border-violet-800 flex-grow overflow-auto grid grid-cols-3 justify-items-center">
            {Object.keys(professionalsInfo).map((key) => (
                <Item key={key} cardImage={`https://via.placeholder.com/150`} nome={professionalsInfo[key]} onClick={() => handleprofessionalSelection(parseInt(key))} selected={professionalSelected === parseInt(key)} />
            ))}
        </div>
    );
};

export default RenderProfessioals;
