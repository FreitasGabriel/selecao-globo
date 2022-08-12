import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../services/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const { id } = req.query
    const { votationID } = req.body

    try {
        const data = await prisma.vote.findMany({
            where: {
                votationId: parseInt(votationID as string, 10)
            }
        })

        if (data) {
            const result = data.filter((el) => el.candidateId === parseInt(id as string, 10))

            const vote = await prisma.vote.findFirst({
                where: {
                    AND: [
                        {
                            votationId: parseInt(votationID as string, 10)
                        },
                        {
                            candidateId: result[0].candidateId
                        }
                    ]
                }
            })

            if (vote) {
                await prisma.vote.update({
                    where: {
                        id: vote.id,
                    },
                    data: {
                        votesCount: vote.votesCount + 1
                    }
                })
            }

        } else {
            return res.status(404).json({ message: 'Register not found.' })
        }

        return res.status(201).json({ message: 'Vote computed with success.' })

    } catch (error) {
        return res.status(error.status).json({ message: 'Fail on computed the vote.' })
    }

}
