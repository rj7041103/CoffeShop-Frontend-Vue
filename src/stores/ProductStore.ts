import { ref } from 'vue'
import { defineStore } from 'pinia'

interface Product {
  name: string
  description: string
  price: number
  image: string
  // Add other properties as needed
}

export const useProductsStore = defineStore('Products', () => {
  const products = ref<Product[]>([])
  const setProducts = (prod: Product[]) => {
    products.value = prod
  }

  return { products, setProducts }
})
