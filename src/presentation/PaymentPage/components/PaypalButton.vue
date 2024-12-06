<script lang="ts" setup>
import { loadScript, type PayPalButtonCreateOrder } from '@paypal/paypal-js'
import { onBeforeMount } from 'vue'

const CLIENT_ID =
  'AQ_mFvQfIIDUvpYRpWTv3wXsa8IzK9gRfOcgpoNcKKcz2IAv6fOr1DvC66dITudb6u2oE_4B3QuThjP7'

const { totalAmount } = defineProps({ totalAmount: Number })

onBeforeMount(async function () {
  let paypal

  try {
    paypal = await loadScript({ clientId: CLIENT_ID })
  } catch (error) {
    console.error('failed to load the PayPal JS SDK script', error)
  }

  if (paypal) {
    try {
      if (paypal && paypal.Buttons) {
        await paypal
          .Buttons({
            style: {
              layout: 'vertical',
              color: 'blue',
              shape: 'sharp',
              label: 'paypal',
              height: 35,
            },
            createOrder: createOrder,
            onApprove: onApprove,
          })
          .render('#paypal-button-container')
      }
    } catch (error) {
      console.error('failed to render the PayPal Buttons', error)
    }
  }

  function createOrder(data: any, actions: any) {
    console.log('Creating order...')
    return actions.order.create({
      purchase_units: [
        {
          description: 'Simple coffee order',
          amount: {
            value: totalAmount,
          },
        },
      ],
    })
  }
})

function onApprove(data: any, actions: any) {
  console.log('Order approved...')
  return actions.order.capture().then(() => {
    console.log('Order complete!')
  })
}
</script>

<template>
  <div id="paypal-button-container"></div>
</template>
