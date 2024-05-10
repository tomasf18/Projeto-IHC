import { Card } from "flowbite-react";
import { useUser } from "../../contexts/UserContext";

export default function UtilizadorPage() {
  const { user } = useUser();
  return (
    <Card className=" flex-center ">
      
        <div className="xl:w-[90%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative ">
          <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
            <div className="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
              <div className="w-full">
                <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                  <div className="flex flex-col pb-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                      First Name
                    </dt>
                    <dd className="text-lg font-semibold"> <i className="fa-solid fa-pen  justify-end mr-4"></i>{user?.email.split("@")[0]}
                    
                   </dd>
                  </div>
                  <div className="flex flex-col py-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                     Last Name
                    </dt>
                    <dd className="text-lg font-semibold"> <i className="fa-solid fa-pen  justify-end mr-4"></i>Abera</dd>
                  </div>
                  <div className="flex flex-col py-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                      Date of Birth
                    </dt>
                    <dd className="text-lg font-semibold"> <i className="fa-solid fa-pen  justify-end mr-4"></i>28/01/2004</dd>
                  </div>
                  <div className="flex flex-col py-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                      Password
                    </dt>
                    <dd className="text-lg font-semibold"> <i className="fa-solid fa-pen  justify-end mr-4"></i>************</dd>
                  </div>
                </dl>
              </div>

              <div className="w-full">
                <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                  <div className="flex flex-col pb-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                      Address
                    </dt>
                    <dd className="text-lg font-semibold">
                    <i className="fa-solid fa-pen  justify-end mr-4"></i>Universidade de Aveiro, 3810-193 Aveiro
                    </dd>
                  </div>

                  <div className="flex flex-col py-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                      Cellphone Number 
                    </dt>
                    <dd className="text-lg font-semibold"> <i className="fa-solid fa-pen  justify-end mr-4"></i>964487454</dd>
                  </div>
                  <div className="flex flex-col py-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                      Email
                    </dt>
                    <dd className="text-lg font-semibold">
                    <i className="fa-solid fa-pen  justify-end mr-4"></i>{user?.email}
                    </dd>
                  </div>
                  <div className="flex flex-col py-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                      NIF
                    </dt>
                    <dd className="text-lg font-semibold">
                    <i className="fa-solid fa-pen  justify-end mr-4"></i> 57364868
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
     </Card> 
    
  );
}
