import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function Appointments() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">Appointments</div>
        <Footer />
      </div>
    </>
  );
}