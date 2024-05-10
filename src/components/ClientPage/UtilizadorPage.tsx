

import { useUser } from "../../contexts/UserContext";


export default function UtilizadorPage() {
  const { user}=useUser();
  return (
    <div className="mt-5 ml-20">
      <form>
        <div className="grid grid-cols-2 gap-5">
          <label>Primerio Nome</label>
          <label>Sobrenome</label>
          <div>
            <input
              id="Nome"
              type="text"
              placeholder={user?.email.split("@")[0]}
              className="shadow appearance-none border rounded  ml-5  text-gray-700 focus:outline-none focus:shadow-outline w-4/5"
              readOnly
            />
          </div>
          <div>
            <input
              id="Sobrenome"
              type="text"
              placeholder="de onde"
              className="shadow appearance-none border rounded ml-5  text-gray-700 focus:outline-none focus:shadow-outline w-4/5"
              readOnly
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-5 mt-5">
          <label> Data de nascimento</label>
        <label> Número de identificação fiscal</label>
          <div>
            <input
              className="shadow appearance-none border rounded  py-2 px-3 ml-5 text-gray-700 focus:outline-none focus:shadow-outline w-1/5"
              id="birth-date"
              type="text"
              readOnly
              placeholder="10/20/10"
            />
          </div>
          <div>
            <input
              id="NIF"
              type="text"
              placeholder="48837619"
              className="shadow appearance-none border rounded  py-2 px-3 ml-5  text-gray-700 focus:outline-none focus:shadow-outline w-2/5"
              readOnly
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-5 mt-5">
          <label>Morada</label>
        <label>Número de telemovel</label>
          <div>
            <input
              id="Nome"
              type="text"
              placeholder="Rua Fracno de Something portaº 34"
              className="shadow appearance-none border rounded  py-2 px-3 ml-5  text-gray-700 focus:outline-none focus:shadow-outline w-4/5"
              readOnly
            />
          </div>
          <div>
            <input
              id="telefone"
              type="text"
              placeholder=" 967453289"
              className="shadow appearance-none border rounded  py-2 px-3 ml-5  text-gray-700 focus:outline-none focus:shadow-outline w-2/5"
              readOnly
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-5 mt-5">
          <label>Email</label>
          <label></label>
          <div>
            <input
              id="Email"
              type="text"
              placeholder={user?.email}
              className="shadow appearance-none border rounded  py-2 px-3 ml-5  text-gray-700 focus:outline-none focus:shadow-outline 3/5"
              readOnly
            />
          </div>
          <div>
            <button
              id="alterar informações"
              className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 mt-4 ml-40 rounded focus:outline-none focus:shadow-outline m-2"
              //onClick={handleLogin}
            >
              Alterar informação
            </button>
            <button
              id="confirmar alterações"
              type="submit"
              className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 mt-8 ml-40 rounded focus:outline-none focus:shadow-outline m-2 hidden"
              //onClick={handleLogin}
            >
              Alterar informação
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
