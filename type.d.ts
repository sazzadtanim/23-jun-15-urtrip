import { type HTMLInputTypeAttribute } from 'react'

interface OptionType extends OptionTypeBase {
  value: string
  label: string
}

export interface InputPropsInterface {
  register: UseFormRegister<Invoice>
  errors: FieldErrors<Invoice>
  name: keyof Invoice
  placeholder: string
  isRequired?: boolean
  type: React.HTMLInputTypeAttribute
}

export interface Notification {
  message: string
  error?: boolean
  isVisible?: boolean
}

export interface NotificationStore {
  notification: Notification
  setNotification: (noti: Notification) => void
}

export interface Notification_Interface {
  status: 'success' | 'error' | 'pending'
  message: string
}

interface Menu {
  title: string
  isActive?: boolean
  url: string
  Icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined
      titleId?: string | undefined
    } & RefAttributes<SVGSVGElement>
  >
  submenu?: SideBarItem[]
}

export interface SideBarItem {
  title: string
  url: string
  submenu?: SideBarItem[]
  Icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined
      titleId?: string | undefined
    } & React.RefAttributes<SVGSVGElement>
  >
}

interface ItemStore {
  items: PurchaseItem[]
  createItem: (newItem: PurchaseItem) => void
  deleteItem?: () => void
}

interface SIDEBAR {
  salesIsOpen: boolean
  SetSalesIsOpen: (val: boolean) => void
  purchaseIsOpen: boolean
  SetPurchaseIsOpen: (val: boolean) => void
}
export interface InputList<T> {
  name: keyof T
  label: string
  placeholder: string
  type: HTMLInputTypeAttribute
  isRequired?: boolean
}

export {
  ItemStore,
  OptionType,
  Invoice,
  PurchaseItem,
  Quotation,
  Invoices,
  Menu,
  SIDEBAR,
}
