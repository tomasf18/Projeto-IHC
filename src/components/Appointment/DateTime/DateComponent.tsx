import { useState } from "react"
import Datepicker from "tailwind-datepicker-react"
import { IOptions } from "tailwind-datepicker-react/types/Options"
import Hora from "./Time"
import { useAppointmentContext } from "../../../contexts/AppointmentContext"


function DateComponent() {

    const { selectedDate, setSelectedDate } = useAppointmentContext();
    
    const [show, setShow] = useState<boolean>(true);
    const defaultDate = new Date(Date.now());

    const options: IOptions = {
        title: "Data de Marcação",
        autoHide: true,
        todayBtn: true,
        clearBtn: true,
        todayBtnText: "Hoje",
        clearBtnText: "Limpar",
        maxDate: new Date("2090-06-31"),
        minDate: new Date(Date.now() - 86400000),
        theme: {
            background: "bg-white",
            todayBtn: "text-white bg-blue-500 hover:bg-blue-600",     
            clearBtn: "text-red-500 hover:bg-red-500 hover:text-white",
            icons: "text-gray-900",
            text: "text-gray-900",
            disabledText: "text-gray-400",
            input: "border-2 border-gray-200 text-center focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:border-blue-500 hover:ring-2 hover:ring-blue-500 hover:ring-opacity-50 hover:shadow-md hover:cursor-pointer",
            inputIcon: "text-gray-900",
            selected: "bg-blue-500", 
        },
        icons: {
            // () => ReactElement | JSX.Element
            prev: () => <span><i className="fa-solid fa-arrow-left"></i></span>,
            next: () => <span><i className="fa-solid fa-arrow-right"></i></span>
        },
        datepickerClassNames: "top-13",
        defaultDate: defaultDate,
        language: "pt",
        disabledDates: [],
        weekDays: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Do"],
        inputNameProp: "data",
        inputIdProp: "data",
        inputPlaceholderProp: "Selecione a data",
        inputDateFormatProp: {
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    }

    return (
        <div style={{ height: 389}} className={`flex flex-col h-full ${(selectedDate !== "" && !show) ? 'justify-center' : ''} items-center border-4 border-lime-400`}>
            <div className={(selectedDate !== "" && !show) ? 'relative border-4 w-9/12 border-red-950 mb-3' : 'w-5/12 mt-3'}>
            <Datepicker 
                show={show} 
                setShow={(state) => {
                    setShow(state);
                }} 
                options={{...options, defaultDate}} 
                classNames="w-full"
                onChange={(date) => {
                    setSelectedDate(date.getDate().toString() + "/" + (date.getMonth() + 1).toString() + "/" + date.getFullYear().toString());
                }}
            />
            </div>
            {(selectedDate !== "" && !show) && ( <div className="border-4 border-lime-500 w-9/12">
                                            <ul id="timetable" className="grid w-full grid-cols-4 px-10 py-2 gap-2">
                                                <Hora valor="9:00" />
                                                <Hora valor="10:00" />
                                                <Hora valor="11:00" />
                                                <Hora valor="12:00" />
                                                <Hora valor="14:00" />
                                                <Hora valor="15:00" />
                                                <Hora valor="16:00" />
                                                <Hora valor="17:00" />
                                            </ul> 
                                        </div> 
            )}
        </div>
    )
}


export default DateComponent;

