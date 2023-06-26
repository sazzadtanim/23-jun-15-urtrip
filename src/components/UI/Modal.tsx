
import ReactPortal from './ReactPortal'

interface ModalProps {
  children?: React.ReactNode
  isModalOpen: boolean
  SetIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Modal(props: ModalProps) {
  if (!props.isModalOpen) return null

  return (
    <ReactPortal wrapperId='react-portal-model-container'>
      <div className='fixed inset-0 z-40 h-screen w-screen bg-primary-content opacity-40 ' />
      <div className='fixed left-[10%] right-[10%] top-[2%] z-50 box-border flex flex-col rounded bg-white p-10'>
        <button
          className='self-end rounded border px-8 py-2 hover:bg-primary hover:text-white'
          onClick={() => props.SetIsModalOpen(false)}
        >
          Close
        </button>
        <div className=''> {props.children}</div>
      </div>
    </ReactPortal>
  )
}
