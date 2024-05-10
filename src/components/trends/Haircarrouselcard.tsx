

import { useEffect, useState } from "react";
import Slide1 from "../../../public/trends/carrousel1.jpeg";
import Slide2 from "../../../public/trends/carrousel2.jpeg";
import Slide3 from "../../../public/trends/carrousel4.jpeg";

import { Carousel } from "flowbite-react";

export default function Haircard() {
  const [height,setHeight] = useState("250px");
  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth < 640) {
        setHeight('150px');
      } else if (window.innerWidth < 1024) {
        setHeight('200px');
      } else if (window.innerWidth < 1280) {
        setHeight('230px');
      } else if (window.innerWidth < 1536) {
        setHeight('250px');
      } else {
        setHeight('270px');
      }
    };
    window.addEventListener('resize', updateHeight);
    updateHeight();

    return () => window.removeEventListener('resize', updateHeight);
  }, []);
  return (
    <div className="text-2xl flex-grow -z-50">
      
      
      <div style={{ height }} className="">
      <Carousel slide={false}>
        <div className="flex h-full items-center justify-center bg-gray-400 -z-50">
          <img className="-z-50"
            src={Slide1}
            alt=""
            style={{ objectPosition: "center", width: "100%", height: "100%", position: "absolute",zIndex:-50  }}
          />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400">
          <img
            src={Slide2}
            alt=""
            style={{ objectPosition: "center", width: "100%", height: "100%"}}
          />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400">
          <img
            src={Slide3}
            alt=""
            style={{ objectPosition: "center", width: "100%", height: "100%" }}
          />
        </div>
        
      </Carousel>
    </div>
      
    </div>
  );
}
