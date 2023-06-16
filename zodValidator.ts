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
  service_details: z.string().optional(),
  flight_dates: z.string().optional(),
  quantity: z.number().optional(),
  net_fare: z.number().optional(),
  quoted_fare: z.number().optional(),
  total_amount: z.number().optional(),
  payment_due_Date: z.string().optional(),
  discount: z.number().optional(),
  co_or_dh: z.number().optional(),
  comission: z.number().optional(),
  status: z.string().optional(),

  // client payment
  client_payment_type: z.enum(['paidFromClient']),
  client_payment_status: z.string().optional(),
  client_payment_paid_amount: z.number().optional(),
  client_payment_due_amount: z.number().optional(),
  client_payment_due_date: z.date().optional(),
  client_payment_paid_date: z.date().optional(),
  client_payment_details: z.string().optional(),
  client_payment_financialAccountId: z.string(),
  client_payment_clientId: z.string().optional(),

  // supplier payment
  supplier_payment_type: z.enum(['payToSupplier']),
  supplier_payment_status: z.string().optional(),
  supplier_payment_paid_amount: z.number().optional(),
  supplier_payment_due_amount: z.number().optional(),
  supplier_payment_due_date: z.date().optional(),
  supplier_payment_paid_date: z.date().optional(),
  supplier_payment_details: z.string().optional(),
  supplier_payment_financialAccountId: z.string(),
  supplier_payment_supplierId: z.string().optional(),

  // expense payment
  expense_payment_type: z.enum(['payForExpense']),
  expense_payment_status: z.string().optional(),
  expense_payment_paid_amount: z.number().optional(),
  expense_payment_due_amount: z.number().optional(),
  expense_payment_due_date: z.date().optional(),
  expense_payment_paid_date: z.date().optional(),
  expense_payment_details: z.string().optional(),
  expense_payment_financialAccountId: z.string(),
  expense_payment_expenseId: z.string().optional(),

  clientId: z.string(),
  serviceId: z.string(),
  providerId: z.string(),
  supplierId: z.string(),
  expenseId: z.string().optional(),
  transactionId: z.string(),
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
  phone: z.string().max(15).min(8).regex(phoneRegex, 'Invalid Phone Number!'),
  initial_balance: z.number().or(z.nan()),
})

export const validateTransaction = z.object({
  type: z.enum(['payToSupplier', 'paidFromClient', 'payForExpense']).optional(),
  status: z.string().optional(),
  paid_amount: z.number().optional(),
  due_amount: z.number().optional(),
  due_date: z.date().optional(),
  paid_date: z.date().optional(),
  details: z.string().optional(),
  financialAccountId: z.string(),
  supplierId: z.string().optional(),
  clientId: z.string().optional(),
  expenseId: z.string().optional(),
  serviceId: z.string().optional(),
})
