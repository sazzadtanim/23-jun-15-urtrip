import { z } from 'zod'
import { validateProvider } from 'zodValidator'
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'
import { prisma } from '~/server/db'

export const providerRouter = createTRPCRouter({
  create: publicProcedure
    .input(validateProvider)
    .mutation(async ({ input }) => {
      const provider = await prisma.provider.create({ data: input })
      return provider
    }),
  delete: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      return await prisma.provider.delete({ where: { id: input.id } })
    }),
  all: publicProcedure.query(() => {
    return prisma.provider.findMany()
  }),
  update: publicProcedure
    .input(
      z.object({
        data: validateProvider,
        id: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      return await prisma.provider.update({
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
      return await prisma.provider.findFirst({
        where: { id: input.id },
      })
    }),
})
