import { FastifyInstance } from "fastify"
import { z } from 'zod'
import { prisma } from "../lib/prisma"

export async function createTranscriptionRoute(app: FastifyInstance) {
    app.post('/videos/:videoId/transcriptions', async (req) => {
        const paramsSchema = z.object({
            videoId: z.string().uuid(),
        })

        const { videoId } = paramsSchema.parse(req.params);

        
    })
}
