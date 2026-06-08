<template>
  <section class="location section" id="lokasi" aria-labelledby="location-title">
    <div class="container location-inner">
      <!-- Left: Content -->
      <div class="location-content">
        <div class="section-tag" style="display: inline-flex;">
          <MapPinIcon :size="14" />
          Lokasi Kami
        </div>
        <h2 class="section-title" id="location-title" style="text-align:left; margin-top: 16px;">
          Mari Bangun Sesuatu<br>yang <span>Hebat Bersama</span>
        </h2>
        <p class="location-desc">
          Kantor kami berlokasi di Depok, Jawa Barat, siap berkolaborasi langsung dengan Anda untuk memahami kebutuhan bisnis dan merancang solusi digital terbaik.
        </p>

        <div class="offices">
          <div
            v-for="(office, idx) in offices"
            :key="office.city"
            class="office-item"
            :class="{ active: activeOffice === idx }"
            @click="activeOffice = idx"
            :id="`office-item-${idx}`"
            role="button"
            :aria-pressed="activeOffice === idx"
            tabindex="0"
            @keydown.enter="activeOffice = idx"
          >
            <div class="office-icon" :class="office.type">
              <MapPinIcon :size="18" />
            </div>
            <div class="office-details">
              <div class="office-header">
                <span class="office-city">{{ office.city }}</span>
                <span class="office-badge" v-if="office.type === 'hq'">Kantor Pusat</span>
              </div>
              <p class="office-address">{{ office.address }}</p>
              <div class="office-contact">
                <a :href="`tel:${office.phone}`" class="office-contact-item">
                  <PhoneIcon :size="13" />
                  {{ office.phone }}
                </a>
                <a :href="`mailto:${office.email}`" class="office-contact-item">
                  <MailIcon :size="13" />
                  {{ office.email }}
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="location-cta">
          <RouterLink to="/kontak" class="btn btn-primary btn-lg" id="location-contact-btn">
            <MessageSquareIcon :size="18" />
            Jadwalkan Pertemuan
          </RouterLink>
          <a href="tel:+622177012345" class="btn btn-outline-primary">
            <PhoneIcon :size="16" />
            Hubungi Kami
          </a>
        </div>
      </div>

      <!-- Right: Map -->
      <div class="location-map">
        <div class="map-container">
          <iframe
            :src="offices[activeOffice].mapUrl"
            width="100%"
            height="100%"
            style="border: 0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            :title="`Peta lokasi kantor ${offices[activeOffice].city}`"
          ></iframe>
          <div class="map-overlay">
            <div class="map-pin-badge">
              <MapPinIcon :size="16" />
              {{ offices[activeOffice].city }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { MapPinIcon, PhoneIcon, MailIcon, MessageSquareIcon } from 'lucide-vue-next'

const activeOffice = ref(0)

const offices = [
  {
    type: 'hq',
    city: 'Depok',
    address: 'Perumahan Diamond Valley Blok A2/1, Sawangan, Depok',
    phone: '+62 21 7701 2345',
    email: 'kolektixlab@gmail.com',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.204558296316!2d106.82226247483808!3d-6.36785189363163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec0dbde9e81b%3A0x334460f4e24ef547!2sUniversitas%20Indonesia!5e0!3m2!1sen!2sid!4v1717872000000!5m2!1sen!2sid',
  },
]
</script>

<style scoped>
.location {
  background: var(--white);
}

.location-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}

/* ── Content ── */
.location-desc {
  color: var(--text-muted);
  margin-bottom: 36px;
  line-height: 1.75;
  font-size: 1rem;
}

/* ── Offices ── */
.offices {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 36px;
}

.office-item {
  display: flex;
  gap: 16px;
  padding: 20px;
  border-radius: var(--radius-md);
  border: 1px solid transparent;
  background: var(--white);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: all var(--transition-base);
}

.office-item:hover,
.office-item.active {
  background: var(--primary-light);
  border-color: var(--primary);
  box-shadow: var(--shadow-md);
}

.office-icon {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.office-icon.hq { background: var(--gradient-primary); color: white; }
.office-icon.branch { background: var(--primary-light); color: var(--primary); }

.office-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 4px;
}

.office-city {
  font-weight: 700;
  font-size: 1rem;
  color: var(--text-dark);
}

.office-badge {
  background: var(--warm-light);
  color: var(--warm-dark);
  font-size: 0.7rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: var(--radius-full);
}

.office-address {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 8px;
  line-height: 1.5;
}

.office-contact {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.office-contact-item {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.8rem;
  color: var(--primary);
  transition: color var(--transition-fast);
}

.office-contact-item:hover {
  color: var(--accent);
}

/* ── CTA ── */
.location-cta {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

/* ── Map ── */
.location-map {
  position: sticky;
  top: 90px;
}

.map-container {
  position: relative;
  border-radius: var(--radius-xl);
  overflow: hidden;
  height: 520px;
  box-shadow: var(--shadow-xl);
  border: 1px solid var(--border);
}

.map-container iframe {
  display: block;
}

.map-overlay {
  position: absolute;
  bottom: 20px;
  left: 20px;
}

.map-pin-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  background: var(--white);
  padding: 8px 16px;
  border-radius: var(--radius-full);
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--primary);
  box-shadow: var(--shadow-lg);
}

/* ── Responsive ── */
@media (max-width: 1100px) {
  .location-inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .location-map {
    position: static;
  }

  .map-container {
    height: 380px;
  }
}

@media (max-width: 480px) {
  .location-cta { flex-direction: column; }
  .location-cta .btn { justify-content: center; }
  .office-contact { flex-direction: column; gap: 6px; }
}
</style>
