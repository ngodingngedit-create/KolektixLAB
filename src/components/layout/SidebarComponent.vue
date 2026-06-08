<template>
  <!-- Mobile overlay -->
  <Transition name="fade-overlay">
    <div
      v-if="isMobileOpen"
      class="sidebar-overlay"
      @click="closeMobile"
    />
  </Transition>

  <!-- Sidebar Panel -->
  <aside
    class="sidebar-panel"
    :class="{ 'is-collapsed': isCollapsed, 'is-open': isMobileOpen }"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    id="app-sidebar"
    aria-label="Side Navigation"
  >
    <!-- Nav Items -->
    <nav class="sidebar-nav" role="navigation">
      <RouterLink
        v-for="item in menuItems"
        :key="item.to"
        :to="item.to"
        class="sidebar-item"
        :class="{ 'is-active': $route.path === item.to || ($route.path !== '/' && item.to !== '/' && $route.path.startsWith(item.to)) }"
        @click="closeMobile"
      >
        <!-- Blue left bar indicator for active -->
        <span class="active-indicator"></span>

        <span class="item-icon">
          <component :is="item.icon" :size="20" />
        </span>
        <Transition name="fade-label">
          <span v-show="!isCollapsed" class="item-label">{{ item.label }}</span>
        </Transition>

        <!-- Tooltip when collapsed (desktop) -->
        <span v-if="isCollapsed" class="item-tooltip">{{ item.label }}</span>
      </RouterLink>
    </nav>

    <!-- Spacer -->
    <div class="sidebar-spacer" />

    <!-- Collapse / Expand Button -->
    <button
      class="collapse-btn"
      @click="toggle"
      :title="isCollapsed ? (currentLocale === 'en' ? 'Expand' : 'Perluas') : (currentLocale === 'en' ? 'Collapse' : 'Persingkat')"
      aria-label="Toggle Sidebar"
      id="sidebar-collapse-btn"
    >
      <span class="collapse-btn-icon" :class="{ rotated: isCollapsed }">
        <ChevronRightIcon :size="16" />
      </span>
      <Transition name="fade-label">
        <span v-show="!isCollapsed" class="collapse-btn-label">{{ currentLocale === 'en' ? 'Collapse' : 'Persingkat' }}</span>
      </Transition>
    </button>

    <!-- Mobile Close Button -->
    <button
      class="mobile-close-btn"
      @click="closeMobile"
      aria-label="Tutup Sidebar"
      id="sidebar-close-btn"
    >
      <span class="mobile-close-btn-icon">
        <ChevronRightIcon :size="16" />
      </span>
      <span class="mobile-close-btn-label">{{ currentLocale === 'en' ? 'Close Sidebar' : 'Tutup Sidebar' }}</span>
    </button>
  </aside>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import {
  HomeIcon,
  LayoutGridIcon,
  FolderOpenIcon,
  UserIcon,
  MailIcon,
  ChevronRightIcon,
} from 'lucide-vue-next'
import { useSidebar } from '@/composables/useSidebar'

const route = useRoute()
const { isCollapsed, isMobileOpen, toggle, toggleMobile, closeMobile } = useSidebar()

const currentLocale = ref(localStorage.getItem('kolektix_lang') || 'id')

const menuItems = computed(() => {
  if (currentLocale.value === 'en') {
    return [
      { to: '/',          label: 'Home',        icon: HomeIcon },
      { to: '/layanan',   label: 'Services',    icon: LayoutGridIcon },
      { to: '/portfolio', label: 'Case Studies',icon: FolderOpenIcon },
      { to: '/tentang',   label: 'About Us',    icon: UserIcon },
      { to: '/kontak',    label: 'Contact',     icon: MailIcon },
    ]
  }
  return [
    { to: '/',          label: 'Beranda',     icon: HomeIcon },
    { to: '/layanan',   label: 'Layanan',     icon: LayoutGridIcon },
    { to: '/portfolio', label: 'Studi Kasus', icon: FolderOpenIcon },
    { to: '/tentang',   label: 'Tentang',     icon: UserIcon },
    { to: '/kontak',    label: 'Kontak',      icon: MailIcon },
  ]
})

const onLangChange = (e) => {
  currentLocale.value = e.detail
}

const onMouseEnter = () => {
  if (window.innerWidth > 900) {
    isCollapsed.value = false
  }
}

const onMouseLeave = () => {
  if (window.innerWidth > 900) {
    isCollapsed.value = true
  }
}

onMounted(() => {
  window.addEventListener('kolektix-lang-change', onLangChange)
})

onUnmounted(() => {
  window.removeEventListener('kolektix-lang-change', onLangChange)
})

watch(() => route.path, closeMobile)
</script>

<style scoped>
/* ── Variables ───────────────────────────────────────────── */
.sidebar-panel {
  --sb-width: 220px;
  --sb-col-width: 64px;
  --sb-blue: #ffffff;
  --sb-blue-dark: rgba(255, 255, 255, 0.8);
  --sb-bg: #194E9E;
  --sb-border: rgba(255, 255, 255, 0.15);
  --sb-text: rgba(255, 255, 255, 0.7);
  --sb-radius: 8px;
  --sb-transition: 0.28s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ── Panel ───────────────────────────────────────────────── */
.sidebar-panel {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 900;
  width: var(--sb-width);
  background: var(--sb-bg);
  border-left: none;
  box-shadow: -4px 0 24px rgba(0, 80, 209, 0.15);
  display: flex;
  flex-direction: column;
  transition: width var(--sb-transition), transform var(--sb-transition);
  overflow: hidden;
}

.sidebar-panel.is-collapsed {
  width: var(--sb-col-width);
}

/* ── Nav ─────────────────────────────────────────────────── */
.sidebar-nav {
  display: flex;
  flex-direction: column;
  padding: 25px 0 10px;
  gap: 0;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
}

.sidebar-nav::-webkit-scrollbar { width: 3px; }
.sidebar-nav::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.2); border-radius: 2px; }

/* ── Item ────────────────────────────────────────────────── */
.sidebar-item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  text-decoration: none;
  color: var(--sb-text);
  font-size: 0.95rem;
  font-weight: 500;
  transition: background var(--sb-transition), color var(--sb-transition), font-size var(--sb-transition), padding var(--sb-transition);
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  min-height: 52px;
}

.sidebar-item:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
}

/* Active — icon + text turn blue, left bar shows */
.sidebar-item.is-active {
  background: rgba(255, 255, 255, 0.15);
  color: #ffffff;
  font-weight: 700;
  font-size: 1.05rem;
}

/* active indicator */
.active-indicator {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: #ffffff;
  opacity: 0;
  transition: opacity var(--sb-transition);
}

.sidebar-item.is-active .active-indicator {
  opacity: 1;
}

/* ── Icon ────────────────────────────────────────────────── */
.item-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 24px;
  color: inherit;
}

.item-icon :deep(svg) {
  width: 20px;
  height: 20px;
  transition: width var(--sb-transition), height var(--sb-transition), transform var(--sb-transition);
}

.sidebar-item.is-active .item-icon :deep(svg) {
  width: 22px;
  height: 22px;
}

/* ── Label ───────────────────────────────────────────────── */
.item-label {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* ── Tooltip (collapsed desktop) ────────────────────────── */
.item-tooltip {
  position: absolute;
  right: calc(100% + 12px);
  top: 50%;
  transform: translateY(-50%);
  background: #1e293b;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 5px 10px;
  border-radius: 6px;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.18s ease;
  z-index: 999;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.item-tooltip::before {
  content: '';
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  border: 4px solid transparent;
  border-left-color: #1e293b;
}

.sidebar-panel.is-collapsed .sidebar-item:hover .item-tooltip {
  opacity: 1;
}

/* ── Collapsed item centering ────────────────────────────── */
.sidebar-panel.is-collapsed .sidebar-item {
  justify-content: center;
  gap: 0;
  padding: 16px 0;
}

.sidebar-panel.is-collapsed .item-icon {
  width: auto;
}

@media (min-width: 901px) {
  .sidebar-panel.is-collapsed .item-icon :deep(svg) {
    width: 24px;
    height: 24px;
  }
}

/* ── Spacer ──────────────────────────────────────────────── */
.sidebar-spacer {
  flex: 1;
  min-height: 8px;
}

/* ── Collapse Button ─────────────────────────────────────── */
.collapse-btn {
  display: none;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  margin: 0 8px 12px;
  border-radius: var(--sb-radius);
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.88rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--sb-transition);
  white-space: nowrap;
  overflow: hidden;
  min-height: 44px;
  width: calc(100% - 16px);
}

.mobile-close-btn {
  display: none;
}

.collapse-btn:hover {
  background: rgba(255, 255, 255, 0.16);
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.4);
}

.collapse-btn-icon {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  transition: transform var(--sb-transition);
}

.collapse-btn-icon.rotated {
  transform: rotate(180deg);
}

.collapse-btn-label {
  overflow: hidden;
}

/* Collapsed state: center icon */
.sidebar-panel.is-collapsed .collapse-btn {
  justify-content: center;
  gap: 0;
  margin: 0 4px 12px;
  width: calc(100% - 8px);
  padding: 12px 0;
}

/* ── Overlay ─────────────────────────────────────────────── */
.sidebar-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  z-index: 899;
}

/* ── Transitions ─────────────────────────────────────────── */
.fade-label-enter-active,
.fade-label-leave-active { transition: opacity 0.15s ease; }
.fade-label-enter-from,
.fade-label-leave-to { opacity: 0; }

.fade-overlay-enter-active,
.fade-overlay-leave-active { transition: opacity 0.22s ease; }
.fade-overlay-enter-from,
.fade-overlay-leave-to { opacity: 0; }

/* ── Desktop (≥ 901px) ───────────────────────────────────── */
@media (min-width: 901px) {
  .sidebar-overlay { display: none !important; }
}

/* ── Mobile / Tablet (≤ 900px) ───────────────────────────── */
@media (max-width: 900px) {
  .sidebar-panel {
    width: 220px !important;
    transform: translateX(100%);
    transition: transform var(--sb-transition) !important;
    z-index: 1100 !important;
  }

  .sidebar-panel.is-open {
    transform: translateX(0);
  }

  /* Reset desktop collapsed settings on mobile drawer */
  .sidebar-panel .sidebar-item {
    justify-content: flex-start !important;
    gap: 12px !important;
    padding: 14px 20px !important;
    font-size: 0.95rem !important;
  }

  .sidebar-panel .sidebar-item.is-active {
    font-size: 1.05rem !important;
  }

  .sidebar-panel .item-icon {
    width: 24px !important;
  }

  .sidebar-panel .item-label {
    display: block !important;
    opacity: 1 !important;
  }

  .collapse-btn { display: none; }
  .item-tooltip { display: none; }

  .sidebar-overlay {
    z-index: 1099 !important;
  }

  .mobile-close-btn {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
    padding: 14px 20px;
    margin: 0 8px 12px;
    border-radius: var(--sb-radius);
    border: 1px solid rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.88rem;
    font-weight: 500;
    cursor: pointer;
    transition: all var(--sb-transition);
    white-space: nowrap;
    overflow: hidden;
    min-height: 44px;
    width: calc(100% - 16px);
  }

  .mobile-close-btn:hover {
    background: rgba(255, 255, 255, 0.16);
    color: #ffffff;
    border-color: rgba(255, 255, 255, 0.4);
  }

  .mobile-close-btn-icon {
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }
}
</style>
