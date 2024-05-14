import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import HomeCarousel from "../components/Home/HomeCarousel";

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
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
