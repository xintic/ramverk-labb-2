<template>
  <BNavbar v-b-color-mode="'dark'" toggleable="lg" variant="primary">
    <BNavbarBrand to="/">NavBar</BNavbarBrand>
    <BNavbarToggle target="nav-collapse" />
    <BCollapse id="nav-collapse" is-nav>
      <BNavbarNav class="ms-auto mb-2 mb-lg-0">
        <BNavItem to="/shl" right>SHL</BNavItem>
        <BNavItem to="/hockeyallsvenskan" right>Hockeyallsvenskan</BNavItem>
      </BNavbarNav>
    </BCollapse>
  </BNavbar>
</template>
