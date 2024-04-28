import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function Trending() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">Trending</div>
        <Footer />
      </div>
    </>
  );
}
