/* eslint-disable react/no-children-prop */
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { InputList } from 'type'
import { type ZodClient, validateClient } from 'zodType'
import { useNotification } from 'zustandStore/useNotification'
import DynamicInputList from '~/components/Dynamic/DynamicInputList'
import Top2Menu from '~/components/UI/Top2Menu'

export default function ClientPage() {
  const router = useRouter()
  const setNotification = useNotification(s => s.setNotification)
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
  } = useForm<ZodClient>({ resolver: zodResolver(validateClient) })

  async function onSubmitForm(data: ZodClient) {
    // create(data)
    await router.push('/client/clients')
  }

  //   if (isSuccess) {
  //     setNotification({ message: `customer added successfully` })
  //     void router.push('/sales/customer/customers')
  //   }

  return (
    <>
    <Top2Menu title='create Client'/>
    <div className='max-w-screen-sm select-none rounded-xl'>
        
      {/* <LoadingError error={error} isLoading={isLoading} /> */}

      <form
        className='flex flex-col justify-center rounded-xl bg-base-100 p-10 space-y-4'
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

export const clientInputList: InputList<ZodClient>[] = [
  {
    label: 'Name',
    placeholder: 'e.g. Mr Rahim',
    type: 'text',
    name: 'name',
  },
  {
    label: 'phone',
    placeholder: '015XXXXXXXX',
    type: 'tel',
    name: 'phone',
  },
  {
    label: 'email',
    placeholder: 'someone@email.com',
    type: 'email',
    name: 'email',
  },
  {
    label: 'Address',
    placeholder:
      '32, Justice SM Morshed Sharany Agargoan Sher-e-Bangla Nagar Dhaka-1207',
    type: 'text',
    name: 'address',
  },
  {
    label: 'reference',
    placeholder: 'e.g. Mr Sumon',
    type: 'text',
    name: 'reference',
  },
  {
    label: 'Note',
    placeholder: 'write something',
    type: 'text',
    name: 'note',
  },
]
