import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  Key,
  useState,
} from "react";
import { useAppointmentContext } from "../../contexts/AppointmentContext";
import Indicators from "../Indicators";

import DateTime from "../Appointment/DateTime/DateTime";
import { Button, Modal, Table } from "flowbite-react";

export default function Component() {
  const jsArray = localStorage.getItem("userAppointments") || [];

  const data = JSON.parse(jsArray);

  const keys = Object.keys(data.length ? data[0] : {});

  const [isVisible, setIsVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

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

  return (
    <div className="overflow-x-auto ml-20">
      {jsArray.length > 0 && (
        <Table>
          <Table.Head>
            <tr>
              {keys.map((item, idx) => (
                <Table.HeadCell className="text-center " key={idx}>
                  {item}
                </Table.HeadCell>
              ))}
            </tr>
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
                    <Table.Cell>{item[key]}</Table.Cell>
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
                    <Modal.Body><DateTime></DateTime></Modal.Body>
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
