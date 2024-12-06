import { ref } from 'vue'
import { defineStore } from 'pinia'

interface User {
  name: string
  email: string
  password: number
  image_profile: string
  // Add other properties as needed
}

export const useUsersStore = defineStore('Users', () => {
  const users = ref<User[]>([])
  const setUsers = (user: User[]) => {
    users.value = user
  }

  return { users, setUsers }
})
