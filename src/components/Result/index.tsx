import { useEffect, useState } from 'react'
import axios from 'axios'

import Countdown from "react-countdown"
import { useVotation } from '../../hooks/useVotation'

import * as S from './styles'

interface VoteProps {
    id: number;
    votesCount: number;
    candidateId: number;
    votationId: number;
}

interface CandidateProps {
    id: number;
    name: string;
}

interface ResultPageProps {
    vote: VoteProps[];
}

export function ResultPage({ vote }: ResultPageProps) {

    const { selectedCandidate } = useVotation()
    const [candidate, setCandidate] = useState<CandidateProps>()

    useEffect(() => {
        getCandidate().then((response) => setCandidate(response.data.candidate))
    }, [])

    const getCandidate = async () => {
        return await axios.get(`/api/candidate/${selectedCandidate}`)
    }

    return (
        <S.Container>
            {console.log(candidate)}
            <p className="result-text"><strong>Parabéns!</strong> Seu voto para <strong>{candidate?.name}</strong> foi enviado com sucesso.</p>

            <div className="candidates-img">
                <img className="first-candidate" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" />

                <div className="countdown-container">
                    <p>FALTAM</p>
                    <Countdown className="countdown" date={Date.now() + (1000000 * 48)} />
                    <p>PARA ENCERRAR A VOTAÇÃO</p>
                </div>

                <img className="second-candidate" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" />
            </div>

        </S.Container>
    )
}