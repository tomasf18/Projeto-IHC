import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function Shop() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">Shop</div>
        <Footer />
      </div>
    </>
  );
}
