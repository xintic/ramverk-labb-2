<script setup>
import CarouselComponent from '@/components/CarouselComponent.vue'
import LeadersShl from '@/components/LeadersShl.vue'
import NavbarComponent from '@/components/NavbarComponent.vue'
import RoundShl from '@/components/RoundShl.vue'
import StandingsShl from '@/components/StandingsShl.vue'
</script>

<template>
  <NavbarComponent />
  <CarouselComponent />
  <section class="standings">
    <StandingsShl />
    <RoundShl />
  </section>
  <LeadersShl />
</template>

<style scoped>
.standings {
  display: flex;
  justify-content: center;
}
</style>
