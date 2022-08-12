import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../services/prisma'

interface CandidatesProp {
    id: number;
    candidateId: number;
    name: string;
    countVotes: number;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {

    var candidate = <CandidatesProp[]>[]

    const { slug } = req.query

    const votationId = slug[1]

    try {
        const voteResponse = await prisma.vote.findMany({
            where: {
                votationId: parseInt(votationId as string, 10)
            },
            include: {
                candidate: true
            },
        })

        voteResponse.map((el) => {
            candidate.push({ id: el.id, candidateId: el.candidateId, name: el.candidate.name, countVotes: el.votesCount })
        })

        return res.status(201).json({ votesCount: candidate })

    } catch (error) {
        return res.status(error.status).json({ message: 'Fail on get candidates votesCount.' })
    }

}
