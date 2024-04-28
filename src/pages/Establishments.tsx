import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function Establishments() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">Establishments</div>
        <Footer />
      </div>
    </>
  );
}