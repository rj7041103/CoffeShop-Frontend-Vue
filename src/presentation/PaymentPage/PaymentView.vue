<script lang="ts" setup>
import PaypalButton from './components/PaypalButton.vue'
import { ref, computed } from 'vue'

import { useInventory } from '@/stores/InventoryStore'; 

const cartItems = useInventory().productsInventory;

interface CartItem {
  id: number
  name: string
  description: string
  category: string
  presentation: string
  quantity: number
  cost: number
  image: string
}

interface BillingInfo {
  name: string
  email: string
  address: string
  card: string
}

const billingInfo = ref<BillingInfo>({
  name: '',
  email: '',
  address: '',
  card: '',
})

const subtotal = computed(() => {
  return cartItems.reduce(
    (sum, item) => sum + item.cost * item.quantity,
    0,
  )
})

const tax = computed(() => {
  return subtotal.value * 0.08
})

const total = computed(() => {
  return subtotal.value + 30 + tax.value
})

const removeItem = (item: CartItem) => {
  const index = cartItems.findIndex(i => i.id === item.id)
  if (index !== -1) {
    cartItems.splice(index, 1)
  }
}
</script>

<template>
  <div
    class="min-h-screen w-screen text-black bg-gray-100 flex flex-col md:flex-row text-base"
  >
    <!-- Left side: Checkout -->
    <div class="w-full md:w-1/2 p-4 md:p-8 md:px-32 md:my-auto">
      <h1 class="text-2xl md:text-3xl font-bold mb-4 md:mb-8">Checkout</h1>

      <!-- Payment buttons -->
      <div class="mb-4 md:mb-8">
        <h2 class="text-lg md:text-xl font-semibold mb-2 md:mb-4">
          Payment Methods
        </h2>
        <div>
          <PaypalButton :total-amount="total.toFixed(2)" />
        </div>
      </div>

      <!-- Separator -->
      <div class="border-t border-gray-300 my-4 md:my-8"></div>

      <!-- Billing Information -->
      <h2 class="text-lg md:text-xl font-semibold mb-2 md:mb-4">
        Billing Information
      </h2>
      <form @submit.prevent="" class="space-y-2 md:space-y-4">
        <div>
          <label for="name" class="block text-base font-medium text-gray-700"
            >Full Name</label
          >
          <input
            type="text"
            id="name"
            v-model="billingInfo.name"
            required
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-base md:text-base"
          />
        </div>
        <div>
          <label for="email" class="block text-base font-medium text-gray-700"
            >Email</label
          >
          <input
            type="email"
            id="email"
            v-model="billingInfo.email"
            required
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-base md:text-base"
          />
        </div>
        <div>
          <label for="address" class="block text-base font-medium text-gray-700"
            >Address</label
          >
          <input
            type="text"
            id="address"
            v-model="billingInfo.address"
            required
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-base md:text-base"
          />
        </div>
        <div>
          <label for="card" class="block text-base font-medium text-gray-700"
            >Card Number</label
          >
          <input
            type="text"
            id="card"
            v-model="billingInfo.card"
            required
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-base md:text-base"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-green-500 text-white px-4 py-2 rounded text-base md:text-base"
        >
          Pay Now
        </button>
      </form>
    </div>

    <!-- Right side: Product List (hidden on small screens) -->
    <div
      class="w-full md:w-1/2 bg-coffee-brown p-4 md:p-24 mt-4 md:mt-0 text-white text-lg"
    >
      <h2 class="text-xl md:text-2xl font-bold mb-4 md:mb-6">Your Order</h2>
      <div class="space-y-2 md:space-y-4">
        <div v-for="item in cartItems" :key="item.id">
          <div
            class="hover:bg-zinc-100/10 rounded-lg p-2 md:p-4 flex justify-between items-center gap-4"
          >
            <img
              :src="`https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG`"
              :alt="item.name"
              class="size-24 md:size-32 object-cover rounded-lg"
            />
            <div class="w-full flex flex-col gap-12">
              <h3 class="font-semibold text-base md:text-xl">
                {{ item.name }}
              </h3>
              <p class="text-base md:text-2xl font-bold">
                ${{ (item.cost * item.quantity).toFixed(2) }}
              </p>
            </div>

            <div class="flex gap-4 justify-between space-x-1 md:space-x-2">
              <select v-model="item.quantity" class="text-base md:text-xl text-black">
                <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
              </select>

              <button
                @click="removeItem(item)"
                class="text-red-500 hover:text-red-700 text-base md:text-base"
              >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/></svg>
              </button>
            </div>
          </div>

          <div class="border-b border-white/20 my-4"></div>
        </div>
      </div>
      <div class="mt-4 md:mt-6 text-white flex justify-between">
        <div class="flex flex-col gap-5 font-medium">
          <p class="text-lg md:text-xl">
            Subtotal
          </p>
          <p class="text-lg md:text-xl">
            Shipping
          </p>
          <p class="text-lg md:text-xl">
            Tax
          </p>
        </div>
        <div class="flex flex-col gap-5 font-bold text-right">
          <p class="font-bold">{{ subtotal.toFixed(2)  }} $</p>
          <p class="font-bold">30 $</p>
          <p class="font-bold">{{ tax.toFixed(2) }} $</p>
        </div>
      </div>
      <div class="border-b border-white/20 my-4"></div>

      <div class="flex justify-between text-white mt-2">
        <p class="text-lg md:text-2xl font-bold">Total</p>
        <p class="text-lg md:text-2xl font-bold">{{ total.toFixed(2) }} $</p>
      </div>
    </div>

    <!-- Mobile Order Summary (visible only on small screens) -->
    <div class="md:hidden bg-coffee-brown p-4 mt-4">
      <h2 class="text-xl font-bold mb-4 text-white">Order Summary</h2>
      <div class="space-y-2">
        <div
          v-for="item in cartItems"
          class="flex justify-between text-white"
        >
          <span>{{ item.name }} (x{{ item.quantity }})</span>
          <span>${{ (item.cost * item.quantity).toFixed(2) }}</span>
        </div>
      </div>
      <div class="mt-4 text-white">
        <p class="text-lg font-bold">Total: ${{ subtotal.toFixed(2) }}</p>
      </div>
    </div>
  </div>
</template>

<style>
.bg-coffee-brown {
  background-color: #6f4e37;
}
</style>
