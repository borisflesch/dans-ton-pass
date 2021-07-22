<template>
  <div>
    <!-- Header -->
    <header id="site_header" class="header mobile-menu-hide">
      <div class="header-content">
        <div class="site-title-block mobile-hidden">
          <NuxtLink to="/">
            <div class="site-title">
              <img class="logo" src="/logo.png" alt="Logo">
              DansTon<span>Pass</span>
            </div>
          </NuxtLink>
        </div>

        <!-- Navigation -->
        <div class="site-nav">
          <!-- Main menu -->
          <ul id="nav" class="site-main-menu">
            <li>
              <NuxtLink class="pt-trigger" to="/" data-animation="62">Accueil</NuxtLink
              >
            </li>
            <li>
              <NuxtLink class="pt-trigger" to="/comment-ca-marche" data-animation="62"
                >Comment ça marche ?</NuxtLink
              >
            </li>
            <li>
              <NuxtLink class="pt-trigger" to="/a-propos" data-animation="62"
                >A propos</NuxtLink
              >
            </li>
          </ul>
          <!-- /Main menu -->
        </div>
        <!-- Navigation -->
      </div>
    </header>
    <!-- /Header -->

    <!-- Mobile Header -->
    <div class="mobile-header mobile-visible">
      <div class="mobile-logo-container">
        <NuxtLink class="mobile-site-title" to="/">
          <img class="logo" src="/logo.png" alt="Logo">
          DansTonPass
        </NuxtLink>
      </div>

      <a class="menu-toggle mobile-visible">
        <i class="fa fa-bars"></i>
      </a>
    </div>
    <!-- /Mobile Header -->
  </div>
</template>

<style scoped>
.logo {
  vertical-align: middle;
  width: 34px;
}

.site-title-block a:focus, .site-title-block a:hover {
  text-decoration: none;
}
</style>