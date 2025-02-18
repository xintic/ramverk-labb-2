<template>
  <BNavbar v-b-color-mode="'dark'" toggleable="lg" variant="secondary">
    <BNavbarBrand to="/">NavBar</BNavbarBrand>
    <BNavbarToggle target="nav-collapse" />
    <BCollapse id="nav-collapse" is-nav>
      <BNavbarNav class="ms-auto mb-2 mb-lg-0">
        <BNavItem to="/shl" class="text-white" right>SHL</BNavItem>
        <BNavItem to="/hockeyallsvenskan" class="text-white" right>Hockeyallsvenskan</BNavItem>
      </BNavbarNav>
    </BCollapse>
  </BNavbar>
</template>
