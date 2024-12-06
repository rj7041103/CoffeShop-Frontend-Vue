import { ref } from 'vue'
import { defineStore } from 'pinia'

interface ProductInv {
  id: number
  name: string
  description: string
  category: string
  presentation: string
  quantity: number
  cost: number
  image: string
}

export const useInventory = defineStore('Inventory', () => {
  const productsInventory = ref<ProductInv[]>([
    {
      id: 1,
      name: 'Product 1',
      description: 'Description of product 1',
      category: 'Category 1',
      presentation: 'Presentation 1',
      quantity: 1,
      cost: 75.2,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of product 2',
      category: 'Category 2',
      presentation: 'Presentation 2',
      quantity: 3,
      cost: 50,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG',
    }
  ]) // datos de prueba, borrense cuando se tenga logica
  const setProductsInventory = (prod: ProductInv[]) => {
    productsInventory.value = prod
  }

  return { productsInventory, setProductsInventory }
})
