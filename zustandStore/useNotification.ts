import { create } from 'zustand'

export interface Notification {
  message: string
  error?: boolean
  isVisible?: boolean
}

export interface NotificationStore {
  notification: Notification
  setNotification: (noti: Notification) => void
}

export const useNotification = create<NotificationStore>()(set => ({
  notification: { message: 'default', isVisible: false, error: false },
  setNotification: function ({ message, error = false, isVisible = true }) {
    set({ notification: { message, error, isVisible } })
    setTimeout(() => {
      set({
        notification: { message: 'default', error: false, isVisible: false },
      })
    }, 2000)
  },
}))
