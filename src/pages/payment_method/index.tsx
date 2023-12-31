/* eslint-disable react/no-children-prop */
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { type InputList } from 'type'
import { type ZodFinancialAccount } from 'zodType'
import { validateFinancialAccount } from 'zodValidator'
import { useNotification } from 'zustandStore/useNotification'
// import { useNotification } from 'zustandStore/useNotification'
import DynamicInputList from '~/components/Dynamic/DynamicInputList'
import LoadingAndError from '~/components/Dynamic/LoadingAndError'
import Top2Menu from '~/components/UI/Top2Menu'
import { api } from '~/utils/api'

export default function PaymentMethodPage() {
  const router = useRouter()
  const setNotification = useNotification(s => s.setNotification)
  const {
    mutate: createPaymentMethod,
    isSuccess,
    error,
    isLoading,
  } = api.payment.create.useMutation()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ZodFinancialAccount>({
    resolver: zodResolver(validateFinancialAccount),
  })

  async function onSubmitForm(data: ZodFinancialAccount) {
    createPaymentMethod(data)
    await router.push('/client/clients')
  }

  if (isSuccess) {
    setNotification({ message: `customer added successfully` })
    router.back()
  }

  return (
    <>
      <Top2Menu title='create payment account' />
      <div className='max-w-screen-sm select-none rounded-xl'>
        <LoadingAndError error={error} isLoading={isLoading} />

        <form
          className='flex flex-col justify-center space-y-4 rounded-xl bg-base-100 p-10'
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={handleSubmit(onSubmitForm)}
        >
          <DynamicInputList
            errors={errors}
            inputlist={clientInputList}
            register={register}
          />

          <input type='submit' id='submit' className='btn-secondary btn my-2' />
        </form>
      </div>
    </>
  )
}

export const clientInputList: InputList<ZodFinancialAccount>[] = [
  {
    label: 'Title',
    placeholder: 'e.g. Kebria-City',
    type: 'text',
    name: 'title',
  },
  {
    label: 'phone',
    placeholder: '015XXXXXXXX',
    type: 'tel',
    name: 'phone',
  },
  {
    label: 'Account holder',
    placeholder: 'e.g. Mr Kebria',
    type: 'text',
    name: 'account_holder',
  },
  {
    label: 'account number',
    placeholder: '2100 XXXX XXXX',
    type: 'text',
    name: 'account_number',
  },
  {
    label: 'initial balance',
    placeholder: 'e.g. 2000',
    type: 'number',
    name: 'initial_balance',
  },
]
