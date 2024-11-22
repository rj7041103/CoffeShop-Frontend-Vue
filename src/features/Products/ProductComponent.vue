<script lang="ts">
export default {
  name: 'ProductComponent',
}
</script>

<template>
  <div class="card-product">
    <div class="container-img">
      <img src="../../assets/img/1kilo.jpg" alt="Cafe Irish" />
      <span class="discount">-13%</span>
      <div class="button-group">
        <span>
          <!-- ojo -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path
              d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
            />
          </svg>
        </span>
        <span>
          <!-- corazon -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
            />
          </svg>
        </span>
      </div>
    </div>
    <div class="content-card-product">
      <div class="stars">
        <svg
          class="star"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
          />
        </svg>

        <svg
          class="star"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
          />
        </svg>

        <svg
          class="star"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
          />
        </svg>

        <svg
          class="star"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
          />
        </svg>

        <!--         vacia -->
        <svg
          class="star"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"
          />
        </svg>
      </div>
      <h3>Cafe Irish</h3>
      <span class="add-cart">
        <svg
          class="cart-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        ></svg>
      </span>
      <p class="price">$4.60 <span>$5.30</span></p>
    </div>
  </div>
</template>

<style lang="css" scoped>
.card-product {
  background-color: #fff;
  padding: 2rem 3rem;
  border-radius: 0.5rem;
  cursor: pointer;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
}

.container-img {
  position: relative;
}

.container-img img {
  width: 100%;
}

.container-img .discount {
  position: absolute;
  left: 0;
  background-color: var(--primary-color);
  color: #fff;
  padding: 2px 1.2rem;
  border-radius: 1rem;
  font-size: 1.2rem;
}

.card-product:hover .discount {
  background-color: #000;
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  position: absolute;
  top: 0;
  right: -3rem;
  z-index: -1;
  transition: all 0.4s ease;
}

.button-group span {
  border: 1px solid var(--primary-color);
  padding: 0.8rem;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.4s ease;
}

.button-group span:hover {
  background-color: var(--primary-color);
}

.star {
  font-size: 1.5rem;
  color: var(--primary-color);
}

.button-group span:hover .star {
  color: #fff;
}

.card-product:hover .button-group {
  z-index: 0;
  right: -1rem;
}

.content-card-product {
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, min-content);
  row-gap: 1rem;
}

.stars {
  grid-row: 1/2;
  grid-column: 1/-1;
}

.stars .star {
  font-size: 1.3rem;
  color: var(--primary-color);
}

.content-card-product h3 {
  grid-row: 2/3;
  grid-column: 1/-1;

  font-weight: 400;
  font-size: 1.6rem;
  margin-bottom: 1rem;
  cursor: pointer;
}

.content-card-product h3:hover {
  color: var(--primary-color);
}

.add-cart {
  justify-self: start;
  border: 2px solid var(--primary-color);
  padding: 1rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.4s ease;

  display: flex;
  align-items: center;
  justify-content: center;
}

.add-cart:hover {
  background-color: var(--primary-color);
}

.add-cart .cart-icon {
  font-size: 1.5rem;
  color: var(--primary-color);
}

.add-cart:hover .cart-icon {
  color: #fff;
}

.content-card-product .price {
  justify-self: end;
  align-self: center;

  font-size: 1.7rem;
  font-weight: 600;
}

.content-card-product .price span {
  font-size: 1.5rem;
  font-weight: 400;
  text-decoration: line-through;
  color: #777;
  margin-left: 0.5rem;
}
</style>
