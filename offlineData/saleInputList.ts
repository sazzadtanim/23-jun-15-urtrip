// import { type InputList } from 'type'
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

export const saleInputList2: InputList<ZodSale>[] = [
  {
    name: 'service_details',
    label: 'Service Details',
    placeholder: 'e.g. Enter service details',
    type: 'text',
  },
  {
    name: 'flight_dates',
    label: 'Flight Dates',
    placeholder: 'e.g. Enter flight dates',
    type: 'text',
  },
  {
    name: 'quantity',
    label: 'Quantity',
    placeholder: 'e.g. Enter quantity',
    type: 'number',
    isRequired:true
  },
  {
    name: 'net_fare',
    label: 'Net Fare',
    placeholder: 'e.g. Enter net fare',
    type: 'number',
  },
  {
    name: 'quoted_fare',
    label: 'Quoted Fare',
    placeholder: 'e.g. Enter quoted fare',
    type: 'number',
  },
  {
    name: 'total_amount',
    label: 'Total Amount',
    placeholder: 'e.g. Enter total amount',
    type: 'number',
  },
  {
    name: 'payment_due_Date',
    label: 'Payment Due Date',
    placeholder: 'e.g. Enter payment due date',
    type: 'date',
  },
  {
    name: 'discount',
    label: 'Discount',
    placeholder: 'e.g. Enter discount',
    type: 'number',
  },
  {
    name: 'co_or_dh',
    label: 'Co or Dh',
    placeholder: 'e.g. Enter Co or Dh',
    type: 'number',
  },
  {
    name: 'comission',
    label: 'Commission',
    placeholder: 'e.g. Enter commission',
    type: 'number',
  },
  {
    name: 'status',
    label: 'Status',
    placeholder: 'e.g. Enter status',
    type: 'text',
  },
  // client payment
  {
    name: 'client_payment_type',
    label: 'Client Payment Type',
    placeholder: 'e.g. Enter client payment type',
    type: 'text',
  },
  {
    name: 'client_payment_status',
    label: 'Client Payment Status',
    placeholder: 'e.g. Enter client payment status',
    type: 'text',
  },
  {
    name: 'client_payment_paid_amount',
    label: 'Client Payment Paid Amount',
    placeholder: 'e.g. Enter client payment paid amount',
    type: 'number',
  },
  {
    name: 'client_payment_due_amount',
    label: 'Client Payment Due Amount',
    placeholder: 'e.g. Enter client payment due amount',
    type: 'number',
  },
  {
    name: 'client_payment_due_date',
    label: 'Client Payment Due Date',
    placeholder: 'e.g. Enter client payment due date',
    type: 'text',
  },
  {
    name: 'client_payment_paid_date',
    label: 'Client Payment Paid Date',
    placeholder: 'e.g. Enter client payment paid date',
    type: 'text',
  },
  {
    name: 'client_payment_details',
    label: 'Client Payment Details',
    placeholder: 'e.g. Enter client payment details',
    type: 'text',
  },
  {
    name: 'client_payment_financialAccountId',
    label: 'Client Payment Financial Account ID',
    placeholder: 'e.g. Enter client payment financial account ID',
    type: 'text',
  },
  {
    name: 'client_payment_clientId',
    label: 'Client Payment Client ID',
    placeholder: 'e.g. Enter client payment client ID',
    type: 'text',
  },
  // supplier payment
  {
    name: 'supplier_payment_type',
    label: 'Supplier Payment Type',
    placeholder: 'e.g. Enter supplier payment type',
    type: 'text',
  },
  {
    name: 'supplier_payment_status',
    label: 'Supplier Payment Status',
    placeholder: 'e.g. Enter supplier payment status',
    type: 'text',
  },
  {
    name: 'supplier_payment_paid_amount',
    label: 'Supplier Payment Paid Amount',
    placeholder: 'e.g. Enter supplier payment paid amount',
    type: 'number',
  },
  {
    name: 'supplier_payment_due_amount',
    label: 'Supplier Payment Due Amount',
    placeholder: 'e.g. Enter supplier payment due amount',
    type: 'number',
  },
  {
    name: 'supplier_payment_due_date',
    label: 'Supplier Payment Due Date',
    placeholder: 'e.g. Enter supplier payment due date',
    type: 'text',
  },
  {
    name: 'supplier_payment_paid_date',
    label: 'Supplier Payment Paid Date',
    placeholder: 'e.g. Enter supplier payment paid date',
    type: 'text',
  },
  {
    name: 'supplier_payment_details',
    label: 'Supplier Payment Details',
    placeholder: 'e.g. Enter supplier payment details',
    type: 'text',
  },
  {
    name: 'supplier_payment_financialAccountId',
    label: 'Supplier Payment Financial Account ID',
    placeholder: 'e.g. Enter supplier payment financial account ID',
    type: 'text',
  },
  {
    name: 'supplier_payment_supplierId',
    label: 'Supplier Payment Supplier ID',
    placeholder: 'e.g. Enter supplier payment supplier ID',
    type: 'text',
  },
  // expense payment
  {
    name: 'expense_payment_type',
    label: 'Expense Payment Type',
    placeholder: 'e.g. Enter expense payment type',
    type: 'text',
  },
  {
    name: 'expense_payment_status',
    label: 'Expense Payment Status',
    placeholder: 'e.g. Enter expense payment status',
    type: 'text',
  },
  {
    name: 'expense_payment_paid_amount',
    label: 'Expense Payment Paid Amount',
    placeholder: 'e.g. Enter expense payment paid amount',
    type: 'number',
  },
  {
    name: 'expense_payment_due_amount',
    label: 'Expense Payment Due Amount',
    placeholder: 'e.g. Enter expense payment due amount',
    type: 'number',
  },
  {
    name: 'expense_payment_due_date',
    label: 'Expense Payment Due Date',
    placeholder: 'e.g. Enter expense payment due date',
    type: 'text',
  },
  {
    name: 'expense_payment_paid_date',
    label: 'Expense Payment Paid Date',
    placeholder: 'e.g. Enter expense payment paid date',
    type: 'text',
  },
  {
    name: 'expense_payment_details',
    label: 'Expense Payment Details',
    placeholder: 'e.g. Enter expense payment details',
    type: 'text',
  },
  {
    name: 'expense_payment_financialAccountId',
    label: 'Expense Payment Financial Account ID',
    placeholder: 'e.g. Enter expense payment financial account ID',
    type: 'text',
  },
  {
    name: 'expense_payment_expenseId',
    label: 'Expense Payment Expense ID',
    placeholder: 'e.g. Enter expense payment expense ID',
    type: 'text',
  },
  {
    name: 'clientId',
    label: 'Client ID',
    placeholder: 'e.g. Enter client ID',
    type: 'text',
  },
  {
    name: 'serviceId',
    label: 'Service ID',
    placeholder: 'e.g. Enter service ID',
    type: 'text',
  },
  {
    name: 'providerId',
    label: 'Provider ID',
    placeholder: 'e.g. Enter provider ID',
    type: 'text',
  },
  {
    name: 'supplierId',
    label: 'Supplier ID',
    placeholder: 'e.g. Enter supplier ID',
    type: 'text',
  },
  {
    name: 'expenseId',
    label: 'Expense ID',
    placeholder: 'e.g. Enter expense ID',
    type: 'text',
  },
  {
    name: 'transactionId',
    label: 'Transaction ID',
    placeholder: 'e.g. Enter transaction ID',
    type: 'text',
  },
]
