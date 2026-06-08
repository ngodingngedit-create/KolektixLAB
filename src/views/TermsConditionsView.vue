<template>
  <div class="terms-page" style="padding-top: 90px;">
    <!-- Hero -->
    <section class="page-hero">
      <div class="container page-hero-inner">
        <h1 class="page-hero-title">
          {{ t('terms.heroTitle') }}
        </h1>
        <p class="page-hero-desc">
          {{ t('terms.heroDesc') }}
        </p>
        <div class="last-updated">
          <ClockIcon :size="14" />
          <span>{{ t('terms.lastUpdated') }}</span>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="section">
      <div class="container terms-layout">
        <!-- Sticky Sidebar / Table of Contents -->
        <aside class="terms-sidebar">
          <div class="sidebar-card">
            <h4 class="sidebar-title">
              {{ locale === 'id' ? 'Daftar Isi' : 'Table of Contents' }}
            </h4>
            <nav class="sidebar-nav">
              <a
                v-for="(label, key) in sidebarItems"
                :key="key"
                :href="'#' + key"
                class="sidebar-nav-link"
                :class="{ active: activeSection === key }"
                @click="scrollToSection($event, key)"
              >
                {{ label }}
              </a>
            </nav>
          </div>
        </aside>

        <!-- Content Sections -->
        <div class="terms-content">
          <!-- Section 1: Intro -->
          <section id="intro" class="content-section">
            <h2>{{ t('terms.sections.intro.title') }}</h2>
            <p>{{ t('terms.sections.intro.text') }}</p>
          </section>

          <!-- Section 2: Use of Services -->
          <section id="use" class="content-section">
            <h2>{{ t('terms.sections.use.title') }}</h2>
            <p>{{ t('terms.sections.use.text') }}</p>
            <ul class="custom-list">
              <li
                v-for="(item, idx) in t('terms.sections.use.items')"
                :key="idx"
              >
                {{ item }}
              </li>
            </ul>
          </section>

          <!-- Section 3: Intellectual Property -->
          <section id="intellectual" class="content-section">
            <h2>{{ t('terms.sections.intellectual.title') }}</h2>
            <p>{{ t('terms.sections.intellectual.text') }}</p>
          </section>

          <!-- Section 4: Limitation of Liability -->
          <section id="liability" class="content-section">
            <h2>{{ t('terms.sections.liability.title') }}</h2>
            <p>{{ t('terms.sections.liability.text') }}</p>
          </section>

          <!-- Section 5: Indemnification -->
          <section id="indemnify" class="content-section">
            <h2>{{ t('terms.sections.indemnify.title') }}</h2>
            <p>{{ t('terms.sections.indemnify.text') }}</p>
          </section>

          <!-- Section 6: Termination -->
          <section id="termination" class="content-section">
            <h2>{{ t('terms.sections.termination.title') }}</h2>
            <p>{{ t('terms.sections.termination.text') }}</p>
          </section>

          <!-- Section 7: Governing Law -->
          <section id="law" class="content-section">
            <h2>{{ t('terms.sections.law.title') }}</h2>
            <p>{{ t('terms.sections.law.text') }}</p>
          </section>

          <!-- Section 8: Contact Us -->
          <section id="contact" class="content-section contact-card-section">
            <h2>{{ t('terms.sections.contact.title') }}</h2>
            <p>{{ t('terms.sections.contact.text') }}</p>
            <div class="contact-details">
              <div class="detail-item">
                <MailIcon :size="16" />
                <span>{{ t('terms.sections.contact.email') }}</span>
              </div>
              <div class="detail-item">
                <PhoneIcon :size="16" />
                <span>{{ t('terms.sections.contact.phone') }}</span>
              </div>
              <div class="detail-item">
                <MapPinIcon :size="16" />
                <span>{{ t('terms.sections.contact.address') }}</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { ClockIcon, MailIcon, PhoneIcon, MapPinIcon } from 'lucide-vue-next'
import { useI18n } from '@/composables/useI18n'

const { t, locale } = useI18n()

const activeSection = ref('intro')

const sidebarItems = computed(() => ({
  intro: t('terms.sidebar.intro'),
  use: t('terms.sidebar.use'),
  intellectual: t('terms.sidebar.intellectual'),
  liability: t('terms.sidebar.liability'),
  indemnify: t('terms.sidebar.indemnify'),
  termination: t('terms.sidebar.termination'),
  law: t('terms.sidebar.law'),
  contact: t('terms.sidebar.contact')
}))

function scrollToSection(e, key) {
  e.preventDefault()
  activeSection.value = key
  const element = document.getElementById(key)
  if (element) {
    const yOffset = -100 // adjust header height offset
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

let observer = null
onMounted(() => {
  const options = {
    root: null,
    rootMargin: '-120px 0px -60% 0px', // check when elements cross near top
    threshold: 0
  }
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
      }
    })
  }, options)

  Object.keys(sidebarItems.value).forEach((key) => {
    const el = document.getElementById(key)
    if (el) observer.observe(el)
  })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
.terms-page {
  background: var(--bg);
  min-height: 100vh;
}

/* Hero Section */
.page-hero {
  position: relative;
  padding: 40px 0 32px;
  background: var(--white);
  border-bottom: 1px solid var(--border);
  text-align: left;
}

.page-hero-title {
  font-size: clamp(1.8rem, 3.5vw, 2.5rem);
  font-weight: 800;
  color: var(--text-dark);
  margin-bottom: 14px;
  letter-spacing: -0.025em;
}

.page-hero-desc {
  color: var(--text-body);
  font-size: 1.05rem;
  max-width: 650px;
  line-height: 1.65;
  margin-bottom: 16px;
}

.last-updated {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--primary-light);
  color: var(--primary);
  padding: 6px 12px;
  border-radius: var(--radius-full);
  font-size: 0.8rem;
  font-weight: 600;
}

.last-updated svg {
  flex-shrink: 0;
}

/* Layout Grid */
.terms-layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 48px;
  align-items: start;
  padding-top: 40px;
  padding-bottom: 80px;
}

/* Sidebar TOC */
.terms-sidebar {
  position: sticky;
  top: 110px; /* keep below navbar */
  z-index: 10;
}

.sidebar-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 24px;
  box-shadow: var(--shadow-sm);
}

.sidebar-title {
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-dark);
  margin-bottom: 16px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--border);
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.sidebar-nav-link {
  display: block;
  padding: 8px 12px;
  border-radius: var(--radius-sm);
  color: var(--text-muted);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.4;
  transition: all var(--transition-fast);
  border-left: 3px solid transparent;
}

.sidebar-nav-link:hover {
  color: var(--primary);
  background: var(--primary-light);
  padding-left: 16px;
}

.sidebar-nav-link.active {
  color: var(--primary);
  background: var(--primary-light);
  border-left-color: var(--primary);
  font-weight: 600;
  padding-left: 16px;
}

/* Content Area */
.terms-content {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.content-section {
  scroll-margin-top: 120px; /* spacing for smooth scroll target */
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 40px;
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--transition-base);
}

.content-section:hover {
  box-shadow: var(--shadow-md);
}

.content-section h2 {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 20px;
  letter-spacing: -0.01em;
}

.content-section p {
  color: var(--text-body);
  line-height: 1.8;
  font-size: 0.975rem;
  margin-bottom: 16px;
}

.content-section p:last-child {
  margin-bottom: 0;
}

/* Custom bullet styling */
.custom-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
}

.custom-list li {
  position: relative;
  padding-left: 24px;
  color: var(--text-body);
  font-size: 0.95rem;
  line-height: 1.6;
}

.custom-list li::before {
  content: "•";
  position: absolute;
  left: 8px;
  color: var(--primary);
  font-weight: bold;
  font-size: 1.2rem;
  top: -2px;
}

/* Contact Details Card style */
.contact-card-section {
  border-left: 4px solid var(--primary);
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 24px;
  padding: 20px;
  background: var(--bg);
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text-body);
  font-size: 0.95rem;
}

.detail-item svg {
  color: var(--primary);
  flex-shrink: 0;
}

/* Responsive Rules */
@media (max-width: 1024px) {
  .terms-layout {
    grid-template-columns: 1fr;
    gap: 32px;
    padding-top: 24px;
    padding-bottom: 48px;
  }

  .terms-sidebar {
    position: static;
  }

  .sidebar-card {
    padding: 16px;
  }

  .sidebar-nav {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
}

@media (max-width: 640px) {
  .page-hero {
    padding: 32px 0 24px;
  }
  
  .sidebar-nav {
    grid-template-columns: 1fr;
  }
  
  .content-section {
    padding: 24px;
  }
}
</style>
