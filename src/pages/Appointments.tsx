import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import AppointmentTabs from "../components/ProfessionalAppointments/AppointmentTabs";
import tabDays from "../components/ProfessionalAppointments/TabDays";

export default function Appointments() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="z-10">
          <Navbar />
        </div>
        <div
          className="flex-grow bg-gray-100 pl-40 pr-40 mt-8"
          style={{ paddingTop: "60.8px" }}
        >
          <div className="bg-white rounded-xl p-8 mb-8">
            <h2 className="text-4xl font-semibold mb-4">Appointments</h2>
            <AppointmentTabs tabDays={tabDays()} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
