import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import RegisterForms from "../components/Navbar/RegisterForms";

export default function Register() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div
          className="flex flex-grow items-center justify-center bg-gray-100 pl-8 pr-8"
          style={{ paddingTop: "60.8px" }}
        >
          <RegisterForms />
        </div>
        <Footer />
      </div>
    </>
  );
}
