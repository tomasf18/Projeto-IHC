export default function RegisterForms() {
    return (
      <div className="border-2 w-3/6 p-5">
        <div className="flex">
          <div className="md:w-2/5"></div>
          <label className="uppercase tracking-wide text-gray-700 text-2xl font-bold ml-7  self-center">
            Registar
          </label>
        </div>
  
        <form className="mt-5 mb-20 m-1 border-t-2 ">
          <label className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2 mt-1">
            Dados Cliente
          </label>
          <div className="flex flex-wrap  mb-10 mt-10">
            <div className=" md:w-1/3 px-3  ">
              <input
                className="shadow appearance-none w-full rounded  py-2 px-3 ml-5 mt-2 text-gray-700 focus:outline-none focus:shadow-outline border-2"
                id="Nome"
                type="text"
                placeholder="Nome"
              />
            </div>
            <div className=" md:w-1/3 px-3">
              <input
                className="shadow appearance-none w-full rounded  py-2 px-3 ml-5 mt-2 text-gray-700 focus:outline-none focus:shadow-outline border-2"
                id="sobrenome"
                type="text"
                placeholder="Sobrenome"
              />
            </div>
            <div className=" md:w-1/3 px-3">
              <input
                className="shadow appearance-none w-full rounded  py-2 px-3 ml-5 mt-2 text-gray-700 focus:outline-none focus:shadow-outline border-2"
                id="birth-date"
                type="date"
              />
            </div>
          </div>
  
          <div className="flex flex-wrap  mb-10 mt-10">
            <div className=" md:w-1/3 px-3 ">
              <input
                className="shadow appearance-none w-full rounded  py-2 px-3 ml-5 mt-2 text-gray-700 focus:outline-none focus:shadow-outline border-2"
                id="NIF"
                type="text"
                placeholder="NIF"
              />
            </div>
            <div className=" md:w-2/3 px-3">
              <input
                className="shadow appearance-none w-full rounded  py-2 px-3 ml-5 mt-2 text-gray-700 focus:outline-none focus:shadow-outline border-2"
                id="sMorada"
                type="text"
                placeholder="Morada(distrito,Cidade,Freguesia,Rua)"
              />
            </div>
          </div>
          <div className="flex flex-wrap  mb-10 mt-10 ">
            <div className=" md:w-2/5 px-3 ">
              <input
                className="shadow appearance-none w-full rounded  py-2 px-3 ml-5 mt-2 text-gray-700 focus:outline-none focus:shadow-outline border-2"
                id="Nome"
                type="text"
                placeholder="telefone"
              />
            </div>
  
            <div className=" md:w-3/5 px-3 ">
              <div className="relative">
                <select
                  className="shadow appearance-none w-full rounded  py-2 px-3 ml-5 mt-2 text-gray-700 focus:outline-none focus:shadow-outline border-2"
                  id="Sex"
                >
                  <option>Masculino</option>
                  <option>Feminino</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 10"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <label
            className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2  border-t-2"
            htmlFor="grid-first-name"
          >
            Dados Conta
          </label>
          <div className="flex flex-wrap  mb-6 mt-10">
            <div className=" md:w-1/2 px-3 ">
              <input
                className="shadow appearance-none w-full rounded  py-2 px-3 ml-5 mt-2 text-gray-700 focus:outline-none focus:shadow-outline border-2"
                id="Email"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className=" md:w-1/2 px-3">
              <input
                className="shadow appearance-none w-full rounded  py-2 px-3 ml-5 mt-2 text-gray-700 focus:outline-none focus:shadow-outline border-2"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="flex flex-wrap  mb-6">
            <div className="w-full md:w-1/2 px-3 mt-20"></div>
            <div className="w-full md:w-1/2 px-3">
              <input
                className="shadow appearance-none w-full rounded  py-2 px-3 ml-5 mt-2 text-gray-700 focus:outline-none focus:shadow-outline border-2"
                id="password"
                type="password"
                placeholder="Confirm Password"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 "></div>
            <button className="bg-gray-500 outline-2 hover:bg-gray-700 text-white font-bold py-2 px-20 rounded focus:outline-none focus:shadow-outline ml-10 mt-3">
              Registar
            </button>
          </div>
        </form>
      </div>
    );
  }