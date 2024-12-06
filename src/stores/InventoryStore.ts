import { ref } from 'vue'
import { defineStore } from 'pinia'

interface ProductInv {
  name: string
  description: string
  category: string
  presentation: string
  quantity: number
  cost: number
  image: string
  // Add other properties as needed
}

export const useInventory = defineStore('Inventory', () => {
  const productsInventory = ref<ProductInv[]>([])
  const setProductsInventory = (prod: ProductInv[]) => {
    productsInventory.value = prod
  }

  return { productsInventory, setProductsInventory }
})
