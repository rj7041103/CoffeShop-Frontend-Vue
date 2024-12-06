<script lang="ts">
import CardComponent from '@/components/Card/CardComponent.vue'
import FormProduct from './components/Product/FormProduct.vue'
import { ref } from 'vue'

export default {
  name: 'MainDashBoard',
  components: {
    CardComponent,
    FormProduct,
  },
  setup() {
    const isProductSectionActive = ref(false)
    const handleSectionClick = () => {
      return (isProductSectionActive.value = !isProductSectionActive.value)
    }
    return {
      isProductSectionActive,
      handleSectionClick,
    }
  },
}
</script>
<template>
  <body class="bg-gray-100 relative justify-center items-center">
    <div class="min-h-screen w-screen flex flex-col md:flex-row">
      <!-- Sidebar -->
      <aside
        class="bg-indigo-600 text-white w-full md:w-64 md:min-h-screen pt-14 pl-6"
      >
        <div
          class="flex items-center pr-10 justify-around md:justify-start gap-2 mb-8"
        >
          <svg
            class="w-12 h-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          <h1 class="text-3xl font-bold">Dashboard</h1>
          <!-- Botón móvil para mostrar/ocultar menú -->
          <button id="menuButton" class="md:hidden">
            <svg
              class="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <!-- Enlaces de navegación -->
        <nav id="nav" class="hidden md:block">
          <ul class="space-y-2">
            <li>
              <a
                @click="handleSectionClick"
                class="flex text-2xl items-center gap-2 p-2 rounded hover:bg-indigo-700 hover:cursor-pointer transition-colors"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                Users
              </a>
            </li>
            <li>
              <a
                @click="handleSectionClick"
                class="flex text-2xl items-center gap-2 p-2 rounded hover:bg-indigo-700 hover:cursor-pointer transition-colors"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
                Products
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <!-- Contenido principal -->
      <main class="flex-1 pl-5 pt-9 pr-5">
        <header class="bg-white shadow rounded-lg p-4 mb-4">
          <div class="flex items-center justify-between pl-4 pr-6">
            <h2 class="text-4xl font-semibold text-gray-800">Welcome Back!</h2>
            <div class="flex items-center gap-8">
              <div class="relative">
                <input
                  type="search"
                  placeholder="Search..."
                  class="pl-8 pr-2 py-1 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
                <svg
                  class="w-4 h-4 text-gray-400 absolute left-2 top-1/2 transform -translate-y-1/2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <!-- <button class="relative p-2">
                <svg
                  class="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span
                  class="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"
                ></span>
              </button> -->
              <div class="flex items-center gap-2">
                <img
                  src="https://ui-avatars.com/api/?name=John+Doe"
                  alt="Profile"
                  class="w-8 h-8 rounded-full"
                />
                <span class="hidden md:inline text-gray-700">John Doe</span>
              </div>
            </div>
          </div>
        </header>

        <!-- Contenido del dashboard -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <!-- Tarjeta de estadísticas 1 -->
          <div class="bg-white p-6 rounded-lg shadow fade-in">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-gray-500 text-xl">Total Sales</h3>
            </div>
            <p class="text-2xl font-bold text-gray-900">$23,456</p>
            <div class="mt-2">
              <div class="bg-gray-200 h-1 rounded-full">
                <div class="bg-indigo-600 h-1 rounded-full w-3/4"></div>
              </div>
            </div>
          </div>

          <!-- Tarjeta de estadísticas 2 -->
          <div class="bg-white p-6 rounded-lg shadow fade-in">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-gray-500 text-xl">Active Users</h3>
            </div>
            <p class="text-2xl font-bold text-gray-900">1,234</p>
            <div class="mt-2">
              <div class="bg-gray-200 h-1 rounded-full">
                <div class="bg-blue-600 h-1 rounded-full w-1/2"></div>
              </div>
            </div>
          </div>

          <!-- Tarjeta de estadísticas 3 -->
          <div class="bg-white p-6 rounded-lg shadow fade-in">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-gray-500 text-xl">New Products</h3>
            </div>
            <p class="text-2xl font-bold text-gray-900">45</p>
            <div class="mt-2">
              <div class="bg-gray-200 h-1 rounded-full">
                <div class="bg-purple-600 h-1 rounded-full w-4/5"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- Product Section  -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 pl-28 pr-28"
          v-if="isProductSectionActive"
        >
          <div class="col-span-6">
            <div class="flex justify-end items-center mb-4 pr-14 mt-[20px]">
              <button
                data-modal-target="crud-modal"
                data-modal-toggle="crud-modal"
                class="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded"
              >
                Add Product
              </button>
              <FormProduct />
            </div>
          </div>

          <!-- Aquí puedes agregar múltiples CardComponent por lo que se puede iterar -->
          <div class="col-span-1 mb-6">
            <CardComponent />
          </div>
          <div class="col-span-1 mb-6">
            <CardComponent />
          </div>
          <div class="col-span-1 mb-6">
            <CardComponent />
          </div>
        </div>

        <!-- Tabla de datos -->
        <div v-else class="bg-white rounded-lg shadow overflow-hidden">
          <div class="p-4 border-b">
            <h3 class="text-4xl font-semibold text-gray-900">
              Recent Activity
            </h3>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    class="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    class="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    class="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Date
                  </th>
                  <th
                    class="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Amount
                  </th>
                  <th
                    class="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <img
                          class="h-10 w-10 rounded-full"
                          src="https://ui-avatars.com/api/?name=Jane+Smith"
                          alt=""
                        />
                      </div>
                      <div class="ml-4">
                        <div class="text-xl font-medium text-gray-900">
                          Jane Smith
                        </div>
                        <div class="text-lg text-gray-500">
                          jane@example.com
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-8 py-6 whitespace-nowrap">
                    <span
                      class="p-3 inline-flex text-lg leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                      >Active</span
                    >
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-2xl text-gray-500"
                  >
                    2023-06-20
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-2xl text-gray-500"
                  >
                    $320.00
                  </td>
                  <td
                    class="px-12 py-6 whitespace-nowrap text-2xl text-gray-500"
                  >
                    <button class="rounded-sm hover:scale-[1.1]">
                      <font-i icon="fa-solid fa-trash"></font-i>
                    </button>
                  </td>
                </tr>
                <!-- Más filas aquí -->
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  </body>
</template>
