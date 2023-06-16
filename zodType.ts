import { type z } from 'zod'
import {
  type validateSupplier,
  type validateProvider,
  type validateServiceCategory,
  type validateService,
  type validateClient,
  type validateSale,
  type validateFinancialAccount,
  type validateTransaction,
  type validateInvoice,
} from 'zodValidator'

export type ZodSupplier = z.infer<typeof validateSupplier>
export type ZodProvider = z.infer<typeof validateProvider>
export type ZodServiceCategory = z.infer<typeof validateServiceCategory>
export type ZodService = z.infer<typeof validateService>
export type ZodClient = z.infer<typeof validateClient>
export type ZodSale = z.infer<typeof validateSale>
export type ZodFinancialAccount = z.infer<typeof validateFinancialAccount>
export type ZodTransaction = z.infer<typeof validateTransaction>
export type ZodInvoice = z.infer<typeof validateInvoice>
