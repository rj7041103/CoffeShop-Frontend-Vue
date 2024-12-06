import axios from 'axios'

const API_INVENTORY =
  'https://coffeeshop-backend-django.onrender.com/api/v1/inventory/'

export const getInventory = async () => {
  const response = await axios.get(API_INVENTORY)
  return response.data
}
