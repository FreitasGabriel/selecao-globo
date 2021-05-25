import { createContext, useContext, useState, ReactNode } from 'react'

interface ModalProps {

}

interface VotationProviderProps {
    children: ReactNode;
}

interface VotationContextData {
    modalIsOpen: boolean;
    changeModalState: (value: boolean) => Promise<void>
    selectedCandidate: number
    selectCandidateOptions: (value: number) => Promise<void>
}

const VotationContext = createContext<VotationContextData>({} as VotationContextData)


export function VotationProvider({ children }: VotationProviderProps) {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [selectedCandidate, setSelectedCandidate] = useState(0)

    async function changeModalState(value: boolean) {
        setModalIsOpen(value)
    }

    async function selectCandidateOptions(value: number) {
        setSelectedCandidate(value)
    }

    return (
        <VotationContext.Provider value={{ modalIsOpen, changeModalState, selectedCandidate, selectCandidateOptions }}>
            {children}
        </VotationContext.Provider>
    )
}

export function useVotation() {
    const context = useContext(VotationContext);

    return context
}