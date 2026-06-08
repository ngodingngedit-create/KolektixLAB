<template>
  <div class="services-page" style="padding-top: 90px;">
    <!-- Page Hero -->
    <section class="page-hero">
      <div class="container page-hero-inner">
        <h1 class="page-hero-title">
          {{ t('servicesPage.heroTitle') }}
        </h1>
        <p class="page-hero-desc">
          {{ t('servicesPage.heroDesc') }}
        </p>
      </div>
    </section>

    <!-- All Services Detail -->
    <section class="section">
      <div class="container">
        <div class="services-detail-grid">
          <article v-for="service in services" :key="service.title" class="service-detail-card" :id="service.id">
            <div class="sdc-visual">
              <!-- Background image -->
              <img :src="service.image" :alt="service.title" class="sdc-bg-img" />
              <!-- Dark overlay for legibility -->
              <div class="sdc-overlay"></div>
              <!-- Icon and number floating on top -->
              <div class="sdc-visual-content">
                <div class="sdc-icon-wrap">
                  <component :is="service.icon" :size="32" color="white" />
                </div>
                <div class="sdc-number">{{ String(service.index).padStart(2, '0') }}</div>
              </div>
            </div>
            <div class="sdc-content">
              <h2 class="sdc-title">{{ service.title }}</h2>
              <p class="sdc-desc">{{ service.description }}</p>
              <div class="sdc-features">
                <div v-for="feat in service.features" :key="feat.name" class="sdc-feature">
                  <div class="sdc-feat-icon">
                    <CheckIcon :size="14" />
                  </div>
                  <div>
                    <span class="sdc-feat-name">{{ feat.name }}</span>
                    <p class="sdc-feat-desc">{{ feat.desc }}</p>
                  </div>
                </div>
              </div>
              <!-- Proses Kami — accordion on mobile, always visible on desktop -->
              <div class="sdc-process">
                <button
                  class="sdc-process-header"
                  @click="toggleProcess(service.id)"
                  :aria-expanded="openProcess.has(service.id)"
                >
                  <h4>{{ t('servicesPage.processLabel') }}</h4>
                  <ChevronDownIcon
                    :size="16"
                    class="sdc-process-chevron"
                    :class="{ 'is-open': openProcess.has(service.id) }"
                  />
                </button>
                <Transition name="process-expand">
                  <div v-show="!isMobile || openProcess.has(service.id)" class="process-steps-wrap">
                    <div class="process-steps">
                      <div v-for="(step, i) in service.process" :key="step" class="process-step">
                        <div class="process-dot">{{ i + 1 }}</div>
                        <span>{{ step }}</span>
                      </div>
                    </div>
                  </div>
                </Transition>
              </div>
              <div class="sdc-cta-row">
                <RouterLink to="/kontak" class="btn btn-primary btn-sm sdc-cta-btn" :id="`service-cta-${service.id}`">
                  {{ t('servicesPage.ctaBtn') }}
                  <ArrowRightIcon :size="14" />
                </RouterLink>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <PartnerSection />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { ChevronRightIcon, CheckIcon, ArrowRightIcon, CpuIcon, CodeIcon, GitMergeIcon, CloudIcon, ChevronDownIcon } from 'lucide-vue-next'
import PartnerSection from '@/components/sections/PartnerSection.vue'
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()

// Detect mobile breakpoint
const isMobile = ref(false)
function checkMobile() { isMobile.value = window.innerWidth <= 768 }
onMounted(() => { checkMobile(); window.addEventListener('resize', checkMobile) })
onUnmounted(() => { window.removeEventListener('resize', checkMobile) })

// Accordion state
const openProcess = ref(new Set())
function toggleProcess(id) {
  if (openProcess.value.has(id)) {
    openProcess.value.delete(id)
  } else {
    openProcess.value.add(id)
  }
  openProcess.value = new Set(openProcess.value)
}

const iconMap = [CpuIcon, CodeIcon, GitMergeIcon, CloudIcon]
const imageMap = [
  '/layanan/sdc_bg_konsultasi.png',
  '/layanan/sdc_bg_software.png',
  '/layanan/sdc_bg_integrasi.png',
  '/layanan/sdc_bg_cloud.png',
]
const idMap = ['konsultasi-it', 'pengembangan-software', 'integrasi-sistem', 'cloud-devops']

const services = computed(() =>
  t('servicesPage.items').map((item, i) => ({
    id: idMap[i],
    index: i + 1,
    icon: iconMap[i],
    gradient: '#0050D1',
    image: imageMap[i],
    title: item.title,
    description: item.description,
    features: item.features,
    process: item.process,
  }))
)
</script>




<style scoped>
/* ── Page Hero ── */
.page-hero {
  position: relative;
  padding: 40px 0 32px;
  background: var(--bg);
  border-bottom: 1px solid var(--border);
}

.page-hero-inner {
  position: relative;
  z-index: 1;
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
}

/* ── Services Detail ── */
.services-detail-grid {
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.service-detail-card {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 0;
  align-items: stretch;
  padding: 0;
  background: var(--white);
  border-radius: var(--radius-xl);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--transition-base);
  overflow: hidden;
}

.service-detail-card:hover {
  box-shadow: var(--shadow-lg);
}

.sdc-visual {
  position: relative;
  top: 0;
  border-radius: 0;
  overflow: hidden;
  min-height: 280px;
  display: flex;
  align-items: stretch;
}

/* Background image fills the entire visual panel */
.sdc-bg-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

/* Dark gradient overlay to ensure foreground elements stay legible */
.sdc-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 30, 90, 0.72) 0%,
    rgba(0, 50, 160, 0.60) 50%,
    rgba(0, 20, 70, 0.80) 100%
  );
  backdrop-filter: blur(1px);
}

/* Content (icon + number) floats on top via z-index */
.sdc-visual-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 100%;
  padding: 32px 16px;
}

.sdc-icon-wrap {
  width: 80px;
  height: 80px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.15);
  border: 1.5px solid rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(8px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
}

.sdc-number {
  font-family: var(--font-heading);
  font-size: 3.5rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
  letter-spacing: -0.02em;
}

.sdc-title {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--text-dark);
  margin-bottom: 12px;
}

.sdc-content {
  padding: 32px 32px 32px 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.sdc-cta-row {
  display: flex;
  justify-content: flex-end;
  margin-top: 4px;
}

.sdc-desc {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.7;
  margin-bottom: 24px;
}

.sdc-features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 24px;
}

.sdc-feature {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.sdc-feat-icon {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: var(--primary-light);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  flex-shrink: 0;
  margin-top: 2px;
}

.sdc-feat-name {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--text-dark);
  display: block;
  margin-bottom: 4px;
}

.sdc-feat-desc {
  font-size: 0.8rem;
  color: var(--text-muted);
  line-height: 1.5;
}

.sdc-process {
  margin-bottom: 20px;
}

/* Desktop: header looks like plain text label, chevron hidden */
.sdc-process-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: none;
  border: none;
  padding: 0;
  cursor: default;
  pointer-events: none;
}

.sdc-process h4 {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 14px;
}

.sdc-process-chevron {
  display: none;
  color: var(--text-muted);
  transition: transform 0.25s ease;
  flex-shrink: 0;
}

.sdc-process-chevron.is-open {
  transform: rotate(180deg);
}

.process-steps-wrap {
  overflow: hidden;
}

.process-steps {
  display: flex;
  align-items: center;
  gap: 12px 20px;
  flex-wrap: wrap;
}

.process-step {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.82rem;
  color: var(--text-body);
}

.process-step:not(:last-child)::after {
  content: '→';
  color: var(--border-dark);
  margin-left: 8px;
}

.process-dot {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--gradient-primary);
  color: white;
  font-size: 0.65rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sdc-cta-row {
  display: flex;
  justify-content: flex-end;
  margin-top: 4px;
}

/* Desktop: always show process steps (override v-show) */
.process-steps-wrap {
  display: block;
}

/* Accordion expand transition */
.process-expand-enter-active,
.process-expand-leave-active {
  transition: opacity 0.25s ease, max-height 0.3s ease;
  max-height: 300px;
  overflow: hidden;
}
.process-expand-enter-from,
.process-expand-leave-to {
  opacity: 0;
  max-height: 0;
}

@media (max-width: 1024px) {
  .service-detail-card {
    grid-template-columns: 1fr;
    gap: 0;
    padding: 0;
    overflow: hidden;
  }
  /* Visual banner — must stay position:relative so absolute children are contained */
  .sdc-visual {
    position: relative;
    height: 130px;
    min-height: unset;
    border-radius: 0;
    width: 100%;
  }
  .sdc-visual-content {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 14px;
    padding: 16px 20px;
  }
  .sdc-icon-wrap {
    width: 52px;
    height: 52px;
    border-radius: 12px;
    flex-shrink: 0;
  }
  .sdc-number { font-size: 2.2rem; }
  .sdc-content { padding: 20px; }
}

@media (max-width: 768px) {
  .services-detail-grid { gap: 20px; }
  .sdc-visual { height: 120px; }
  .sdc-visual-content { padding: 14px 16px; gap: 12px; }
  .sdc-icon-wrap { width: 48px; height: 48px; border-radius: 11px; }
  .sdc-number { font-size: 2rem; }
  .sdc-content { padding: 16px; }
  .sdc-title { font-size: 1.1rem; margin-bottom: 8px; }
  .sdc-desc { font-size: 0.85rem; margin-bottom: 14px; }
  .sdc-features { grid-template-columns: 1fr; gap: 10px; margin-bottom: 14px; }
  .sdc-feat-name { font-size: 0.84rem; }
  .sdc-feat-desc { font-size: 0.78rem; }

  /* Accordion: enable interactive header */
  .sdc-process {
    margin-bottom: 0;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    margin-left: -16px;
    margin-right: -16px;
    padding: 0 16px;
  }
  .sdc-process-header {
    cursor: pointer;
    pointer-events: auto;
    padding: 12px 0;
    margin-bottom: 0;
  }
  .sdc-process h4 {
    margin-bottom: 0;
    font-size: 0.8rem;
  }
  .sdc-process-chevron {
    display: flex;
  }
  .process-steps-wrap {
    padding-bottom: 12px;
  }
  .process-steps {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    padding-top: 4px;
  }
  .process-step:not(:last-child)::after { display: none; }

  /* CTA button: full width, centered on mobile */
  .sdc-cta-row {
    justify-content: stretch;
    margin-top: 16px;
  }
  .sdc-cta-btn {
    width: 100%;
    justify-content: center;
    padding: 11px 20px;
    font-size: 0.88rem;
    border-radius: 12px;
  }
}

@media (max-width: 480px) {
  .sdc-visual { height: 100px; }
  .sdc-visual-content { padding: 12px 14px; gap: 10px; }
  .sdc-icon-wrap { width: 40px; height: 40px; border-radius: 9px; }
  .sdc-icon-wrap :deep(svg) { width: 20px; height: 20px; }
  .sdc-number { font-size: 1.7rem; }
  .sdc-content { padding: 14px 12px; }
  .sdc-title { font-size: 1rem; }
}
</style>

