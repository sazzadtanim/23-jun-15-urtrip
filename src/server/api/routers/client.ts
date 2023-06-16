import { TRPCError } from '@trpc/server'
import { z } from 'zod'
import { validateClient } from 'zodType'
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'
import { prisma } from '~/server/db'

export const clientRouter = createTRPCRouter({
  create: publicProcedure.input(validateClient).mutation(async ({ input }) => {
    const oldClient = await prisma.client.findFirst({
      where: {
        OR: [{ phone: input.phone.toString() }, { email: input.email }],
      },
    })
    if (oldClient) {
      throw new TRPCError({
        message: 'email or phone number already exits',
        code: 'CONFLICT',
      })
    }
    const client = await prisma.client.create({ data: input })
    return client
  }),
  delete: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      return await prisma.client.delete({ where: { id: input.id } })
    }),
  all: publicProcedure.query(() => {
    return prisma.client.findMany()
  }),
  update: publicProcedure
    .input(
      z.object({
        data: validateClient,
        id: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      return await prisma.client.update({
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
      return await prisma.client.findFirst({
        where: { id: input.id },
      })
    }),
})
