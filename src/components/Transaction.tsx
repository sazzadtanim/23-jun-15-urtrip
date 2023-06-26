import React, { type Dispatch, type SetStateAction } from 'react'
import DynamicSearchSelect from './Dynamic/DynamicSearchSelect'
import { useRouter } from 'next/router'
import DynamicInput from './Dynamic/DynamicInput'
import { useForm } from 'react-hook-form'
import { type ZodTransaction } from 'zodType'
import { zodResolver } from '@hookform/resolvers/zod'
import { validateTransaction } from 'zodValidator'
import { type FinancialAccount } from '@prisma/client'
import DynamicButton from './Dynamic/DynamicButton'

type TTransaction = {
  setIsModalVisible: Dispatch<SetStateAction<boolean>>
  supplierId?: string
  clientId?: string
  expenseId?: string
  serviceId?: string
  totalAmount?: number
  type: 'paidFromClient' | 'payToSupplier' | 'payForExpense'
  financialAccounts: FinancialAccount[] | undefined
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createTransaction: (data: ZodTransaction) => unknown
}

export default function TransactionComp(props: TTransaction) {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<ZodTransaction>({
    resolver: zodResolver(validateTransaction),
    defaultValues: {
      due_amount: props.totalAmount,
      paid_amount: props.totalAmount,
      clientId: props.clientId,
      expenseId: props.expenseId,
      serviceId: props.serviceId,
      supplierId: props.supplierId,
      type: props.type,
    },
  })

  function onFormSubmit(data: ZodTransaction) {
    console.log('🚀 ~ file: Transaction.tsx:38 ~ onFormSubmit ~ data:', data)
    props.createTransaction(data)
    // router.back()
    props.setIsModalVisible(false)
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form action='' onSubmit={handleSubmit(onFormSubmit)} className='max-w-sm'>
      <div className='grid max-w-sm items-end justify-between'>
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

        {watch('status') === 'due' && (
          <DynamicInput
            field_id='due_amount'
            label='due amount'
            errors={errors}
            register={register}
            type='number'
            placeholder='e.g. 2000'
          />
        )}

        {watch('status') === 'partial' && (
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
                onClick={async () => await router.push('/payment_method')}
              >
                Add Payment method
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

      <DynamicButton
        size='medium'
        state='primary'
        text='submit'
        type='submit'
      />
    </form>
  )
}
