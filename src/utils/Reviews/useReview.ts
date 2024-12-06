import { getReviews } from '@/helpers/Reviews/getReviews'
import { useReviewsStore } from '@/stores/ReviewsStore'
export const useReview = async () => {
  const reviews = await getReviews()
  const reviewsStore = useReviewsStore()
  reviewsStore.review = reviews
}
