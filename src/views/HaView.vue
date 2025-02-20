<script setup>
import NavbarComponent from '@/components/NavbarComponent.vue'
import StandingsHa from '@/components/StandingsHa.vue'
import RoundHa from '@/components/RoundHa.vue'
import LeadersHa from '@/components/LeadersHa.vue'
</script>

<template>
  <NavbarComponent />
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
#standings {
  display: flex;
  justify-content: center;
}
</style>
