import { Button, Modal, Table } from "flowbite-react";
import { useState } from "react";
import DateTime from "../Appointment/DateTime/DateTime";

export default function Component() {
  const [isVisible, setIsVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {isVisible && (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 h-10 ">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-4/12 text-center text-center border-2">
            Geraldo REvia
          </Table.Cell>
          <Table.Cell className="w-3/12 text-left text-center border-2">
            Corte de cabelo
          </Table.Cell>
          <Table.Cell className="w-2/12 text-center border-2">10/10</Table.Cell>
          <Table.Cell className="w-1/5 text-center border-2">14:10</Table.Cell>
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
            <Modal.Body></Modal.Body>
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
                    <Button onClick={() => setIsModalOpen(false)} color="blue">
                      Não
                    </Button>
                    <Button onClick={toggleVisibility} color="red">
                      Sim
                    </Button>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </Table.Cell>
        </Table.Row>
      )}
    </>
  );
}
