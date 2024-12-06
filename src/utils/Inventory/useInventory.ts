import { getInventory } from '@/helpers/Inventory/getInventory'
import { useInventoryStore } from '@/stores/InventoryStore'
export const useInventory = async () => {
  const inventory = await getInventory()
  const inventoryStore = useInventoryStore()
  inventoryStore.productsInventory = inventory
}
