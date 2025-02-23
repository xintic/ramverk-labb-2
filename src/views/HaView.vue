<script setup>
import NavbarComponent from '@/components/NavbarComponent.vue'
import HeroComponent from '@/components/HeroComponent.vue'
import StandingsHa from '@/components/StandingsHa.vue'
import RoundHa from '@/components/RoundHa.vue'
import LeadersHa from '@/components/LeadersHa.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <section id="navbar">
    <NavbarComponent />
  </section>
  <section id="hero">
    <HeroComponent
      title="SVERIGES MEST UNDERHÅLLANDE LIGA"
      :number_1="14"
      subtitle_1="LAG"
      :number_2="52"
      subtitle_2="OMGÅNGAR"
      :number_3="364"
      subtitle_3="MATCHER"
      :number_4="1"
      subtitle_4="VINNARE"
    />
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
  <section id="footer">
    <FooterComponent />
  </section>
</template>

<style scoped>
#hero {
  display: flex;
  justify-content: center;
  margin-top: 3.625rem;
  padding-top: 5rem;
  padding-bottom: 10rem;
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
