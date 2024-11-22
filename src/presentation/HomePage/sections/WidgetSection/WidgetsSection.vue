<script lang="ts">
export default {
  name: 'WidgetSection',
}
</script>

<template>
  <section class="container container-features">
    <div class="card-feature">
      <!-- ariplane -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          d="M192 93.7C192 59.5 221 0 256 0c36 0 64 59.5 64 93.7l0 66.3L497.8 278.5c8.9 5.9 14.2 15.9 14.2 26.6l0 56.7c0 10.9-10.7 18.6-21.1 15.2L320 320l0 80 57.6 43.2c4 3 6.4 7.8 6.4 12.8l0 42c0 7.8-6.3 14-14 14c-1.3 0-2.6-.2-3.9-.5L256 480 145.9 511.5c-1.3 .4-2.6 .5-3.9 .5c-7.8 0-14-6.3-14-14l0-42c0-5 2.4-9.8 6.4-12.8L192 400l0-80L21.1 377C10.7 380.4 0 372.7 0 361.8l0-56.7c0-10.7 5.3-20.7 14.2-26.6L192 160l0-66.3z"
        />
      </svg>
      <div class="feature-content">
        <span>Envío gratuito a nivel mundial</span>
        <p>En pedido superior a $150</p>
      </div>
    </div>
    <div class="card-feature">
      <!-- wallet -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L80 128c-8.8 0-16-7.2-16-16s7.2-16 16-16l368 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
        />
      </svg>
      <div class="feature-content">
        <span>Contrareembolso</span>
        <p>100% garantía de devolución de dinero</p>
      </div>
    </div>
    <div class="card-feature">
      <!-- gift -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          d="M190.5 68.8L225.3 128l-1.3 0-72 0c-22.1 0-40-17.9-40-40s17.9-40 40-40l2.2 0c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40L32 128c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-41.6 0c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88l-2.2 0c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0L152 0C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40l-72 0-1.3 0 34.8-59.2C329.1 55.9 342.9 48 357.8 48l2.2 0c22.1 0 40 17.9 40 40zM32 288l0 176c0 26.5 21.5 48 48 48l144 0 0-224L32 288zM288 512l144 0c26.5 0 48-21.5 48-48l0-176-192 0 0 224z"
        />
      </svg>
      <div class="feature-content">
        <span>Tarjeta regalo especial</span>
        <p>Ofrece bonos especiales con regalo</p>
      </div>
    </div>
    <div class="card-feature">
      <!-- headset -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          d="M256 48C141.1 48 48 141.1 48 256l0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40C0 114.6 114.6 0 256 0S512 114.6 512 256l0 144.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24l-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40L464 256c0-114.9-93.1-208-208-208zM144 208l16 0c17.7 0 32 14.3 32 32l0 112c0 17.7-14.3 32-32 32l-16 0c-35.3 0-64-28.7-64-64l0-48c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64l0 48c0 35.3-28.7 64-64 64l-16 0c-17.7 0-32-14.3-32-32l0-112c0-17.7 14.3-32 32-32l16 0z"
        />
      </svg>
      <div class="feature-content">
        <span>Servicio al cliente 24/7</span>
        <p>LLámenos 24/7 al 123-456-7890</p>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.container {
  max-width: 120rem;
  margin: 0 auto;
}

.container-features {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  padding: 3rem 0;
}

.card-feature {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  background-color: #fff;
  border-radius: 1rem;
  padding: 1.5rem 0;
}

.card-feature svg {
  font-size: 2.7rem;
  color: var(--primary-color);
}

.feature-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.feature-content span {
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--dark-color);
}

.feature-content p {
  color: #777;
  font-weight: 500;
}
</style>
