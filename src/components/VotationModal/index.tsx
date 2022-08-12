import Modal from "react-modal";
import { HeaderContainer, PositionIconClose } from "./styles";
import { useVotation } from "../../context/useVotation";

interface VotationModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function VotationModal({
  isOpen,
  onClose,
  children,
}: VotationModalProps) {
  const { changeModalState, changeVotationPageModal, selectCandidateOptions } =
    useVotation();

  const closeModal = () => {
    changeModalState(false);
    changeVotationPageModal(true);
    selectCandidateOptions(0);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
    >
      <PositionIconClose>
        <button onClick={() => closeModal()} className="icon-close"></button>
      </PositionIconClose>

      <HeaderContainer>
        <div className="title-section">
          <img
            className="icon"
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            alt=""
          />
          <p>
            QUEM DEVE SER <strong>ELIMINADO</strong>?
          </p>
        </div>

        {[...Array(Math.ceil(5))].map(() => (
          <div className="dashed-bar"></div>
        ))}
      </HeaderContainer>

      {children}
    </Modal>
  );
}
