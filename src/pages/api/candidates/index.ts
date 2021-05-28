import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const { ids } = req.query

    const firstID = ids.slice(0, 1)
    const secondID = ids.slice(2, 3)

    try {

        const response = await prisma.candidate.findMany({
            where: {
                OR: [
                    {
                        id: parseInt(firstID as string, 10)
                    },
                    {
                        id: parseInt(secondID as string, 10)
                    }
                ]
            },

        })

        return res.json({ candidates: response })
    } catch (error) {
        return res.status(error.status).json({ message: 'Fail on get the candidates.' })
    }

}