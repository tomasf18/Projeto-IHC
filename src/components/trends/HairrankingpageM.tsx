import Haircard from "./Haircarrouselcard.tsx";

export default function HairPage() {
  return (
    <div className="w-4/5">
    <div className="grid grid-cols-3 gap-10 ">
      <div>
        <p className="text-2xl mt-2 mb-2">1º</p>
        <div className="text-3xl border-4 border-gray-500 rounded-xl p-0">
          <Haircard />
          <p className="text-center text-2xl mt-2 mb-2">Jerry Steifeld</p>
        </div>
      </div>
      <div>
        <p className="text-2xl mt-2 mb-2">2º</p>
        <div className="text-3xl border-4 border-gray-500 rounded-xl p-0">
          <Haircard />
          <p className="text-center text-2xl mt-2 mb-2">Jerry Steifeld</p>
        </div>
      </div>
      <div>
        <p className="text-2xl mt-2 mb-2">3º</p>
        <div className="text-3xl border-4 border-gray-500 rounded-xl p-0">
          <Haircard />
          <p className="text-center text-2xl mt-2 mb-2">Jerry Steifeld</p>
        </div>
      </div>
      <div>
        <p className="text-2xl mt-2 mb-2">4º</p>
        <div className="text-3xl border-4 border-gray-500 rounded-xl p-0">
          <Haircard />
          <p className="text-center text-2xl mt-2 mb-2">Jerry Steifeld</p>
        </div>
      </div>
      <div>
        <p className="text-2xl mt-2 mb-2">5º</p>
        <div className="text-3xl border-4 border-gray-500 rounded-xl p-0">
          <Haircard />
          <p className="text-center text-2xl mt-2 mb-2">Jerry Steifeld</p>
        </div>
      </div>
      <div>
        <p className="text-2xl mt-2 mb-2">6º</p>
        <div className="text-3xl border-4 border-gray-500 rounded-xl p-0">
          <Haircard />
          <p className="text-center text-2xl mt-2 mb-2">Jerry Steifeld</p>
        </div>
      </div>
      
    </div></div>
  );
}
