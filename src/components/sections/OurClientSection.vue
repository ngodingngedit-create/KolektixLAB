<template>
  <section class="our-clients section" id="klien-kami" aria-labelledby="clients-title">
    <div class="container">
      <!-- Header -->
      <div class="section-header">
        <div class="section-tag">
          <UsersIcon :size="14" />
          Klien Kami
        </div>
        <h2 class="section-title" id="clients-title">
          Dipercaya oleh <span>Pemimpin Industri</span>
        </h2>
        <p class="section-subtitle">
          Kami bangga bermitra dengan perusahaan-perusahaan terkemuka dari berbagai sektor industri di Indonesia dan kawasan Asia Tenggara.
        </p>
        <div class="divider"></div>
      </div>

      <!-- Industry Tabs -->
      <div class="industry-tabs" role="tablist" aria-label="Filter Industri">
        <button
          v-for="tab in industryTabs"
          :key="tab.id"
          class="industry-tab"
          :class="{ active: activeTab === tab.id }"
          @click="activeTab = tab.id"
          :id="`client-tab-${tab.id}`"
          role="tab"
          :aria-selected="activeTab === tab.id"
        >
          <component :is="tab.icon" :size="15" />
          {{ tab.label }}
        </button>
      </div>

      <!-- Client Cards Grid -->
      <Transition name="fade" mode="out-in">
        <div :key="activeTab" class="clients-grid">
          <div
            v-for="client in filteredClients"
            :key="client.name"
            class="client-card"
            :title="client.name"
          >
            <div class="client-card-inner">
              <!-- Logo Mark -->
              <div class="client-logo-mark">
                <img
                  :src="client.logo"
                  :alt="client.name"
                  class="client-logo-img"
                  :class="{ 'large-logo': ['Gojek', 'Telkom', 'Telkom Indonesia', 'Bukalapak'].includes(client.name) }"
                />
              </div>

              <!-- Info -->
              <div class="client-info">
                <h4 class="client-name">{{ client.name }}</h4>
                <p class="client-sector">{{ client.sector }}</p>
              </div>

              <!-- Project Tag -->
              <div class="client-project">
                <div class="client-project-dot" :style="{ background: client.accentColor }"></div>
                <span>{{ client.project }}</span>
              </div>

              <!-- Hover overlay with quote -->
              <div class="client-hover-overlay">
                <p class="client-quote">"{{ client.quote }}"</p>
                <span class="client-testimonial-by">— {{ client.contact }}</span>
              </div>
            </div>
          </div>
        </div>
      </Transition>

      <!-- Scrolling Logo Strip -->
      <!-- <div class="clients-marquee-wrap">
        <p class="marquee-label">Semua klien kami</p>
        <div class="marquee-strip">
          <div class="marquee-strip-inner">
            <div class="marquee-strip-content" v-for="n in 2" :key="n">
              <div v-for="client in allClients" :key="client.name + n" class="marquee-client">
                <div class="marquee-logo" :style="{ background: client.gradient }">
                  {{ client.initials }}
                </div>
                <span>{{ client.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  UsersIcon, QuoteIcon, StarIcon, ArrowRightIcon,
  BuildingIcon, TruckIcon, ShoppingCartIcon,
  ActivityIcon, CpuIcon, GraduationCapIcon
} from 'lucide-vue-next'

const activeTab = ref('all')

const industryTabs = [
  { id: 'all', label: 'Semua', icon: UsersIcon },
  { id: 'fintech', label: 'Fintech & Perbankan', icon: BuildingIcon },
  { id: 'logistics', label: 'Logistik', icon: TruckIcon },
  { id: 'ecommerce', label: 'E-Commerce', icon: ShoppingCartIcon },
  { id: 'healthcare', label: 'Healthcare', icon: ActivityIcon },
  { id: 'tech', label: 'Teknologi', icon: CpuIcon },
  { id: 'education', label: 'Pendidikan', icon: GraduationCapIcon },
]

const allClients = [
  { name: 'Gojek', initials: 'GO', logo: '/OurClient/client.png', gradient: '#0050D1', sector: 'Super App', project: 'API Integration', accentColor: '#0050D1', quote: 'Tim Kolektix Lab memahami kompleksitas sistem kami dan memberikan solusi yang tepat sasaran.', contact: 'VP Engineering, Gojek', category: 'tech' },
  { name: 'Bank BCA', initials: 'BCA', logo: '/OurClient/client (9).png', gradient: '#0050D1', sector: 'Perbankan', project: 'Core Banking Modernization', accentColor: '#0050D1', quote: 'Kualitas engineering dan project management mereka benar-benar enterprise-grade.', contact: 'CTO, Bank BCA', category: 'fintech' },
  { name: 'Tokopedia', initials: 'TK', logo: '/OurClient/client (7).png', gradient: '#0050D1', sector: 'E-Commerce', project: 'Platform Optimization', accentColor: '#0050D1', quote: 'Skalabilitas sistem kami meningkat drastis setelah kolaborasi dengan Kolektix Lab.', contact: 'Head of Platform, Tokopedia', category: 'ecommerce' },
  { name: 'Telkom Indonesia', initials: 'TLK', logo: '/OurClient/client (6).png', gradient: '#0050D1', sector: 'Telekomunikasi', project: 'DevOps Transformation', accentColor: '#0050D1', quote: 'Pipeline CI/CD yang mereka bangun mengubah cara kami deliver produk.', contact: 'Director IT, Telkom', category: 'tech' },
  { name: 'Pertamina', initials: 'PTM', logo: '/OurClient/client (3).png', gradient: '#0050D1', sector: 'Energi', project: 'ERP Integration', accentColor: '#0050D1', quote: 'Integrasi sistem ERP kami yang kompleks berhasil diselesaikan tepat waktu dan anggaran.', contact: 'SVP Digital, Pertamina', category: 'tech' },
  { name: 'Bank Mandiri', initials: 'MND', logo: '/OurClient/client (8).png', gradient: '#0050D1', sector: 'Perbankan', project: 'Digital Banking Platform', accentColor: '#0050D1', quote: 'Platform digital banking kami kini melayani jutaan nasabah tanpa downtime.', contact: 'CTO, Bank Mandiri', category: 'fintech' },
  { name: 'Astra International', initials: 'AST', logo: '/OurClient/client (2).png', gradient: '#0050D1', sector: 'Manufaktur & Otomotif', project: 'Supply Chain System', accentColor: '#0050D1', quote: 'Visibilitas supply chain kami meningkat 100% setelah implementasi sistem baru.', contact: 'IT Director, Astra', category: 'logistics' },
  { name: 'Bank BRI', initials: 'BRI', logo: '/OurClient/client (11).png', gradient: '#0050D1', sector: 'Perbankan', project: 'Mobile Banking App', accentColor: '#0050D1', quote: 'Aplikasi mobile banking BRI kini menjadi salah satu yang terbaik di Indonesia.', contact: 'Head Digital, BRI', category: 'fintech' },
  { name: 'Grab Indonesia', initials: 'GRB', logo: '/OurClient/client (4).png', gradient: '#0050D1', sector: 'Super App', project: 'Fleet Management System', accentColor: '#0050D1', quote: 'Sistem manajemen armada yang mereka bangun meningkatkan efisiensi operasi kami 40%.', contact: 'Head of Engineering, Grab', category: 'logistics' },
  { name: 'Bukalapak', initials: 'BLK', logo: '/OurClient/client (1).png', gradient: '#0050D1', sector: 'E-Commerce', project: 'Microservices Migration', accentColor: '#0050D1', quote: 'Migrasi ke microservices berjalan lancar berkat panduan ahli dari tim Kolektix Lab.', contact: 'VP Technology, Bukalapak', category: 'ecommerce' },
  { name: 'Siloam Hospitals', initials: 'SLM', logo: '/OurClient/client (5).png', gradient: '#0050D1', sector: 'Healthcare', project: 'Hospital Management System', accentColor: '#0050D1', quote: 'Sistem manajemen rumah sakit kami kini terintegrasi penuh and efisien.', contact: 'IT Director, Siloam', category: 'healthcare' },
  { name: 'Ruangguru', initials: 'RG', logo: '/OurClient/client (12).png', gradient: '#0050D1', sector: 'EdTech', project: 'Learning Platform', accentColor: '#0050D1', quote: 'Platform pembelajaran kami kini melayani 20 juta+ pelajar dengan pengalaman yang mulus.', contact: 'CTO, Ruangguru', category: 'education' },
]

const testimonials = [
  {
    text: 'Kolektix Lab bukan sekadar vendor IT biasa. Mereka benar-benar memahami bisnis kami dan menjadi mitra strategis yang membantu kami tumbuh secara digital dengan cara yang terukur dan berkelanjutan.',
    author: 'Budi Setiawan',
    role: 'CTO',
    company: 'Bank Mandiri',
    initials: 'BS',
    gradient: '#0050D1',
  },
  {
    text: 'Tim mereka memiliki keahlian teknis yang luar biasa dan kemampuan komunikasi yang sangat baik. Proyek kami selesai 2 minggu lebih cepat dari jadwal dengan kualitas yang melebihi ekspektasi.',
    author: 'Dewi Rahayu',
    role: 'VP Engineering',
    company: 'Tokopedia',
    initials: 'DR',
    gradient: '#0050D1',
  },
  {
    text: 'Sejak menggunakan platform yang dibangun Kolektix Lab, kami berhasil mengurangi biaya operasional 35% sekaligus meningkatkan kepuasan pelanggan secara signifikan.',
    author: 'Ahmad Fauzan',
    role: 'Head of Digital',
    company: 'Pertamina',
    initials: 'AF',
    gradient: '#0050D1',
  },
]

const filteredClients = computed(() =>
  activeTab.value === 'all'
    ? allClients
    : allClients.filter(c => c.category === activeTab.value)
)
</script>

<style scoped>
.our-clients {
  background: var(--white);
}

/* ── Industry Tabs ── */
.industry-tabs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 40px;
}

.industry-tab {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 9px 18px;
  border-radius: var(--radius-full);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-muted);
  background: var(--white);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: all var(--transition-base);
  border: 1px solid transparent;
}

.industry-tab:hover {
  color: var(--primary);
  border-color: var(--primary);
  background: var(--primary-light);
  box-shadow: var(--shadow-md);
}

.industry-tab.active {
  background: var(--gradient-primary);
  color: var(--white);
  border-color: transparent;
  box-shadow: 0 4px 16px rgba(0, 86, 179, 0.28);
}

/* ── Client Cards Grid ── */
.clients-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 60px;
}

.client-card {
  position: relative;
}

.client-card-inner {
  position: relative;
  background: var(--white);
  box-shadow: var(--shadow-sm);
  border: 1px solid transparent;
  border-radius: var(--radius-lg);
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all var(--transition-base);
  overflow: hidden;
  cursor: default;
  height: 100%;
}

.client-card-inner::before {
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

.client-card-inner:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
  border-color: var(--accent-light);
}

.client-card-inner:hover::before {
  transform: scaleX(1);
}

/* ── Logo Mark ── */
.client-logo-mark {
  width: 150px;
  height: 150px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: transparent;
  border: none;
  padding: 4px;
}

.client-logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.client-logo-img.large-logo {
  transform: scale(1.35);
}

/* ── Client Info ── */
.client-info { flex: 1; }

.client-name {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 3px;
}

.client-sector {
  font-size: 0.78rem;
  color: var(--text-muted);
}

/* ── Project Tag ── */
.client-project {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 6px 12px;
  background: var(--bg);
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--text-body);
  border: 1px solid var(--border);
}

.client-project-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

/* ── Hover Overlay ── */
.client-hover-overlay {
  position: absolute;
  inset: 0;
  background: rgba(25, 78, 158, 0.96);
  border-radius: var(--radius-lg);
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  opacity: 0;
  transform: translateY(8px);
  transition: all var(--transition-base);
}

.client-card-inner:hover .client-hover-overlay {
  opacity: 1;
  transform: translateY(0);
}

.client-quote {
  color: rgba(255,255,255,0.9);
  font-size: 0.875rem;
  font-style: italic;
  line-height: 1.65;
}

.client-testimonial-by {
  color: rgba(255,255,255,0.5);
  font-size: 0.75rem;
  font-weight: 500;
}

/* ── Marquee Strip ── */
.clients-marquee-wrap {
  margin-bottom: 64px;
}

.marquee-label {
  text-align: center;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-muted);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.marquee-strip {
  position: relative;
  overflow: hidden;
}

.marquee-strip::before,
.marquee-strip::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 80px;
  z-index: 2;
}

.marquee-strip::before {
  left: 0;
  background: linear-gradient(to right, white, transparent);
}

.marquee-strip::after {
  right: 0;
  background: linear-gradient(to left, white, transparent);
}

.marquee-strip-inner {
  display: flex;
  width: max-content;
  animation: marquee 25s linear infinite;
}

.marquee-strip-inner:hover {
  animation-play-state: paused;
}

.marquee-strip-content {
  display: flex;
  gap: 20px;
  padding: 4px 10px;
}

.marquee-client {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 18px;
  background: var(--white);
  border: 1px solid transparent;
  box-shadow: var(--shadow-sm);
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
  flex-shrink: 0;
}

.marquee-client:hover {
  border-color: var(--accent-light);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.marquee-logo {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-size: 0.68rem;
  font-weight: 900;
  color: white;
  flex-shrink: 0;
}

.marquee-client span {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-muted);
  white-space: nowrap;
}

/* ── Testimonials ── */
.testimonials-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 64px;
}

.testimonial-card {
  background: var(--white);
  border: 1px solid transparent;
  box-shadow: var(--shadow-sm);
  border-radius: var(--radius-xl);
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all var(--transition-base);
  position: relative;
  overflow: hidden;
}

.testimonial-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--gradient-primary);
  opacity: 0;
  transition: opacity var(--transition-base);
  border-radius: var(--radius-xl);
}

.testimonial-card.featured {
  background: var(--gradient-hero);
  border-color: transparent;
}

.testimonial-card.featured .tcard-text {
  color: var(--text-body);
}

.testimonial-card.featured .tcard-name {
  color: var(--text-dark);
}

.testimonial-card.featured .tcard-role {
  color: var(--text-muted);
}

.testimonial-card.featured::before { opacity: 0; }

.testimonial-card:hover:not(.featured) {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.tcard-quote {
  color: var(--primary);
  opacity: 0.4;
}

.testimonial-card.featured .tcard-quote {
  color: rgba(255,255,255,0.3);
  opacity: 1;
}

.tcard-text {
  font-size: 0.9rem;
  line-height: 1.75;
  color: var(--text-body);
  font-style: italic;
  flex: 1;
  position: relative;
  z-index: 1;
}

.testimonial-card.featured .tcard-text {
  color: rgba(255,255,255,0.85);
}

.tcard-author {
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  z-index: 1;
  flex-wrap: wrap;
}

.tcard-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-weight: 800;
  color: white;
  font-size: 0.95rem;
  flex-shrink: 0;
  border: 2px solid rgba(255,255,255,0.3);
}

.tcard-info { flex: 1; }

.tcard-name {
  display: block;
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--text-dark);
}

.testimonial-card.featured .tcard-name { color: white; }

.tcard-role {
  display: block;
  font-size: 0.75rem;
  color: var(--text-muted);
}

.testimonial-card.featured .tcard-role { color: rgba(255,255,255,0.55); }

.tcard-rating {
  display: flex;
  gap: 2px;
  color: var(--warm);
  margin-left: auto;
}

/* ── CTA ── */
.clients-cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: 48px;
  background: var(--primary-light);
  border-radius: var(--radius-2xl);
  border: 1px solid rgba(0, 86, 179, 0.15);
}

.clients-cta-text h3 {
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--text-dark);
  margin-bottom: 8px;
  line-height: 1.35;
}

.clients-cta-text p {
  font-size: 0.95rem;
  color: var(--text-muted);
}

/* ── Fade Transition ── */
.fade-enter-active, .fade-leave-active { transition: all 0.25s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(8px); }

/* ── Responsive ── */
@media (max-width: 1100px) {
  .clients-grid { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 900px) {
  .clients-grid { grid-template-columns: repeat(2, 1fr); }
  .testimonials-row { grid-template-columns: 1fr; }
}

@media (max-width: 768px) {
  .clients-cta {
    flex-direction: column;
    text-align: center;
    padding: 32px 24px;
  }
  .clients-cta-text h3 { font-size: 1.1rem; }
  .industry-tabs {
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
  .industry-tabs::-webkit-scrollbar {
    display: none;
  }
  .industry-tab {
    padding: 7px 12px;
    font-size: 0.8rem;
    flex-shrink: 0;
  }
}

@media (max-width: 576px) {
  .clients-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  .client-card-inner {
    padding: 16px 12px;
    gap: 8px;
    border-radius: var(--radius-md);
    align-items: center;
    text-align: center;
  }
  .client-hover-overlay {
    align-items: center;
    text-align: center;
    padding: 16px 12px;
  }
  .client-logo-mark {
    width: 100px;
    height: 100px;
    border-radius: 14px;
    padding: 4px;
    background: transparent;
    border: none;
    box-shadow: none;
  }
  .client-name {
    font-size: 0.9rem;
  }
  .client-sector {
    font-size: 0.72rem;
  }
  .client-project {
    padding: 4px 8px;
    font-size: 0.7rem;
    gap: 4px;
  }
  .client-project-dot {
    width: 6px;
    height: 6px;
  }
}

@media (max-width: 380px) {
  .clients-grid {
    grid-template-columns: 1fr;
  }
}
</style>
