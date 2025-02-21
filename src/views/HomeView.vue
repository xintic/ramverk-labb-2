<script setup>
import NavbarComponent from '@/components/NavbarComponent.vue'
</script>

<template>
  <div class="background-wrapper">
    <section id="navbar">
      <NavbarComponent />
    </section>
    <section id="hero"></section>
  </div>
  <section id="footer">
    <FooterComponent />
  </section>
</template>

<style scoped>
.background-wrapper {
  height: 100vh;
  background-image: url(../images/startpage/hovet.webp);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}
#footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
::v-deep(.text-body-secondary) {
  color: white !important;
}
</style>
