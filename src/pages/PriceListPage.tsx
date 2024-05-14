import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import PriceList from '../components/PriceList/PriceList';

function PriceListPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="z-10">
          <Navbar />
        </div>
        <div className="flex-grow bg-gray-100" style={{ paddingTop: "60.8px" }}>
          <div className="pl-8 pr-8 mt-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
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

export default PriceListPage;