import { ref } from 'vue'
import { defineStore } from 'pinia'

interface Returns {
  description: string
  status: boolean
  user_id: number
  product_id: number
  // Add other properties as needed
}

export const useReturnsStore = defineStore('Returns', () => {
  const retorno = ref<Returns[]>([])
  const setReturns = (prod: Returns[]) => {
    retorno.value = prod
  }

  return { retorno, setReturns }
})
