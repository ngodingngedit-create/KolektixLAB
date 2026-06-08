<template>
  <nav class="mobile-navbar" role="navigation" aria-label="Mobile Bottom Navigation">
    <div class="mobile-nav-items">
      <RouterLink
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        class="mobile-nav-item"
        :class="{ 'is-active': isActive(item.to) }"
      >
        <!-- Top Active Indicator Bar -->
        <span class="active-indicator" />

        <!-- Icon -->
        <div class="item-icon-wrap">
          <img
            v-if="item.isHome"
            src="/home.png"
            alt="Home"
            class="home-icon-img"
            :class="{ 'active-img': isActive(item.to) }"
          />
          <component
            v-else
            :is="item.icon"
            :size="22"
            class="nav-icon"
          />
        </div>

        <!-- Label -->
        <span class="item-label">{{ item.label }}</span>
      </RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { LayoutGridIcon, UserIcon, MailIcon } from 'lucide-vue-next'

const route = useRoute()

const currentLocale = ref(localStorage.getItem('kolektix_lang') || 'id')

const navItems = computed(() => {
  if (currentLocale.value === 'en') {
    return [
      { to: '/', label: 'Home', isHome: true },
      { to: '/layanan', label: 'Services', icon: LayoutGridIcon },
      { to: '/tentang', label: 'About Us', icon: UserIcon },
      { to: '/kontak', label: 'Contact', icon: MailIcon },
    ]
  }
  return [
    { to: '/', label: 'Home', isHome: true },
    { to: '/layanan', label: 'Layanan', icon: LayoutGridIcon },
    { to: '/tentang', label: 'Tentang Kami', icon: UserIcon },
    { to: '/kontak', label: 'Kontak', icon: MailIcon },
  ]
})

const onLangChange = (e) => {
  currentLocale.value = e.detail
}

onMounted(() => {
  window.addEventListener('kolektix-lang-change', onLangChange)
})

onUnmounted(() => {
  window.removeEventListener('kolektix-lang-change', onLangChange)
})

function isActive(to) {
  if (to === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(to)
}
</script>

<style scoped>
.mobile-navbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--white);
  height: 72px;
  z-index: 950; /* below sidebar overlay (1099) and panel (1100) */
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  box-shadow: 0 -4px 20px rgba(0, 80, 209, 0.08);
  border-top: 1px solid rgba(0, 80, 209, 0.05);
  display: none; /* hidden on desktop */
}

.mobile-nav-items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 100%;
  width: 100%;
}

.mobile-nav-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  text-decoration: none;
  color: var(--text-muted);
  transition: color 0.2s ease;
  cursor: pointer;
}

/* ── Active Top Indicator Line ── */
.active-indicator {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 3px;
  background-color: var(--primary);
  border-radius: 0 0 3px 3px;
  opacity: 0;
  transition: opacity 0.2s ease, width 0.2s ease;
}

.mobile-nav-item.is-active .active-indicator {
  opacity: 1;
}

/* ── Icon Wrap ── */
.item-icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
}

.home-icon-img {
  width: 22px;
  height: 22px;
  object-fit: contain;
  filter: grayscale(100%) opacity(0.6);
  transition: all 0.2s ease;
}

.mobile-nav-item.is-active .home-icon-img {
  filter: none; /* full colored/royal blue logo as in screenshot */
}

.nav-icon {
  color: var(--text-muted);
  transition: color 0.2s ease, transform 0.2s ease;
}

.mobile-nav-item.is-active .nav-icon {
  color: var(--primary);
  transform: scale(1.05);
}

/* ── Label ── */
.item-label {
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 500;
  transition: color 0.2s ease, font-weight 0.2s ease;
}

.mobile-nav-item.is-active .item-label {
  color: var(--primary);
  font-weight: 700;
}

/* ── Media Query ── */
@media (max-width: 900px) {
  .mobile-navbar {
    display: block;
  }
}
</style>
