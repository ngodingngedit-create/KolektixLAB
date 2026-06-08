<template>
  <section class="clients">
    <div class="clients-header">
      <span class="clients-label">DIPERCAYA OLEH PERUSAHAAN TERKEMUKA</span>
    </div>

    <div class="marquee-wrapper">
      <div class="marquee-track">
        <div v-for="i in 2" :key="i" class="marquee-content">
          <div v-for="client in clients" :key="client.name" class="client-logo">
            <img
              :src="client.logo"
              :alt="client.name"
              class="client-logo-img"
              :class="{ 'large-logo': ['Gojek', 'Telkom', 'Telkom Indonesia', 'Bukalapak'].includes(client.name) }"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const clients = [
  { name: 'Gojek', logo: '/OurClient/client.png' },
  { name: 'BCA', logo: '/OurClient/client (9).png' },
  { name: 'Tokopedia', logo: '/OurClient/client (7).png' },
  { name: 'Telkom', logo: '/OurClient/client (6).png' },
  { name: 'Pertamina', logo: '/OurClient/client (3).png' },
  { name: 'Mandiri', logo: '/OurClient/client (8).png' },
  { name: 'Astra', logo: '/OurClient/client (2).png' },
  { name: 'BRI', logo: '/OurClient/client (11).png' },
  { name: 'Grab', logo: '/OurClient/client (4).png' },
  { name: 'Bukalapak', logo: '/OurClient/client (1).png' },
]
</script>

<style scoped>
.clients {
  background: var(--white);
  padding: 36px 0;
  overflow: hidden;
}

.clients-header {
  text-align: center;
  margin-bottom: 32px;
}

.clients-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-muted);
  letter-spacing: 0.03em;
}

/* ── Marquee ── */
.marquee-wrapper {
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;
}

.marquee-wrapper::before,
.marquee-wrapper::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100px;
  z-index: 2;
}

.marquee-wrapper::before {
  left: 0;
  background: linear-gradient(to right, white, transparent);
}

.marquee-wrapper::after {
  right: 0;
  background: linear-gradient(to left, white, transparent);
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 30s linear infinite;
}

.marquee-track:hover {
  animation-play-state: paused;
}

.marquee-content {
  display: flex;
  align-items: center;
  gap: 64px;
  padding: 16px;
}

.client-logo {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.client-logo-img {
  height: 100px;
  width: auto;
  max-width: 220px;
  object-fit: contain;
  transition: all var(--transition-base);
  cursor: pointer;
}

.client-logo-img.large-logo {
  transform: scale(1.35);
}

.client-logo-img:hover {
  transform: scale(1.08);
}

.client-logo-img.large-logo:hover {
  transform: scale(1.45);
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .marquee-content {
    gap: 40px;
    padding: 12px;
  }

  .client-logo-img {
    height: 72px;
    max-width: 160px;
  }
}
</style>
