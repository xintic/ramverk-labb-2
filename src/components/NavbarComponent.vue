<template>
  <BNavbar v-b-color-mode="'dark'" toggleable="lg" variant="secondary">
    <BNavbarBrand to="/"
      ><img
        src="../images/startpage/hockeylogo.png"
        class="d-inline-block align-top"
        alt="logo"
      />Hockeystatistik</BNavbarBrand
    >
    <BNavbarToggle target="nav-collapse" />
    <BCollapse id="nav-collapse" is-nav>
      <BNavbarNav class="ms-auto mb-2 mb-lg-0">
        <BNavItem to="/shl" right>SHL</BNavItem>
        <BNavItem to="/hockeyallsvenskan" right>Hockeyallsvenskan</BNavItem>
      </BNavbarNav>
    </BCollapse>
  </BNavbar>
</template>

<style scoped>
::v-deep(.nav-link) {
  color: white;
}
img {
  height: 2rem;
  margin-right: 0.5rem;
}
</style>
