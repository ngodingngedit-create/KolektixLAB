<template>
  <section class="statistics section" id="statistik" aria-labelledby="stats-title">
    <div class="stats-bg-pattern"></div>
    <div class="container">
      <div class="section-header">
        <div class="section-tag">
          <TrophyIcon :size="14" />
          {{ t('statistics.tag') }}
        </div>
        <h2 class="section-title" id="stats-title">
          {{ t('statistics.title1') }}<br>
          <span style="color: var(--primary);">{{ t('statistics.title2') }}</span>
        </h2>
        <div class="divider"></div>
      </div>

      <div class="stats-grid">
        <div
          v-for="stat in statistics"
          :key="stat.label"
          class="stat-card"
          :ref="el => statRefs[stat.label] = el"
        >
          <div class="stat-card-bg"></div>
          <div class="stat-icon-wrap">
            <component :is="stat.icon" :size="24" />
          </div>
          <div class="stat-number">
            <span class="stat-count" :id="`stat-${stat.label.replace(/\s+/g,'-')}`">
              {{ stat.prefix }}{{ animatedValues[stat.label] || 0 }}{{ stat.suffix }}
            </span>
          </div>
          <div class="stat-label-wrap">
            <span class="stat-main-label">{{ localizedStats[statistics.indexOf(stat)].label }}</span>
            <span class="stat-sub-label">{{ localizedStats[statistics.indexOf(stat)].sublabel }}</span>
          </div>
          <div class="stat-trend">
            <TrendingUpIcon :size="14" />
            <span>{{ localizedStats[statistics.indexOf(stat)].trend }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, reactive, computed } from 'vue'
import { TrophyIcon, RocketIcon, UsersIcon, CpuIcon, ActivityIcon, TrendingUpIcon } from 'lucide-vue-next'
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()

const statRefs = reactive({})
const animatedValues = reactive({})
const observed = reactive({})

const statistics = [
  { icon: RocketIcon, prefix: '', suffix: '+', value: 200, label: 'Proyek Disampaikan', sublabel: 'Across all industries', trend: '+24% YoY' },
  { icon: UsersIcon, prefix: '', suffix: '+', value: 150, label: 'Klien Puas', sublabel: 'Active enterprise clients', trend: '+18% YoY' },
  { icon: CpuIcon, prefix: '', suffix: '+', value: 80, label: 'Pakar Teknologi', sublabel: 'Certified professionals', trend: '+30% team growth' },
  { icon: ActivityIcon, prefix: '', suffix: '%', value: 99.9, label: 'Uptime Sistem', sublabel: 'Guaranteed SLA', trend: 'Enterprise grade' },
]

// Localized labels that react to language changes
const localizedStats = computed(() => t('statistics.items'))

// Initialize
statistics.forEach(s => { animatedValues[s.label] = 0 })

function animateCount(stat) {
  if (observed[stat.label]) return
  observed[stat.label] = true

  const duration = 2000
  const steps = 60
  const increment = stat.value / steps
  let current = 0
  let step = 0

  const timer = setInterval(() => {
    step++
    current = Math.min(stat.value, Math.round(current + increment * 10) / 10)
    animatedValues[stat.label] = stat.value % 1 !== 0
      ? parseFloat(current.toFixed(1))
      : Math.floor(current)

    if (step >= steps) {
      animatedValues[stat.label] = stat.value
      clearInterval(timer)
    }
  }, duration / steps)
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const label = entry.target.dataset.label
        const stat = statistics.find(s => s.label === label)
        if (stat) animateCount(stat)
      }
    })
  }, { threshold: 0.3 })

  setTimeout(() => {
    statistics.forEach(stat => {
      const el = statRefs[stat.label]
      if (el) {
        el.dataset.label = stat.label
        observer.observe(el)
      }
    })
  }, 100)
})
</script>

<style scoped>
.statistics {
  position: relative;
  background: var(--gradient-hero);
  overflow: hidden;
}

.stats-bg-pattern {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 20% 50%, rgba(56,189,248,0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 50%, rgba(96,165,250,0.08) 0%, transparent 50%),
    linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px);
  background-size: auto, auto, 40px 40px, 40px 40px;
  pointer-events: none;
}

.section-header {
  position: relative;
  z-index: 1;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  position: relative;
  z-index: 1;
}

/* ── Stat Card ── */
.stat-card {
  position: relative;
  background: var(--white);
  border: 1px solid transparent;
  box-shadow: var(--shadow-sm);
  border-radius: var(--radius-xl);
  padding: 36px 28px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all var(--transition-base);
  overflow: hidden;
}

.stat-card::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--primary);
  transform: scaleX(0);
  transition: transform var(--transition-base);
}

.stat-card:hover {
  transform: translateY(-6px);
  border-color: var(--primary-dark);
  box-shadow: var(--shadow-lg);
}

.stat-card:hover::before {
  transform: scaleX(1);
}

.stat-card-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top right, rgba(56,189,248,0.05) 0%, transparent 70%);
  pointer-events: none;
}

/* ── Icon ── */
.stat-icon-wrap {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  background: var(--primary-light);
  border: 1px solid var(--accent-light);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
}

/* ── Number ── */
.stat-number {
  line-height: 1;
}

.stat-count {
  font-family: var(--font-heading);
  font-size: 3rem;
  font-weight: 900;
  color: var(--primary);
  letter-spacing: -0.03em;
}

/* ── Labels ── */
.stat-main-label {
  display: block;
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-dark);
}

.stat-sub-label {
  display: block;
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-top: 4px;
}

/* ── Trend ── */
.stat-trend {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.75rem;
  color: #10b981;
  font-weight: 600;
  margin-top: auto;
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .stat-count { font-size: 2.5rem; }
}
</style>
