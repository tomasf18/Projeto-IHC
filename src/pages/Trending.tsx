import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HairpageM from "../components/Trends/HairrankingpageM";
import HairpageF from "../components/Trends/HairrankingpageF";
import Buttongroup from "../components/Trends/Buttongroup";
import { SetStateAction, useState } from "react";

export default function Trending() {
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (buttonNumber: SetStateAction<number>) => {
    setSelectedButton(buttonNumber);
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="z-10">
          <Navbar />
        </div>
        <div
          className="flex-grow bg-gray-100 pl-8 pr-8"
          style={{ paddingTop: "60.8px" }}
        >
          <p className="text-5xl mt-8 ml-10">Trending Haircuts</p>
          
          <div className="flex  justify-center">
            <Buttongroup
              buttonNumber={selectedButton}
              onButtonClick={handleButtonClick}
            />
          </div>
          <div className="h-10 -z-50"></div>
          <div id="masculino" className={`flex justify-center ${selectedButton === 1 ? '' : 'hidden'}`}>
            <HairpageM />
          </div>
          <div id="feminino" className={`flex justify-center ${selectedButton === 2 ? '' : 'hidden'}`}>
            <HairpageF />
          </div>
          <div className="mt-20"></div>
        </div>
        <Footer />
      </div>
    </>
  );
}
