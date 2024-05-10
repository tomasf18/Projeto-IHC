import { useAppointmentContext } from "../../../contexts/AppointmentContext";

function Map() {
    const { selectedDistrict, establishmentsPerDistrict } = useAppointmentContext();

    const districtEncoded = encodeURIComponent(selectedDistrict); // Codifica o nome do distrito para usar no URL de src
    const selectedEstablishment = establishmentsPerDistrict[selectedDistrict];

    const src = `https://www.google.com/maps/embed/v1/search?key=AIzaSyBv-a8CkMZs7mA1PhXlSIdkeQ0Vt8SGF-Q&q=${selectedEstablishment}+${districtEncoded}`;

    return (
        <iframe
            className="w-full rounded-3xl"
            height="250"
            style={{ border: "0" }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={src}
        ></iframe>
    );
}

export default Map;
