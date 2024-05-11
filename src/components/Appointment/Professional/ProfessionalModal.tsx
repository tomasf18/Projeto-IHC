import { Modal } from "flowbite-react";
import ProfessionalComponent from "../../Professional/ProfessionalProfileComponent"

export default function ProfessionalModal({
  openModal,
  onCloseModal,
}: {
  openModal: boolean;
  onCloseModal: () => void;
}) {
  return (
    <Modal show={openModal} size="7xl" onClose={onCloseModal} popup>
      <Modal.Header />
      <Modal.Body>
        <div >
            <ProfessionalComponent/>
        </div>
      </Modal.Body>
    </Modal>
  );
}
