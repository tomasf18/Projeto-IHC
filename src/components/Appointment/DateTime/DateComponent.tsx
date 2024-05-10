import { useEffect, useState } from "react"
import Datepicker from "tailwind-datepicker-react"
import { IOptions } from "tailwind-datepicker-react/types/Options"
import Hora from "./Time"
import { useAppointmentContext } from "../../../contexts/AppointmentContext"


function DateComponent() {

    const { selectedDate, setSelectedDate, setSelectedTime } = useAppointmentContext();
    
    const [show, setShow] = useState<boolean>(true);
    const defaultDate = new Date(Date.now());

    const [list, setList] = useState<number[]>([]);

    useEffect(() => {
        if (selectedDate) {
            const newList = generateRandomList();
            setList(newList);
        }
    }, [selectedDate]);

    const options: IOptions = {
        title: "Appointment Date",
        autoHide: true,
        todayBtn: true,
        clearBtn: true,
        todayBtnText: "Today",
        clearBtnText: "Clean",
        maxDate: new Date("2090-06-31"),
        minDate: new Date(Date.now() - 86400000),
        theme: {
            background: "bg-white",
            todayBtn: "border text-cyan-700 bg-cyan-100 hover:bg-cyan-700 hover:text-white transition-all duration-300 ease-in-out",     
            clearBtn: "text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out",
            icons: "text-gray-900",
            text: "text-gray-900",
            disabledText: "text-gray-400 pointer-events-none hover:bg-white", 
            input: "border-2 border-gray-200 text-center focus:border-cyan-700 focus:ring-2 focus:ring-cyan-700 focus:ring-opacity-50 hover:border-cyan-700 hover:ring-2 hover:ring-cyan-700 hover:ring-opacity-50 hover:shadow-md hover:cursor-pointer transition-all duration-300 ease-in-out",
            inputIcon: "text-gray-900",
            selected: "bg-cyan-700", 
        },
        icons: {
            // () => ReactElement | JSX.Element
            prev: () => <span><i className="fa-solid fa-arrow-left"></i></span>,
            next: () => <span><i className="fa-solid fa-arrow-right"></i></span>
        },
        datepickerClassNames: "top-13",
        defaultDate: defaultDate,
        language: "en",
        disabledDates: [],
        weekDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        inputNameProp: "date",
        inputIdProp: "date",
        inputPlaceholderProp: "Select Date",
        inputDateFormatProp: {
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    }

    return (
        <div style={{ height: 424}} className={`flex flex-col h-full ${(selectedDate !== "" && !show) ? 'justify-center' : ''} items-center`}>
            <div className={    (selectedDate !== "" && !show) ? 'relative w-9/12 mb-3' : 'w-5/12 mt-3'}>
                <Datepicker 
                    show={show} 
                    setShow={(state) => {
                        setShow(state);
                    }} 
                    options={{...options, defaultDate}} 
                    classNames="w-full"
                    onChange={(date) => {
                        setSelectedDate(date.getDate().toString() + "/" + (date.getMonth() + 1).toString() + "/" + date.getFullYear().toString());
                        setSelectedTime("");
                    }}
                />
            </div>
            {(selectedDate !== "" && !show) && ( <div className="w-9/12">
                                            <div id="timetable" className="grid h-24 w-full grid-cols-4 grid-rows-2 gap-3 px-14">
                                                <Hora id='1' valor="09:00" list={list} />
                                                <Hora id='2' valor="10:00" list={list} />
                                                <Hora id='3' valor="11:00" list={list} />
                                                <Hora id='4' valor="12:00" list={list} />
                                                <Hora id='5' valor="14:00" list={list} />
                                                <Hora id='6' valor="15:00" list={list} />
                                                <Hora id='7' valor="16:00" list={list} />
                                                <Hora id='8' valor="17:00" list={list} />
                                            </div> 
                                        </div> 
            )}
        </div>
    )
}


export default DateComponent;


function generateRandomList() {
    // Gera um número aleatório entre 1 e 8
    const listSize = Math.floor(Math.random() * 8) + 1;

    // Cria uma lista vazia
    const list: number[] = [];

    // Enquanto a lista não tiver o tamanho desejado
    while (list.length < listSize) {
        // Gera um número aleatório entre 1 e 8
        const randomNumber = Math.floor(Math.random() * 8) + 1;

        // Se a lista não contém o número aleatório
        if (!list.includes(randomNumber)) {
            // Adiciona o número aleatório à lista
            list.push(randomNumber);
        }
    }

    return list;
}
