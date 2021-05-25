import { useState } from 'react'
import { useVotation } from '../../hooks/useVotation'

import * as S from './styles'

interface CandidateProps {
    id: number;
    name: string;
}

interface CandidateOptionsProps {
    options: CandidateProps[];
}

export function CandidateOptions({ options }: CandidateOptionsProps) {

    const { selectedCandidate, selectCandidateOptions } = useVotation()

    return (
        <S.Container>
            {options.map((el, idx) => (

                <label key={idx} className="options-container">
                    <input
                        hidden
                        key={idx}
                        className="radio-option"
                        type="radio"
                        value={el.id}
                        checked={selectedCandidate === el.id}
                        onChange={() => selectCandidateOptions(el.id)} />
                    <div className="img">
                        <img className="first-candidate" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" />
                    </div>
                </label>
            ))}
        </S.Container>
    )
}