import { ref, computed } from 'vue'
import id from '@/locales/id.js'
import en from '@/locales/en.js'

const messages = { id, en }

// Module-level singleton — shared across ALL components
const locale = ref(localStorage.getItem('kolektix_lang') || 'id')

// Listen for changes broadcast by NavbarComponent
if (typeof window !== 'undefined') {
  window.addEventListener('kolektix-lang-change', (e) => {
    locale.value = e.detail
  })
}

/**
 * Get a nested translation value by dot-notation key.
 * e.g. t('hero.heading1') => 'Membangun'
 * Falls back to ID if key not found in current locale.
 */
function t(key) {
  const parts = key.split('.')
  let val = messages[locale.value]
  for (const part of parts) {
    if (val == null) break
    val = val[part]
  }
  if (val == null) {
    // Fallback to ID
    val = messages['id']
    for (const part of parts) {
      if (val == null) break
      val = val[part]
    }
  }
  return val ?? key
}

export function useI18n() {
  return { locale, t }
}
