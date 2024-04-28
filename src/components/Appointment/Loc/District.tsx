import { useAppointmentContext } from "../../../contexts/AppointmentContext";

function District ({ value }: { value: string }) {
    const { handleDistrictChange, handleDropdownClick } = useAppointmentContext();

    const handleItemClick = () => {
        handleDistrictChange(value);
        handleDropdownClick();
    };

    return (
        <li className="dropdown-item" onClick={handleItemClick}>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" >{value}</a>
        </li>
    );
};

export default District;
