<template>
  <div class="services-page" style="padding-top: 90px;">
    <!-- Page Hero -->
    <section class="page-hero">
      <div class="container page-hero-inner">
        <h1 class="page-hero-title">
          Layanan IT & Solusi
        </h1>
        <p class="page-hero-desc">
          Solusi teknologi komprehensif yang dirancang untuk mendorong pertumbuhan bisnis Anda dari strategi hingga eksekusi dan skalabilitas penuh.
        </p>
      </div>
    </section>

    <!-- All Services Detail -->
    <section class="section">
      <div class="container">
        <div class="services-detail-grid">
          <article v-for="service in services" :key="service.title" class="service-detail-card" :id="service.id">
            <div class="sdc-visual">
              <div class="sdc-icon-wrap" :style="{ background: service.gradient }">
                <component :is="service.icon" :size="32" color="white" />
              </div>
              <div class="sdc-number">{{ String(service.index).padStart(2, '0') }}</div>
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
              <div class="sdc-process">
                <h4>Proses Kami</h4>
                <div class="process-steps">
                  <div v-for="(step, i) in service.process" :key="step" class="process-step">
                    <div class="process-dot">{{ i + 1 }}</div>
                    <span>{{ step }}</span>
                  </div>
                </div>
              </div>
              <RouterLink to="/kontak" class="btn btn-primary" :id="`service-cta-${service.id}`">
                Konsultasikan Kebutuhan
                <ArrowRightIcon :size="16" />
              </RouterLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <PartnerSection />
  </div>
</template>

<script setup>
import { ChevronRightIcon, CheckIcon, ArrowRightIcon, CpuIcon, CodeIcon, GitMergeIcon, CloudIcon } from 'lucide-vue-next'
import PartnerSection from '@/components/sections/PartnerSection.vue'

const services = [
  {
    id: 'konsultasi-it',
    index: 1,
    icon: CpuIcon,
    gradient: '#0050D1',
    title: 'Konsultasi IT Strategis',
    description: 'Kami hadir sebagai CTO virtual Anda — membantu mengidentifikasi peluang teknologi, merancang roadmap digital yang terintegrasi dengan strategi bisnis, dan memastikan investasi teknologi Anda memberikan return yang optimal.',
    features: [
      { name: 'IT Assessment & Health Check', desc: 'Audit mendalam infrastruktur dan sistem yang ada' },
      { name: 'Digital Transformation Roadmap', desc: 'Perencanaan strategis 3-5 tahun ke depan' },
      { name: 'Technology Selection', desc: 'Evaluasi dan seleksi teknologi yang tepat' },
      { name: 'IT Governance & Compliance', desc: 'Framework tata kelola IT yang kuat' },
    ],
    process: ['Discovery & Assessment', 'Analisis & Benchmarking', 'Roadmap Design', 'Implementasi & Review'],
  },
  {
    id: 'pengembangan-software',
    index: 2,
    icon: CodeIcon,
    gradient: '#0050D1',
    title: 'Pengembangan Software Kustom',
    description: 'Dari web app enterprise hingga mobile app cross-platform, kami membangun perangkat lunak yang bukan hanya berfungsi dengan baik hari ini, tetapi juga mudah dikembangkan dan dirawat di masa depan.',
    features: [
      { name: 'Web Application Development', desc: 'SPA, PWA, dan aplikasi web skala enterprise' },
      { name: 'Mobile App (iOS & Android)', desc: 'Native dan cross-platform dengan Flutter/React Native' },
      { name: 'API & Backend Services', desc: 'RESTful API, GraphQL, dan microservices architecture' },
      { name: 'Legacy System Modernization', desc: 'Migrasi dan modernisasi sistem lama' },
    ],
    process: ['Requirements Analysis', 'Design & Prototyping', 'Agile Development', 'Testing & QA', 'Deployment & Support'],
  },
  {
    id: 'integrasi-sistem',
    index: 3,
    icon: GitMergeIcon,
    gradient: '#0050D1',
    title: 'Integrasi Sistem',
    description: 'Silos data dan sistem yang terpisah-pisah adalah musuh produktivitas. Kami menghubungkan semua sistem Anda menjadi ekosistem digital yang harmonis, real-time, dan efisien.',
    features: [
      { name: 'ERP & CRM Integration', desc: 'Integrasi SAP, Salesforce, Odoo, dan lainnya' },
      { name: 'API Gateway & ESB', desc: 'Enterprise service bus dan API management' },
      { name: 'Data Pipeline & ETL', desc: 'Transformasi dan pemindahan data otomatis' },
      { name: 'Third-party Connectors', desc: 'Koneksi ke payment gateway, marketplace, dll.' },
    ],
    process: ['System Mapping', 'Integration Design', 'API Development', 'Testing & Validation', 'Go-Live & Monitor'],
  },
  {
    id: 'cloud-devops',
    index: 4,
    icon: CloudIcon,
    gradient: '#0050D1',
    title: 'Cloud & DevOps',
    description: 'Percepat delivery, tingkatkan reliabilitas, dan kurangi biaya operasional dengan adopsi cloud yang terencana dan praktik DevOps modern yang mengotomatiskan seluruh siklus delivery.',
    features: [
      { name: 'Cloud Migration & Optimization', desc: 'AWS, GCP, Azure dengan TCO optimization' },
      { name: 'CI/CD Pipeline Automation', desc: 'Automated testing, build, dan deployment' },
      { name: 'Infrastructure as Code', desc: 'Terraform, Ansible, dan container orchestration' },
      { name: 'Monitoring & Observability', desc: 'Real-time monitoring, alerting, dan APM' },
    ],
    process: ['Cloud Assessment', 'Architecture Design', 'Migration Planning', 'Execution & Testing', 'Optimize & Scale'],
  },
]
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
  gap: 40px;
  align-items: start;
  padding: 32px;
  background: var(--white);
  border-radius: var(--radius-xl);
  border: 1px solid transparent;
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--transition-base);
}

.service-detail-card:hover {
  box-shadow: var(--shadow-lg);
}

.sdc-visual {
  position: sticky;
  top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.sdc-icon-wrap {
  width: 90px;
  height: 90px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-md);
}

.sdc-number {
  font-family: var(--font-heading);
  font-size: 3rem;
  font-weight: 900;
  color: var(--text-light);
  line-height: 1;
}

.sdc-title {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--text-dark);
  margin-bottom: 12px;
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

.sdc-process h4 {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 14px;
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

@media (max-width: 1024px) {
  .service-detail-card {
    grid-template-columns: 1fr;
    gap: 28px;
    padding: 24px;
  }
  .sdc-visual {
    position: static;
    flex-direction: row;
    justify-content: flex-start;
    gap: 16px;
  }
  .sdc-icon-wrap { width: 70px; height: 70px; border-radius: 16px; }
  .sdc-number { font-size: 2.2rem; }
}

@media (max-width: 768px) {
  .service-detail-card { padding: 20px; }
  .sdc-features { grid-template-columns: 1fr; gap: 12px; }
  .process-steps {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  .process-step:not(:last-child)::after {
    display: none;
  }
  .service-detail-card .btn {
    padding: 10px 18px;
    font-size: 0.82rem;
  }
}
</style>
