import { getUsers } from '@/helpers/Users/getUsers'
import { useUsersStore } from '@/stores/UsersStore'
export const useUsers = async () => {
  const users = await getUsers()
  const usersStore = useUsersStore()
  usersStore.users = users
}
