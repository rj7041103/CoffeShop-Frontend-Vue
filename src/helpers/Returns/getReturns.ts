import axios from 'axios'

const API_RETURNS =
  'https://coffeeshop-backend-django.onrender.com/api/v1/returns/'

export const getUsers = async () => {
  const response = await axios.get(API_RETURNS)
  return response.data
}
