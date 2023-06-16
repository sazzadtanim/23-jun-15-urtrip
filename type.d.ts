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
interface Invoice {
  id?: string
  'Invoice Number': string
  'Invoice Date': string
  'Payment Due Date': string
  Subject: string
  'Invoice Status': string
  customerId: string
  Services: {
    serviceName: string
    unitPrice: number
    quantity: number
    serviceId: string
  }[]
  Notes: string
  Total: number
  Discount: number
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

export interface ServiceNew {
  name: string
  price: string
  description: string
  categoryId: string
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

interface PurchaseItem {
  id?: string
  'Item Name': string
  Category: string
  'Purchase Price': number
  Description: string
}

interface Quotation {
  id?: string
  'Quotation Number': string
  'Quotation Date': string
  Subject: string
  Customer: string
  Services: string
  Notes: string
}

interface Invoices {
  invoices: Invoice[]
  addInvoice: (newInvoice: Invoice) => void
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
  type: string
  isRequired?: boolean
}

export {
  ItemStore,
  OptionType,
  Invoice,
  PurchaseItem,
  Quotation,
  Service,
  Invoices,
  Menu,
  SIDEBAR,
}
