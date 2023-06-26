import { zodResolver } from '@hookform/resolvers/zod'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { type ZodSale } from 'zodType'
import { validateSale } from 'zodValidator'
import { useNotification } from 'zustandStore/useNotification'
import DynamicButton2 from '~/components/Dynamic/DynamicButton2'
import DynamicInput from '~/components/Dynamic/DynamicInput'
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
  } = useForm<ZodSale>({
    resolver: zodResolver(validateSale),
  })

  function onSubmitForm(data: ZodSale) {
    console.log('🚀 ~ file: index.tsx:49 ~ onSubmitForm ~ data:', data)
    createSale(data)
    // await router.push('/client/clients')
  }

  if (isSuccess) {
    setNotification({ message: `sale entry created successfully` })
    // void router.push('/sales/customer/customers')
    router.back()
  }

  return (
    <div className=''>
      <Top2Menu title='create sale' />
      <LoadingAndError error={error} isLoading={isLoading} />
      <form
        className='grid gap-2 rounded-xl bg-base-100'
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(onSubmitForm)}
      >


        {/* Everything Service Related */}
        <>
          <div>
            <DynamicSearchSelect
              errors={errors}
              fieldId='serviceId'
              label='service'
              setValue={setValue}
              apiData={services}
            />

            <button
              className='btn-success btn-xs btn max-w-sm'
              type='button'
              onClick={() => setIsServiceModalVisible(!isServiceModalVisible)}
            >
              Add service
            </button>
          </div>

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

          {/* provider */}
          <>
            <div>
              {' '}
              <DynamicSearchSelect
                errors={errors}
                fieldId='providerId'
                label='provider'
                setValue={setValue}
                apiData={providers}
              />
              <button
                className='btn-success btn-xs btn max-w-sm'
                type='button'
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onClick={() => setIsProviderModalVisible(true)}
              >
                Add provider
              </button>
            </div>
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
          </>

          <DynamicInputList
            errors={errors}
            inputlist={saleInputListByTanim}
            register={register}
          />
        </>

        {/* Everything Supplier related */}
        <>
          <div>
            <div className='grow'>
              <DynamicSearchSelect
                errors={errors}
                fieldId='supplierId'
                label='supplier'
                setValue={setValue}
                apiData={suppliers}
              />
            </div>

            <div className='flex max-w-sm justify-between'>
              <DynamicButton2
                animate={true}
                size='xs'
                state='primary'
                text='add supplier'
                onClick={() => setIsSupplierModalVisible(true)}
              />
            </div>
          </div>

          <DynamicModal
            create={createSupplier}
            isModalVisible={isSupplierModalVisible}
            label='supplier'
            placeholder='e.g. ShareTrip'
            refetch={refetchSupplier}
            setIsModalVisible={setIsSupplierModalVisible}
          />

          <Modal
            SetIsModalOpen={() => setIsModalOpen(!isModalOpen)}
            isModalOpen={isModalOpen}
          >
            {isfinancialAccountLoaded && (
              <DynamicTransaction
                setIsModalVisible={setIsModalOpen}
                type='payToSupplier'
                supplierId={watch('supplierId')}
                financialAccounts={financialAccounts}
                totalAmount={watch('total_amount')}
                createTransaction={createTransaction}
              />
            )}
          </Modal>

          {/* Supplier payment */}
          <>
            <DynamicSearchSelect
              apiData={[
                { id: 'paid', name: 'Paid' },
                { id: 'due', name: 'Due' },
                { id: 'partial', name: 'Partial' },
              ]}
              errors={errors}
              setValue={setValue}
              fieldId='supplier_payment_status'
              label='supplier payment status'
            />

            {watch('supplier_payment_status') === 'paid' && (
              <DynamicInput
                field_id='supplier_payment_paid_amount'
                label='paid amount'
                errors={errors}
                register={register}
                type='number'
                placeholder='e.g. 2000'
              />
            )}

            {watch('supplier_payment_status') === 'partial' && (
              <DynamicInput
                field_id='supplier_payment_paid_amount'
                label='paid amount'
                errors={errors}
                register={register}
                type='number'
                placeholder='e.g. 2000'
              />
            )}

            {watch('supplier_payment_status') === 'due' && (
              <DynamicInput
                field_id='supplier_payment_due_amount'
                label='due amount'
                errors={errors}
                register={register}
                type='number'
                placeholder='e.g. 2000'
              />
            )}

            {watch('supplier_payment_status') === 'partial' && (
              <DynamicInput
                field_id='supplier_payment_due_amount'
                label='due amount'
                errors={errors}
                register={register}
                type='number'
                placeholder='e.g. 2000'
              />
            )}

            {(watch('supplier_payment_status') === 'paid' ||
              watch('supplier_payment_status') === 'partial') && (
              <DynamicInput
                field_id='supplier_payment_paid_date'
                label='paid date'
                errors={errors}
                register={register}
                type='date'
                placeholder='e.g. 2000'
              />
            )}

            {(watch('supplier_payment_status') === 'due' ||
              watch('supplier_payment_status') === 'partial') && (
              <DynamicInput
                field_id='supplier_payment_due_date'
                label='due date'
                errors={errors}
                register={register}
                type='date'
                placeholder='e.g. 2000'
              />
            )}

            {financialAccounts &&
              (watch('supplier_payment_status') === 'paid' ||
                watch('supplier_payment_status') === 'partial') && (
                <div className='flex max-w-sm items-end justify-end'>
                  <DynamicSearchSelect
                    apiData={financialAccounts.map(account => ({
                      id: account.id,
                      name: account.title ?? '',
                    }))}
                    errors={errors}
                    fieldId='supplier_payment_financialAccountId'
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

            {(watch('supplier_payment_status') === 'paid' ||
              watch('supplier_payment_status') === 'partial') && (
              <DynamicInput
                field_id='supplier_payment_details'
                label='payment details'
                errors={errors}
                register={register}
                type='text'
                placeholder='e.g. transaction id'
              />
            )}
          </>
        </>

        <DynamicButton2
          size='large'
          state='deep_blue'
          text='Submit'
          type='submit'
          animate
          position='center'
        />
      </form>
    </div>
  )
}
