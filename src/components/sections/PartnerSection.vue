<template>
  
</template>

<script setup>
import {
  RocketIcon, CheckCircleIcon, ArrowRightIcon,
  ShieldCheckIcon, TrendingUpIcon, ClockIcon, UsersIcon
} from 'lucide-vue-next'

const features = [
  'Tim berpengalaman 10+ tahun',
  'Deliverable terukur & transparan',
  'Support & maintenance 24/7',
  'Jaminan kualitas enterprise',
]
</script>

<style scoped>
.cta-section {
  position: relative;
  background: var(--gradient-hero);
  overflow: hidden;
  padding: 60px 0;
}

.cta-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.cta-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}

.cta-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.12;
}

.cta-blob-1 {
  width: 500px;
  height: 500px;
  background: var(--warm);
  top: -200px;
  right: -100px;
}

.cta-blob-2 {
  width: 400px;
  height: 400px;
  background: var(--accent);
  bottom: -150px;
  left: -50px;
}

/* ── Inner ── */
.cta-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  position: relative;
  z-index: 1;
}

/* ── Content ── */
.cta-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255,159,28,0.15);
  color: var(--warm);
  border: 1px solid rgba(255,159,28,0.3);
  padding: 8px 16px;
  border-radius: var(--radius-full);
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 28px;
}

.cta-heading {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 900;
  color: var(--white);
  line-height: 1.15;
  letter-spacing: -0.03em;
  margin-bottom: 20px;
}

.cta-heading-warm {
  background: var(--gradient-warm);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.cta-desc {
  color: rgba(255,255,255,0.7);
  font-size: 1.05rem;
  line-height: 1.75;
  margin-bottom: 28px;
  max-width: 480px;
}

/* ── Features ── */
.cta-features {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 36px;
}

.cta-feature {
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255,255,255,0.85);
  font-size: 0.95rem;
  font-weight: 500;
}

.cta-feature svg { color: #10b981; flex-shrink: 0; }

/* ── Actions ── */
.cta-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.cta-note {
  display: flex;
  align-items: center;
  gap: 6px;
  color: rgba(255,255,255,0.45);
  font-size: 0.8rem;
}

.cta-note svg { color: rgba(255,255,255,0.45); }

/* ── Visual ── */
.cta-cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.cta-card {
  display: flex;
  align-items: center;
  gap: 16px;
  background: rgba(255,255,255,0.07);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: var(--radius-lg);
  padding: 20px 24px;
  transition: all var(--transition-base);
}

.cta-card:hover {
  background: rgba(255,255,255,0.1);
  transform: translateX(8px);
}

.cta-card-1 { animation: float 6s ease-in-out infinite; }
.cta-card-2 { animation: float 7s ease-in-out infinite 1s; }
.cta-card-3 { animation: float 5s ease-in-out infinite 2s; }

.cta-card-icon {
  width: 52px;
  height: 52px;
  border-radius: var(--radius-md);
  background: rgba(0,123,255,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  flex-shrink: 0;
}

.cta-card-icon.warm { background: rgba(255,159,28,0.2); color: var(--warm); }
.cta-card-icon.success { background: rgba(16,185,129,0.2); color: #10b981; }

.cta-card-value {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--white);
  line-height: 1;
}

.cta-card-label {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.55);
  margin-top: 4px;
}

/* ── Testimonial ── */
.cta-testimonial {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: var(--radius-lg);
  padding: 20px 24px;
  margin-top: 8px;
}

.testimonial-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-weight: 800;
  color: white;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.testimonial-text {
  color: rgba(255,255,255,0.85);
  font-size: 0.9rem;
  font-style: italic;
  line-height: 1.6;
  margin-bottom: 6px;
}

.testimonial-author {
  font-size: 0.77rem;
  color: rgba(255,255,255,0.45);
  font-weight: 500;
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .cta-inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }
}

@media (max-width: 480px) {
  .cta-section { padding: 36px 0; }
  .cta-actions { flex-direction: column; }
  .cta-actions .btn { justify-content: center; }
}
</style>
