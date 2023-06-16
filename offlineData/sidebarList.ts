import {
  AcademicCapIcon,
  ChartPieIcon,
  HomeIcon,
  BanknotesIcon,
  ReceiptPercentIcon,
  Squares2X2Icon,
  EyeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline'

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

export const sidebarItems: SideBarItem[] = [
  { title: 'Dashboard', url: '/', Icon: HomeIcon },
  // * Client demo, remove after testing
  {
    title: 'sale',
    url: '/sale',
    Icon: MapPinIcon,
  },
  {
    title: 'Clients',
    url: '/client',
    Icon: AcademicCapIcon,
  },
  { title: 'payment method', url: '/payment_method', Icon: BanknotesIcon },
  { title: 'invoice', url: '/invoice', Icon: BanknotesIcon },
   // * remove after testing
  {
    title: 'Clients',
    url: '/client/clients_simple_table',
    Icon: AcademicCapIcon,
  },
  {
    title: 'Sales',
    url: '/sales/sales',
    Icon: Squares2X2Icon,
  },
  {
    url: '/quotation/quotations',
    title: 'Quotations',
    Icon: ReceiptPercentIcon,
  },
  {
    title: 'Purchase',
    url: '/purchase',
    Icon: ChartPieIcon,
    submenu: [
      {
        title: 'Items',
        url: '/purchase/item/items',
        Icon: AcademicCapIcon,
      },
      {
        title: 'Invoice',
        url: '/purchase/invoice/invoices',
        Icon: AcademicCapIcon,
      },
      {
        title: 'Suppliers',
        url: '/purchase/supplier/suppliers',
        Icon: AcademicCapIcon,
      },
    ],
  },
  {
    url: '/transaction/income/incomes',
    title: 'Transaction',
    Icon: EyeIcon,
    submenu: [
      {
        url: '/transaction/income/incomes',
        title: 'Income',
        Icon: EyeIcon,
      },
      {
        url: '/transaction/expense/expenses',
        title: 'Expense',
        Icon: EyeIcon,
      },
    ],
  },
]
