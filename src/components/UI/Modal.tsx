import { type Dispatch, type SetStateAction, useEffect } from 'react'
import ReactPortal from './ReactPortal'

interface ModalProps {
  children?: React.ReactNode
  isModalOpen: boolean
  SetIsModalClose: Dispatch<SetStateAction<boolean>>
}

export default function Modal({
  children,
  isModalOpen: isOpen,
  SetIsModalClose,
}: ModalProps) {
  // close modal on escape key press
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === 'Escape' ? SetIsModalClose(true) : null
    document.body.addEventListener('keydown', closeOnEscapeKey)
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey)
    }
  }, [SetIsModalClose])

  //disable scroll on modal open
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <ReactPortal wrapperId='react-portal-model-container '>
      <div className='fixed inset-0 z-40 h-screen w-screen bg-primary-content opacity-80 ' />
      <div className='fixed left-[10%] right-[10%] top-[2%] z-50 box-border flex flex-col rounded bg-white p-10'>
        <button
          className='self-end rounded border px-8 py-2 hover:bg-primary hover:text-white'
          onClick={() => SetIsModalClose(false)}
        >
          Close
        </button>
        <div className=''> {children}</div>
      </div>
    </ReactPortal>
  )
}
