import axios from 'axios'

const API_USERS = 'https://coffeeshop-backend-django.onrender.com/api/v1/users/'

export const getUsers = async () => {
  const response = await axios.get(API_USERS)
  return response.data
}
