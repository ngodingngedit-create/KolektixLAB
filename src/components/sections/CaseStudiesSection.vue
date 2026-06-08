<template>
  <section class="case-studies section" id="studi-kasus" aria-labelledby="cases-title">
    <div class="container">
      <div class="section-header">
        <div class="section-tag">
          <FolderOpenIcon :size="14" />
          Studi Kasus
        </div>
        <h2 class="section-title" id="cases-title">
          Hasil Nyata untuk<br><span>Klien Nyata</span>
        </h2>
        <p class="section-subtitle">
          Lihat bagaimana kami telah membantu perusahaan-perusahaan terkemuka bertransformasi secara digital dan mencapai hasil bisnis yang terukur.
        </p>
        <div class="divider"></div>
      </div>

      <!-- Featured Case -->
      <div class="case-featured">
        <div class="case-featured-visual">
          <div class="case-mock-browser">
            <div class="browser-bar">
              <div class="browser-dots">
                <span></span><span></span><span></span>
              </div>
              <div class="browser-url">
                <span>app.investra.io/dashboard</span>
              </div>
            </div>
            <div class="browser-content">
              <!-- Mock Dashboard UI -->
              <div class="mock-dashboard">
                <div class="mock-sidebar">
                  <div class="mock-sidebar-item active"></div>
                  <div class="mock-sidebar-item"></div>
                  <div class="mock-sidebar-item"></div>
                  <div class="mock-sidebar-item"></div>
                </div>
                <div class="mock-main">
                  <div class="mock-header-row">
                    <div class="mock-stat-chip"></div>
                    <div class="mock-stat-chip"></div>
                    <div class="mock-stat-chip warm"></div>
                  </div>
                  <div class="mock-chart-area">
                    <div class="mock-chart">
                      <div v-for="(h, i) in mockChart" :key="i" class="mock-bar" :style="{ height: h + '%' }"></div>
                    </div>
                    <div class="mock-donut">
                      <div class="mock-donut-ring"></div>
                    </div>
                  </div>
                  <div class="mock-table">
                    <div v-for="r in 4" :key="r" class="mock-row"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Floating Tags -->
          <div class="case-tag-float tag-react">React.js</div>
          <div class="case-tag-float tag-node">Node.js</div>
          <div class="case-tag-float tag-aws">AWS</div>
        </div>

        <div class="case-featured-content">
          <div class="case-industry-badge">
            <TrendingUpIcon :size="14" />
            Manajemen Investasi
          </div>
          <h3 class="case-featured-title">Platform Digital untuk Manajemen Investasi Investra</h3>
          <p class="case-featured-desc">
            Kami membangun platform SaaS end-to-end untuk Investra — mulai dari dashboard real-time portofolio, engine kalkulasi yield otomatis, hingga fitur laporan berbasis AI yang membantu 50.000+ investor mengelola aset lebih cerdas.
          </p>

          <div class="case-results">
            <div v-for="result in featuredResults" :key="result.label" class="case-result-item">
              <span class="result-value">{{ result.value }}</span>
              <span class="result-label">{{ result.label }}</span>
            </div>
          </div>

          <div class="case-tech">
            <span class="case-tech-label">Tech Stack:</span>
            <div class="case-tech-tags">
              <span v-for="tech in featuredTech" :key="tech" class="case-tech-tag">{{ tech }}</span>
            </div>
          </div>

          <RouterLink to="/portfolio" class="btn btn-primary" id="case-featured-cta">
            Lihat Studi Kasus
            <ArrowRightIcon :size="16" />
          </RouterLink>
        </div>
      </div>

      <!-- Case Cards Grid -->
      <div class="cases-grid">
        <article
          v-for="(c, idx) in cases"
          :key="c.title"
          class="case-card"
          :id="`case-card-${idx}`"
        >
          <div class="case-card-visual">
            <div class="case-card-mockup" :style="{ background: c.gradient }">
              <div class="mockup-dots"><span></span><span></span><span></span></div>
              <div class="mockup-lines">
                <div class="mockup-line long"></div>
                <div class="mockup-line medium"></div>
                <div class="mockup-line short"></div>
              </div>
              <div class="mockup-blocks">
                <div class="mockup-block"></div>
                <div class="mockup-block small"></div>
              </div>
            </div>
            <div class="case-card-overlay">
              <component :is="c.icon" :size="24" />
            </div>
          </div>
          <div class="case-card-body">
            <span class="case-industry">{{ c.industry }}</span>
            <h4 class="case-card-title">{{ c.title }}</h4>
            <p class="case-card-desc">{{ c.description }}</p>
            <div class="case-card-metrics">
              <div v-for="m in c.metrics" :key="m.label" class="case-metric">
                <span class="metric-val">{{ m.value }}</span>
                <span class="metric-lbl">{{ m.label }}</span>
              </div>
            </div>
            <RouterLink to="/portfolio" class="case-card-link">
              Lihat Studi Kasus
              <ArrowRightIcon :size="14" />
            </RouterLink>
          </div>
        </article>
      </div>

      <div class="cases-more">
        <RouterLink to="/portfolio" class="btn btn-outline-primary btn-lg" id="view-all-cases">
          Lihat Semua Studi Kasus
          <ArrowRightIcon :size="18" />
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  FolderOpenIcon, TrendingUpIcon, ArrowRightIcon,
  TruckIcon, ShoppingCartIcon, BuildingIcon
} from 'lucide-vue-next'

const mockChart = [30, 55, 45, 70, 60, 85, 75, 90]

const featuredResults = [
  { value: '3x', label: 'Faster Analysis' },
  { value: '60%', label: 'Cost Reduction' },
  { value: '50K+', label: 'Active Users' },
]

const featuredTech = ['React.js', 'Node.js', 'PostgreSQL', 'AWS', 'Redis']

const cases = [
  {
    icon: TruckIcon,
    gradient: '#0050D1',
    industry: 'Logistik & Supply Chain',
    title: 'Sistem Manajemen Logistik Real-Time untuk LogistiQo',
    description: 'Platform tracking pengiriman end-to-end dengan visibilitas real-time, optimasi rute berbasis AI, dan integrasi multi-mitra ekspedisi.',
    metrics: [
      { value: '40%', label: 'Efisiensi Rute' },
      { value: '2.5M+', label: 'Pengiriman/Bln' },
    ]
  },
  {
    icon: ShoppingCartIcon,
    gradient: '#0050D1',
    industry: 'E-Commerce & Retail',
    title: 'Transformasi Digital Platform Omnichannel RetailMax',
    description: 'Unifikasi channel penjualan online & offline, manajemen inventori terpusat, dan customer 360° view untuk retailer nasional.',
    metrics: [
      { value: '85%', label: 'Peningkatan Sales' },
      { value: '1000+', label: 'SKU Managed' },
    ]
  },
  {
    icon: BuildingIcon,
    gradient: '#0050D1',
    industry: 'Perbankan & Keuangan',
    title: 'Modernisasi Core Banking System untuk BankNusa',
    description: 'Migrasi sistem core banking legacy ke arsitektur microservices modern, meningkatkan kapasitas transaksi dan keandalan sistem.',
    metrics: [
      { value: '99.99%', label: 'Uptime' },
      { value: '10x', label: 'Transaction Capacity' },
    ]
  },
]
</script>

<style scoped>
.case-studies {
  background: var(--white);
}

/* ── Featured Case ── */
.case-featured {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
  margin-bottom: 64px;
  padding: 48px;
  background: var(--bg);
  border-radius: var(--radius-2xl);
  border: 1px solid transparent;
  box-shadow: var(--shadow-sm);
}

/* ── Browser Mock ── */
.case-mock-browser {
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
  background: var(--white);
  border: 1px solid var(--border);
}

.browser-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  background: var(--bg-alt);
  border-bottom: 1px solid var(--border);
}

.browser-dots {
  display: flex;
  gap: 5px;
}

.browser-dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--border-dark);
}

.browser-dots span:nth-child(1) { background: #ef4444; }
.browser-dots span:nth-child(2) { background: #e2e8f0; }
.browser-dots span:nth-child(3) { background: #10b981; }

.browser-url {
  flex: 1;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 4px 10px;
  font-size: 0.72rem;
  color: var(--text-muted);
  font-family: monospace;
}

.browser-content {
  padding: 0;
}

/* ── Mock Dashboard ── */
.mock-dashboard {
  display: flex;
  height: 200px;
  overflow: hidden;
}

.mock-sidebar {
  width: 48px;
  background: var(--text-dark);
  padding: 12px 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.mock-sidebar-item {
  height: 8px;
  border-radius: 4px;
  background: rgba(255,255,255,0.15);
}

.mock-sidebar-item.active {
  background: var(--primary);
}

.mock-main {
  flex: 1;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: var(--bg);
}

.mock-header-row {
  display: flex;
  gap: 8px;
}

.mock-stat-chip {
  flex: 1;
  height: 28px;
  border-radius: 6px;
  background: var(--white);
  border: 1px solid var(--border);
}

.mock-stat-chip.warm { background: var(--accent-light); border-color: var(--accent); }

.mock-chart-area {
  display: flex;
  gap: 8px;
  flex: 1;
}

.mock-chart {
  flex: 1;
  display: flex;
  align-items: flex-end;
  gap: 4px;
  background: var(--white);
  border-radius: 6px;
  padding: 8px;
  border: 1px solid var(--border);
}

.mock-bar {
  flex: 1;
  border-radius: 3px 3px 0 0;
  background: var(--gradient-primary);
}

.mock-bar:nth-child(even) {
  background: #0050D1;
}

.mock-donut {
  width: 60px;
  background: var(--white);
  border-radius: 6px;
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
}

.mock-donut-ring {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 8px solid transparent;
  border-top-color: var(--primary);
  border-right-color: var(--accent);
  border-bottom-color: #10b981;
}

.mock-table {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.mock-row {
  height: 10px;
  border-radius: 4px;
  background: var(--border);
}

/* ── Floating Tags ── */
.case-featured-visual {
  position: relative;
}

.case-tag-float {
  position: absolute;
  padding: 6px 14px;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 700;
  animation: float 6s ease-in-out infinite;
}

.tag-react { background: #61DAFB20; color: #61DAFB; border: 1px solid #61DAFB40; top: -16px; right: 40px; animation-delay: 0s; }
.tag-node { background: #68A06320; color: #68A063; border: 1px solid #68A06340; bottom: 20px; left: -20px; animation-delay: 1s; }
.tag-aws { background: #FF990020; color: #FF9900; border: 1px solid #FF990040; bottom: 40px; right: 20px; animation-delay: 2s; }

/* ── Content ── */
.case-industry-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--primary-light);
  color: var(--primary);
  padding: 6px 14px;
  border-radius: var(--radius-full);
  font-size: 0.78rem;
  font-weight: 600;
  margin-bottom: 16px;
}

.case-featured-title {
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--text-dark);
  line-height: 1.3;
  margin-bottom: 16px;
}

.case-featured-desc {
  color: var(--text-muted);
  line-height: 1.75;
  margin-bottom: 28px;
}

.case-results {
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
}

.case-result-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.result-value {
  font-family: var(--font-heading);
  font-size: 1.75rem;
  font-weight: 900;
  color: var(--primary);
}

.result-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 500;
}

.case-tech {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 28px;
}

.case-tech-label {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-muted);
}

.case-tech-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.case-tech-tag {
  padding: 4px 10px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  color: var(--text-body);
  font-weight: 500;
}

/* ── Case Cards Grid ── */
.cases-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 48px;
}

.case-card {
  border-radius: var(--radius-lg);
  background: var(--white);
  border: 1px solid transparent;
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: all var(--transition-base);
}

.case-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
  border-color: var(--accent-light);
}

.case-card-visual {
  position: relative;
  height: 160px;
  overflow: hidden;
}

.case-card-mockup {
  width: 100%;
  height: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.mockup-dots { display: flex; gap: 5px; }
.mockup-dots span { width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,0.3); }
.mockup-dots span:first-child { background: rgba(255,255,255,0.6); }

.mockup-lines { display: flex; flex-direction: column; gap: 6px; }
.mockup-line { height: 6px; border-radius: 3px; background: rgba(255,255,255,0.15); }
.mockup-line.long { width: 80%; }
.mockup-line.medium { width: 60%; }
.mockup-line.short { width: 40%; }

.mockup-blocks { display: flex; gap: 8px; margin-top: auto; }
.mockup-block { flex: 1; height: 32px; border-radius: 6px; background: rgba(255,255,255,0.1); }
.mockup-block.small { flex: 0 0 48px; }

.case-card-overlay {
  position: absolute;
  bottom: 16px;
  right: 16px;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(255,255,255,0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  box-shadow: var(--shadow-md);
}

.case-card-body {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.case-industry {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.case-card-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-dark);
  line-height: 1.4;
}

.case-card-desc {
  font-size: 0.845rem;
  color: var(--text-muted);
  line-height: 1.65;
}

.case-card-metrics {
  display: flex;
  gap: 20px;
  padding: 12px 0;
  border-top: 1px solid var(--border);
}

.case-metric { display: flex; flex-direction: column; gap: 2px; }
.metric-val {
  font-family: var(--font-heading);
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--primary);
}
.metric-lbl { font-size: 0.72rem; color: var(--text-muted); }

.case-card-link {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--primary);
  font-size: 0.85rem;
  font-weight: 600;
  transition: gap var(--transition-fast);
}

.case-card-link:hover { gap: 10px; }

.cases-more {
  text-align: center;
}

/* ── Responsive ── */
@media (max-width: 1100px) {
  .case-featured {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 900px) {
  .cases-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .cases-grid {
    grid-template-columns: 1fr;
  }

  .case-featured {
    padding: 28px 20px;
  }

  .case-results {
    gap: 16px;
    flex-wrap: wrap;
  }
}
</style>
