<template>
  <div>
    <!-- Header -->
    <header id="site_header" class="header mobile-menu-hide">
      <div class="header-content">
        <div class="site-title-block mobile-hidden">
          <div class="site-title">DansTon<span>Pass</span></div>
        </div>

        <!-- Navigation -->
        <div class="site-nav">
          <!-- Main menu -->
          <ul id="nav" class="site-main-menu">
            <li>
              <NuxtLink class="pt-trigger" to="/" data-animation="62">Accueil</NuxtLink
              ><!-- href value = data-id without # of .pt-page. -->
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
        <NuxtLink class="mobile-site-title" to="/">DansTonPass</NuxtLink>
      </div>

      <a class="menu-toggle mobile-visible">
        <i class="fa fa-bars"></i>
      </a>
    </div>
    <!-- /Mobile Header -->
  </div>
</template>