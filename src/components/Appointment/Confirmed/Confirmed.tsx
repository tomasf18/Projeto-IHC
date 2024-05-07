import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

function Confirmed(){
    return (
      <>
        <div className="fixed inset-0 bg-black opacity-50 z-5"></div>
        <div className="pointer-events-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white h-9/12 w-9/12 rounded-xl z-10 shadow-md p-8">
          <div className="flex flex-col items-center justify-center space-y-4 h-full">
              <img src="/public/check.png" alt="Confirmed" className="h-32" />
              <h1 className="text-3xl">Confirmado!</h1>
              <p className="text-center">A sua marcação foi confirmada com sucesso. Pode agora encontrá-la no seu perfil, clicando em "Ver Marcações".</p>
              <div className="flex flex-row justify-around w-full mt-4">
                  <Link to="/" ><Button color="blue">Back to Home</Button></Link>
                  <Link to="/client" ><Button color="success">Ver Marcações</Button></Link>
              </div>
          </div>
        </div>
      </>
    );
}

export default Confirmed;