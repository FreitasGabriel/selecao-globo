import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../services/prisma'


export default async (req: NextApiRequest, res: NextApiResponse) => {

    const { votationId } = req.query

    try {

        const vote = await prisma.vote.findMany({
            where: {
                votationId: parseInt(votationId as string, 10)
            }
        })

        return res.status(201).json({ votes: vote })

    } catch (error) {
        return res.status(error.status).json({ message: 'Error on get votation info' })
    }

}
