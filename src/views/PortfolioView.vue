<template>
  <div class="portfolio-page" style="padding-top: 90px;">
    <!-- Hero -->
    <section class="page-hero">
      <div class="container page-hero-inner">
        <h1 class="page-hero-title">
          Portfolio & <span class="text-gradient">Studi Kasus</span>
        </h1>
        <p class="page-hero-desc">
          Setiap proyek adalah cerita sukses kolaborasi. Temukan bagaimana kami membantu klien dari berbagai industri mencapai tujuan digitalnya.
        </p>
        <!-- Filter Tabs -->
        <div class="portfolio-filters" role="tablist" aria-label="Filter Portfolio">
          <button
            v-for="filter in filters"
            :key="filter.id"
            class="filter-btn"
            :class="{ active: activeFilter === filter.id }"
            @click="activeFilter = filter.id"
            :id="`filter-${filter.id}`"
            role="tab"
            :aria-selected="activeFilter === filter.id"
          >
            {{ filter.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- Portfolio Grid -->
    <section class="section">
      <div class="container">
        <Transition name="fade" mode="out-in">
          <div :key="activeFilter" class="portfolio-grid">
            <article
              v-for="project in filteredProjects"
              :key="project.title"
              class="portfolio-card"
              :class="{ featured: project.featured }"
            >
              <div class="pc-visual">
                <img :src="project.image" :alt="project.title" class="pc-project-img" />
                <div class="pc-overlay-icon">
                  <component :is="project.icon" :size="22" />
                </div>
              </div>
              <div class="pc-body">
                <div class="pc-meta">
                  <span class="pc-industry">{{ project.industry }}</span>
                  <span class="pc-year">{{ project.year }}</span>
                </div>
                <h3 class="pc-title">{{ project.title }}</h3>
                <p class="pc-desc">{{ project.description }}</p>
                <div class="pc-metrics">
                  <div v-for="m in project.metrics" :key="m.label" class="pc-metric">
                    <span class="pcm-val">{{ m.value }}</span>
                    <span class="pcm-lbl">{{ m.label }}</span>
                  </div>
                </div>
                <div class="pc-tech">
                  <span v-for="tech in project.tech" :key="tech" class="pc-tech-tag">{{ tech }}</span>
                </div>
                <!-- <a href="#" class="pc-link">
                  Lihat Detail Proyek
                  <ArrowRightIcon :size="14" />
                </a> -->
              </div>
            </article>
          </div>
        </Transition>

        <div style="text-align: center; margin-top: 48px;">
          <RouterLink to="/kontak" class="btn btn-primary btn-lg">
            Diskusikan Proyek Anda
            <ArrowRightIcon :size="18" />
          </RouterLink>
        </div>
      </div>
    </section>

    <PartnerSection />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ChevronRightIcon, ArrowRightIcon, TrendingUpIcon, TruckIcon, ShoppingCartIcon, BuildingIcon, HeartIcon, GraduationCapIcon } from 'lucide-vue-next'
import PartnerSection from '@/components/sections/PartnerSection.vue'

const activeFilter = ref('all')

const filters = [
  { id: 'all', label: 'Semua' },
  { id: 'fintech', label: 'Fintech' },
  { id: 'logistics', label: 'Logistik' },
  { id: 'ecommerce', label: 'E-Commerce' },
  { id: 'banking', label: 'Perbankan' },
  { id: 'healthcare', label: 'Kesehatan' },
]

const projects = [
  {
    category: 'fintech',
    featured: true,
    icon: TrendingUpIcon,
    gradient: '#0050D1',
    image: '/portfolio/investra.png',
    industry: 'Fintech & Investasi',
    year: '2024',
    title: 'Platform Manajemen Investasi — Investra',
    description: 'Platform SaaS investasi end-to-end dengan real-time portfolio tracking, AI-driven analytics, dan automated reporting untuk 50.000+ investor aktif.',
    metrics: [{ value: '50K+', label: 'Users' }, { value: '3x', label: 'ROI' }, { value: '60%', label: 'Cost Down' }],
    tech: ['Vue.js', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    category: 'logistics',
    featured: false,
    icon: TruckIcon,
    gradient: '#0050D1',
    image: '/portfolio/logistiqo.png',
    industry: 'Logistik',
    year: '2023',
    title: 'Sistem Logistik Real-Time — LogistiQo',
    description: 'Platform tracking dan manajemen pengiriman nasional dengan optimasi rute AI dan integrasi multi-ekspedisi.',
    metrics: [{ value: '40%', label: 'Efisiensi' }, { value: '2.5M+', label: 'Delivery/Bln' }],
    tech: ['React', 'Python', 'MongoDB', 'GCP'],
  },
  {
    category: 'ecommerce',
    featured: false,
    icon: ShoppingCartIcon,
    gradient: '#0050D1',
    image: '/portfolio/retailmax.png',
    industry: 'E-Commerce',
    year: '2023',
    title: 'Transformasi Omnichannel — RetailMax',
    description: 'Unifikasi channel penjualan online-offline dengan manajemen inventori terpusat dan customer 360° view.',
    metrics: [{ value: '85%', label: 'Sales Growth' }, { value: '1000+', label: 'SKU' }],
    tech: ['Angular', 'Java', 'MySQL', 'Azure'],
  },
  {
    category: 'banking',
    featured: false,
    icon: BuildingIcon,
    gradient: '#0050D1',
    image: '/portfolio/banknusa.png',
    industry: 'Perbankan',
    year: '2022',
    title: 'Modernisasi Core Banking — BankNusa',
    description: 'Migrasi sistem core banking legacy ke arsitektur microservices modern dengan zero-downtime deployment.',
    metrics: [{ value: '99.99%', label: 'Uptime' }, { value: '10x', label: 'Capacity' }],
    tech: ['.NET', 'Kubernetes', 'Oracle', 'AWS'],
  },
  {
    category: 'healthcare',
    featured: false,
    icon: HeartIcon,
    gradient: '#0050D1',
    image: '/portfolio/mediconnect.png',
    industry: 'Healthcare',
    year: '2024',
    title: 'Sistem Manajemen Rumah Sakit — MediConnect',
    description: 'Platform terintegrasi untuk manajemen pasien, rekam medis elektronik, dan jadwal dokter berbasis cloud.',
    metrics: [{ value: '35%', label: 'Admin Efficiency' }, { value: '200+', label: 'Dokter' }],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
  },
  {
    category: 'fintech',
    featured: false,
    icon: GraduationCapIcon,
    gradient: '#0050D1',
    image: '/portfolio/eduprime.png',
    industry: 'EdTech',
    year: '2023',
    title: 'Platform E-Learning — EduPrime',
    description: 'LMS enterprise dengan fitur live streaming, gamification, dan AI-powered learning path personalization.',
    metrics: [{ value: '100K+', label: 'Students' }, { value: '4.8★', label: 'Rating' }],
    tech: ['Vue.js', 'Python', 'Redis', 'AWS'],
  },
]

const filteredProjects = computed(() =>
  activeFilter.value === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter.value)
)
</script>

<style scoped>
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
  margin-bottom: 24px;
}

/* ── Filters ── */
.portfolio-filters {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 8px 18px;
  border-radius: var(--radius-full);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-muted);
  background: var(--white);
  border: 1px solid transparent;
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: all var(--transition-base);
}

.filter-btn:hover {
  color: var(--primary);
  border-color: var(--primary);
  background: var(--primary-light);
  box-shadow: var(--shadow-md);
}

.filter-btn.active {
  background: var(--gradient-primary);
  color: var(--white);
  border-color: transparent;
  box-shadow: 0 4px 16px rgba(0, 86, 179, 0.28);
}

/* ── Portfolio Grid ── */
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.portfolio-card.featured {
  grid-column: span 2;
}

.portfolio-card {
  background: var(--white);
  border: 1px solid transparent;
  box-shadow: var(--shadow-sm);
  border-radius: var(--radius-xl);
  overflow: hidden;
  transition: all var(--transition-base);
}

.portfolio-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
}

.pc-visual { position: relative; height: 180px; overflow: hidden; }
.portfolio-card.featured .pc-visual { height: 220px; }

.pc-project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform var(--transition-base);
}

.portfolio-card:hover .pc-project-img {
  transform: scale(1.05);
}

.pc-overlay-icon {
  position: absolute; bottom: 14px; right: 14px;
  width: 42px; height: 42px; border-radius: 10px;
  background: rgba(255,255,255,0.92);
  display: flex; align-items: center; justify-content: center;
  color: var(--primary);
  box-shadow: var(--shadow-md);
}

.pc-body { padding: 24px; }

.pc-meta { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; }
.pc-industry { font-size: 0.72rem; font-weight: 700; color: var(--primary); text-transform: uppercase; letter-spacing: 0.06em; }
.pc-year { font-size: 0.72rem; color: var(--text-muted); }

.pc-title { font-size: 1.05rem; font-weight: 700; color: var(--text-dark); line-height: 1.4; margin-bottom: 8px; }
.pc-desc { font-size: 0.85rem; color: var(--text-muted); line-height: 1.65; margin-bottom: 16px; }

.pc-metrics { display: flex; gap: 20px; padding: 12px 0; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); margin-bottom: 16px; }
.pc-metric { display: flex; flex-direction: column; gap: 2px; }
.pcm-val { font-family: var(--font-heading); font-size: 1.1rem; font-weight: 800; color: var(--primary); }
.pcm-lbl { font-size: 0.72rem; color: var(--text-muted); }

.pc-tech { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 16px; }
.pc-tech-tag {
  padding: 3px 10px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-full);
  font-size: 0.72rem; font-weight: 500; color: var(--text-body);
}

.pc-link {
  display: flex; align-items: center; gap: 6px;
  color: var(--primary); font-size: 0.85rem; font-weight: 600;
  transition: gap var(--transition-fast);
}
.pc-link:hover { gap: 10px; }

.fade-enter-active, .fade-leave-active { transition: all 0.25s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(10px); }

@media (max-width: 1024px) {
  .portfolio-grid { grid-template-columns: repeat(2, 1fr); }
  .portfolio-card.featured { grid-column: span 2; }
}

@media (max-width: 768px) {
  .portfolio-filters {
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
  .portfolio-filters::-webkit-scrollbar {
    display: none;
  }
  .filter-btn {
    padding: 7px 14px;
    font-size: 0.8rem;
    flex-shrink: 0;
  }
}

@media (max-width: 640px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .portfolio-card.featured {
    grid-column: span 1;
  }
  .pc-body {
    padding: 16px;
  }
  .pc-metrics {
    gap: 12px;
    padding: 10px 0;
  }
  .pcm-val {
    font-size: 0.95rem;
  }
}
</style>
