<template>
  <section class="services section section-alt" id="layanan" aria-labelledby="services-title">
    <div class="container">
      <div class="section-header">
        <div class="section-tag">
          <LayoutGridIcon :size="14" />
          {{ t('services.tag') }}
        </div>
        <h2 class="section-title" id="services-title">
          <span>{{ t('services.title1') }}</span> {{ t('services.title2') }} {{ t('services.title3') }}<br>{{ t('services.title4') }}
        </h2>
        <p class="section-subtitle">
          {{ t('services.subtitle') }}
        </p>
        <div class="divider"></div>
      </div>

      <div class="services-grid">
        <article
          v-for="(service, idx) in services"
          :key="service.title"
          class="service-card"
          :class="{ featured: service.featured }"
          :id="`service-card-${idx}`"
        >
          <div class="service-card-inner">
            <!-- Icon -->
            <div class="service-icon-wrap" :style="{ background: service.iconBg }">
              <component :is="service.icon" :size="28" :color="service.iconColor" />
              <div class="service-icon-ring" :style="{ borderColor: service.iconColor + '30' }"></div>
            </div>

            <!-- Badge -->
            <div v-if="service.featured" class="service-featured-badge">
              <StarIcon :size="12" />
              {{ t('services.mostPopular') }}
            </div>

            <!-- Content -->
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-description">{{ service.description }}</p>

            <!-- Features -->
            <ul class="service-features">
              <li v-for="feature in service.features" :key="feature" class="service-feature">
                <CheckIcon :size="14" />
                {{ feature }}
              </li>
            </ul>

            <!-- Link -->
            <RouterLink to="/layanan" class="service-link" :id="`service-explore-${idx}`">
              {{ t('services.exploreMore') }}
              <ArrowRightIcon :size="16" />
            </RouterLink>
          </div>
        </article>
      </div>

      <!-- Bottom CTA -->
      <div class="services-cta">
        <p>{{ t('services.ctaText') }}</p>
        <RouterLink to="/kontak" class="btn btn-primary" id="services-custom-cta">
          {{ t('services.ctaBtn') }}
          <ArrowRightIcon :size="16" />
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  LayoutGridIcon, StarIcon, CheckIcon, ArrowRightIcon,
  CpuIcon, CodeIcon, GitMergeIcon, CloudIcon
} from 'lucide-vue-next'
import { computed } from 'vue'
import { useI18n } from '@/composables/useI18n'

const { t, locale } = useI18n()

const iconMap = [CpuIcon, CodeIcon, GitMergeIcon, CloudIcon]
const iconBg = 'rgba(0, 80, 209, 0.08)'
const iconColor = '#0050D1'
const featuredIndex = 1

const services = computed(() =>
  t('services.items').map((item, i) => ({
    icon: iconMap[i],
    iconBg,
    iconColor,
    featured: i === featuredIndex,
    title: item.title,
    description: item.description,
    features: item.features,
  }))
)
</script>

<style scoped>
.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 48px;
}

/* ── Service Card ── */
.service-card {
  position: relative;
  border-radius: var(--radius-lg);
  background: var(--white);
  border: 1px solid transparent;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-base);
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gradient-primary);
  transform: scaleX(0);
  transition: transform var(--transition-base);
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: var(--accent-light);
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-card.featured {
  border-color: var(--primary);
  box-shadow: var(--shadow-md);
}

.service-card.featured::before {
  transform: scaleX(1);
  background: var(--gradient-primary);
}

.service-card-inner {
  padding: 32px 28px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* ── Icon ── */
.service-icon-wrap {
  width: 60px;
  height: 60px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-shrink: 0;
}

.service-icon-ring {
  position: absolute;
  inset: -4px;
  border-radius: calc(var(--radius-md) + 4px);
  border: 2px solid;
  opacity: 0;
  transition: opacity var(--transition-base);
}

.service-card:hover .service-icon-ring {
  opacity: 1;
}

/* ── Featured Badge ── */
.service-featured-badge {
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  align-items: center;
  gap: 4px;
  background: var(--primary-light);
  color: var(--primary);
  padding: 4px 10px;
  border-radius: var(--radius-full);
  font-size: 0.72rem;
  font-weight: 700;
}

/* ── Content ── */
.service-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-dark);
  line-height: 1.3;
}

.service-description {
  font-size: 0.875rem;
  color: var(--text-muted);
  line-height: 1.7;
  flex: 1;
}

/* ── Features ── */
.service-features {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.service-feature {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8rem;
  color: var(--text-body);
}

.service-feature svg {
  color: var(--primary);
  flex-shrink: 0;
}

/* ── Link ── */
.service-link {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--primary);
  font-size: 0.875rem;
  font-weight: 600;
  transition: all var(--transition-fast);
  margin-top: auto;
}

.service-link:hover {
  gap: 10px;
  color: var(--accent);
}

/* ── Bottom CTA ── */
.services-cta {
  text-align: center;
  padding: 40px;
  background: var(--primary-light);
  border-radius: var(--radius-xl);
  border: 1px solid rgba(0, 86, 179, 0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.services-cta p {
  color: var(--text-body);
  font-size: 1rem;
  text-align: left;
  max-width: 500px;
}

/* ── Responsive ── */
@media (max-width: 1100px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .services-cta {
    flex-direction: column;
    text-align: center;
  }
  .services-cta p { text-align: center; }
}

@media (max-width: 600px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
