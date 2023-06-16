import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { type InputList } from 'type'
import { type ZodSale } from 'zodType'
import { validateSale } from 'zodValidator'
import { useNotification } from 'zustandStore/useNotification'
import DynamicButton from '~/components/Dynamic/DynamicButton'
import DynamicInputList from '~/components/Dynamic/DynamicInputList'
import DynamicSearchSelect from '~/components/Dynamic/DynamicSearchSelect'
import LoadingAndError from '~/components/Dynamic/LoadingAndError'
import Modal from '~/components/UI/Modal'
import Top2Menu from '~/components/UI/Top2Menu'
import { api } from '~/utils/api'

export default function ClientPage() {
  const router = useRouter()
  const { mutate: createSupplier } = api.supplier.create.useMutation()

  const [isSupplierModalVisible, setIsSupplierModalVisible] = useState(false)
  const [supplierName, setSupplierName] = useState('')

  const { mutate: createProvider } = api.provider.create.useMutation()

  const [providerName, setProviderName] = useState('')
  const [isProviderModalVisible, setIsProviderModalVisible] = useState(false)
  const { mutate: createService } = api.service.create.useMutation()

  const [isServiceModalVisible, setIsServiceModalVisible] = useState(false)
  const [serviceName, setServiceName] = useState('')
  const { data: suppliers, refetch: refetchSupplier } =
    api.supplier.all.useQuery()
  const { data: providers, refetch: refetchProvider } =
    api.provider.all.useQuery()
  const { data: services, refetch: refetchService } = api.service.all.useQuery()
  const setNotification = useNotification(s => s.setNotification)

  const { data: clients } = api.client.all.useQuery()
  const {
    mutate: create,
    isSuccess,
    error,
    isLoading,
  } = api.sale.create.useMutation()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ZodSale>({ resolver: zodResolver(validateSale) })

  async function onSubmitForm(data: ZodSale) {
    create(data)
    await router.push('/client/clients')
  }

  if (isSuccess) {
    setNotification({ message: `customer added successfully` })
    void router.push('/sales/customer/customers')
  }

  return (
    <>
      <Top2Menu title='create Invoice' />
      <div className='max-w-screen-sm select-none rounded-xl'>
        <LoadingAndError error={error} isLoading={isLoading} />

        <form
          className='flex flex-col justify-center space-y-4 rounded-xl bg-base-100 p-10'
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={handleSubmit(onSubmitForm)}
        >
          {/* SEARCH AND SELECT */}
          <div className='flex max-w-screen-sm items-end justify-between'>
            <div className='grow'>
              <DynamicSearchSelect
                errors={errors}
                fieldId='clientId'
                label='client'
                setValue={setValue}
                apiData={clients}
              />
            </div>
            <button
              className='btn-xs btn'
              type='button'
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={async () => await router.push('/client')}
            >
              Add Client
            </button>
          </div>

          <div className='flex max-w-screen-sm items-end justify-between'>
            <div className='grow'>
              <DynamicSearchSelect
                errors={errors}
                fieldId='serviceId'
                label='service'
                setValue={setValue}
                apiData={services}
              />
            </div>
            <button
              className='btn-xs btn'
              type='button'
              onClick={() => setIsServiceModalVisible(!isServiceModalVisible)}
            >
              Add service
            </button>
          </div>

          {/* provider */}
          <div className='flex max-w-screen-sm items-end justify-between'>
            <div className='grow'>
              <DynamicSearchSelect
                errors={errors}
                fieldId='providerId'
                label='provider'
                setValue={setValue}
                apiData={providers}
              />
            </div>
            <button
              className='btn-xs btn'
              type='button'
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={() => setIsProviderModalVisible(true)}
            >
              Add provider
            </button>
          </div>
          {/* supplier */}
          <div className='flex max-w-screen-sm items-end justify-between'>
            <div className='grow'>
              <DynamicSearchSelect
                errors={errors}
                fieldId='supplierId'
                label='supplier'
                setValue={setValue}
                apiData={suppliers}
              />
            </div>
            <button
              className='btn-xs btn'
              type='button'
              onClick={() => setIsSupplierModalVisible(true)}
            >
              Add Supplier
            </button>
          </div>

          <DynamicInputList
            errors={errors}
            inputlist={saleInputList}
            register={register}
          />

          <DynamicButton
            size='medium'
            state='primary'
            text='Submit'
            type='submit'
          />
        </form>
        {/* Service Modal */}
        {isServiceModalVisible && (
          <Modal
            isModalOpen={isServiceModalVisible}
            SetIsModalClose={() =>
              setIsServiceModalVisible(!isServiceModalVisible)
            }
          >
            <div className='form-control w-full max-w-screen-sm '>
              <label className='label' htmlFor='service'>
                <span className='label-text capitalize'>service name</span>
              </label>
              <input
                id='service'
                placeholder='e.g. Air Ticket'
                className='bg-slate-50 input-bordered input w-full sm:input-sm md:input-md'
                type={'text'}
                onChange={e => setServiceName(e.target.value)}
              />
              <button
                type='button'
                className='btn-success btn-sm btn my-4'
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onClick={async () => {
                  createService({ name: serviceName })
                  await refetchService()
                  setIsServiceModalVisible(false)
                }}
              >
                Submit
              </button>
            </div>
          </Modal>
        )}

        {/* Provider Modal */}
        {isProviderModalVisible && (
          <Modal
            isModalOpen={isProviderModalVisible}
            SetIsModalClose={() =>
              setIsProviderModalVisible(!isProviderModalVisible)
            }
          >
            <div className='form-control w-full max-w-screen-sm '>
              <label className='label' htmlFor='service'>
                <span className='label-text capitalize'>provider name</span>
              </label>
              <input
                id='provider'
                placeholder='e.g. US Bangla'
                className='bg-slate-50 input-bordered input w-full sm:input-sm md:input-md'
                type={'text'}
                onChange={e => setProviderName(e.target.value)}
              />
              <button
                type='button'
                className='btn-success btn-sm btn my-4'
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onClick={async () => {
                  createProvider({ name: providerName })
                  await refetchProvider()
                  setIsProviderModalVisible(false)
                }}
              >
                Submit
              </button>
            </div>
          </Modal>
        )}

        {/* Supplier Modal */}
        {isSupplierModalVisible && (
          <Modal
            isModalOpen={isSupplierModalVisible}
            SetIsModalClose={() =>
              setIsSupplierModalVisible(!isSupplierModalVisible)
            }
          >
            <div className='form-control w-full max-w-screen-sm '>
              <label className='label' htmlFor='service'>
                <span className='label-text capitalize'>supplier name</span>
              </label>
              <input
                id='supplier'
                placeholder='e.g. ShareTrip'
                className='bg-slate-50 input-bordered input w-full sm:input-sm md:input-md'
                type={'text'}
                onChange={e => setSupplierName(e.target.value)}
              />
              <button
                type='button'
                className='btn-success btn-sm btn my-4'
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onClick={async () => {
                  createSupplier({ name: supplierName })
                  await refetchSupplier()
                  setIsSupplierModalVisible(false)
                }}
              >
                Submit
              </button>
            </div>
          </Modal>
        )}
      </div>
    </>
  )
}

export const saleInputList: InputList<ZodSale>[] = [
  {
    label: 'details',
    placeholder: 'e.g. DAC-BKK-DAC, Adult 07',
    type: 'text',
    name: 'details',
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
    label: 'paid amount',
    placeholder: 'e.g. 500',
    type: 'number',
    name: 'paid_amount',
  },
  {
    label: 'payment due date',
    placeholder: '',
    type: 'date',
    name: 'payment_due_Date',
  },
  {
    label: 'discount',
    placeholder: 'e.g. 500',
    type: 'number',
    name: 'discount',
  },
  {
    label: 'CO/DH',
    placeholder: 'e.g. 500',
    type: 'number',
    name: 'co_or_dh',
  },
  {
    label: 'Expense',
    placeholder: 'e.g. 500',
    type: 'number',
    name: 'expense',
  },
  {
    label: 'Expense details',
    placeholder: 'e.g. express delivery',
    type: 'text',
    name: 'expense_details',
  },
  {
    label: 'comission',
    placeholder: 'amount in BDT',
    type: 'number',
    name: 'comission',
  },
  {
    label: 'status',
    placeholder: 'e.g. 4',
    type: 'text',
    name: 'status',
  },
]
