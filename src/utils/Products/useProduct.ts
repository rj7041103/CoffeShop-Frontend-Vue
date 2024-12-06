import { useProductsStore } from '@/stores/ProductStore'
import { getProducts } from '@/helpers/Products/getProducts'
export const useProduct = async () => {
  const products = await getProducts()
  const productsStore = useProductsStore()
  productsStore.products = products
}
