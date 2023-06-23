import React, { useEffect } from 'react'
import DynamicSearchSelect from './Dynamic/DynamicSearchSelect'
import { useRouter } from 'next/router'
import DynamicInput from './Dynamic/DynamicInput'
import { useForm } from 'react-hook-form'
import { type ZodTransaction } from 'zodType'
import { zodResolver } from '@hookform/resolvers/zod'
import { validateTransaction } from 'zodValidator'
import {
  type FinancialAccount,
} from '@prisma/client'
import DynamicButton from './Dynamic/DynamicButton'
import DynamicSelect from './Dynamic/DynamicSelect'

type TTransaction = {
  supplierId?: string
  clientId?: string
  expenseId?: string
  serviceId?: string
  totalAmount: number
  financialAccounts: FinancialAccount[] | undefined
  // create: ({data}:{data:ZodTransaction})=>unknown
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createTransaction:any
}

export default function TransactionComp(props: TTransaction) {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<ZodTransaction>({ resolver: zodResolver(validateTransaction) })

  function onFormSubmit(data: ZodTransaction) {
    console.log('data', JSON.stringify(data, null, 2))
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    props.createTransaction({ data })
  }

  useEffect(() => {
    setValue('clientId', props.clientId)
    setValue('expenseId', props.expenseId)
    setValue('serviceId', props.serviceId)
    setValue('supplierId', props.supplierId)
  })

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form action='' onSubmit={handleSubmit(onFormSubmit)} className='max-w-sm'>
      <div className='grid max-w-sm items-end justify-between'>
        <DynamicSelect
          data={[
            { id: 'payToSupplier', name: 'payToSupplier' },
            { id: 'paidFromClient', name: 'paidFromClient' },
            { id: 'payForExpense', name: 'payForExpense' },
          ]}
          errors={errors}
          fieldId='type'
          label=''
          register={register}
        />

        <DynamicSearchSelect
          apiData={[
            { id: 'paid', name: 'Paid' },
            { id: 'due', name: 'Due' },
            { id: 'partial', name: 'Partial' },
          ]}
          errors={errors}
          setValue={setValue}
          fieldId='status'
          label='client payment status'
        />

        {watch('status') === 'paid' && (
          <DynamicInput
            field_id='paid_amount'
            label='paid amount'
            errors={errors}
            register={register}
            type='number'
            placeholder='e.g. 2000'
            value={props.totalAmount}
          />
        )}

        {watch('status') === 'partial' && (
          <DynamicInput
            field_id='paid_amount'
            label='paid amount'
            errors={errors}
            register={register}
            type='number'
            placeholder='e.g. 2000'
          />
        )}

        {(watch('status') === 'due' || watch('status') === 'partial') && (
          <DynamicInput
            field_id='due_amount'
            label='due amount'
            errors={errors}
            register={register}
            type='number'
            placeholder='e.g. 2000'
          />
        )}

        {(watch('status') === 'paid' || watch('status') === 'partial') && (
          <DynamicInput
            field_id='paid_date'
            label='paid date'
            errors={errors}
            register={register}
            type='date'
            placeholder='e.g. 2000'
          />
        )}

        {(watch('status') === 'due' || watch('status') === 'partial') && (
          <DynamicInput
            field_id='due_date'
            label='due date'
            errors={errors}
            register={register}
            type='date'
            placeholder='e.g. 2000'
          />
        )}

        {props.financialAccounts &&
          (watch('status') === 'paid' || watch('status') === 'partial') && (
            <div className='flex max-w-sm items-end justify-end'>
              <DynamicSearchSelect
                apiData={props.financialAccounts.map(account => ({
                  id: account.id,
                  name: account.title ?? '',
                }))}
                errors={errors}
                fieldId='financialAccountId'
                label='payment method'
                setValue={setValue}
              />
              <button
                className='btn-success btn-xs btn'
                type='button'
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onClick={async () => await router.push('/client')}
              >
                Add Payment
              </button>
            </div>
          )}

        {(watch('status') === 'paid' || watch('status') === 'partial') && (
          <DynamicInput
            field_id='details'
            label='payment details'
            errors={errors}
            register={register}
            type='text'
            placeholder='e.g. transaction id'
          />
        )}
      </div>

      <DynamicButton size='medium' state='primary' text='submit' />
    </form>
  )
}
