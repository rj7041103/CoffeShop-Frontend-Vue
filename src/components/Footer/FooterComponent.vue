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
              <font-i icon="fa-brands fa-facebook-f"></font-i>
            </span>
            <span class="twitter">
              <font-i icon="fa-brands fa-twitter"></font-i>
            </span>
            <span class="youtube">
              <font-i icon="fa-brands fa-youtube"></font-i>
            </span>
            <span class="pinterest">
              <font-i icon="fa-brands fa-pinterest-p"></font-i>
            </span>
            <span class="instagram">
              <font-i icon="fa-brands fa-instagram"></font-i>
            </span>
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
            <input type="email" placeholder="Ingresa el correo aquí..." />
            <button>Suscríbete</button>
          </div>
        </div>
      </div>

      <div class="copyright">
        <p>Desarrollado por Programación para el mundo &copy; 2022</p>

        <img src="../../assets/img/payment.png" alt="Pagos" />
      </div>
    </div>
  </footer>
</template>
