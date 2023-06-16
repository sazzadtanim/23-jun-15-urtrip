import { z } from 'zod'
import { validateTransaction } from 'zodValidator'
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'
import { prisma } from '~/server/db'

export const transactionRouter = createTRPCRouter({
  create: publicProcedure
    .input(validateTransaction)
    .mutation(async ({ input }) => {
      const client = await prisma.transaction.create({ data: input })
      return client
    }),
  delete: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      return await prisma.transaction.delete({ where: { id: input.id } })
    }),
  all: publicProcedure.query(() => {
    return prisma.transaction.findMany()
  }),
  update: publicProcedure
    .input(
      z.object({
        data: validateTransaction,
        id: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      return await prisma.transaction.update({
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
      return await prisma.transaction.findFirst({
        where: { id: input.id },
      })
    }),
})
