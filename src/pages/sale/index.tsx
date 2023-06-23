import { zodResolver } from '@hookform/resolvers/zod'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { type ZodSale } from 'zodType'
import { validateSale } from 'zodValidator'
import { useNotification } from 'zustandStore/useNotification'
import DynamicButton from '~/components/Dynamic/DynamicButton'
import DynamicInputList from '~/components/Dynamic/DynamicInputList'
import DynamicModal from '~/components/Dynamic/DynamicModal'
import DynamicSearchSelect from '~/components/Dynamic/DynamicSearchSelect'
import LoadingAndError from '~/components/Dynamic/LoadingAndError'
import Modal from '~/components/UI/Modal'
import Top2Menu from '~/components/UI/Top2Menu'
import { api } from '~/utils/api'
import { saleInputListByTanim } from '~data/saleInputList'

const DynamicTransaction = dynamic(() => import('~/components/Transaction'))

export default function SalePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isClientModalOpen, setIsClientModalOpen] = useState(false)
  const { data: financialAccounts, isSuccess: isfinancialAccountLoaded } =
    api.payment.all.useQuery()
  const router = useRouter()
  const { mutate: createSupplier } = api.supplier.create.useMutation()
  const { mutate: createProvider } = api.provider.create.useMutation()
  const { mutate: createService } = api.service.create.useMutation()
  const { mutate: createTransaction } = api.transaction.create.useMutation()
  const [isSupplierModalVisible, setIsSupplierModalVisible] = useState(false)
  const [isProviderModalVisible, setIsProviderModalVisible] = useState(false)
  const [isServiceModalVisible, setIsServiceModalVisible] = useState(false)
  const { data: suppliers, refetch: refetchSupplier } =
    api.supplier.all.useQuery()
  const { data: providers, refetch: refetchProvider } =
    api.provider.all.useQuery()
  const { data: services, refetch: refetchService } = api.service.all.useQuery()
  const setNotification = useNotification(s => s.setNotification)
  const { data: clients } = api.client.all.useQuery()

  const {
    mutate: createSale,
    isSuccess,
    error,
    isLoading,
  } = api.sale.create.useMutation()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ZodSale>({ resolver: zodResolver(validateSale) })

  function onSubmitForm(data: ZodSale) {
    console.log('🚀 ~ file: index.tsx:49 ~ onSubmitForm ~ data:', data)
    createSale(data)
    // await router.push('/client/clients')
  }

  if (isSuccess) {
    setNotification({ message: `customer added successfully` })
    // void router.push('/sales/customer/customers')
    router.back()
  }

  return (
    <>
      <Top2Menu title='create Invoice' />
      <LoadingAndError error={error} isLoading={isLoading} />
      <form
        className='justify-center space-y-4 rounded-xl bg-base-100 p-10'
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <div className='grid grid-cols-2 gap-5'>
          {/* Everything Service Related */}
          <div>
            {/* Service  */}
            <div className='flex max-w-sm items-end justify-between'>
              <DynamicSearchSelect
                errors={errors}
                fieldId='serviceId'
                label='service'
                setValue={setValue}
                apiData={services}
              />

              <button
                className='btn-success btn-xs btn'
                type='button'
                onClick={() => setIsServiceModalVisible(!isServiceModalVisible)}
              >
                Add service
              </button>
              {isServiceModalVisible && (
                <DynamicModal
                  placeholder='e.g. Air Ticket'
                  create={createService}
                  isModalVisible={isServiceModalVisible}
                  label='create service'
                  refetch={refetchService}
                  setIsModalVisible={setIsServiceModalVisible}
                />
              )}
            </div>

            {/* provider */}
            <div className='flex max-w-sm items-end justify-between'>
              <DynamicSearchSelect
                errors={errors}
                fieldId='providerId'
                label='provider'
                setValue={setValue}
                apiData={providers}
              />

              <button
                className='btn-success btn-xs  btn'
                type='button'
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onClick={() => setIsProviderModalVisible(true)}
              >
                Add provider
              </button>
              {isProviderModalVisible && (
                <DynamicModal
                  create={createProvider}
                  isModalVisible={isProviderModalVisible}
                  label='provider'
                  placeholder='e.g. US Bangla'
                  refetch={refetchProvider}
                  setIsModalVisible={setIsProviderModalVisible}
                />
              )}
            </div>

            <DynamicInputList
              errors={errors}
              inputlist={saleInputListByTanim}
              register={register}
            />
          </div>

          {/* Everything Client related */}
          <div className='flex max-w-sm items-end justify-end'>
            <DynamicSearchSelect
              errors={errors}
              fieldId='clientId'
              label='client'
              setValue={setValue}
              apiData={clients}
            />
            <button
              className='btn-success btn-xs btn'
              type='button'
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={async () => await router.push('/client')}
            >
              Add Client
            </button>
          </div>

          <DynamicButton
            size='medium'
            state='primary'
            text='client payment'
            type='button'
            onClick={() => setIsClientModalOpen(!isClientModalOpen)}
          />

          <Modal
            SetIsModalClose={setIsClientModalOpen}
            isModalOpen={isClientModalOpen}
          >
            {isfinancialAccountLoaded && (
              <DynamicTransaction
                type='paidFromClient'
                clientId={watch('clientId')}
                financialAccounts={financialAccounts}
                totalAmount={watch('total_amount')}
                createTransaction={createTransaction}
              />
            )}
          </Modal>

          {/* Everything Supplier related */}
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
              className='btn-success btn-xs btn'
              type='button'
              onClick={() => setIsSupplierModalVisible(true)}
            >
              Add Supplier
            </button>
            {isSupplierModalVisible && (
              <DynamicModal
                create={createSupplier}
                isModalVisible={isSupplierModalVisible}
                label='supplier'
                placeholder='e.g. ShareTrip'
                refetch={refetchSupplier}
                setIsModalVisible={setIsSupplierModalVisible}
              />
            )}
            <DynamicButton
              size='medium'
              state='primary'
              text='supplier payment'
              onClick={() => setIsModalOpen(!isModalOpen)}
              type='button'
            />

            <Modal SetIsModalClose={setIsModalOpen} isModalOpen={isModalOpen}>
              {isfinancialAccountLoaded && (
                <DynamicTransaction
                  type='payToSupplier'
                  supplierId={watch('supplierId')}
                  financialAccounts={financialAccounts}
                  totalAmount={watch('total_amount')}
                  createTransaction={createTransaction}
                />
              )}
            </Modal>
          </div>
        </div>

        <DynamicButton
          size='medium'
          state='primary'
          text='Submit'
          type='submit'
        />
      </form>
    </>
  )
}
