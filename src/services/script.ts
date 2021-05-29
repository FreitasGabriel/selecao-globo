import { prisma } from './prisma'

async function createDatabaseInfo() {

    const response = await prisma.candidate.findMany()

    if (response.length === 0) {
        await prisma.candidate.createMany({
            data: [
                { name: 'João Silva' },
                { name: 'Maria Justino' }
            ]
        })

        await prisma.vote.createMany({
            data: [
                { votationId: 1, candidateId: 1, votesCount: 0 },
                { votationId: 1, candidateId: 2, votesCount: 0 }
            ]
        })

        await prisma.votation.create({
            data: {
                votates: [1, 2]
            }
        })
    }
}

createDatabaseInfo().then(data => console.log(data)).catch(error => console.log(error)).finally(async () => {
    await prisma.$disconnect()
})
