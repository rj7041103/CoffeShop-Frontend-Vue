import { ref } from 'vue'
import { defineStore } from 'pinia'

interface Payment {
  payment_Type: string
  amount: string
  user_id: number
  product_id: number
  // Add other properties as needed
}

export const usePayStore = defineStore('Payments', () => {
  const pay = ref<Payment[]>([])
  const setPay = (prod: Payment[]) => {
    pay.value = prod
  }

  return { pay, setPay }
})
