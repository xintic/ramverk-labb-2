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
  <section id="standings">
    <BContainer class="bv-example-row">
      <BRow>
        <BCol lg="8"><StandingsShl /></BCol>
        <BCol lg="4"><RoundShl /></BCol>
      </BRow>
    </BContainer>
  </section>
  <section id="leaders">
    <BContainer class="bv-example-row">
      <BRow>
        <BCol lg="12">
          <LeadersShl />
        </BCol>
      </BRow>
    </BContainer>
  </section>
</template>

<style scoped>
#standings {
  display: flex;
  justify-content: center;
}
</style>
