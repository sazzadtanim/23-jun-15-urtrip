import { create } from 'zustand'

type InvoiceStore = {
  subtotal: number
  discount: number
  total: number
  paidAmount: number
  totalDue: number
  setSubtotal: (a: number) => void
  setDiscount: (a: number) => void
  setTotal: (a: number) => void
  setPaidAmount: (a: number) => void
  setTotalDue: (a: number) => void
}

export const useInvoiceSum = create<InvoiceStore>()(set => ({
  discount: 0,
  paidAmount: 0,
  subtotal: 0,
  total: 0,
  totalDue: 0,
  setDiscount(a) {
    set({ discount: a })
  },
  setPaidAmount(a) {
    set({ paidAmount: a })
  },
  setSubtotal(a) {
    set({ subtotal: a })
  },
  setTotal(a) {
    set({ total: a })
  },
  setTotalDue(a) {
    set({ totalDue: a })
  },
}))
