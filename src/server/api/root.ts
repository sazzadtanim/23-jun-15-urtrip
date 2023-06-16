import { createTRPCRouter } from '~/server/api/trpc'
import { clientRouter } from './routers/client'
import { paymentMethodsRouter } from './routers/payment_methods'
import { providerRouter } from './routers/provider'
import { saleRouter } from './routers/sale'
import { serviceRouter } from './routers/service'
import { supplierRouter } from './routers/supplier'
import { transactionRouter } from './routers/transaction'

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  client: clientRouter,
  service: serviceRouter,
  provider: providerRouter,
  supplier: supplierRouter,
  sale: saleRouter,
  payment: paymentMethodsRouter,
  transaction: transactionRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
