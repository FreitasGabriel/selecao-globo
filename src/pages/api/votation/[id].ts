// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../services/prisma'

interface Vote {
  id: Number
  votesCount: Number
  candidateId: Number
  votationId: Number
}

interface Votation {
  id: Number;
  votate: Vote[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const { id } = req.query

  try {

    const votates = await prisma.votation.findMany({
      where: {
        id: parseInt(id as string, 10)
      }
    })

    return res.json({ votate: votates })

  } catch (error: any) {

    return res.status(error.status).json({ message: "Votation not found!" })
  }






}
