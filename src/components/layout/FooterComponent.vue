<template>
  <footer class="footer" role="contentinfo">
    <div class="footer-main">
      <div class="container footer-grid">
        <!-- Brand Column -->
        <div class="footer-brand">
          <RouterLink to="/" class="footer-logo">
            <img src="/logo/white kolektixlab.png" alt="Kolektix Lab" class="footer-logo-img" />
          </RouterLink>
          <p class="footer-description">
            Mitra teknologi terpercaya Anda untuk konsultasi IT, pengembangan software kustom, dan solusi digital inovatif yang mendorong pertumbuhan bisnis nyata.
          </p>
          <div class="footer-social">
            <a href="https://linkedin.com" target="_blank" rel="noopener" class="social-link" aria-label="LinkedIn">
              <LinkedinIcon :size="18" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener" class="social-link" aria-label="Twitter">
              <TwitterIcon :size="18" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener" class="social-link" aria-label="GitHub">
              <GithubIcon :size="18" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener" class="social-link" aria-label="Instagram">
              <InstagramIcon :size="18" />
            </a>
          </div>
        </div>

        <!-- Links Columns -->
        <div class="footer-links-group">
          <div v-for="group in linkGroups" :key="group.title" class="footer-col">
            <h4 class="footer-col-title">{{ group.title }}</h4>
            <ul class="footer-col-links">
              <li v-for="link in group.links" :key="link.label">
                <RouterLink :to="link.to" class="footer-link">
                  <ChevronRightIcon :size="14" />
                  {{ link.label }}
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>

       
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <p class="footer-copyright">
          &copy; {{ currentYear }} PT. KOLEKTIX MAJU BERSAMA
        </p>
        <div class="footer-legal">
          <a href="#" class="footer-legal-link">Kebijakan Privasi</a>
          <span class="footer-legal-dot">·</span>
          <a href="#" class="footer-legal-link">Syarat & Ketentuan</a>
          <span class="footer-legal-dot">·</span>
          <a href="#" class="footer-legal-link">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  LinkedinIcon, TwitterIcon, GithubIcon, InstagramIcon,
  ChevronRightIcon, MailIcon, SendIcon, CheckCircleIcon
} from 'lucide-vue-next'

const email = ref('')
const subscribed = ref(false)

const currentYear = computed(() => new Date().getFullYear())

function handleSubscribe() {
  if (email.value) {
    subscribed.value = true
    email.value = ''
    setTimeout(() => { subscribed.value = false }, 5000)
  }
}

const linkGroups = [
  {
    title: 'Layanan',
    links: [
      { label: 'Konsultasi IT', to: '/layanan' },
      { label: 'Pengembangan Software', to: '/layanan' },
      { label: 'Integrasi Sistem', to: '/layanan' },
      { label: 'Cloud & DevOps', to: '/layanan' },
    ]
  },
  {
    title: 'Perusahaan',
    links: [
      { label: 'Tentang Kami', to: '/tentang' },
      { label: 'Studi Kasus', to: '/portfolio' },
      { label: 'Tim Kami', to: '/tentang' },
      { label: 'Karir', to: '/kontak' },
    ]
  },
  {
    title: 'Sumber Daya',
    links: [
      { label: 'Blog & Wawasan', to: '/kontak' },
      { label: 'Dokumentasi', to: '/kontak' },
      { label: 'FAQ', to: '/kontak' },
      { label: 'Hubungi Kami', to: '/kontak' },
    ]
  },
]
</script>

<style scoped>
.footer {
  background: #0050D1;
  color: var(--white);
}

/* ── Main Footer ── */
.footer-main {
  padding: 80px 0 48px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.footer-grid {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 80px;
  align-items: start;
}

/* ── Brand ── */
.footer-logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 20px;
}

.footer-logo-img {
  height: 80px;
  width: auto;
  object-fit: contain;
  display: block;
}

.footer-description {
  color: rgba(255,255,255,0.65);
  font-size: 0.9rem;
  line-height: 1.75;
  margin-bottom: 24px;
}

.footer-social {
  display: flex;
  gap: 12px;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-sm);
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255,255,255,0.8);
  transition: all var(--transition-base);
}

.social-link:hover {
  background: var(--white);
  border-color: var(--white);
  color: #0050D1;
  transform: translateY(-2px);
}

/* ── Links Group ── */
.footer-links-group {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
}

.footer-col-title {
  font-family: var(--font-heading);
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--white);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.footer-col-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-link {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  color: rgba(255,255,255,0.7);
  font-size: 0.9rem;
  line-height: 1.4;
  transition: all var(--transition-fast);
}

.footer-link :deep(svg) {
  flex-shrink: 0;
  margin-top: 3px;
}

.footer-link:hover {
  color: var(--white);
  transform: translateX(4px);
}

/* ── Newsletter ── */
.footer-newsletter-desc {
  color: rgba(255,255,255,0.65);
  font-size: 0.875rem;
  margin-bottom: 20px;
  line-height: 1.6;
}

.newsletter-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.newsletter-input-group {
  position: relative;
}

.newsletter-icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.6);
}

.newsletter-input {
  width: 100%;
  padding: 12px 16px 12px 40px;
  border-radius: var(--radius-md);
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  color: var(--white);
  font-size: 0.875rem;
  transition: all var(--transition-base);
}

.newsletter-input::placeholder {
  color: rgba(255,255,255,0.5);
}

.newsletter-input:focus {
  border-color: var(--white);
  background: rgba(255,255,255,0.12);
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.2);
}

.newsletter-btn {
  justify-content: center;
  background: var(--white);
  color: #0050D1;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.newsletter-btn:hover {
  background: rgba(255, 255, 255, 0.9);
  color: #0050D1;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.newsletter-success {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #10b981;
  font-size: 0.875rem;
  margin-top: 8px;
}

.newsletter-disclaimer {
  color: rgba(255,255,255,0.4);
  font-size: 0.75rem;
  margin-top: 10px;
}

/* ── Footer Bottom ── */
.footer-bottom {
  padding: 20px 0;
}

.footer-bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.footer-copyright {
  color: rgba(255,255,255,0.4);
  font-size: 0.85rem;
}

.footer-legal {
  display: flex;
  align-items: center;
  gap: 12px;
}

.footer-legal-link {
  color: rgba(255,255,255,0.4);
  font-size: 0.8rem;
  transition: color var(--transition-fast);
}

.footer-legal-link:hover {
  color: var(--white);
}

.footer-legal-dot {
  color: rgba(255,255,255,0.2);
  font-size: 0.75rem;
}

/* ── Responsive ── */
@media (max-width: 960px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  
  .footer-links-group {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
}

@media (max-width: 768px) {
  .footer-main { padding: 56px 0 40px; }
  
  .footer-logo-img {
    height: 64px;
  }
  
  .footer-bottom-inner {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }

  .footer-legal {
    flex-wrap: wrap;
    justify-content: center;
  }
}

@media (max-width: 600px) {
  .footer-links-group {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

@media (max-width: 400px) {
  .footer-links-group {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>
