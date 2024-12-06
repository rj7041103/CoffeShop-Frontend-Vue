import { getSubscriptions } from '@/helpers/Subscriptions/getSubscriptions'
import { useSubscriptionsStore } from '@/stores/SubscriptionsStore'
export const useSubscription = async () => {
  const sub = await getSubscriptions()
  const subStore = useSubscriptionsStore()
  subStore.subscription = sub
}
