import { Carousel } from "flowbite-react";
import { useState, useEffect } from "react";
import Slide1 from "../../../public/Slide1.jpg";
import Slide2 from "../../../public/Slide2.jpg";
import Slide3 from "../../../public/Slide3.jpg";
import Slide4 from "../../../public/Slide4.jpg";

export default function CarouselHome() {
    const [height, setHeight] = useState('200px');

  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth < 640) {
        setHeight('550px');
      } else if (window.innerWidth < 1024) {
        setHeight('550px');
      } else if (window.innerWidth < 1280) {
        setHeight('550px');
      } else if (window.innerWidth < 1536) {
        setHeight('550px');
      } else {
        setHeight('550px');
      }
    };

    window.addEventListener('resize', updateHeight);
    updateHeight();

    return () => window.removeEventListener('resize', updateHeight);
  }, []);
  return (
    <div style={{ height }}>
      <Carousel>
        <div className="flex h-full items-center justify-center bg-gray-400">
        <img src={Slide1} alt="" style={{ objectFit: 'cover', objectPosition: 'center', width: '100%', height: '100%' }} />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400">
          <img src={Slide2} alt="" style={{ objectFit: 'cover', objectPosition: 'center', width: '100%', height: '100%' }} />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400">
          <img src={Slide3} alt="" style={{ objectFit: 'cover', objectPosition: 'center', width: '100%', height: '100%' }} />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400">
          <img src={Slide4} alt="" style={{ objectFit: 'cover', objectPosition: 'center', width: '100%', height: '100%' }} />
        </div>
      </Carousel>
    </div>
  );
}
