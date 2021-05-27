import Modal from 'react-modal'
import * as S from './styles'
import { useVotation } from '../../hooks/useVotation'

interface VotationModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode
}


export function VotationModal({ isOpen, onClose, children }: VotationModalProps) {


    const { changeModalState } = useVotation()

    const closeModal = () => {
        changeModalState(false)
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            ariaHideApp={false}
        >
            <S.PositionIconClose>
                <button onClick={() => closeModal()} className="icon-close"></button>
            </S.PositionIconClose>

            <S.HeaderContainer>
                <div className="title-section">
                    <img className="icon" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" />
                    <p>QUEM DEVE SER <strong>ELIMINADO</strong>?</p>
                </div>
                <div className="dashed-bar"></div>
                <div className="dashed-bar"></div>
                <div className="dashed-bar"></div>
                <div className="dashed-bar"></div>
                <div className="dashed-bar"></div>

            </S.HeaderContainer>

            {children}
        </Modal>
    )
}