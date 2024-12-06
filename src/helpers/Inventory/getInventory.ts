import axios from 'axios'
import type { InventoryType } from '@/presentation/DashboardPage/components/Product/model/InventoryType'
const API_INVENTORY =
  'https://coffeeshop-backend-django.onrender.com/api/v1/inventory/'

export const getInventory = async () => {
  const response = await axios.get(API_INVENTORY)
  return response.data
}
export const sendProductInventory = async (data: InventoryType) => {
  const response = await axios.post(API_INVENTORY, data)
  return response.data
}
