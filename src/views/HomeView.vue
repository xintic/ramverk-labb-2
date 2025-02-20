<script setup>
import NavbarComponent from '@/components/NavbarComponent.vue'
import HeroComponent from '@/components/HeroComponent.vue'
import StandingsShl from '@/components/StandingsShl.vue'
import RoundShl from '@/components/RoundShl.vue'
import LeadersShl from '@/components/LeadersShl.vue'
</script>

<template>
  <NavbarComponent />
  <section id="hero">
    <HeroComponent />
  </section>
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
#hero {
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  margin-bottom: 5rem;
}
#standings {
  display: flex;
  justify-content: center;
  margin-bottom: 5rem;
}
#leaders {
  margin-bottom: 5rem;
}
</style>
