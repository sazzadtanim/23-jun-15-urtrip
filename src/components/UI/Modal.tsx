import { useEffect } from 'react'
import ReactPortal from './ReactPortal'

interface ModalProps {
  children: React.ReactNode
  isOpen: boolean
  handleClose: () => void
}

export default function Modal({ children, isOpen, handleClose }: ModalProps) {
  // close modal on escape key press
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === 'Escape' ? handleClose() : null
    document.body.addEventListener('keydown', closeOnEscapeKey)
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey)
    }
  }, [handleClose])

  //disable scroll on modal open
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <ReactPortal wrapperId="react-portal-model-container ">
      <>
        <div className="fixed inset-0 z-40 h-screen w-screen bg-neutral-700 opacity-80 " />
        <div className="fixed left-[25%] right-[25%] top-[2%] z-50 box-border flex min-w-fit flex-col rounded bg-white p-10 ">
          <button
            className="self-end rounded border px-8 py-2 hover:bg-red-600 hover:text-white"
            onClick={handleClose}
          >
            Close
          </button>
          <div className=""> {children}</div>
        </div>
      </>
    </ReactPortal>
  )
}
