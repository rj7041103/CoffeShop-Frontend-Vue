<script lang="ts">
export default {
  name: 'CategorySection',
}
</script>

<template>
  <section class="container top-categories">
    <h1 class="heading-1">Mejores Categorías</h1>
    <div class="container-categories">
      <div class="card-category category-moca">
        <p>Café moca</p>
        <span>Ver más</span>
      </div>
      <div class="card-category category-expreso">
        <p>Expreso Americano</p>
        <span>Ver más</span>
      </div>
      <div class="card-category category-capuchino">
        <p>Capuchino</p>
        <span>Ver más</span>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.container {
  max-width: 120rem;
  margin: 0 auto;
}
.heading-1 {
  font-size: 2.4rem;
}

.top-categories {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;
}

.container-categories {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
}

.card-category {
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
  gap: 2rem;
}

.category-moca {
  background-image: linear-gradient(#00000080, #00000080),
    url('../../../assets/img/moca-category.jpg');
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
}

.category-capuchino {
  background-image: linear-gradient(#00000080, #00000080),
    url('../../../assets/img/capuchino-category.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.category-expreso {
  background-image: linear-gradient(#00000080, #00000080),
    url('../../../assets/img/expreso-category.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.card-category p {
  font-size: 2.5rem;
  color: #fff;
  text-transform: capitalize;
  position: relative;
}

.card-category p::after {
  content: '';
  width: 2.5rem;
  height: 2px;
  background-color: #fff;
  position: absolute;
  bottom: -1rem;
  left: 50%;
  transform: translate(-50%, 50%);
}

.card-category span {
  font-size: 1.6rem;
  color: #fff;
  cursor: pointer;
}

.card-category span:hover {
  color: var(--primary-color);
}
</style>
