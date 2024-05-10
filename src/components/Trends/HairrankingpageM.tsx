import Haircard1 from "./HairCards/Male/HaircarrouselcardUnderCut.tsx";
import Haircard2 from "./HairCards/Male/HaircarrouselcardPompadour.tsx";
import Haircard3 from "./HairCards/Male/HaircarrouselcardMullet.tsx";
import Haircard4 from "./HairCards/Male/HaircarrouselcardBuzzCut.tsx";
import Haircard5 from "./HairCards/Male/Haircarrouselcardlowfade.tsx";
import Haircard6 from "./HairCards/Male/HaircarrouselcardQuiff.tsx";

export default function HairPage() {
  return (
    <div className="w-4/5 ">
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
      <div className="">
        <p className="text-2xl mt-2 mb-2">1º</p>
        <div className="text-3xl border-4 border-gray-500 rounded-xl p-0 bg-white shadow-2xl hover:cursor-pointer hover:text-black hover:shadow-lg focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-center hover:-translate-y-1 transition-all duration-300 ease-in-out ">
          <Haircard1 />
          <p className="text-center text-2xl mt-2 mb-2 bg-">Undercut</p>
        </div>
      </div>
      <div>
        <p className="text-2xl mt-2 mb-2">2º</p>
        <div className="text-3xl border-4 border-gray-500 rounded-xl p-0 bg-white shadow-2xl hover:cursor-pointer hover:text-black hover:shadow-lg focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-center hover:-translate-y-1 transition-all duration-300 ease-in-out ">
          <Haircard2 />
          <p className="text-center text-2xl mt-2 mb-2">Pompadour</p>
        </div>
      </div>
      <div>
        <p className="text-2xl mt-2 mb-2">3º</p>
        <div className="text-3xl border-4 border-gray-500 rounded-xl p-0 bg-white shadow-2xl hover:cursor-pointer hover:text-black hover:shadow-lg focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-center hover:-translate-y-1 transition-all duration-300 ease-in-out ">
        <Haircard3 />
          <p className="text-center text-2xl mt-2 mb-2">Mullet</p>
        </div>
      </div>
      <div>
        <p className="text-2xl mt-2 mb-2">4º</p>
        <div className="text-3xl border-4 border-gray-500 rounded-xl p-0 bg-white shadow-2xl hover:cursor-pointer hover:text-black hover:shadow-lg focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-center hover:-translate-y-1 transition-all duration-300 ease-in-out ">
           <Haircard4 />
          <p className="text-center text-2xl mt-2 mb-2">Buzz Cut</p>
        </div>
      </div>
      <div>
        <p className="text-2xl mt-2 mb-2">5º</p>
        <div className="text-3xl border-4 border-gray-500 rounded-xl p-0 bg-white shadow-2xl hover:cursor-pointer hover:text-black hover:shadow-lg focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-center hover:-translate-y-1 transition-all duration-300 ease-in-out ">
        <Haircard5 />
          <p className="text-center text-2xl mt-2 mb-2">Low Fade</p>
        </div>
      </div>
      <div>
        <p className="text-2xl mt-2 mb-2">6º</p>
        <div className="text-3xl border-4 border-gray-500 rounded-xl p-0 bg-white shadow-2xl hover:cursor-pointer hover:text-black hover:shadow-lg focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-center hover:-translate-y-1 transition-all duration-300 ease-in-out ">
        <Haircard6 />
          <p className="text-center text-2xl mt-2 mb-2">Quiff</p>
        </div>
      </div>
      
    </div></div>
  );
}
