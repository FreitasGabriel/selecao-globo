import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../services/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const { slug } = req.query

    const votationId = slug[1]

    try {

        const vote = await prisma.vote.findMany({
            where: {
                votationId: parseInt(votationId as string, 10)
            }
        })

        let arrVotes = <number[]>[]

        vote.map((el) => {
            arrVotes.push(el.votesCount)
        })

        const total = arrVotes.reduce((acc, currentValue) => {
            return acc + currentValue
        })

        return res.status(201).json({ totalVotes: total })

    } catch (error) {
        return res.status(error.status).json({ message: 'Error on get total of votes' })
    }

}