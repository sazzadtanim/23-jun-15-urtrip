import { type InputList } from 'type'
import { type ZodSale } from 'zodType'

export const saleInputList: InputList<ZodSale>[] = [
  // service related data
  {
    label: 'details',
    placeholder: 'e.g. DAC-BKK-DAC, Adult 07',
    type: 'text',
    name: 'service_details',
  },
  {
    label: 'Flight Dates',
    placeholder: 'e.g. 24.12.2022-03.01.2023',
    type: 'text',
    name: 'flight_dates',
  },
  {
    label: 'quantity',
    placeholder: 'e.g. 4',
    type: 'number',
    name: 'quantity',
  },
  {
    label: 'net fare',
    placeholder: 'e.g. 8000',
    type: 'number',
    name: 'net_fare',
  },
  {
    label: 'quoted fare',
    placeholder: 'e.g. 10000',
    type: 'number',
    name: 'quoted_fare',
  },
  {
    label: 'discount',
    placeholder: 'e.g. 500',
    type: 'number',
    name: 'discount',
  },
  {
    label: 'total amount',
    placeholder: 'e.g. 500',
    type: 'number',
    name: 'total_amount',
  },
  // {
  //   label: 'payment due date',
  //   placeholder: '',
  //   type: 'date',
  //   name: 'payment_due_Date',
  // },
  // {
  //   label: 'CO/DH',
  //   placeholder: 'e.g. 500',
  //   type: 'number',
  //   name: 'co_or_dh',
  // },
  // {
  //   label: 'Expense',
  //   placeholder: 'e.g. 500',
  //   type: 'number',
  //   name: 'expense',
  // },
  // {
  //   label: 'Expense details',
  //   placeholder: 'e.g. express delivery',
  //   type: 'text',
  //   name: 'expense_details',
  // },
  // {
  //   label: 'comission',
  //   placeholder: 'amount in BDT',
  //   type: 'number',
  //   name: 'comission',
  // },
  // {
  //   label: 'status',
  //   placeholder: 'e.g. 4',
  //   type: 'text',
  //   name: 'status',
  // },
]
