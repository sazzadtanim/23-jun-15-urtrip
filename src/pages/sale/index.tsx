import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { type InputList } from 'type'
import { type ZodInvoice } from 'zodType'
import { validateInvoice } from 'zodValidator'
import DynamicInputList from '~/components/Dynamic/DynamicInputList'
import DynamicSearchSelect from '~/components/Dynamic/DynamicSearchSelect'
import Modal from '~/components/UI/Modal'
import Top2Menu from '~/components/UI/Top2Menu'

export default function ClientPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()

  //   const {
  //     mutate: create,
  //     isSuccess,
  //     error,
  //     isLoading,
  //   } = api.client.create.useMutation()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ZodInvoice>({ resolver: zodResolver(validateInvoice) })

  async function onSubmitForm() {
    // create(data)
    await router.push('/client/clients')
  }

  //   if (isSuccess) {
  //     setNotification({ message: `customer added successfully` })
  //     void router.push('/sales/customer/customers')
  //   }

  return (
    <>
      {isModalOpen && (
        <Modal
          SetIsModalClose={() => setIsModalOpen(!isModalOpen)}
          isModalOpen={isModalOpen}
        >
          <div className='bg-white p-20'>
            <h1>Sazzad</h1>
          </div>
        </Modal>
      )}
      <Top2Menu title='create Invoice' />
      <div className='max-w-screen-sm select-none rounded-xl'>
        {/* <LoadingError error={error} isLoading={isLoading} /> */}

        <form
          className='flex flex-col justify-center space-y-4 rounded-xl bg-base-100 p-10'
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={handleSubmit(onSubmitForm)}
        >
          {/* Client */}
          <DynamicSearchSelect
            apiData={[
              { id: '1', name: 'sazzad' },
              { id: '2', name: 'tanim' },
            ]}
            errors={errors}
            fieldId='clientId'
            label='client'
            setValue={setValue}
          />

          {/* Supplier */}
          <DynamicSearchSelect
            apiData={[
              { id: '1', name: 'sazzad' },
              { id: '2', name: 'tanim' },
            ]}
            errors={errors}
            fieldId='supplierId'
            label='client'
            setValue={setValue}
          />

          {/* Add service in modal */}
          <DynamicInputList
            errors={errors}
            inputlist={clientInputList}
            register={register}
          />

          <input type='submit' id='submit' className='btn-secondary btn my-2' />
        </form>
        <button
          className='btn-success btn'
          onClick={() => setIsModalOpen(true)}
        >
          show modal
        </button>
      </div>
    </>
  )
}

export const clientInputList: InputList<ZodInvoice>[] = [
  {
    label: 'co_or_dh',
    placeholder: '015XXXXXXXX',
    type: 'tel',
    name: 'co_or_dh',
  },
  {
    label: 'discount',
    placeholder: 'someone@email.com',
    type: 'email',
    name: 'discount',
  },
  {
    label: 'expenseId',
    placeholder:
      '32, Justice SM Morshed Sharany Agargoan Sher-e-Bangla Nagar Dhaka-1207',
    type: 'text',
    name: 'expenseId',
  },
  {
    label: 'paid_amount',
    placeholder: 'e.g. Mr Sumon',
    type: 'text',
    name: 'paid_amount',
  },
  {
    label: 'payment_due_Date',
    placeholder: 'write something',
    type: 'text',
    name: 'payment_due_Date',
  },
  {
    label: 'payment_status',
    placeholder: 'write something',
    type: 'text',
    name: 'payment_status',
  },
  {
    label: 'serviceId',
    placeholder: 'write something',
    type: 'text',
    name: 'serviceId',
  },
  {
    label: 'supplierId',
    placeholder: 'write something',
    type: 'text',
    name: 'supplierId',
  },
]
