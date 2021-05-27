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
                <div className="container">
                    <p className="candidate-name">{el.name}</p>
                    <label key={idx} className="option-container">
                        <input
                            hidden
                            key={idx}
                            className="radio-option"
                            type="radio"
                            value={el.id}
                            checked={selectedCandidate === el.id}
                            onChange={() => selectCandidateOptions(el.id)} />
                        <div className="img">
                            <img className={`${el.id === 1 ? "first" : "second"}-candidate`} src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" />
                        </div>
                    </label>
                    <p className="img-footer">
                        Para eliminar o <strong>{el.name}</strong> pelo telefone
                        disque <strong>0800-123-001</strong> ou mande um SMS para <strong>8001</strong>
                    </p>
                </div>
            ))}
        </S.Container>
    )
}