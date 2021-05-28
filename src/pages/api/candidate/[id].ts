import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const { id } = req.query

    try {

        const candidate = await prisma.candidate.findUnique({
            where: {
                id: parseInt(id as string, 10)
            },

        })

        return res.status(201).json({ candidate: candidate })
    } catch (error) {
        return res.status(error.status).json({ message: 'Fail on get the candidates.' })
    }

}