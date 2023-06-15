import { useLayoutEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface PortalInterface {
  children: React.ReactNode
  wrapperId: string
}

function createWrapperAndAppendToBody(wrapperId: string) {
  if (!document) return null
  const wrapperElement = document.createElement('div')
  wrapperElement.setAttribute('id', wrapperId)
  document.body.appendChild(wrapperElement)
  return wrapperElement
}

export default function ReactPortal({ children, wrapperId }: PortalInterface) {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement>()

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId)
    let systemCreated = false
    //if element not found with wrapperId
    // create and append to body
    if (!element) {
      systemCreated = true
      element = createWrapperAndAppendToBody(wrapperId)
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    setWrapperElement(element!)

    return () => {
      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element)
      }
    }
  }, [wrapperId])

  if (!wrapperElement) return null

  return createPortal(children, wrapperElement)
}
