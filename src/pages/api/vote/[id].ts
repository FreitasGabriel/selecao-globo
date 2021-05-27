import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

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

            await prisma.vote.update({
                where: {
                    id: parseInt(id as string, 10),
                },
                data: {
                    votesCount: data[result[0].id].votesCount + 1
                }
            })

        } else {
            return res.status(404).json({ message: 'Register not found.' })
        }

        return res.status(201).json({ message: 'Vote computed with success.' })

    } catch (error) {
        return res.status(error.status).json({ message: 'Fail on computed the vote.' })
    }

}