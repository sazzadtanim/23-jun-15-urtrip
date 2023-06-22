import { z } from 'zod'
import { validateSale } from 'zodValidator'
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'
import { prisma } from '~/server/db'

export const saleRouter = createTRPCRouter({
  create: publicProcedure.input(validateSale).mutation(async ({ input }) => {
    const sale = await prisma.sale.create({ data:input })
    return sale
  }),
  delete: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      return await prisma.sale.delete({ where: { id: input.id } })
    }),
  all: publicProcedure.query(() => {
    return prisma.sale.findMany({
      include: { client: true, provider: true, service: true, supplier: true },
    })
  }),
  update: publicProcedure
    .input(
      z.object({
        data: validateSale,
        id: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      return await prisma.sale.update({
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
      return await prisma.sale.findFirst({
        where: { id: input.id },
      })
    }),
})
