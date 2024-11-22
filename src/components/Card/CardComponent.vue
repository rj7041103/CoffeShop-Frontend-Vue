<script lang="ts">
export default {
  name: 'CardComponent',
}
</script>

<template>
  <div class="card-blog">
    <div class="container-img">
      <img src="../../../assets/img/blog-1.jpg" alt="Imagen Blog 1" />
      <div class="button-group-blog">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
            />
          </svg>
        </span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path
              d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"
            />
          </svg>
        </span>
      </div>
    </div>
    <div class="content-blog">
      <h3>Lorem, ipsum dolor sit</h3>
      <span>29 Noviembre 2022</span>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
        molestiae! Ratione et, dolore ipsum quaerat iure illum reprehenderit non
        maxime amet dolor voluptas facilis corporis, consequatur eius est sunt
        suscipit?
      </p>
      <div class="btn-read-more">Leer más</div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.container-img img {
  width: 100%;
}

.card-blog {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.card-blog {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.card-blog .container-img {
  border-radius: 2rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.button-group-blog {
  position: absolute;
  bottom: 1.5rem;
  right: -2.5rem;

  display: flex;
  gap: 0.7rem;
  z-index: -1;
  transition: all 0.3s ease;
}

.card-blog:hover .button-group-blog {
  z-index: 0;
  right: 1.5rem;
}

.button-group-blog span {
  background-color: #fff;
  padding: 1rem;
  border-radius: 50%;
  transition: all 0.4s ease;

  display: flex;
  align-items: center;
  justify-content: center;
}

.button-group-blog span svg {
  font-size: 1.3rem;
}

.button-group-blog span:hover {
  background-color: var(--primary-color);
}

.button-group-blog span:hover i {
  color: #fff;
}

.content-blog h3 {
  font-size: 1.8rem;
  margin-bottom: 1.7rem;
  color: var(--dark-color);
  font-weight: 500;
}

.content-blog h3:hover {
  color: var(--primary-color);
  cursor: pointer;
}

.content-blog p {
  margin-top: 1rem;
  font-size: 1.4rem;
  color: #777;
}

.content-blog span {
  color: var(--primary-color);
  font-size: 1.3rem;
}

.btn-read-more {
  padding: 1rem 3rem;
  background-color: var(--primary-color);
  color: #fff;
  text-transform: uppercase;
  font-size: 1.4rem;
  border-radius: 2rem;
  margin: 3rem 0 5rem;
  display: inline-block;
  cursor: pointer;
}

.btn-read-more:hover {
  background-color: var(--dark-color);
}
</style>
