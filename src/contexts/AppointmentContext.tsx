import {
    createContext,
    useState,
    useCallback,
    useEffect,
    useContext,
} from "react";

// Como estou a trabalhar com TypeScript, é importante definir o tipo de cada propriedade do contexto., daí o uso da seguinte interface:
interface AppointmentContextProps {
    currentStep: number;
    selectedDistrict: string;
    selectedLocalization: string;
    isDropdownHidden: boolean;
    cabeleireirosPorDistrito: { [key: string]: string };
    selectedTypeOfService: string;
    isManSelected: boolean;
    typeOfServiceItems: { text: string; id: number }[];
    selectedServiceName: string;
    selectedServicePrice: number;
    selectedProfessional: string;
    selectedDate: string;
    selectedTime: string;
    confirmed: boolean;
    nextStep: () => void;
    prevStep: () => void;
    reset: () => void;
    handleDistrictChange: (district: string) => void;
    handleDropdownClick: () => void;
    setSelectedTypeOfService: (selectedTypeOfService: string) => void;
    handleSexChange: (isManSelected: boolean) => void;
    setSelectedServiceName: (service: string) => void;
    setSelectedServicePrice: (price: number) => void;
    setSelectedProfessional: (selectedProfessional: string) => void;
    setSelectedDate: (selectedDate: string) => void;
    setSelectedTime: (selecetedTime: string) => void;
    setConfirmed: (confirmed: boolean) => void;
}

export const AppointmentContext = createContext<AppointmentContextProps | null>(
    null
);

export const AppointmentProvider = ({ children }: { children: React.ReactNode; }) => {

    /* ---------------------- Geral ---------------------- */
    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = useCallback(() => {
        setCurrentStep(currentStep + 1);
    }, [currentStep]);

    const prevStep = useCallback(() => {
        setCurrentStep(currentStep - 1);
    }, [currentStep]);

    const reset = useCallback(() => {
        setCurrentStep(1);
        setSelectedDistrict("Escolha um distrito");
        setSelectedLocalization("");
        setIsDropdownHidden(false);
        setSelectedTypeOfService("");
        setSelectedServiceName("");
        setSelectedProfessional("");
        setSelectedDate("");
        setSelectedTime("");
        setConfirmed(false);
    }, []);


    /* ---------------------- Localização ---------------------- */
    const [selectedDistrict, setSelectedDistrict] = useState(
        "Escolha um distrito"
    );
    const [selectedLocalization, setSelectedLocalization] = useState("");
    const [isDropdownHidden, setIsDropdownHidden] = useState(false); // Add the missing state variable and its setter function

    const cabeleireirosPorDistrito: { [key: string]: string } = {
        "Escolha um distrito": "",
        Aveiro: "Champions+barber+shop",
        Braga: "STUDIO+MZ",
        Coimbra: "Barbearia+Adónis",
        Lisboa: "Barbearia+Partner",
        Porto: "Largo+do+Padrão+-+Cabeleireiro",
        Santarém: "Leonor+Cabeleireiro",
        Viseu: "Beleza+32+-+Cabeleireiro+e+Estética+Viseu",
    };

    const handleDistrictChange = useCallback((district: string) => {
        setSelectedDistrict(district);
    }, []);

    // Atualiza o nome do distrito selecionado no dropdown sempre que o distrito é alterado
    useEffect(() => {
        setSelectedLocalization(cabeleireirosPorDistrito[selectedDistrict].replace(/\+/g, " ") + ", " + selectedDistrict);}, 
        [selectedDistrict]);    // O useEffect é executado sempre que o distrito selecionado é alterado (selectedDistrict, ou seja, o que é passado como segundo argumento ao useEffect)
                                // O primeiro argumento é a função que é executada sempre que o distrito selecionado é alterado

    const handleDropdownClick = () => {
        setIsDropdownHidden(!isDropdownHidden);
    };


    /* ---------------------- Tipo de serviço ---------------------- */
    const [selectedTypeOfService, setSelectedTypeOfService] = useState("");
    const [isManSelected, setIsManSelected] = useState(true);
    const typeOfServiceItems = isManSelected
        ? [
              { text: "Cabelo", id: 1 },
              { text: "Barba", id: 2 },
              { text: "Sobrancelhas", id: 3 },
              { text: "Pele", id: 4 },
          ]
        : [
              { text: "Cabelo", id: 1 },
              { text: "Sobrancelhas", id: 2 },
              { text: "Pele", id: 3 },
              { text: "Relaxamento", id: 4 },
              { text: "Manicure", id: 5 },
              { text: "Pedicure", id: 6 },
          ];

    const handleSexChange = (isManSelected: boolean) => {
        setIsManSelected(isManSelected);
        setSelectedTypeOfService(""); // Reset service selection
    };


    /* ---------------------- Serviço ---------------------- */
    const [selectedServiceName, setSelectedServiceName] = useState("");
    const [selectedServicePrice, setSelectedServicePrice] = useState(0);


    /* ---------------------- Profissional ---------------------- */
    const [selectedProfessional, setSelectedProfessional] = useState("");


    /* ---------------------- Data e hora ---------------------- */
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");


    /* ---------------------- Confirmação ---------------------- */
    const [confirmed, setConfirmed] = useState(false);

    return (
        <AppointmentContext.Provider
            value={{
                currentStep,
                selectedDistrict,
                selectedLocalization,
                isDropdownHidden,
                cabeleireirosPorDistrito,
                selectedTypeOfService,
                isManSelected,
                typeOfServiceItems,
                selectedServiceName,
                selectedServicePrice,
                selectedProfessional,
                selectedDate,
                selectedTime,
                confirmed,
                nextStep,
                prevStep,
                reset,
                handleDistrictChange,
                handleDropdownClick,
                setSelectedTypeOfService,
                handleSexChange,
                setSelectedServiceName,
                setSelectedServicePrice,
                setSelectedProfessional,
                setSelectedDate,
                setSelectedTime,
                setConfirmed,
            }}
        >
            {children}
        </AppointmentContext.Provider>
    );
};

export function useAppointmentContext() {
    const context = useContext(AppointmentContext);
    if (context === null) {
        throw new Error(
            "useAppointmentContext must be used within an AppointmentProvider"
        );
    }
    return context;
}
