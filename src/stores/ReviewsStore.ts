import { ref } from 'vue'
import { defineStore } from 'pinia'

interface Review {
  comment: string
  likes: number
  user_id: number
  product_id: number
  // Add other properties as needed
}

export const useReviewsStore = defineStore('Reviews', () => {
  const review = ref<Review[]>([])
  const setReview = (prod: Review[]) => {
    review.value = prod
  }

  return { review, setReview }
})
