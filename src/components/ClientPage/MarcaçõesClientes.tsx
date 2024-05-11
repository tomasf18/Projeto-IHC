import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  Key,
  useState,
} from "react";
import { useAppointmentContext } from "../../contexts/AppointmentContext.tsx";
import DateComponent from "../Appointment/DateTime/DateComponent.tsx";

import { Button, Modal, Table } from "flowbite-react";

export default function Component() {
  const jsArray = localStorage.getItem("userAppointments") ?? "";

  const data = JSON.parse(jsArray);

  const keys = Object.keys(data.length ? data[0] : {});

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);

  function handledelete(idx: {
    [x: string]:
      | string
      | number
      | boolean
      | ReactPortal
      | ReactElement<any, string | JSXElementConstructor<any>>
      | Iterable<ReactNode>
      | null
      | undefined;
    localization?: any;
  }): void {
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

  const { selectedDate, setSelectedDate, selectedTime, setSelectedTime } =
    useAppointmentContext();

  console.log(console.log("DateTime -> ", selectedDate + " " + selectedTime));

  function handleeditar(idx: {
    [x: string]:
      | string
      | number
      | boolean
      | ReactPortal
      | ReactElement<any, string | JSXElementConstructor<any>>
      | Iterable<ReactNode>
      | null
      | undefined;
    localization?: any;
  }): void {
    console.log(idx);
    for (let i = 0; i < data.length; i++) {
      if (data[i].localization === idx.localization) {
        console.log(data[i]);
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
                    <Table.Cell className="text-center  border-2" key={idx}>
                      {item[key]}
                    </Table.Cell>
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
                    size="6xl"
                    popup
                    onClose={() => setIsModalOpen2(false)}
                    className=""
                  >
                    <Modal.Header />
                    <Modal.Body>
                      <div className="flex justify-center items-center col-span-5 h-full border-b-2 border-black">
                        <h1 className="text-5xl">Date & Time Selection</h1>
                      </div>

                      <div className="row-span-4 col-span-5 h-full relative flex flex-col">
                        <DateComponent />
                      </div>

                      <div className="row-span-1 col-span-5 border-t-2 h-full w-full grid grid-cols-8 grid-rows-1">
                        <div className="w-full my-8 md:col-span-2 flex items-center justify-center">
                          
                        </div>
                        <div className="col-span-4"></div>
                        <div className="w-full my-3 md:col-span-2 flex items-center justify-center">
                          <button
                            className="w-8/12 h-full text-white bg-cyan-700 hover:bg-cyan-500 hover:shadow-lg font-medium rounded-lg text-sm
                            transition-all duration-300 ease-in-out"
                            onClick={() => setIsModalOpen3(true)}
                          >
                            Edit
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
                                Do you want to change your appointment to {selectedDate} at {selectedTime}?
                              </h3>

                              <div className="grid grid-cols-2 gap-20">
                                <Button
                                  onClick={() => setIsModalOpen3(false)}
                                  color="blue"
                                >
                                  No
                                </Button>
                                <Button
                                  onClick={() => handleeditar(item)}
                                  color="red"
                                >
                                  Yes
                                </Button>
                              </div>
                            </div>
                          </Modal.Body>
                        </Modal>
                        </div>
                      </div>
                    </Modal.Body>
                  </Modal>
                  <Table.Cell className=" text-center border-2">
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
                            Do you want to cancel your appointment?
                          </h3>

                          <div className="grid grid-cols-2 gap-20">
                            <Button
                              onClick={() => setIsModalOpen(false)}
                              color="blue"
                            >
                              No
                            </Button>
                            <Button
                              onClick={() => handledelete(item)}
                              color="red"
                            >
                              Yes
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
