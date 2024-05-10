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
                      EDIT
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
                      <div className="flex justify-center items-center h-full border-b-2 border-black">
                        <h1 className="text-2xl">Date & Time Selection</h1>
                      </div>

                      <div className=" relative flex flex-col -">
                        <DateComponent />
                      </div>

                      <div className="absolute bottom-0 inset-x-0  p-4 grid grid-cols-8 grid-rows-1"></div>
                      <div className=""></div>
                      <Button
                        className="w-full"
                        onClick={() => setIsModalOpen3(true)}
                      >
                        Select Date
                      </Button>
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
                              Are you sure you want to change the date to{" "}
                              {selectedDate},{selectedTime}?
                            </h3>

                            <div className="grid grid-cols-2 gap-20">
                              <Button
                                onClick={() => setIsModalOpen3(false)}
                                color="blue"
                              >
                                NO
                              </Button>
                              <Button
                                onClick={() => handleeditar(item)}
                                color="red"
                              >
                                YES
                              </Button>
                            </div>
                          </div>
                        </Modal.Body>
                      </Modal>
                    </Modal.Body>
                  </Modal>
                  <Table.Cell className=" text-center border-2">
                    <button
                      className="  text-red-500"
                      onClick={() => setIsModalOpen(true)}
                    >
                      CANCEL
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
                            Are you sure you want to cancel the appointment?
                            
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
                              YES
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
