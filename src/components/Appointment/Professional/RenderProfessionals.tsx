import Item from "./ProfessionalCard";


const RenderProfessioals = () => {

    // Obtém os itens de serviço com base no sexo e tipo de serviço selecionados
    const professionalsInfo: { [key: string]: string } = {
        "1": "João Gomes",
        "2": "Maria Silva",
        "3": "Carlos Pereira",
        "4": "Sofia Oliveira",
        "5": "Ricardo Costa",
    };

    return (
        <div style={{ maxHeight: '424px' }} className="flex-grow overflow-auto grid grid-cols-3 justify-items-center">
            {Object.keys(professionalsInfo).map((key) => (
                <Item key={key} cardImage={`https://via.placeholder.com/150`} name={professionalsInfo[key]} />
            ))}
        </div>
    );
};

export default RenderProfessioals;
