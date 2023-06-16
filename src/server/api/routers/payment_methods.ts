import { z } from 'zod'
import { zodFinancialAccountValidator } from 'zodType'
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'
import { prisma } from '~/server/db'

export const paymentMethodsRouter = createTRPCRouter({
  create: publicProcedure.input(zodFinancialAccountValidator).mutation(async ({ input }) => {
    const client = await prisma.financialAccount.create({ data: input })
    return client
  }),
  delete: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      return await prisma.financialAccount.delete({ where: { id: input.id } })
    }),
  all: publicProcedure.query(() => {
    return prisma.financialAccount.findMany()
  }),
  update: publicProcedure
    .input(
      z.object({
        data: zodFinancialAccountValidator,
        id: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      return await prisma.financialAccount.update({
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
      return await prisma.financialAccount.findFirst({
        where: { id: input.id },
      })
    }),
})