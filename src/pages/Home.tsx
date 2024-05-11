import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import HomeCarousel from "../components/Home/HomeCarousel";
import PriceList from "../components/Home/PriceList";

function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="z-10">
          <Navbar />
        </div>
        <div className="flex-grow bg-gray-100" style={{ paddingTop: "60.8px" }}>
          <div className="">
            <HomeCarousel />
          </div>

          <div className="pl-8 pr-8">
            <div className="border-t-4 mb-8 mt-8"></div>
            <div className="bg-white rounded-xl p-8">
              <h2 className="text-4xl font-semibold mb-4">Price List</h2>
              <PriceList />
            </div>
            <div className="border-t-4 mb-8 mt-8"></div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
