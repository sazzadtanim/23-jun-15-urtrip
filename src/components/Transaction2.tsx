import React from 'react'
import DynamicSearchSelect from './Dynamic/DynamicSearchSelect'
import DynamicInput from './Dynamic/DynamicInput'
import {
  type UseFormRegister,
  type FieldErrors,
  type UseFormSetValue,
  type UseFormWatch,
} from 'react-hook-form'
import { type ZodSale } from 'zodType'
import { type FinancialAccount } from '@prisma/client'
import { useRouter } from 'next/router'

type TTransaction = {
  register: UseFormRegister<ZodSale>
  setValue: UseFormSetValue<ZodSale>
  errors: FieldErrors<ZodSale>

  status: string
  paid_amount: number
  due_amount: number
  due_date: string
  paid_date: string
  details: string
  financialAccountId: string

  supplierId?: string
  clientId?: string
  expenseId?: string
  serviceId?: string
  totalAmount?: number
  type: 'paidFromClient' | 'payToSupplier' | 'payForExpense'
  financialAccounts: FinancialAccount[] | undefined
  watch: UseFormWatch<ZodSale>
}

export default function Transaction2(props: TTransaction) {
  const router=useRouter()
  return (
    <>
      <DynamicSearchSelect
        apiData={[
          { id: 'paid', name: 'Paid' },
          { id: 'due', name: 'Due' },
          { id: 'partial', name: 'Partial' },
        ]}
        errors={props.errors}
        setValue={props.setValue}
        fieldId='client_payment_status'
        label='client payment status'
      />

      {props.watch('client_payment_status') === 'paid' && (
        <DynamicInput
          field_id='client_payment_paid_amount'
          label='paid amount'
          errors={props.errors}
          register={props.register}
          type='number'
          placeholder='e.g. 2000'
        />
      )}

      {props.watch('client_payment_status') === 'partial' && (
        <DynamicInput
          field_id='client_payment_paid_amount'
          label='paid amount'
          errors={props.errors}
          register={props.register}
          type='number'
          placeholder='e.g. 2000'
        />
      )}

      {props.watch('client_payment_status') === 'due' && (
        <DynamicInput
          field_id='client_payment_due_amount'
          label='due amount'
          errors={props.errors}
          register={props.register}
          type='number'
          placeholder='e.g. 2000'
        />
      )}

      {props.watch('client_payment_status') === 'partial' && (
        <DynamicInput
          field_id='client_payment_due_amount'
          label='due amount'
          errors={props.errors}
          register={props.register}
          type='number'
          placeholder='e.g. 2000'
        />
      )}

      {(props.watch('client_payment_status') === 'paid' ||
        props.watch('client_payment_status') === 'partial') && (
        <DynamicInput
          field_id='client_payment_paid_date'
          label='paid date'
          errors={props.errors}
          register={props.register}
          type='date'
          placeholder='e.g. 2000'
        />
      )}

      {(props.watch('client_payment_status') === 'due' ||
        props.watch('client_payment_status') === 'partial') && (
        <DynamicInput
          field_id='client_payment_due_date'
          label='due date'
          errors={props.errors}
          register={props.register}
          type='date'
          placeholder='e.g. 2000'
        />
      )}

      {props.financialAccounts &&
        (props.watch('client_payment_status') === 'paid' ||
          props.watch('client_payment_status') === 'partial') && (
          <div className='flex max-w-sm items-end justify-end'>
            <DynamicSearchSelect
              apiData={props.financialAccounts.map(account => ({
                id: account.id,
                name: account.title ?? '',
              }))}
              errors={props.errors}
              fieldId='client_payment_financialAccountId'
              label='payment method'
              setValue={props.setValue}
            />
            <button
              className='btn-success btn-xs btn'
              type='button'
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={async () => await router.push('/payment_method')}
            >
              Add Payment method
            </button>
          </div>
        )}

      {(props.watch('client_payment_status') === 'paid' ||
        props.watch('client_payment_status') === 'partial') && (
        <DynamicInput
          field_id='client_payment_details'
          label='payment details'
          errors={props.errors}
          register={props.register}
          type='text'
          placeholder='e.g. transaction id'
        />
      )}
    </>
  )
}
