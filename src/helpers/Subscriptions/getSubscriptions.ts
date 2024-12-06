import axios from 'axios'

const API_SUBSCRIPTIONS =
  'https://coffeeshop-backend-django.onrender.com/api/v1/subscriptions/'
export const getSubscriptions = async () => {
  const response = await axios.get(API_SUBSCRIPTIONS)
  return response.data
}
