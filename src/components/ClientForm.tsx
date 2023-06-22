import React from 'react'
import DynamicSearchSelect from './Dynamic/DynamicSearchSelect'
import { useRouter } from 'next/router'
import DynamicInput from './Dynamic/DynamicInput'
import { useForm } from 'react-hook-form'
import { type ZodClientPayment } from 'zodType'

export default function ClientForm() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<ZodClientPayment>()

  return (
    <>
      <div className='max-w-sm'>
        <div className='grid max-w-sm items-end justify-between'>
          <div className='flex max-w-sm items-end justify-end'>
            {/* <DynamicSearchSelect
              errors={errors}
              fieldId='clientId'
              label='client'
              setValue={setValue}
              apiData={clients}
            /> */}
            <button
              className='btn-success btn-xs btn'
              type='button'
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={async () => await router.push('/client')}
            >
              Add Client
            </button>
          </div>

          <DynamicSearchSelect
            apiData={[
              { id: 'paid', name: 'Paid' },
              { id: 'due', name: 'Due' },
              { id: 'partial', name: 'Partial' },
            ]}
            errors={errors}
            setValue={setValue}
            fieldId='client_payment_status'
            label='client payment status'
          />

          {(watch('client_payment_status') === 'paid' ||
            watch('client_payment_status') === 'partial') && (
            <DynamicInput
              field_id='client_payment_paid_amount'
              label='paid amount'
              errors={errors}
              register={register}
              type='number'
              placeholder='e.g. 2000'
            />
          )}

          {(watch('client_payment_status') === 'due' ||
            watch('client_payment_status') === 'partial') && (
            <DynamicInput
              field_id='client_payment_due_amount'
              label='due amount'
              errors={errors}
              register={register}
              type='number'
              placeholder='e.g. 2000'
            />
          )}

          {(watch('client_payment_status') === 'paid' ||
            watch('client_payment_status') === 'partial') && (
            <DynamicInput
              field_id='client_payment_paid_date'
              label='paid date'
              errors={errors}
              register={register}
              type='date'
              placeholder='e.g. 2000'
            />
          )}

          {(watch('client_payment_status') === 'due' ||
            watch('client_payment_status') === 'partial') && (
            <DynamicInput
              field_id='client_payment_due_date'
              label='due date'
              errors={errors}
              register={register}
              type='date'
              placeholder='e.g. 2000'
            />
          )}

          {/* {financialAccounts &&
            (watch('client_payment_status') === 'paid' ||
              watch('client_payment_status') === 'partial') && (
              <DynamicSearchSelect
                apiData={financialAccounts.map(account => ({
                  id: account.id,
                  name: account.title ?? '',
                }))}
                errors={errors}
                fieldId='client_payment_financialAccountId'
                label='payment method'
                setValue={setValue}
              />
            )} */}

          {(watch('client_payment_status') === 'paid' ||
            watch('client_payment_status') === 'partial') && (
            <DynamicInput
              field_id='client_payment_details'
              label='payment details'
              errors={errors}
              register={register}
              type='text'
              placeholder='e.g. transaction id'
            />
          )}
        </div>
      </div>
    </>
  )
}
