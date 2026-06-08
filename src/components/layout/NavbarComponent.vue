<template>
  <header class="navbar" :class="{ scrolled: isScrolled, 'menu-open': isMobileOpen }" :style="{ right: navbarRight }">
    <div class="container navbar-inner">
      <!-- Logo -->
      <RouterLink to="/" class="navbar-logo" @click="closeMobile">
        <img src="/logo/blue kolektix lab.png" alt="Kolektix Lab" class="navbar-logo-img" />
      </RouterLink>

      <!-- Desktop Nav -->
      <nav class="navbar-nav" role="navigation" aria-label="Main Navigation">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="nav-link"
          :class="{ active: $route.path === link.to }"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <!-- CTA Button -->
      <div class="navbar-actions">
        <RouterLink to="/kontak" class="btn btn-primary btn-sm navbar-cta">
          <PhoneIcon :size="16" />
          Mari Bicara
        </RouterLink>
        <!-- Mobile Toggle -->
        <button
          class="mobile-toggle"
          @click="toggleMobile"
          :aria-expanded="isMobileOpen"
          aria-label="Toggle Navigation Menu"
          id="mobile-menu-toggle"
        >
          <span class="toggle-bar" :class="{ open: isMobileOpen }"></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { PhoneIcon, LayoutGridIcon, UserIcon, MailIcon } from 'lucide-vue-next'
import { useSidebar } from '@/composables/useSidebar'

const { isCollapsed, isMobileOpen, toggleMobile, closeMobile } = useSidebar()

// Reactive right offset: follows sidebar collapse & window resize
const isMobile = ref(false)

function updateMobile() {
  isMobile.value = window.innerWidth <= 900
}

const navbarRight = computed(() => {
  if (isMobile.value) return '0px'
  return isCollapsed.value ? '58px' : '200px'
})

const isScrolled = ref(false)

const navLinks = [
  { to: '/layanan',   label: 'Layanan',     icon: LayoutGridIcon },
  { to: '/tentang',   label: 'Tentang Kami', icon: UserIcon },
  { to: '/kontak',    label: 'Kontak',       icon: MailIcon },
]

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  updateMobile()
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', updateMobile, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', updateMobile)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  /* right is set dynamically via :style binding */
  right: 200px;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
  box-shadow: 0 4px 20px rgba(0, 80, 209, 0.05);
  transition: all 0.3s ease, right 0.28s cubic-bezier(0.4, 0, 0.2, 1);
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.97);
  border-bottom-color: var(--border);
  box-shadow: 0 4px 24px rgba(0, 80, 209, 0.1);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;
  gap: 24px;
}

/* ── Logo ── */
.navbar-logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  flex-shrink: 0;
}

.navbar-logo-img {
  height: 80px;
  width: auto;
  object-fit: contain;
  display: block;
  transition: height var(--transition-fast) ease;
}

/* ── Nav Links ── */
.navbar-nav {
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
  justify-content: center;
}

.nav-link {
  padding: 8px 16px;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-body);
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: var(--gradient-primary);
  border-radius: 2px;
  transition: width var(--transition-base);
}

.nav-link:hover {
  color: var(--primary);
  background: var(--primary-light);
}

.nav-link.active {
  color: var(--primary);
  font-weight: 600;
}

.nav-link.active::after {
  width: 20px;
}

/* ── Actions ── */
.navbar-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.navbar-cta {
  display: flex;
  align-items: center;
  gap: 6px;
}

/* ── Mobile Toggle ── */
.mobile-toggle {
  display: none;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-sm);
  background: var(--bg);
  align-items: center;
  justify-content: center;
  position: relative;
}

.toggle-bar {
  position: relative;
  width: 20px;
  height: 2px;
  background: var(--text-dark);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.toggle-bar::before,
.toggle-bar::after {
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--text-dark);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.toggle-bar::before { top: -6px; }
.toggle-bar::after { top: 6px; }

.toggle-bar.open {
  background: transparent;
}

.toggle-bar.open::before {
  top: 0;
  transform: rotate(45deg);
}

.toggle-bar.open::after {
  top: 0;
  transform: rotate(-45deg);
}

/* ── Mobile Nav ── */
.mobile-nav {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--white);
  border-bottom: 1px solid var(--border);
  box-shadow: var(--shadow-lg);
  padding: 16px 0 24px;
}

.mobile-nav-links {
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  gap: 4px;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: var(--radius-md);
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-body);
  transition: all var(--transition-fast);
}

.mobile-nav-link:hover {
  background: var(--primary-light);
  color: var(--primary);
}

.mobile-nav-footer {
  padding: 16px 20px 0;
  border-top: 1px solid var(--border);
  margin-top: 12px;
}

.mobile-nav-footer .btn {
  width: 100%;
  justify-content: center;
}

/* ── Mobile Menu Transition ── */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .navbar {
    left: 0 !important;
    right: 0 !important;
    background: rgba(255, 255, 255, 0.85) !important;
    backdrop-filter: blur(20px) !important;
    -webkit-backdrop-filter: blur(20px) !important;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03) !important;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05) !important;
  }

  .navbar-inner {
    height: 72px !important;
    padding: 0 16px !important;
  }

  .navbar-logo-img {
    height: 60px !important;
  }

  .navbar-nav {
    display: none !important;
  }

  .mobile-toggle {
    display: flex !important;
    width: 38px;
    height: 38px;
    border-radius: 10px;
    background: var(--white);
    border: 1px solid var(--border);
    box-shadow: var(--shadow-sm);
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
  }

  .mobile-toggle:active {
    transform: scale(0.95);
  }

  .navbar-cta {
    display: none !important;
  }
}
</style>
