import { ref } from 'vue'

// Module-level = singleton shared across all components
const isCollapsed = ref(false)
const isMobileOpen = ref(false)

export function useSidebar() {
  function toggle() {
    isCollapsed.value = !isCollapsed.value
  }

  function toggleMobile() {
    isMobileOpen.value = !isMobileOpen.value
    document.body.style.overflow = isMobileOpen.value ? 'hidden' : ''
  }

  function closeMobile() {
    isMobileOpen.value = false
    document.body.style.overflow = ''
  }

  return { isCollapsed, isMobileOpen, toggle, toggleMobile, closeMobile }
}
