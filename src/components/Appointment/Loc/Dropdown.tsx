import District from './District';
import { useAppointmentContext } from '../../../contexts/AppointmentContext';

function Dropdown() {
    const { isDropdownHidden, handleDropdownClick, cabeleireirosPorDistrito, selectedDistrict } = useAppointmentContext(); 

    const listaDistritos = Object.keys(cabeleireirosPorDistrito);
    
    return (
        <div className="dropdown row-span-1 grid border-4 border-amber-500">
            <span className="mx-7 mt-4 felx justify-center items-center">Distrito</span>
            <button className="dropdown-toggle text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                                    focus:ring-blue-300 font-medium rounded-lg text-sm mx-7 px-5 py-2.5 text-center inline-flex Districts-center 
                                        dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleDropdownClick}>
                <span>{selectedDistrict}</span>
                <div className="justify-self-start">
                    {isDropdownHidden && <i className="fa-solid fa-caret-down pl-4"></i>} 
                    {!isDropdownHidden && <i className="fa-solid fa-caret-up pl-4"></i>}
                </div>
            </button>
            {!isDropdownHidden && <ul className="dropdown-menu w-1/3 mx-7 text-sm border-2 border-black rounded-lg text-gray-700">
                {listaDistritos.map((district, index) => (
                    <District key={index} value={district} />
                ))}
            </ul>}
        </div>
    );
};

export default Dropdown;
