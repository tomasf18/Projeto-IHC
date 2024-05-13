import Haircard1 from "./HairCards/Female/HaircarrouselcardBob.tsx";
import Haircard2 from "./HairCards/Female/HaircarrouselcardPixie.tsx";
import Haircard3 from "./HairCards/Female/HaircarrouselcardLayered.tsx";
import Haircard4 from "./HairCards/Female/HaircarrouselcardSleek.tsx";
import Haircard5 from "./HairCards/Female/HaircarrouselcardlongBob.tsx";
import Haircard6 from "./HairCards/Female/HaircarrouselcardWedge.tsx";

export default function HairPage() {
  return (
    <div className="w-4/5 ">
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
      <div className="">
        <p className="text-2xl mt-2 mb-2"></p>
        <div className="text-3xl border-4 border-gray-500 rounded-xl p-0 bg-white shadow-2xl font-medium text-center">
          <Haircard1 />
          <p className="text-center text-2xl mt-2 mb-2 bg-">Haircut</p>
        </div>
      </div>
      <div>
        <p className="text-2xl mt-2 mb-2"></p>
        <div className="text-3xl border-4 border-gray-500 rounded-xl p-0 bg-white shadow-2xl font-medium text-center">
          <Haircard2 />
          <p className="text-center text-2xl mt-2 mb-2">Coloring</p>
        </div>
      </div>
      <div>
        <p className="text-2xl mt-2 mb-2"></p>
        <div className="text-3xl border-4 border-gray-500 rounded-xl p-0 bg-white shadow-2xl font-medium text-center">
        <Haircard3 />
          <p className="text-center text-2xl mt-2 mb-2">Highlights</p>
        </div>
      </div>
      <div>
        <p className="text-2xl mt-2 mb-2"></p>
        <div className="text-3xl border-4 border-gray-500 rounded-xl p-0 bg-white shadow-2xl font-medium text-center">
           <Haircard4 />
          <p className="text-center text-2xl mt-2 mb-2">Perm</p>
        </div>
      </div>
      <div>
        <p className="text-2xl mt-2 mb-2"></p>
        <div className="text-3xl border-4 border-gray-500 rounded-xl p-0 bg-white shadow-2xl font-medium text-center">
        <Haircard5 />
          <p className="text-center text-2xl mt-2 mb-2">Hair Treatment</p>
        </div>
      </div>
      <div>
        <p className="text-2xl mt-2 mb-2"></p>
        <div className="text-3xl border-4 border-gray-500 rounded-xl p-0 bg-white shadow-2xl font-medium text-center">
        <Haircard6 />
          <p className="text-center text-2xl mt-2 mb-2">Brushing</p>
        </div>
      </div>
      
    </div></div>
  );
}
