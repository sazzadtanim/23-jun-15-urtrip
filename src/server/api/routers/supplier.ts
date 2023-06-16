import { z } from 'zod'
import { validateSupplier } from 'zodValidator'
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'
import { prisma } from '~/server/db'

export const supplierRouter = createTRPCRouter({
  create: publicProcedure
    .input(validateSupplier)
    .mutation(async ({ input }) => {
      const supplier = await prisma.supplier.create({ data: input })
      return supplier
    }),
  delete: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      return await prisma.supplier.delete({ where: { id: input.id } })
    }),
  all: publicProcedure.query(() => {
    return prisma.supplier.findMany()
  }),
  update: publicProcedure
    .input(
      z.object({
        data: validateSupplier,
        id: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      return await prisma.supplier.update({
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
      return await prisma.supplier.findFirst({
        where: { id: input.id },
      })
    }),
})
