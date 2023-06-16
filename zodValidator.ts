import { z } from 'zod'

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
)
export const validateSupplier = z.object({
  name: z.string().min(3),
})

export const validateProvider = z.object({
  name: z.string().min(3),
})

export const validateServiceCategory = z.object({
  name: z.string().min(3),
})

export const validateService = z.object({
  name: z.string().min(3),
})

export const validateClient = z.object({
  name: z.string().min(5),
  email: z.string().or(z.string().email()),
  reference: z.string().nullish(),
  note: z.string().nullable(),
  phone: z.string().max(15).min(8).regex(phoneRegex, 'Invalid Phone Number!'),
  address: z.string().nullish(),
})

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

export const validateInvoice = z.object({
  payment_status: z.string(),
  paid_amount: z.coerce.number().nullish(),
  payment_due_Date: z.string(),
  discount: z.coerce.number().nullish(),
  co_or_dh: z.coerce.number().nullish(),

  clientId: z.string().min(5),
  serviceId: z.string().min(5),
  expenseId: z.string(),
  supplierId: z.string().min(5),
})

export const validateFinancialAccount = z.object({
  title: z.string().min(5),
  account_holder: z.string().nullish(),
  account_number: z.string().nullish(),
  address: z.string().nullish(),
  phone: z.string().nullish(),
  initial_balance: z.number().or(z.nan()),
})

export const validateTransaction = z.object({
  title: z.string().nonempty(),
  paid_from: z.string(),
  paid_to: z.string(),
  transaction_id: z.string(),
  amount: z.number(),
})
