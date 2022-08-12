import { createContext, useContext, useState, ReactNode } from "react";

interface ModalProps {}

interface VotationProviderProps {
  children: ReactNode;
}

interface VotationContextData {
  modalIsOpen: boolean;
  changeModalState: (value: boolean) => Promise<void>;
  selectedCandidate: number;
  selectCandidateOptions: (value: number) => Promise<void>;
  votationPageModal: boolean;
  changeVotationPageModal: (value: boolean) => Promise<void>;
}

const VotationContext = createContext<VotationContextData>(
  {} as VotationContextData
);

export function VotationProvider({ children }: VotationProviderProps) {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedCandidate, setSelectedCandidate] = useState<number>(0);
  const [votationPageModal, setChangeVotationPageModal] =
    useState<boolean>(true);

  async function changeModalState(value: boolean) {
    setModalIsOpen(value);
  }

  async function selectCandidateOptions(value: number) {
    setSelectedCandidate(value);
  }

  async function changeVotationPageModal(value: boolean) {
    setChangeVotationPageModal(value);
  }

  return (
    <VotationContext.Provider
      value={{
        modalIsOpen,
        changeModalState,
        selectedCandidate,
        selectCandidateOptions,
        votationPageModal,
        changeVotationPageModal,
      }}
    >
      {children}
    </VotationContext.Provider>
  );
}

export function useVotation() {
  const context = useContext(VotationContext);

  return context;
}
