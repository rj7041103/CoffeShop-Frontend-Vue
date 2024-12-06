import { getReturns } from '@/helpers/Returns/getReturns'
import { useReturnsStore } from '@/stores/ReturnsStore'
export const useReturn = async () => {
  const returns = await getReturns()
  const returnStore = useReturnsStore()
  returnStore.retorno = returns
}
