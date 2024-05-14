import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import UtilizadorPage from "../components/ClientPage/UtilizadorPage";

export default function ClientProfile() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="z-10">
          <Navbar />
        </div>
        <div
          className="flex-grow bg-gray-100 pl-8 pr-8"
          style={{ paddingTop: "60.8px" }}
        >
          <div className="mb-8 mt-8">
            <span className="text-gray-900 text-4xl">Client Profile</span>
          </div>
          <div className="w-">
            <UtilizadorPage />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
