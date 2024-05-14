import {
    createContext,
    useState,
    useCallback,
    useEffect,
    useContext,
} from "react";

// Como estou a trabalhar com TypeScript, é importante definir o tipo de cada propriedade do contexto., daí o uso da seguinte interface:
interface MixContextProps {
    createAppointment: boolean;
    setCreateAppointment: (createAppointment: boolean) => void;
}

export const MixContext = createContext<MixContextProps | null>(
    null
);

export const MixProvider = ({ children }: { children: React.ReactNode; }) => {

    const [createAppointment, setCreateAppointment] = useState<boolean>(false);

    return (
        <MixContext.Provider 
            value={{ 
                createAppointment, 
                setCreateAppointment 
            }}>
            {children}
        </MixContext.Provider>
    );
};

export const useMixContext = () => {
    const context = useContext(MixContext);
    if (!context) {
        throw new Error("useMixContext must be used within a MixProvider");
    }
    return context;
};