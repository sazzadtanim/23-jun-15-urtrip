// import { type InputList } from 'type'
import { type InputList } from 'type'
import { type ZodSale } from 'zodType'

export const saleInputListByTanim: InputList<ZodSale>[] = [
  {
    name: 'service_details',
    label: 'service_details',
    placeholder: '',
    type: 'text',
  },
  {
    name: 'flight_dates',
    label: 'flight_dates',
    placeholder: '',
    type: 'text',
  },
  { name: 'quantity', label: 'quantity', placeholder: '', type: 'number' },
  { name: 'net_fare', label: 'net_fare', placeholder: '', type: 'number' },
  {
    name: 'quoted_fare',
    label: 'quoted_fare',
    placeholder: '',
    type: 'number',
  },
  {
    name: 'total_amount',
    label: 'total_amount',
    placeholder: '',
    type: 'number',
  },

]

export const others = [
  {
    name: 'payment_due_Date',
    label: 'payment_due_Date',
    placeholder: '',
    type: 'date',
  },
  { name: 'discount', label: 'discount', placeholder: '', type: 'number' },
  { name: 'co_or_dh', label: 'co_or_dh', placeholder: '', type: 'number' },
  { name: 'comission', label: 'comission', placeholder: '', type: 'number' },

  {
    name: 'client_payment_status',
    label: 'client_payment_status',
    placeholder: '',
    type: 'text',
  },
  {
    name: 'client_payment_paid_amount',
    label: 'client_payment_paid_amount',
    placeholder: '',
    type: 'number',
  },
  {
    name: 'client_payment_due_amount',
    label: 'client_payment_due_amount',
    placeholder: '',
    type: 'number',
  },
  {
    name: 'client_payment_due_date',
    label: 'client_payment_due_date',
    placeholder: '',
    type: 'date',
  },
  {
    name: 'client_payment_paid_date',
    label: 'client_payment_paid_date',
    placeholder: '',
    type: 'text',
  },
  {
    name: 'client_payment_details',
    label: 'client_payment_details',
    placeholder: '',
    type: 'text',
  },
  {
    name: 'client_payment_financialAccountId',
    label: 'client_payment_financialAccountId',
    placeholder: '',
    type: 'text',
  },
  {
    name: 'client_payment_clientId',
    label: 'client_payment_clientId',
    placeholder: '',
    type: 'text',
  },
  {
    name: 'supplier_payment_status',
    label: 'supplier_payment_status',
    placeholder: '',
    type: 'text',
  },
  {
    name: 'supplier_payment_paid_amount',
    label: 'supplier_payment_paid_amount',
    placeholder: '',
    type: 'number',
  },
  {
    name: 'supplier_payment_due_amount',
    label: 'supplier_payment_due_amount',
    placeholder: '',
    type: 'number',
  },
  {
    name: 'supplier_payment_due_date',
    label: 'supplier_payment_due_date',
    placeholder: '',
    type: 'text',
  },
  {
    name: 'supplier_payment_paid_date',
    label: 'supplier_payment_paid_date',
    placeholder: '',
    type: 'text',
  },
  {
    name: 'supplier_payment_details',
    label: 'supplier_payment_details',
    placeholder: '',
    type: 'text',
  },
  {
    name: 'supplier_payment_financialAccountId',
    label: 'supplier_payment_financialAccountId',
    placeholder: '',
    type: 'text',
  },
  {
    name: 'supplier_payment_supplierId',
    label: 'supplier_payment_supplierId',
    placeholder: '',
    type: 'text',
  },
  {
    name: 'expense_payment_status',
    label: 'expense_payment_status',
    placeholder: '',
    type: 'text',
  },
  {
    name: 'expense_payment_paid_amount',
    label: 'expense_payment_paid_amount',
    placeholder: '',
    type: 'number',
  },
  {
    name: 'expense_payment_due_amount',
    label: 'expense_payment_due_amount',
    placeholder: '',
    type: 'number',
  },
  {
    name: 'expense_payment_due_date',
    label: 'expense_payment_due_date',
    placeholder: '',
    type: 'text',
  },
  {
    name: 'expense_payment_paid_date',
    label: 'expense_payment_paid_date',
    placeholder: '',
    type: 'text',
  },
  {
    name: 'expense_payment_details',
    label: 'expense_payment_details',
    placeholder: '',
    type: 'text',
  },
  {
    name: 'expense_payment_financialAccountId',
    label: 'expense_payment_financialAccountId',
    placeholder: '',
    type: 'text',
  },
  {
    name: 'expense_payment_expenseId',
    label: 'expense_payment_expenseId',
    placeholder: '',
    type: 'text',
  },
]
