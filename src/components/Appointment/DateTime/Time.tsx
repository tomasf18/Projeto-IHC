import { useState } from "react";

import { MouseEventHandler } from "react"; // Add missing import

function Time({ valor }: { valor: string }) {
    const [checked, setChecked] = useState(false);

    const handleClick: MouseEventHandler<HTMLLabelElement> = () => { // Change the type of the event handler
        setChecked(!checked);
        localStorage.setItem("selectedTime", valor);
    };
    
    return (
        <li>
            <input type="radio" value="" checked={checked} className="hidden peer" name="timetable" />
            <label onClick={handleClick} className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-blue-600 border-blue-600 dark:hover:text-white dark:border-blue-500 dark:peer-checked:border-blue-500 peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:text-white peer-checked:text-white hover:bg-blue-500 dark:text-blue-500 dark:bg-gray-900 dark:hover:bg-blue-600 dark:hover:border-blue-600 dark:peer-checked:bg-blue-500">
            {valor}
            </label>
        </li>
    );
}

export default Time;