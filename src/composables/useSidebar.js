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
    if (isMobileOpen.value) {
      isCollapsed.value = false
    } else {
      isCollapsed.value = true
    }
    const val = isMobileOpen.value ? 'hidden' : ''
    document.body.style.overflow = val
    document.documentElement.style.overflow = val
  }

  function closeMobile() {
    isMobileOpen.value = false
    isCollapsed.value = true
    document.body.style.overflow = ''
    document.documentElement.style.overflow = ''
  }

  return { isCollapsed, isMobileOpen, isSupportOpen, toggle, toggleMobile, closeMobile }
}
