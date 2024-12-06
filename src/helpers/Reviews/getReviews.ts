import axios from 'axios'

const API_REVIEWS =
  'https://coffeeshop-backend-django.onrender.com/api/v1/reviews/'

export const getReviews = async () => {
  const response = await axios.get(API_REVIEWS)
  return response.data
}
