import { z } from 'zod'

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
)
export const validateSupplier = z.object({
  name: z.string().min(3),
})

export type ZodSupplier = z.infer<typeof validateSupplier>

export const validateProvider = z.object({
  name: z.string().min(3),
})

export type ZodProvider = z.infer<typeof validateProvider>

export const validateService = z.object({
  name: z.string().min(3),
})

export type ZodService = z.infer<typeof validateService>

export const validateClient = z.object({
  name: z.string().min(5),
  email: z.string().email().nullable(),
  reference: z.string().nullish(),
  note: z.string().nullable(),
  phone: z.string().max(15).regex(phoneRegex, 'Invalid Phone Number!'),
  address: z.string().min(12, 'minimum 12 character').nullable(),
})

export type ZodClient = z.infer<typeof validateClient>

export const validateSale = z.object({
  details: z.string().nullish(),
  flight_dates: z.string().optional(),
  quantity: z.coerce.number(),
  net_fare: z.coerce.number().optional(),
  quoted_fare: z.coerce.number().optional(),
  paid_amount: z.coerce.number().optional(),
  payment_due_Date: z.string().nullish(),
  discount: z.coerce.number().optional(),
  co_or_dh: z.coerce.number().optional(),
  expense: z.coerce.number().optional(),
  expense_details: z.string().nullish(),
  comission: z.coerce.number().optional(),
  status: z.string().nullish(),

  clientId: z.string().min(5),
  serviceId: z.string().min(5),
  providerId: z.string().min(5),
  supplierId: z.string().min(5),
})

export type ZodSale = z.infer<typeof validateSale>

export const validateFinancialAccount = z.object({
  title: z.string().min(5),
  account_holder: z.string().nullish(),
  account_number: z.string().nullish(),
  address: z.string().nullish(),
  phone: z.string().nullish(),
  balance: z.number().nullish(),
})

export type ZodFinancialAccount = z.infer<typeof validateFinancialAccount>

export const validateTransaction = z.object({
  title: z.string().nonempty(),
  paid_from: z.string(),
  paid_to: z.string(),
  transaction_id:z.string(),
  amount: z.number(),
})

export type ZodTransaction = z.infer<typeof validateTransaction>
