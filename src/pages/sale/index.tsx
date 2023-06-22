import { zodResolver } from '@hookform/resolvers/zod'
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
import Top2Menu from '~/components/UI/Top2Menu'
import { api } from '~/utils/api'
import { saleInputListByTanim } from '~data/saleInputList'

export default function SalePage() {
  const router = useRouter()
  const { mutate: createSupplier } = api.supplier.create.useMutation()
  const { mutate: createProvider } = api.provider.create.useMutation()
  const { mutate: createService } = api.service.create.useMutation()
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
  } = useForm<ZodSale>({ resolver: zodResolver(validateSale) })

  function onSubmitForm(data: ZodSale) {
    console.log('🚀 ~ file: index.tsx:49 ~ onSubmitForm ~ data:', data)
    createSale(data)
    // await router.push('/client/clients')
  }

  if (isSuccess) {
    setNotification({ message: `customer added successfully` })
    void router.push('/sales/customer/customers')
  }

  return (
    <>
      <Top2Menu title='create Invoice' />
      <div className=''>
        <LoadingAndError error={error} isLoading={isLoading} />

        <form
          className='justify-center space-y-4 rounded-xl bg-base-100 p-10'
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={handleSubmit(onSubmitForm)}
        >
          <div className='grid grid-flow-row grid-cols-3 gap-5'>
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
                  onClick={() =>
                    setIsServiceModalVisible(!isServiceModalVisible)
                  }
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
                className='btn-success btn-xs btn'
                type='button'
                onClick={() => setIsSupplierModalVisible(true)}
              >
                Add Client
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
            </div>


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
            </div>
          </div>

          <DynamicButton
            size='medium'
            state='primary'
            text='Submit'
            type='submit'
          />
        </form>
      </div>
    </>
  )
}

// function ClientForm() {
//   return (
//     <>
//       <div className='max-w-sm'>
//         <div className='grid max-w-sm items-end justify-between'>
//           <div className='flex max-w-sm items-end justify-end'>
//             <DynamicSearchSelect
//               errors={errors}
//               fieldId='clientId'
//               label='client'
//               setValue={setValue}
//               apiData={clients}
//             />
//             <button
//               className='btn-success btn-xs btn'
//               type='button'
//               // eslint-disable-next-line @typescript-eslint/no-misused-promises
//               onClick={async () => await router.push('/client')}
//             >
//               Add Client
//             </button>
//           </div>

//           <DynamicSearchSelect
//             apiData={[
//               { id: 'paid', name: 'Paid' },
//               { id: 'due', name: 'Due' },
//               { id: 'partial', name: 'Partial' },
//             ]}
//             errors={errors}
//             setValue={setValue}
//             fieldId='client_payment_status'
//             label='client payment status'
//           />

//           {(watch('client_payment_status') === 'paid' ||
//             watch('client_payment_status') === 'partial') && (
//             <DynamicInput
//               field_id='client_payment_paid_amount'
//               label='paid amount'
//               errors={errors}
//               register={register}
//               type='number'
//               placeholder='e.g. 2000'
//               value={
//                 watch('client_payment_status') === 'paid'
//                   ? watch('total_amount')
//                   : undefined
//               }
//             />
//           )}

//           {(watch('client_payment_status') === 'due' ||
//             watch('client_payment_status') === 'partial') && (
//             <DynamicInput
//               field_id='client_payment_due_amount'
//               label='due amount'
//               errors={errors}
//               register={register}
//               type='number'
//               placeholder='e.g. 2000'
//               value={
//                 watch('client_payment_status') === 'due'
//                   ? watch('total_amount')
//                   : undefined
//               }
//             />
//           )}

//           {(watch('client_payment_status') === 'paid' ||
//             watch('client_payment_status') === 'partial') && (
//             <DynamicInput
//               field_id='client_payment_paid_date'
//               label='paid date'
//               errors={errors}
//               register={register}
//               type='date'
//               placeholder='e.g. 2000'
//             />
//           )}

//           {(watch('client_payment_status') === 'due' ||
//             watch('client_payment_status') === 'partial') && (
//             <DynamicInput
//               field_id='client_payment_due_date'
//               label='due date'
//               errors={errors}
//               register={register}
//               type='date'
//               placeholder='e.g. 2000'
//             />
//           )}

//           {financialAccounts &&
//             (watch('client_payment_status') === 'paid' ||
//               watch('client_payment_status') === 'partial') && (
//               <DynamicSearchSelect
//                 apiData={financialAccounts.map(account => ({
//                   id: account.id,
//                   name: account.title ?? '',
//                 }))}
//                 errors={errors}
//                 fieldId='client_payment_financialAccountId'
//                 label='payment method'
//                 setValue={setValue}
//               />
//             )}

//           {(watch('client_payment_status') === 'paid' ||
//             watch('client_payment_status') === 'partial') && (
//             <DynamicInput
//               field_id='client_payment_details'
//               label='payment details'
//               errors={errors}
//               register={register}
//               type='text'
//               placeholder='e.g. transaction id'
//             />
//           )}
//         </div>
//       </div>
//     </>
//   )
// }

// function SupplierForm(){
//   return <>
//               <div>
//               {/* supplier */}

//               <DynamicSearchSelect
//                 apiData={[
//                   { id: 'paid', name: 'Paid' },
//                   { id: 'due', name: 'Due' },
//                   { id: 'partial', name: 'Partial' },
//                 ]}
//                 errors={errors}
//                 setValue={setValue}
//                 fieldId='supplier_payment_status'
//                 label='payment status'
//               />

//               {(watch('supplier_payment_status') === 'paid' ||
//                 watch('supplier_payment_status') === 'partial') && (
//                 <DynamicInput
//                   field_id='supplier_payment_paid_amount'
//                   label='paid amount'
//                   errors={errors}
//                   register={register}
//                   type='number'
//                   value={
//                     watch('supplier_payment_status') === 'paid'
//                       ? watch('total_amount')
//                       : undefined
//                   }
//                 />
//               )}

//               {(watch('supplier_payment_status') === 'due' ||
//                 watch('supplier_payment_status') === 'partial') && (
//                 <DynamicInput
//                   field_id='supplier_payment_due_amount'
//                   label='due amount'
//                   errors={errors}
//                   register={register}
//                   type='number'
//                   placeholder='e.g. 2000'
//                 />
//               )}

//               {(watch('supplier_payment_status') === 'paid' ||
//                 watch('supplier_payment_status') === 'partial') && (
//                 <DynamicInput
//                   field_id='client_payment_paid_date'
//                   label='paid date'
//                   errors={errors}
//                   register={register}
//                   type='date'
//                   placeholder='e.g. 2000'
//                 />
//               )}

//               {(watch('supplier_payment_status') === 'due' ||
//                 watch('supplier_payment_status') === 'partial') && (
//                 <DynamicInput
//                   field_id='client_payment_due_date'
//                   label='due date'
//                   errors={errors}
//                   register={register}
//                   type='date'
//                   placeholder='e.g. 2000'
//                 />
//               )}

//               {financialAccounts &&
//                 (watch('supplier_payment_status') === 'paid' ||
//                   watch('supplier_payment_status') === 'partial') && (
//                   <DynamicSearchSelect
//                     apiData={financialAccounts.map(account => ({
//                       id: account.id,
//                       name: account.title ?? '',
//                     }))}
//                     errors={errors}
//                     fieldId='client_payment_financialAccountId'
//                     label='payment method'
//                     setValue={setValue}
//                   />
//                 )}

//               {(watch('supplier_payment_status') === 'paid' ||
//                 watch('supplier_payment_status') === 'partial') && (
//                 <DynamicInput
//                   field_id='supplier_payment_details'
//                   label='payment details'
//                   errors={errors}
//                   register={register}
//                   type='text'
//                   placeholder='e.g. transaction id'
//                 />
//               )}
//             </div>
//   </>
// }
