import District from './District';
import { useAppointmentContext } from '../../../contexts/AppointmentContext';

function Dropdown() {
    const { isDropdownHidden, handleDropdownClick, cabeleireirosPorDistrito, selectedDistrict } = useAppointmentContext(); 

    const listaDistritos = Object.keys(cabeleireirosPorDistrito);
    
    return (
        <div className="dropdown row-span-1 grid">
            <span className="mx-7 mt-4 flex justify-start items-center text-lg font-semibold">Distrito</span>
            <button className="dropdown-toggle text-white bg-yellow-300 hover:bg-yellow-600 hover:shadow-lg focus:ring-4 focus:outline-none 
                                    focus:ring-blue-300 font-medium rounded-lg text-sm mx-7 px-5 py-2.5 text-center inline-flex items-center 
                                            transition-all duration-300 ease-in-out" onClick={handleDropdownClick}>
                <span className="font-semibold">{selectedDistrict}</span>
                <div className="justify-self-end">
                    {isDropdownHidden && <i className="fa-solid fa-caret-down pl-4 transition-transform duration-200 ease-in-out"></i>} 
                    {!isDropdownHidden && <i className="fa-solid fa-caret-up pl-4 transition-transform duration-200 ease-in-out"></i>}
                </div>
            </button>
            {!isDropdownHidden && <ul className="dropdown-menu w-1/3 mx-7 text-sm border-2 border-black rounded-lg text-gray-700 bg-white shadow-lg transition-all duration-200 ease-in-out overflow-hidden">
                {listaDistritos.map((district, index) => (
                    <District key={index} value={district} />
                ))}
            </ul>}
        </div>
    );
};

export default Dropdown;