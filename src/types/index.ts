export interface CandidateProps {
    id: number;
    name: string;
}

export interface PercentageCandidateProps {
    id: number;
    votesCount: number;
    candidateId: number;
    votationId: number;
}
  
export interface CandidatesProps {
    candidates: CandidateProps[];
}
  
export interface VotationProps {
    id: number;
    votates: number[];
}
  
export interface Votation {
    votate: VotationProps[];
}

