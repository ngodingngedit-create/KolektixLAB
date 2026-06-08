<template>
  <section class="hero" id="hero" aria-label="Hero Section">
    <!-- Background Image -->
    <div class="hero-bg">
      <img src="/hero/hero1.jpg" alt="" class="hero-bg-img" aria-hidden="true" />
      <div class="hero-overlay"></div>
    </div>

    <!-- Content — centered -->
    <div class="hero-body">
     

      <!-- Heading -->
      <h1 class="hero-heading">
        Membangun <span class="text-accent">Solusi Digital</span><br />
        yang Mendorong <span class="text-blue">Dampak Nyata</span>
      </h1>

      <!-- Description -->
      <p class="hero-desc">
        Mitra transformasi digital Anda — dari konsultasi IT strategis hingga
        pengembangan software enterprise yang skalabel dan siap masa depan.
      </p>

      <!-- CTA Buttons -->
      <div class="hero-actions">
        <RouterLink to="/layanan" class="btn-hero btn-hero-primary" id="hero-cta-services">
          Layanan Kami
        </RouterLink>
        <RouterLink to="/kontak" class="btn-hero btn-hero-outline" id="hero-cta-consult">
          Hubungi Kami
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
// No external dependencies needed for this simple hero
</script>

<style scoped>
/* ── Section ──────────────────────────────────────────── */
.hero {
  position: relative;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* ── Background ───────────────────────────────────────── */
.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  /* solid dark overlay (not a gradient, not navy) so text is highly readable */
  background: rgba(15, 23, 42, 0.7);
}

/* ── Body (centered content) ──────────────────────────── */
.hero-body {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 60px 24px 45px;
  max-width: 760px;
  margin: 0 auto;
  width: 100%;
}

/* ── Badge ────────────────────────────────────────────── */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: rgba(255, 255, 255, 0.92);
  padding: 6px 16px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 24px;
  backdrop-filter: blur(10px);
}

.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 8px #10b981;
  animation: pulse 2s ease-in-out infinite;
  flex-shrink: 0;
}

/* ── Heading ──────────────────────────────────────────── */
.hero-heading {
  font-size: clamp(1.5rem, 3.5vw, 2.6rem);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 18px;
}

.text-accent {
  color: #0050D1; /* solid royal blue */
}

.text-blue {
  color: #0050D1; /* solid royal blue */
}

/* ── Description ──────────────────────────────────────── */
.hero-desc {
  color: rgba(255, 255, 255, 0.78);
  font-size: clamp(0.85rem, 1.8vw, 0.95rem);
  line-height: 1.75;
  max-width: 520px;
  margin-bottom: 32px;
}

/* ── CTA Buttons ──────────────────────────────────────── */
.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
}

.btn-hero {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 32px;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.22s ease;
  cursor: pointer;
  white-space: nowrap;
}

.btn-hero-primary {
  background: var(--primary);
  color: #ffffff;
  box-shadow: 0 6px 24px rgba(0, 80, 209, 0.45);
}

.btn-hero-primary:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 10px 32px rgba(0, 80, 209, 0.55);
}

.btn-hero-outline {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: 1.5px solid rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(8px);
}

.btn-hero-outline:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.7);
  transform: translateY(-2px);
}

/* ── Animations ───────────────────────────────────────── */
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.6; transform: scale(0.85); }
}

/* ── Responsive ───────────────────────────────────────── */

/* Tablet */
@media (max-width: 768px) {
  .hero-body {
    padding: 40px 20px 28px;
    max-width: 600px;
  }

  .hero-heading {
    font-size: clamp(1.75rem, 6vw, 2.6rem);
  }
}

/* Mobile */
@media (max-width: 480px) {
  .hero-body {
    padding: 30px 16px 20px;
  }

  .hero-badge {
    font-size: 0.72rem;
    padding: 6px 14px;
  }

  .hero-heading {
    font-size: 1.45rem;
    line-height: 1.25;
  }

  .hero-desc {
    font-size: 0.82rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
    width: 100%;
    max-width: 320px;
  }

  .btn-hero {
    padding: 13px 24px;
  }
}
</style>

