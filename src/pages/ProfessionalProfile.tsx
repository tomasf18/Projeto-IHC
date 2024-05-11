import FooterComponent from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import ProfessionalComponent from "../components/Professional/ProfessionalProfileComponent";

export default function ProfessionalProfile() {
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
          <ProfessionalComponent />
        </div>
        <FooterComponent />
      </div>
    </>
  );
}
