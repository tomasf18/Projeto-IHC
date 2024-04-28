import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function Help() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">Help</div>
        <Footer />
      </div>
    </>
  );
}