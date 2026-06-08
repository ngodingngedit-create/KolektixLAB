<template>
  <div id="app-root">
    <NavbarComponent />
    <SidebarComponent />
    <MobileNavbarComponent />

    <!-- Main content shifts left of sidebar -->
    <div
      class="app-body"
      :style="{ marginRight: bodyMargin }"
    >
      <main>
        <RouterView v-slot="{ Component }">
          <Transition name="page" mode="out-in">
            <component :is="Component" />
          </Transition>
        </RouterView>
      </main>
      <FooterComponent />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import NavbarComponent from './components/layout/NavbarComponent.vue'
import FooterComponent from './components/layout/FooterComponent.vue'
import SidebarComponent from './components/layout/SidebarComponent.vue'
import MobileNavbarComponent from './components/layout/MobileNavbarComponent.vue'
import { useSidebar } from '@/composables/useSidebar'

const { isCollapsed } = useSidebar()

// Dynamic margin based on collapsed state
const bodyMargin = computed(() => isCollapsed.value ? '64px' : '220px')
</script>

<style>
* { box-sizing: border-box; }

#app-root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  transition: margin-right 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 0;
}

main {
  flex: 1;
}

/* Mobile: no margin (sidebar overlays content) */
@media (max-width: 900px) {
  .app-body {
    margin-left: 0 !important;
    margin-right: 0 !important;
    padding-bottom: 72px; /* avoid overlapping with bottom navigation bar */
  }
}

/* Page Transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(16px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
