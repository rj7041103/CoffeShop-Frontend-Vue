<script lang="ts">
export default {
  name: 'FooterComponent',
}
</script>

<template>
  <footer class="footer">
    <div class="container container-footer">
      <div class="menu-footer">
        <div class="contact-info">
          <p class="title-footer">Información de Contacto</p>
          <ul>
            <li>Dirección: 71 Pennington Lane Vernon Rockville, CT 06066</li>
            <li>Teléfono: 123-456-7890</li>
            <li>Fax: 55555300</li>
            <li>EmaiL: baristas@support.com</li>
          </ul>
          <div class="social-icons">
            <span class="facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                font-color="#3b5998"
              >
                <path
                  d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
                />
              </svg>
            </span>

            <span class="youtube">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                font-color="#c4302b"
              >
                <path
                  d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
                />
              </svg>
            </span>

            <!-- <span class="instagram">
              <svg
                font-color="#3b5998"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              ></svg>
            </span> -->
          </div>
        </div>

        <div class="information">
          <p class="title-footer">Información</p>
          <ul>
            <li><a href="#">Acerca de Nosotros</a></li>
            <li><a href="#">Información Delivery</a></li>
            <li><a href="#">Politicas de Privacidad</a></li>
            <li><a href="#">Términos y condiciones</a></li>
            <li><a href="#">Contactános</a></li>
          </ul>
        </div>

        <div class="my-account">
          <p class="title-footer">Mi cuenta</p>

          <ul>
            <li><a href="#">Mi cuenta</a></li>
            <li><a href="#">Historial de ordenes</a></li>
            <li><a href="#">Lista de deseos</a></li>
            <li><a href="#">Boletín</a></li>
            <li><a href="#">Reembolsos</a></li>
          </ul>
        </div>

        <div class="newsletter">
          <p class="title-footer">Boletín informativo</p>

          <div class="content">
            <p>
              Suscríbete a nuestros boletines ahora y mantente al día con nuevas
              colecciones y ofertas exclusivas.
            </p>
            <!-- <input type="email" placeholder="Ingresa el correo aquí..." />
            <button>Suscríbete</button> -->
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="css" scoped>
.container {
  max-width: 120rem;
  margin: 0 auto;
}

.footer {
  background-color: var(--primary-color);
}

.container-footer {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 3rem;
}

.menu-footer {
  display: grid;
  grid-template-columns: repeat(3, 1fr) 30rem;
  gap: 3rem;
  justify-items: center;
}

.title-footer {
  font-weight: 600;
  font-size: 1.6rem;
  text-transform: uppercase;
}

.contact-info,
.information,
.my-account,
.newsletter {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-info ul,
.information ul,
.my-account ul {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-info ul li,
.information ul li,
.my-account ul li {
  list-style: none;
  color: #fff;
  font-size: 1.4rem;
  font-weight: 300;
}

.information ul li a,
.my-account ul li a {
  text-decoration: none;
  color: #fff;
  font-weight: 300;
}

.information ul li a:hover,
.my-account ul li a:hover {
  color: var(--dark-color);
}

.social-icons {
  display: flex;
  gap: 1.5rem;
}

.social-icons span {
  border-radius: 50%;
  width: 3rem;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
}

.social-icons span svg {
  color: #fff;
  font-size: 1.2rem;
}

.content p {
  font-size: 1.4rem;
  color: #fff;
  font-weight: 300;
}

.content input {
  outline: none;
  background: none;
  border: none;
  border-bottom: 2px solid #d2b495;
  cursor: pointer;
  padding: 0.5rem 0 1.2rem;
  color: var(--dark-color);
  display: block;
  margin-bottom: 3rem;
  margin-top: 2rem;
  width: 100%;
  font-family: inherit;
}

.content input::-webkit-input-placeholder {
  color: #eee;
}
</style>
