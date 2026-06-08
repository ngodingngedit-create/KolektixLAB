<template>
  <section class="techstack section section-alt" id="teknologi" aria-labelledby="tech-title">
    <div class="container">
      <div class="section-header">
        <div class="section-tag">
          <CpuIcon :size="14" />
          Tech Stack
        </div>
        <h2 class="section-title" id="tech-title">
          Keahlian Teknologi<br><span>Kami</span>
        </h2>
        <p class="section-subtitle">
          Kami bekerja dengan ekosistem teknologi terdepan untuk membangun solusi yang tidak hanya kuat hari ini, tetapi juga siap menghadapi tantangan masa depan.
        </p>
        <div class="divider"></div>
      </div>

      <!-- Category Tabs -->
      <div class="tech-tabs" role="tablist" aria-label="Technology Categories">
        <button
          v-for="cat in categories"
          :key="cat.id"
          class="tech-tab"
          :class="{ active: activeCategory === cat.id }"
          @click="activeCategory = cat.id"
          :id="`tech-tab-${cat.id}`"
          role="tab"
          :aria-selected="activeCategory === cat.id"
        >
          <component :is="cat.icon" :size="16" />
          {{ cat.label }}
        </button>
      </div>

      <!-- Tech Grid -->
      <Transition name="fade" mode="out-in">
        <div :key="activeCategory" class="tech-grid">
          <div
            v-for="tech in filteredTechs"
            :key="tech.name"
            class="tech-card"
            :title="tech.name"
          >
            <!-- Badge -->
            <div v-if="tech.badge" class="service-featured-badge">
              <StarIcon :size="10" />
              <span>{{ t('services.mostPopular') }}</span>
            </div>

            <div class="tech-card-inner">
              <div class="tech-logo">
                <img :src="tech.logo" :alt="tech.name" class="tech-logo-img" />
              </div>
              <div class="tech-info">
                <span class="tech-name">{{ tech.name }}</span>
                <span class="tech-role">{{ tech.role }}</span>
              </div>
            </div>
          </div>
        </div>
      </Transition>

      <!-- Certifications -->
      <div class="certifications">
        <div class="cert-header">
          <ShieldCheckIcon :size="20" />
          <h3>Sertifikasi & Kemitraan Resmi</h3>
        </div>
        <div class="cert-grid">
          <div v-for="cert in certifications" :key="cert.name" class="cert-item">
            <div class="cert-icon" :style="{ color: cert.color }">
              <AwardIcon :size="28" />
            </div>
            <span class="cert-name">{{ cert.name }}</span>
            <span class="cert-year">{{ cert.year }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { CpuIcon, CodeIcon, CloudIcon, DatabaseIcon, ShieldCheckIcon, AwardIcon, MonitorIcon, StarIcon } from 'lucide-vue-next'
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()
const activeCategory = ref('frontend')

const categories = [
  { id: 'frontend', label: 'Frontend', icon: MonitorIcon },
  { id: 'backend', label: 'Backend', icon: CodeIcon },
  { id: 'cloud', label: 'Cloud & DevOps', icon: CloudIcon },
  { id: 'database', label: 'Database', icon: DatabaseIcon },
  { id: 'enterprise', label: 'Enterprise', icon: CpuIcon },
]

const techs = [
  // Frontend
  { category: 'frontend', name: 'Vue.js', logo: '/keahlian/frontend/FE (3).jpg', role: 'Progressive Framework', badge: 'popular' },
  { category: 'frontend', name: 'React.js', logo: '/keahlian/frontend/FE (5).jpg', role: 'UI Library' },
  { category: 'frontend', name: 'Angular', logo: '/keahlian/frontend/FE (4).jpg', role: 'Enterprise Framework' },
  { category: 'frontend', name: 'Next.js', logo: '/keahlian/frontend/FE (2).jpg', role: 'React Framework' },
  { category: 'frontend', name: 'Flutter', logo: '/keahlian/frontend/FE (1).jpg', role: 'Cross-platform Mobile' },
  // Backend
  { category: 'backend', name: 'Python', logo: '/keahlian/backend/BE (4).jpg', role: 'AI/ML & APIs' },
  { category: 'backend', name: 'Node.js', logo: '/keahlian/backend/BE (6).jpg', role: 'Server Runtime' },
  { category: 'backend', name: 'Java', logo: '/keahlian/backend/BE (5).jpg', role: 'Enterprise Backend' },
  { category: 'backend', name: 'PHP', logo: '/keahlian/backend/BE (3).jpg', role: 'Web Backend' },
  { category: 'backend', name: '.NET', logo: '/keahlian/backend/BE (2).jpg', role: 'Microsoft Platform' },
  { category: 'backend', name: 'Go', logo: '/keahlian/backend/BE (1).jpg', role: 'High Performance', badge: 'fast' },
  // Cloud
  { category: 'cloud', name: 'AWS', logo: '/keahlian/cloud/cloud (4).jpg', role: 'Cloud Platform', badge: 'recommended' },
  { category: 'cloud', name: 'Google Cloud', logo: '/keahlian/cloud/cloud (1).jpg', role: 'Cloud Platform' },
  { category: 'cloud', name: 'Azure', logo: '/keahlian/cloud/cloud (3).jpg', role: 'Microsoft Cloud' },
  { category: 'cloud', name: 'Docker', logo: '/keahlian/cloud/cloud (2).jpg', role: 'Containerization' },
  { category: 'cloud', name: 'Kubernetes', logo: '/keahlian/cloud/cloud (5).jpg', role: 'Orchestration' },
  // Database
  { category: 'database', name: 'PostgreSQL', logo: '/keahlian/database/DB (2).jpg', role: 'Relational DB', badge: 'recommended' },
  { category: 'database', name: 'MySQL', logo: '/keahlian/database/DB (1).jpg', role: 'Relational DB' },
  // Enterprise
  { category: 'enterprise', name: 'Website Development', logo: '/keahlian/enterprise/web_dev_logo.png', role: 'Web Applications' },
  { category: 'enterprise', name: 'Android', logo: '/keahlian/enterprise/enterprise (1).jpg', role: 'Google Platform' },
  { category: 'enterprise', name: 'iOS', logo: '/keahlian/enterprise/enterprise (3).jpg', role: 'Apple Platform' },
  { category: 'enterprise', name: 'SAP', logo: '/keahlian/enterprise/enterprise (2).jpg', role: 'ERP Platform', badge: 'erp' },
]

const certifications = [
  { name: 'AWS Certified Solutions Architect', color: '#FF9900', year: '2024' },
  { name: 'Google Cloud Professional', color: '#4285F4', year: '2024' },
  { name: 'Microsoft Azure Architect', color: '#0078D4', year: '2023' },
  { name: 'SAP Certified Partner', color: '#1B7AC2', year: '2023' },
  { name: 'ISO 27001 Certified', color: '#10b981', year: '2023' },
]

const filteredTechs = computed(() =>
  techs.filter(t => t.category === activeCategory.value)
)
</script>

<style scoped>
.techstack { background: var(--bg); }

/* ── Tabs ── */
.tech-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  justify-content: center;
}

.tech-tab {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: var(--radius-full);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-muted);
  background: var(--white);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-base);
  cursor: pointer;
  border: 1px solid transparent;
}

.tech-tab:hover {
  color: var(--primary);
  border-color: var(--primary);
  background: var(--primary-light);
  box-shadow: var(--shadow-md);
}

.tech-tab.active {
  background: var(--gradient-primary);
  color: var(--white);
  border-color: transparent;
  box-shadow: 0 4px 16px rgba(0,86,179,0.3);
}

/* ── Tech Grid ── */
.tech-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
  margin-bottom: 48px;
}

.tech-card {
  position: relative;
  border-radius: var(--radius-md);
  background: var(--white);
  box-shadow: var(--shadow-sm);
  border: 1px solid transparent;
  transition: all var(--transition-base);
}

.service-featured-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  gap: 3px;
  background: var(--primary-light);
  color: var(--primary);
  padding: 3px 8px;
  border-radius: var(--radius-full);
  font-size: 0.65rem;
  font-weight: 700;
  box-shadow: 0 2px 6px rgba(25, 78, 158, 0.08);
  pointer-events: none;
  z-index: 10;
  transition: all var(--transition-base);
}

.service-featured-badge svg {
  flex-shrink: 0;
}

.tech-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--accent-light);
}

.tech-card-inner {
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
}

.tech-logo {
  width: 90px;
  height: 90px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform var(--transition-base);
  background: var(--white);
}

.tech-card:hover .tech-logo {
  transform: scale(1.1);
}

.tech-logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 4px;
}

.tech-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.tech-name {
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--text-dark);
}

.tech-role {
  font-size: 0.75rem;
  color: var(--text-muted);
}

/* ── Fade Transition ── */
.fade-enter-active, .fade-leave-active { transition: all 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(10px); }

/* ── Certifications ── */
.certifications {
  background: var(--white);
  border-radius: var(--radius-xl);
  padding: 40px;
  border: 1px solid transparent;
  box-shadow: var(--shadow-sm);
}

.cert-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 32px;
  color: var(--text-dark);
}

.cert-header svg { color: var(--primary); }

.cert-header h3 {
  font-size: 1.15rem;
  font-weight: 700;
}

.cert-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.cert-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 20px 24px;
  border-radius: var(--radius-md);
  background: var(--white);
  border: 1px solid transparent;
  box-shadow: var(--shadow-sm);
  flex: 1;
  min-width: 160px;
  text-align: center;
  transition: all var(--transition-base);
}

.cert-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.cert-name {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-dark);
  line-height: 1.4;
}

.cert-year {
  font-size: 0.72rem;
  color: var(--text-muted);
  background: var(--bg-alt);
  padding: 2px 8px;
  border-radius: var(--radius-full);
}

/* ── Responsive ── */
@media (max-width: 1100px) {
  .tech-grid { grid-template-columns: repeat(4, 1fr); }
}

@media (max-width: 768px) {
  .tech-grid { grid-template-columns: repeat(3, 1fr); }
  .service-featured-badge {
    top: 6px;
    right: 6px;
    padding: 2px 6px;
    font-size: 0.58rem;
    gap: 2px;
  }
  .service-featured-badge :deep(svg),
  .service-featured-badge svg {
    width: 8px !important;
    height: 8px !important;
  }
  .tech-tabs {
    gap: 6px;
    flex-wrap: nowrap;
    justify-content: flex-start;
    overflow-x: auto;
    padding: 4px 16px 12px;
    margin-left: -16px;
    margin-right: -16px;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }
  .tech-tabs::-webkit-scrollbar {
    display: none;
  }
  .tech-tab {
    padding: 8px 14px;
    font-size: 0.8rem;
    flex-shrink: 0;
  }
}

@media (max-width: 576px) {
  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  .service-featured-badge {
    top: 5px;
    right: 5px;
    padding: 1px 4.5px;
    font-size: 0.52rem;
    gap: 1px;
    box-shadow: 0 1px 3px rgba(25, 78, 158, 0.05);
  }
  .service-featured-badge :deep(svg),
  .service-featured-badge svg {
    width: 7px !important;
    height: 7px !important;
  }
  .tech-card-inner {
    padding: 16px 12px;
    gap: 8px;
  }
  .tech-logo {
    width: 80px;
    height: 80px;
    border-radius: 12px;
  }
  .tech-name {
    font-size: 0.85rem;
  }
  .tech-role {
    font-size: 0.7rem;
  }
}

@media (max-width: 360px) {
  .tech-grid {
    grid-template-columns: 1fr;
  }
}
</style>
