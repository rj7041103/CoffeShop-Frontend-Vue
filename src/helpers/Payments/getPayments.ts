import axios from 'axios'

const API_PAYMENTS =
  'https://coffeeshop-backend-django.onrender.com/api/v1/payments/'

export const getPayments = async () => {
  const response = await axios.get(API_PAYMENTS)
  return response.data
}
