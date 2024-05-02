

import { useState } from "react";
import Slide1 from "../../../public/trends/carrousel1.jpeg";
import Slide2 from "../../../public/trends/carrousel2.jpeg";
import Slide3 from "../../../public/trends/carrousel3.jpeg";

import { Carousel } from "flowbite-react";

export default function Haircard() {
  const [height] = useState("250px");
  return (
    <div className="text-2xl flex-grow ">
      
      
      <div style={{ height }} className="">
      <Carousel slide={false}>
        <div className="flex h-full items-center justify-center bg-gray-400 ">
          <img
            src={Slide1}
            alt=""
            style={{ objectPosition: "center", width: "100%", height: "100%" }}
          />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400">
          <img
            src={Slide2}
            alt=""
            style={{ objectPosition: "center", width: "100%", height: "100%" }}
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
