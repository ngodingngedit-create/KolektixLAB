<template>
  <div class="about-page" style="padding-top: 90px;">
    <!-- Hero -->
    <section class="page-hero">
      <div class="container page-hero-inner">
        
        <h1 class="page-hero-title">
          {{ t('about.heroTitle') }}
        </h1>
        <p class="page-hero-desc">
          {{ t('about.heroDesc') }}
        </p>
      </div>
    </section>
    <!-- Team -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">
            <UsersIcon :size="14" />
            {{ t('about.teamTag') }}
          </div>
          <h2 class="section-title">
            {{ t('about.teamTitle1') }} <span>{{ t('about.teamTitle2') }}</span>
          </h2>
          <p class="section-subtitle">
            {{ t('about.teamSubtitle') }}
          </p>
          <div class="divider"></div>
        </div>

        <div class="team-grid">
          <div v-for="member in team" :key="member.name" class="team-card">
            <div class="team-avatar" :style="{ background: member.gradient }">
              <span class="team-initial">{{ member.initial }}</span>
            </div>
            <div class="team-info">
              <h4 class="team-name">{{ member.name }}</h4>
              <p class="team-role">{{ member.role }}</p>
              <p class="team-bio">{{ member.bio }}</p>
              <div class="team-skills">
                <span v-for="skill in member.skills" :key="skill" class="team-skill">{{ skill }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Culture -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <div class="section-tag warm">
            <ZapIcon :size="14" />
            {{ t('about.cultureTag') }}
          </div>
          <h2 class="section-title">
            {{ t('about.cultureTitle1') }} <span>{{ t('about.cultureTitle2') }}</span>
          </h2>
          <div class="divider"></div>
        </div>
        <div class="culture-grid">
          <div v-for="culture in cultures" :key="culture.title" class="culture-card">
            <div class="culture-icon" :style="{ color: culture.color }">
              <component :is="culture.icon" :size="28" />
            </div>
            <h3>{{ culture.title }}</h3>
            <p>{{ culture.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <PartnerSection />
  </div>
</template>

<script setup>
import {
  ChevronRightIcon, HeartIcon, CheckCircleIcon, UsersIcon,
  ZapIcon, TargetIcon, LightbulbIcon, ShieldIcon, TrendingUpIcon
} from 'lucide-vue-next'
import PartnerSection from '@/components/sections/PartnerSection.vue'
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()

const values = [
  { icon: TargetIcon, title: 'Berorientasi Hasil', desc: 'Setiap keputusan diambil berdasarkan dampak bisnis nyata.', color: '#0050D1', bg: 'rgba(0,80,209,0.08)' },
  { icon: LightbulbIcon, title: 'Inovasi Berkelanjutan', desc: 'Kami terus belajar dan mengadopsi teknologi terdepan.', color: '#0050D1', bg: 'rgba(0,80,209,0.08)' },
  { icon: ShieldIcon, title: 'Integritas & Transparansi', desc: 'Komunikasi jujur dan komitmen pada setiap janji.', color: '#0050D1', bg: 'rgba(0,80,209,0.08)' },
]

const aboutMetrics = [
  { value: '10+', label: 'Tahun' },
  { value: '200+', label: 'Proyek' },
  { value: '150+', label: 'Klien' },
  { value: '80+', label: 'Expert' },
]

const badges = [
  'ISO 27001 Certified',
  'AWS Partner',
  'Google Cloud Partner',
  'Microsoft Azure Partner',
]

const team = [
  { name: 'Budi Santoso', role: 'CEO & Co-Founder', initial: 'B', gradient: '#0050D1', bio: '15+ tahun pengalaman di IT consulting dan enterprise software.', skills: ['Strategy', 'Leadership', 'Business Development'] },
  { name: 'Dewi Rahayu', role: 'CTO & Co-Founder', initial: 'D', gradient: '#0050D1', bio: 'Arsitek software berpengalaman dengan keahlian cloud-native dan microservices.', skills: ['Architecture', 'Cloud', 'DevOps'] },
  { name: 'Ahmad Fauzi', role: 'Head of Engineering', initial: 'A', gradient: '#0050D1', bio: 'Full-stack expert dengan passion membangun tim engineering yang solid.', skills: ['Node.js', 'React', 'PostgreSQL'] },
  { name: 'Sari Indrawati', role: 'Head of Design', initial: 'S', gradient: '#0050D1', bio: 'UX researcher & designer dengan fokus pada human-centered design.', skills: ['UX Research', 'Figma', 'Design System'] },
  { name: 'Rudi Hermawan', role: 'Cloud Architect', initial: 'R', gradient: '#0050D1', bio: 'AWS & GCP certified architect dengan spesialisasi di enterprise cloud migrations.', skills: ['AWS', 'Kubernetes', 'Terraform'] },
  { name: 'Nisa Pratiwi', role: 'Project Manager', initial: 'N', gradient: '#0050D1', bio: 'PMP certified PM dengan rekam jejak mengelola proyek multi-juta dollar.', skills: ['Agile', 'Scrum', 'Risk Management'] },
]

const cultures = [
  { icon: TrendingUpIcon, title: 'Agile & Adaptive', desc: 'Kami bekerja dalam sprint pendek dengan feedback loop yang cepat, memastikan hasil selalu relevan dengan kebutuhan nyata.', color: '#0050D1' },
  { icon: UsersIcon, title: 'Kolaborasi Terbuka', desc: 'Tim kami percaya pada komunikasi transparan, lintas fungsi, dan tanpa ego — fokus pada hasil terbaik untuk klien.', color: '#0050D1' },
  { icon: LightbulbIcon, title: 'Learning Organization', desc: 'Investasi rutin dalam pengembangan skill tim, riset teknologi terbaru, dan berbagi pengetahuan antar divisi.', color: '#0050D1' },
  { icon: ShieldIcon, title: 'Quality First', desc: 'Tidak ada yang lolos ke production tanpa melewati standar pengujian ketat — code review, automated testing, dan security audit.', color: '#0050D1' },
]
</script>

<style scoped>
.page-hero {
  position: relative;
  padding: 40px 0 32px;
  background: var(--bg);
  border-bottom: 1px solid var(--border);
}

.page-hero-inner { position: relative; z-index: 1; }



.page-hero-title {
  font-size: clamp(1.8rem, 3.5vw, 2.5rem); font-weight: 800;
  color: var(--text-dark); margin-bottom: 14px; letter-spacing: -0.025em;
}

.page-hero-desc {
  color: var(--text-body); font-size: 1.05rem;
  max-width: 650px; line-height: 1.65;
}

/* ── Story ── */
.about-story {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}

.story-text {
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 20px;
}

.story-values {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 32px;
}

.story-value {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.value-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.story-value h4 {
  font-weight: 700;
  font-size: 1rem;
  color: var(--text-dark);
  margin-bottom: 4px;
}

.story-value p { font-size: 0.875rem; color: var(--text-muted); }

/* ── About Card ── */
.story-visual { position: sticky; top: 100px; }

.about-card-main {
  background: var(--gradient-hero);
  border-radius: var(--radius-2xl);
  padding: 40px;
  margin-bottom: 20px;
}

.about-year {
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(255,255,255,0.5);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 24px;
}

.about-metric-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.about-metric { display: flex; flex-direction: column; gap: 4px; }

.am-value {
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 900;
  color: white;
  line-height: 1;
}

.am-label { font-size: 0.8rem; color: rgba(255,255,255,0.55); }

.about-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.about-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  background: var(--primary-light);
  color: var(--primary);
  padding: 6px 14px;
  border-radius: var(--radius-full);
  font-size: 0.8rem;
  font-weight: 600;
}

/* ── Team ── */
.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.team-card {
  background: var(--white);
  border: 1px solid transparent;
  box-shadow: var(--shadow-sm);
  border-radius: var(--radius-xl);
  overflow: hidden;
  transition: all var(--transition-base);
}

.team-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
}

.team-avatar {
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.team-initial {
  font-family: var(--font-heading);
  font-size: 3.5rem;
  font-weight: 900;
  color: rgba(255,255,255,0.9);
}

.team-info { padding: 24px; }

.team-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 4px;
}

.team-role {
  font-size: 0.82rem;
  color: var(--primary);
  font-weight: 600;
  margin-bottom: 12px;
}

.team-bio {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 16px;
}

.team-skills { display: flex; flex-wrap: wrap; gap: 6px; }
.team-skill {
  padding: 3px 10px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-full);
  font-size: 0.72rem;
  color: var(--text-body);
  font-weight: 500;
}

/* ── Culture ── */
.culture-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.culture-card {
  background: var(--white);
  border: 1px solid transparent;
  box-shadow: var(--shadow-sm);
  border-radius: var(--radius-lg);
  padding: 32px 24px;
  transition: all var(--transition-base);
}

.culture-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.culture-icon {
  margin-bottom: 16px;
}

.culture-card h3 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: var(--text-dark);
}

.culture-card p { font-size: 0.875rem; color: var(--text-muted); line-height: 1.7; }

@media (max-width: 1024px) {
  .about-story { grid-template-columns: 1fr; gap: 48px; }
  .story-visual { position: static; }
  .team-grid { grid-template-columns: repeat(2, 1fr); }
  .culture-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .team-grid { grid-template-columns: 1fr; }
  .culture-grid { grid-template-columns: 1fr; }
}
</style>
