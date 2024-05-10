import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import UtilizadorPage from "../components/ClientPage/UtilizadorPage";
import Marcação from "../components/ClientPage/Marcaçãotable";

export default function ClientProfile() {
  const jsArray = localStorage.getItem("userAppointments") || [];
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div
          className="flex-grow bg-gray-100 pl-8 pr-8"
          style={{ paddingTop: "60.8px" }}
        >
          <div className="mb-8 mt-8">
            <span className="text-gray-900 text-4xl">Client Profile</span>
          </div>
          <div className="w-">
          <UtilizadorPage />
          {jsArray.length > 0 && (
          <><p className="text-3xl mt-6">Marcações</p><div className="mt-5 mb-4">
                <Marcação />
              </div></>)}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}