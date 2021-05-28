import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import axios from 'axios'

import { useVotation } from '../../hooks/useVotation'
import { CandidateOptions } from '../../components/CandidateOptions/index'

import * as S from './styles'

interface CandidatesProps {
    id: number;
    name: string;
}

interface VotationProps {
    candidates: CandidatesProps[];
}


export function VotationPage({ candidates }: VotationProps) {

    const { selectedCandidate, changeVotationPageModal } = useVotation()
    const [recaptchaValidate, setRecaptchaValidate] = useState(false)

    const handleSubmitVote = async (candidateID: number) => {

        const payload = {
            votationID: 1
        }

        const response = await axios.post(`/api/vote/${candidateID}`, payload)

        if (response.status === 201) changeVotationPageModal(false)
    }

    const validateRecaptcha = () => {
        setRecaptchaValidate(true)
    }

    return (
        <>
            <CandidateOptions options={candidates} />

            {selectedCandidate !== 0 && (
                <S.ReCaptchaValidator>
                    <ReCAPTCHA
                        sitekey="6LdiT-8aAAAAAM1XPSblmf-1hpK4TzNGPBZ3-SLP"
                        onChange={() => validateRecaptcha()}
                    />
                </S.ReCaptchaValidator>
            )}

            <S.VoteButton
                type="submit"
                onClick={() => handleSubmitVote(selectedCandidate)}
                disabled={recaptchaValidate ? false : true}
            >
                Envie seu voto agora
            </S.VoteButton>
        </>
    )
}