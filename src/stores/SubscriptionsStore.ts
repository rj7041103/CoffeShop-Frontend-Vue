import { ref } from 'vue'
import { defineStore } from 'pinia'

interface Subscriptions {
  plan_Name: string
  dicount_Percentage: number
  end_date: Date
  cost: number
  user_id: number
  // Add other properties as needed
}

export const useSubscriptionsStore = defineStore('Subscriptions', () => {
  const subscription = ref<Subscriptions[]>([])
  const setSubscription = (prod: Subscriptions[]) => {
    subscription.value = prod
  }

  return { subscription, setSubscription }
})
