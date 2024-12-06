<script lang="ts">
import { Form as FormProd, Field, ErrorMessage } from 'vee-validate'
import { onMounted, ref } from 'vue'
import { initFlowbite } from 'flowbite'
import { schemaInventory } from '@/presentation/DashboardPage/components/Product/model/SchemaInventory.ts'
import { sendProductInventory } from '@/helpers/Inventory/getInventory.ts'

export default {
  name: 'FormProduct',
  components: {
    FormProd,
    Field,
    ErrorMessage,
  },
  setup() {
    onMounted(() => {
      initFlowbite()
    })

    const name = ref<string>('')
    const presentation = ref<string>('')
    const cost = ref<number>(0)
    const quantity = ref<number>(0)
    const category = ref<string>('')
    const description = ref<string>('')
    const image = ref<string>('')

    const submitProduct = async () => {
      const product = {
        name: name.value,
        description: description.value,
        category: category.value,
        presentation: presentation.value,
        cuant: quantity.value,
        cost: cost.value,
        image: image.value,
      }

      try {
        const result = await sendProductInventory(product)
        console.log(result)
      } catch (error) {
        alert('Something went wrong', error)
      }
    }

    return {
      name,
      quantity,
      category,
      presentation,
      cost,
      description,
      image,
      submitProduct,
      schemaInventory,
    }
  },
}
</script>

<template>
  <!-- Main modal -->
  <div
    id="crud-modal"
    tabindex="-1"
    aria-hidden="true"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative w-full max-w-[360px] max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div
          class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
        >
          <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">
            Create New Product
          </h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="crud-modal"
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <FormProd class="p-4 md:p-5" @submit="submitProduct">
          <div class="grid gap-4 mb-4 grid-cols-2 min-h-[260px]">
            <div class="col-span-2">
              <label
                for="name"
                class="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
                >Name</label
              >
              <Field
                v-model="name"
                type="text"
                name="name"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required
              />
              <ErrorMessage name="name" class="text-red-600" />
            </div>
            <div class="col-span-2">
              <label
                for="quantity"
                class="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
                >Quantity</label
              >
              <Field
                v-model="quantity"
                type="number"
                name="quantity"
                id="quantity"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required
              />
              <ErrorMessage name="quantity" class="text-red-600" />
            </div>
            <div class="col-span-2">
              <label
                for="presentation"
                class="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
                >Presentation</label
              >
              <Field
                v-model="presentation"
                type="text"
                name="presentation"
                id="presentation"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required
              />
              <ErrorMessage name="presentation" class="text-red-600" />
            </div>
            <div class="col-span-2">
              <label
                for="Image"
                class="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
                >Image</label
              >
              <Field
                v-model="image"
                type="text"
                name="Image"
                id="Image"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required
              />
              <ErrorMessage name="Image" class="text-red-600" />
            </div>
            <div class="col-span-2 sm:col-span-1">
              <label
                for="cost"
                class="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
                >Price</label
              >
              <Field
                v-model="cost"
                type="number"
                name="cost"
                id="cost"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="$2999"
                required
              />
              <ErrorMessage name="cost" class="text-red-600" />
            </div>
            <div class="col-span-2 sm:col-span-1">
              <label
                for="category"
                class="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
                >Category</label
              >
              <select
                v-model="category"
                name="category"
                id="category"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              >
                <option value="Coffee">Coffee</option>
                <option value="Product">Product</option>
                <option value="Accessory">Accessory</option>
              </select>
            </div>
            <div class="col-span-2">
              <label
                for="description"
                class="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
                >Product Description</label
              >
              <textarea
                v-model="description"
                name="description"
                id="description"
                rows="4"
                class="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write product description here"
              ></textarea>
              <ErrorMessage name="description" class="text-red-600" />
            </div>
          </div>
          <button
            type="submit"
            class="text-white text-xl inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              class="me-1 -ms-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Add new product
          </button>
        </FormProd>
      </div>
    </div>
  </div>
</template>
