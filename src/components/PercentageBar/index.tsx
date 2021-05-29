import { useEffect, useState } from 'react'
import axios from 'axios'
import * as S from './styles'

interface CandidateProps {
    id: number;
    votesCount: number;
    candidateId: number;
    votationId: number;
}

export function PercentageBar() {

    const [firsPer, setFirstPer] = useState<number>(0)
    const [secondPer, setSecondPer] = useState<number>(0)


    useEffect(() => {

        getVotes().then(resp => {

            const percent = [resp.data.votes]
            const sum = percent[0][0].votesCount + percent[0][1].votesCount
            const firstCand = percent[0].filter((el: CandidateProps) => el.candidateId === 1)
            const secondCand = percent[0].filter((el: CandidateProps) => el.candidateId === 2)

            setFirstPer(Math.round((firstCand[0].votesCount / sum) * 100))
            setSecondPer(Math.round((secondCand[0].votesCount / sum) * 100))
            definePercent(Math.round((firstCand[0].votesCount / sum) * 100))
        })

    }, [])

    const getVotes = async () => {
        return await axios.get("/api/result/1")
    }

    const definePercent = (value: number) => {
        const per = 100 / value
        const teste = document.querySelector('span.bar') as HTMLSpanElement
        teste.style.transform = `rotate(${135 + (180 / per)}deg)`
    }

    return (
        <S.Container>
            <p>
                <span className="bar">
                    <p className="first-per">{firsPer}%</p>
                    <p className="second-per">{secondPer}%</p>
                </span>
            </p>
        </S.Container>
    )
}