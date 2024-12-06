import { getPayments } from '@/helpers/Payments/getPayments'
import { usePayStore } from '@/stores/PaymentsStore'
export const usePay = async () => {
  const payment = await getPayments()
  const payStore = usePayStore()
  payStore.pay = payment
}
