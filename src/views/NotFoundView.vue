<script setup>
import FooterComponent from '@/components/FooterComponent.vue'
import NavbarComponent from '@/components/NavbarComponent.vue'
</script>

<template>
  <NavbarComponent />
  <div class="background-wrapper">
    <div class="error-text">
      <span class="title">404</span>
      <span class="subtitle">Här finns ingenting än...</span>
      <BLink class="btn btn-dark btn-lg" to="/">Tillbaka</BLink>
    </div>
  </div>
  <section id="footer">
    <FooterComponent />
  </section>
</template>

<style scoped>
.background-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(../images/error-page/McCauley404.webp);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}
.error-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 20rem;
  background-color: rgba(255, 255, 255, 0.75);
  padding: 1.5rem;
}
.title {
  font-size: 8rem;
  font-weight: 700;
}
.subtitle {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}
.btn {
  border-radius: 0;
}
#footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
@media (max-width: 576px) {
  .subtitle {
    font-size: 1.5rem;
  }
}
</style>
