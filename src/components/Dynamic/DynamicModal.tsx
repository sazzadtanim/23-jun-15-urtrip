import React, { useState, type Dispatch, type SetStateAction } from 'react'
import Modal from '../UI/Modal'

type TDynamicModal = {
  placeholder: string
  label: string
  isModalVisible: boolean
  setIsModalVisible: Dispatch<SetStateAction<boolean>>
  create: ({ name }: { name: string }) => unknown
  refetch: () => Promise<unknown>
}

export default function DynamicModal(props: TDynamicModal) {
  const [serviceName, setServiceName] = useState('')
  return (
    <div>
      <Modal
        isModalOpen={props.isModalVisible}
        SetIsModalClose={() => props.setIsModalVisible(!props.isModalVisible)}
      >
        <div className='form-control w-full max-w-screen-sm '>
          <label className='label' htmlFor='service'>
            <span className='label-text capitalize'>{props.label}</span>
          </label>
          <input
            id='service'
            placeholder={props.placeholder}
            className='bg-slate-50 input-bordered input w-full sm:input-sm md:input-md'
            type={'text'}
            onChange={e => setServiceName(e.target.value)}
          />
          <button
            type='button'
            className='btn-success btn-sm btn my-4'
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={async () => {
              props.create({ name: serviceName })
              await props.refetch()
              props.setIsModalVisible(false)
            }}
          >
            Submit
          </button>
        </div>
      </Modal>
    </div>
  )
}
