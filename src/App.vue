<script setup>
import NavbarComponent from '@/components/NavbarComponent.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <section id="navbar">
    <NavbarComponent />
  </section>
  <RouterView />
</template>

<style scoped></style>
