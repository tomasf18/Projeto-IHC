import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function Help() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div
          className="flex-grow bg-gray-100 pl-8 pr-8"
          style={{ paddingTop: "60.8px" }}
        >
          <div className="mb-8 mt-8">
            <span className="text-gray-900 text-4xl">Help</span>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
