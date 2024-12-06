<script lang="ts" setup>
import PaypalButton from './components/PaypalButton.vue';
import { ref, computed } from 'vue'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

interface BillingInfo {
  name: string
  email: string
  address: string
  card: string
}

const cartItems = ref<CartItem[]>([
  { id: 1, name: 'Espresso', price: 2.5, quantity: 1 },
  { id: 2, name: 'Cappuccino', price: 3.5, quantity: 2 },
  { id: 3, name: 'Latte', price: 4.0, quantity: 1 },
])

const billingInfo = ref<BillingInfo>({
  name: '',
  email: '',
  address: '',
  card: '',
})

const total = computed(() => {
  return cartItems.value.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  )
})

const increaseQuantity = (item: CartItem) => {
  item.quantity++
}

const decreaseQuantity = (item: CartItem) => {
  if (item.quantity > 1) {
    item.quantity--
  }
}

const removeItem = (item: CartItem) => {
  const index = cartItems.value.findIndex(i => i.id === item.id)
  if (index !== -1) {
    cartItems.value.splice(index, 1)
  }
}

const submitOrder = () => {
  console.log('Order submitted', {
    billingInfo: billingInfo.value,
    items: cartItems.value,
    total: total.value,
  })
  // Here you would typically send this data to your backend
}
</script>

<template>
  <div class="min-h-screen w-screen text-black bg-gray-100 flex flex-col md:flex-row text-base">
    <!-- Left side: Checkout -->
    <div class="w-full md:w-1/2 p-4 md:p-8 md:px-32 md:my-auto">
      <h1 class="text-2xl md:text-3xl font-bold mb-4 md:mb-8">Checkout</h1>

      <!-- Payment buttons -->
      <div class="mb-4 md:mb-8">
        <h2 class="text-lg md:text-xl font-semibold mb-2 md:mb-4">
          Payment Methods
        </h2>
        <div class="flex space-x-2 md:space-x-4">
          <PaypalButton />
        </div>
      </div>

      <!-- Separator -->
      <div class="border-t border-gray-300 my-4 md:my-8"></div>

      <!-- Billing Information -->
      <h2 class="text-lg md:text-xl font-semibold mb-2 md:mb-4">
        Billing Information
      </h2>
      <form @submit.prevent="submitOrder" class="space-y-2 md:space-y-4">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700"
            >Full Name</label
          >
          <input
            type="text"
            id="name"
            v-model="billingInfo.name"
            required
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm md:text-base"
          />
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Email</label
          >
          <input
            type="email"
            id="email"
            v-model="billingInfo.email"
            required
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm md:text-base"
          />
        </div>
        <div>
          <label for="address" class="block text-sm font-medium text-gray-700"
            >Address</label
          >
          <input
            type="text"
            id="address"
            v-model="billingInfo.address"
            required
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm md:text-base"
          />
        </div>
        <div>
          <label for="card" class="block text-sm font-medium text-gray-700"
            >Card Number</label
          >
          <input
            type="text"
            id="card"
            v-model="billingInfo.card"
            required
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm md:text-base"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-green-500 text-white px-4 py-2 rounded text-sm md:text-base"
        >
          Pay Now
        </button>
      </form>
    </div>

    <!-- Right side: Product List (hidden on small screens) -->
    <div class="w-full md:w-1/2 bg-coffee-brown p-4 md:p-8 mt-4 md:mt-0">
      <h2 class="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white">
        Your Order
      </h2>
      <div class="space-y-2 md:space-y-4">
        <div
          v-for="item in cartItems"
          :key="item.id"
          class="bg-white rounded-lg p-2 md:p-4 flex justify-between items-center"
        >
          <div>
            <h3 class="font-semibold text-sm md:text-base">{{ item.name }}</h3>
            <p class="text-gray-600 text-xs md:text-sm">
              ${{ item.price.toFixed(2) }}
            </p>
          </div>
          <div class="flex items-center space-x-1 md:space-x-2">
            <button
              @click="decreaseQuantity(item)"
              class="text-gray-500 hover:text-gray-700 text-sm md:text-base"
            >
              -
            </button>
            <span class="text-sm md:text-base">{{ item.quantity }}</span>
            <button
              @click="increaseQuantity(item)"
              class="text-gray-500 hover:text-gray-700 text-sm md:text-base"
            >
              +
            </button>
            <button
              @click="removeItem(item)"
              class="text-red-500 hover:text-red-700 text-xs md:text-sm"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      <div class="mt-4 md:mt-6 text-white">
        <p class="text-lg md:text-xl font-bold">
          Total: ${{ total.toFixed(2) }}
        </p>
      </div>
    </div>

    <!-- Mobile Order Summary (visible only on small screens) -->
    <div class="md:hidden bg-coffee-brown p-4 mt-4">
      <h2 class="text-xl font-bold mb-4 text-white">Order Summary</h2>
      <div class="space-y-2">
        <div
          v-for="item in cartItems"
          :key="item.id"
          class="flex justify-between text-white"
        >
          <span>{{ item.name }} (x{{ item.quantity }})</span>
          <span>${{ (item.price * item.quantity).toFixed(2) }}</span>
        </div>
      </div>
      <div class="mt-4 text-white">
        <p class="text-lg font-bold">Total: ${{ total.toFixed(2) }}</p>
      </div>
    </div>
  </div>
</template>

<style>
.bg-coffee-brown {
  background-color: #6f4e37;
}
</style>
