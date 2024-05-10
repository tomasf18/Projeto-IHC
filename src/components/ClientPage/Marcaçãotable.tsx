import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  Key,
  useState,
} from "react";
import { useAppointmentContext } from "../../contexts/AppointmentContext";
import DateComponent from "../Appointment/DateTime/DateComponent.tsx";

import DateTime from "./DateTimealterado";
import { Button, Modal, Table } from "flowbite-react";

export default function Component() {
  const jsArray = localStorage.getItem("userAppointments") || [];

  const data = JSON.parse(jsArray);

  const keys = Object.keys(data.length ? data[0] : {});

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);

  function handledelete(idx): void {
    console.log(idx.localization);

    let ind = -1;
    for (let i = 0; i < data.length; i++) {
      if (data[i].localization === idx.localization) {
        ind = i;
        break;
      }
    }
    if (ind !== -1) {
      data.splice(ind, 1);
    }
    console.log(data);
    setIsModalOpen(false);
    localStorage.setItem("userAppointments", JSON.stringify(data));
  }

  const {
    currentStep,
    nextStep,
    prevStep,
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
  } = useAppointmentContext();

  console.log(console.log("DateTime -> ", selectedDate + " " + selectedTime));

  const handleBackClick = () => {
    prevStep();
    setSelectedDate(""); // Reset date selection
    setSelectedTime(""); // Reset time selection
  };

  function handleeditar(idx): void {
  console.log(idx)
    for (let i = 0; i < data.length; i++) {
      if (data[i].localization === idx.localization) {
        console.log(data[i])
        data[i].date = selectedDate;
        data[i].time = selectedTime;
        break;
      }
    }
    
    localStorage.setItem("userAppointments", JSON.stringify(data));
    setIsModalOpen2(false);
    setIsModalOpen3(false);
    setSelectedDate(""); // Reset date selection
    setSelectedTime(""); // Reset time selection
  }


  // `map` over the first object in the array
// and get an array of keys and add them
// to TH elements
function getHeadings(data) {
  return Object.keys(data[0]).map(key => {
    return <th>{key}</th>;
  });
}

// `map` over the data to return
// row data, passing in each mapped object
// to `getCells`
function getRows(data) {
  return data.map(obj => {
    return <tr>{getCells(obj)}</tr>;
  });
}

// Return an array of cell data using the
// values of each object
function getCells(obj) {
  return Object.values(obj).map(value => {
    return <td>{value}</td>;
  });
}

  return (
    <div className="overflow-x-auto ml-20">
      {jsArray.length > 0 && (
        <Table>
          <Table.Head>
            
              {keys.map((item, idx) => (
                <Table.HeadCell className="text-center  border-2" key={idx}>
                  {item}
                </Table.HeadCell>
              ))}
            
          </Table.Head>
          <Table.Body className="display:inline-block ">
            {data.map(
              (
                item: {
                  [x: string]:
                    | string
                    | number
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | null
                    | undefined;
                },
                idx: Key | null | undefined
              ) => (
                <tr key={idx}>
                  
                  
                  {keys.map((key, idx) => (
                    <Table.Cell className="text-center  border-2" key={idx}>{item[key]}</Table.Cell>
                    
                  ))}
                  
                  <Table.Cell className="text-center  border-2">
                    <button
                      className="text-green-500 justi "
                      onClick={() => setIsModalOpen2(true)}
                    >
                      Editar
                    </button>
                  </Table.Cell>
                  <Modal
                    show={isModalOpen2}
                    size="lg"
                    popup
                    onClose={() => setIsModalOpen2(false)}
                    className=""
                  >
                    <Modal.Header />
                    <Modal.Body>
                      <div className="grid grid-rows-6 row-span-6 h-full border-r-4 border-slate-600">
                        <div className="grid grid-rows-6 row-span-5 border-2 border-stone-950">
                          <h1 className="row-span-5 flex justify-center items-center text-center">
                            Selecione a data e a hora que deseja
                          </h1>
                          <span className="row-span-1 flex justify-center items-center text-blue-600 hover:text-blue-700 hover:underline">
                            <a href="/ajuda.html">Precisa de ajuda?</a>
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-center items-center col-span-5 h-full border-l-4 border-b-4 border-amber-400">
                        <h1 className="text-5xl">Seleção de Data & Hora</h1>
                      </div>

                      <div className="row-span-5 col-span-5 h-full relative border-l-4 border-4 border-red-600">
                        <DateComponent />

                        <div className="absolute bottom-0 inset-x-0 border-4 border-yellow-900 p-4 grid grid-cols-8 grid-rows-1">
                          <button
                            className="mr-2 col-span-2"
                            onClick={handleBackClick}
                          >
                            Voltar
                          </button>
                          <div className="col-span-4"></div>
                          <button 
                            className="ml-2 col-span-2 pr-2"
                            onClick={() => setIsModalOpen3(true)}
                          >
                            Próximo
                          </button>
                          <Modal
                            show={isModalOpen3}
                            size="lg"
                            popup
                            onClose={() => setIsModalOpen3(false)}
                            className=""
                          >
                            <Modal.Header />
                            <Modal.Body>
                              <div className="space-y-6">
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white text-center">
                                  Pretende alterar a marcação para {selectedDate},{selectedTime}?
                                </h3>

                                <div className="grid grid-cols-2 gap-20">
                                  <Button
                                    onClick={() => setIsModalOpen3(false)}
                                    color="blue"
                                  >
                                    Não
                                  </Button>
                                  <Button
                                    onClick={() => handleeditar(item)}
                                    color="red"
                                  >
                                    Sim
                                  </Button>
                                </div>
                              </div>
                            </Modal.Body>
                          </Modal>
                        </div>
                      </div>
                    </Modal.Body>
                  </Modal>
                  <Table.Cell className=" border-2">
                    <button
                      className="  text-red-500"
                      onClick={() => setIsModalOpen(true)}
                    >
                      Cancelar
                    </button>
                    <Modal
                      show={isModalOpen}
                      size="lg"
                      popup
                      onClose={() => setIsModalOpen(false)}
                      className=""
                    >
                      <Modal.Header />
                      <Modal.Body>
                        <div className="space-y-6">
                          <h3 className="text-xl font-medium text-gray-900 dark:text-white text-center">
                            Pretende cancelar Marcação?
                          </h3>

                          <div className="grid grid-cols-2 gap-20">
                            <Button
                              onClick={() => setIsModalOpen(false)}
                              color="blue"
                            >
                              Não
                            </Button>
                            <Button
                              onClick={() => handledelete(item)}
                              color="red"
                            >
                              Sim
                            </Button>
                          </div>
                        </div>
                      </Modal.Body>
                    </Modal>
                  </Table.Cell>
                </tr>
              )
            )}
          </Table.Body>
        </Table>
      )}
    </div>
  );
}
