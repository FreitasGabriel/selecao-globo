import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../services/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const { id } = req.query

    try {
        const candidate = await prisma.candidate.findUnique({
            where: {
                id: parseInt(id as string, 10)
            },
        })
        return res.status(201).json({ candidate: candidate })
    } catch (error: any) {
        return res.status(error.status).json({ message: 'Fail on get the candidates.' })
    }

}
