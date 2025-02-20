<script setup>
import NavbarComponent from '@/components/NavbarComponent.vue'
import HeroComponent from '@/components/HeroComponent.vue'
import StandingsHa from '@/components/StandingsHa.vue'
import RoundHa from '@/components/RoundHa.vue'
import LeadersHa from '@/components/LeadersHa.vue'
</script>

<template>
  <NavbarComponent />
  <section id="hero">
    <HeroComponent />
  </section>
  <section id="standings">
    <BContainer class="bv-example-row">
      <BRow>
        <BCol cols="12" lg="8"><StandingsHa /></BCol>
        <BCol cols="12" lg="4"><RoundHa /></BCol>
      </BRow>
    </BContainer>
  </section>
  <section id="leaders">
    <LeadersHa />
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
