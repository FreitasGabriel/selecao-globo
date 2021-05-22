

interface VotationModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode
}


export function VotationModal({ isOpen, onClose, children }: VotationModalProps) {
    return (
        { children }
    )
}