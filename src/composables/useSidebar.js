import { ref } from 'vue'

// Module-level = singleton shared across all components
const isCollapsed = ref(true)
const isMobileOpen = ref(false)
const isSupportOpen = ref(false)

export function useSidebar() {
  function toggle() {
    isCollapsed.value = !isCollapsed.value
    if (isCollapsed.value) {
      isSupportOpen.value = false
    }
  }

  function toggleMobile() {
    isMobileOpen.value = !isMobileOpen.value
    document.body.style.overflow = isMobileOpen.value ? 'hidden' : ''
  }

  function closeMobile() {
    isMobileOpen.value = false
    document.body.style.overflow = ''
  }

  return { isCollapsed, isMobileOpen, isSupportOpen, toggle, toggleMobile, closeMobile }
}
