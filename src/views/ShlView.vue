<script setup>
import NavbarComponent from '@/components/NavbarComponent.vue'
import CarouselComponent from '@/components/CarouselComponent.vue'
import StandingsShl from '@/components/StandingsShl.vue'
import RoundShl from '@/components/RoundShl.vue'
import LeadersShl from '@/components/LeadersShl.vue'
</script>

<template>
  <NavbarComponent />
  <CarouselComponent />
  <section id="standings">
    <BContainer class="bv-example-row">
      <BRow>
        <BCol cols="12" lg="8"><StandingsShl /></BCol>
        <BCol cols="12" lg="4"><RoundShl /></BCol>
      </BRow>
    </BContainer>
  </section>
  <section id="leaders">
    <LeadersShl />
  </section>
</template>

<style scoped>
#standings {
  display: flex;
  justify-content: center;
}
</style>
