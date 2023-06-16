import { z } from 'zod'
import { validateService } from 'zodValidator'
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'
import { prisma } from '~/server/db'

export const serviceRouter = createTRPCRouter({
  create: publicProcedure.input(validateService).mutation(async ({ input }) => {
    const service = await prisma.service.create({ data: input })
    return service
  }),
  delete: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      return await prisma.service.delete({ where: { id: input.id } })
    }),
  all: publicProcedure.query(() => {
    return prisma.service.findMany()
  }),
  update: publicProcedure
    .input(
      z.object({
        data: validateService,
        id: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      return await prisma.service.update({
        data: input.data,
        where: { id: input.id },
      })
    }),
  findFirst: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(async ({ input }) => {
      return await prisma.service.findFirst({
        where: { id: input.id },
      })
    }),
})
