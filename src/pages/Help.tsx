import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function Help() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div
          className="flex-grow bg-gray-100"
          style={{ paddingTop: "60.8px" }}
        >
          <div className="pl-8 pr-8 mt-8">
            <div className="bg-white rounded-xl p-8 shadow-lg min-h-160">
              <h2 className="text-4xl font-semibold mb-4">Help</h2>
              <div className="mt-52 flex justify-center items-center">
                <h2 className="text-3xl mb-4">For future implementation...</h2>
              </div>
            </div>
            <div className="border-t-4 mb-8 mt-8"></div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
