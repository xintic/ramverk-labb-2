<script setup></script>

<template>
  <div class="background-wrapper">
    <section id="hero">
      <div class="hero-wrapper">
        <div class="hero-text">
          <div>
            <h1>HOCKEYSTATISTIK</h1>
          </div>
          <div>
            <h2>Din plats för svensk hockey</h2>
          </div>
          <div class="d-grid gap-2">
            <BLink class="btn btn-secondary rounded-0 btn-lg" to="/shl"
              ><img src="../assets/images/shl/SHL.svg" alt="SHL Logo"
            /></BLink>
            <BLink class="btn btn-secondary rounded-0 btn-lg" to="/hockeyallsvenskan"
              ><img src="../assets/images/hockeyallsvenskan/HA.svg" alt="Hockeyallsvenskan Logo"
            /></BLink>
          </div>
        </div>
      </div>
    </section>
    <section id="footer">
      <FooterComponent />
    </section>
  </div>
</template>

<style scoped>
.background-wrapper {
  height: 100vh;
  background-image: url(../assets/images/startpage/hovet.webp);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}
#hero {
  display: flex;
  justify-content: center;
  height: 100vh;
}
.hero-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30rem;
}
.hero-text {
  background-color: rgba(0, 0, 0, 0.75);
  padding: 2rem;
  border: 1px solid black;
  text-align: center;
  color: white;
}
.hero-text h1 {
  font-size: 2.8rem;
}
.hero-text h2 {
  margin-bottom: 1rem;
}
.btn img {
  height: 2rem;
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
::v-deep(.border-top) {
  border-color: white !important;
}
@media (max-width: 576px) {
  .hero-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90vw;
  }
  .hero-text {
    background-color: rgba(0, 0, 0, 0.75);
    padding: 2rem;
    border: 1px solid black;
    text-align: center;
    color: white;
  }
  .hero-text h1 {
    font-size: 2rem;
  }
  .hero-text h2 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
  .btn img {
    height: 2rem;
  }
}
</style>
