import React from 'react'
import { useNotification } from 'zustandStore/useNotification'

export default function Notification() {
  const { message, error, isVisible } = useNotification(
    state => state.notification
  )

  return (
    <>
      <div
        id='notification'
        className={`font-poppins text-zinc-800 z-[999999] float-right mx-[5%] w-[90%] rounded-lg bg-transparent px-20 py-2 text-center text-sm font-semibold capitalize shadow-sm ${
          isVisible ? 'fixed' : 'hidden'
        }
				`}
      >
        {/* starts here */}
        <div
          className={`${
            error ? 'alert-error bg-warning  text-xs' : 'bg-success'
          } flex w-full justify-center rounded-md p-4`}
        >
          {message}
        </div>
      </div>
    </>
  )
}
