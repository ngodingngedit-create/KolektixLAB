<template>
  <div class="contact-page" style="padding-top: 90px;">
    <!-- Hero -->
    <section class="page-hero">
      <div class="container page-hero-inner">
       
        <h1 class="page-hero-title">
          Mari Bicara
        </h1>
        <p class="page-hero-desc">
          Ceritakan kebutuhan proyek Anda dan tim kami akan merespons dalam 24 jam dengan solusi yang tepat sasaran.
        </p>
      </div>
    </section>

    <!-- Contact Main -->
    <section class="section">
      <div class="container contact-inner">
        <!-- Left: Info -->
        <div class="contact-info">
          <h2 class="contact-info-title">Hubungi Kami</h2>
          <p class="contact-info-desc">
            Kami dengan senang hati menerima diskusi proyek, pertanyaan teknis, maupun kemitraan strategis. Pilih cara terbaik untuk terhubung:
          </p>

          <div class="contact-methods">
            <a v-for="method in contactMethods" :key="method.label" :href="method.href" class="contact-method">
              <div class="contact-method-icon" :style="{ background: method.bg, color: method.color }">
                <component :is="method.icon" :size="20" />
              </div>
              <div class="contact-method-info">
                <span class="cm-label">{{ method.label }}</span>
                <span class="cm-value">{{ method.value }}</span>
              </div>
              <ExternalLinkIcon :size="16" class="cm-arrow" />
            </a>
          </div>

          <!-- Office Hours -->
          <div class="office-hours">
            <h4>
              <ClockIcon :size="16" />
              Jam Operasional
            </h4>
            <div class="hours-list">
              <div class="hours-row"><span>Senin – Jumat</span><span>08:00 – 18:00 WIB</span></div>
              <div class="hours-row"><span>Sabtu</span><span>09:00 – 14:00 WIB</span></div>
              <div class="hours-row muted"><span>Minggu & Hari Libur</span><span>Tutup</span></div>
            </div>
          </div>

          <!-- Social -->
          <div class="contact-social">
            <h4>Ikuti Kami</h4>
            <div class="social-links">
              <a v-for="s in socials" :key="s.name" :href="s.href" target="_blank" rel="noopener" class="social-btn" :title="s.name">
                <component :is="s.icon" :size="18" />
                {{ s.name }}
              </a>
            </div>
          </div>
        </div>

        <!-- Right: Form -->
        <div class="contact-form-wrap">
          <div class="contact-form-card">
            <div class="form-header">
              <h3>Kirim Pesan</h3>
              <p>Konsultasi pertama <strong>100% gratis</strong> — respons dalam 24 jam</p>
            </div>

            <form @submit.prevent="handleSubmit" class="contact-form" id="contact-form" novalidate>
              <div class="form-row">
                <div class="form-group">
                  <label for="contact-name">Nama Lengkap *</label>
                  <div class="input-wrap">
                    <UserIcon :size="16" class="input-icon" />
                    <input
                      id="contact-name"
                      v-model="form.name"
                      type="text"
                      placeholder="Budi Santoso"
                      required
                      :class="{ error: errors.name }"
                    />
                  </div>
                  <span v-if="errors.name" class="field-error">{{ errors.name }}</span>
                </div>
                <div class="form-group">
                  <label for="contact-email">Email Bisnis *</label>
                  <div class="input-wrap">
                    <MailIcon :size="16" class="input-icon" />
                    <input
                      id="contact-email"
                      v-model="form.email"
                      type="email"
                      placeholder="budi@perusahaan.com"
                      required
                      :class="{ error: errors.email }"
                    />
                  </div>
                  <span v-if="errors.email" class="field-error">{{ errors.email }}</span>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="contact-company">Perusahaan</label>
                  <div class="input-wrap">
                    <BuildingIcon :size="16" class="input-icon" />
                    <input id="contact-company" v-model="form.company" type="text" placeholder="PT. Contoh Maju" />
                  </div>
                </div>
                <div class="form-group">
                  <label for="contact-phone">Nomor Telepon</label>
                  <div class="input-wrap">
                    <PhoneIcon :size="16" class="input-icon" />
                    <input id="contact-phone" v-model="form.phone" type="tel" placeholder="+62 812 3456 7890" />
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label for="contact-service">Layanan yang Diminati *</label>
                <div class="input-wrap">
                  <LayoutGridIcon :size="16" class="input-icon" />
                  <select id="contact-service" v-model="form.service" required :class="{ error: errors.service }">
                    <option value="" disabled>Pilih layanan...</option>
                    <option v-for="opt in serviceOptions" :key="opt" :value="opt">{{ opt }}</option>
                  </select>
                </div>
                <span v-if="errors.service" class="field-error">{{ errors.service }}</span>
              </div>

              <div class="form-group">
                <label for="contact-budget">Anggaran Proyek</label>
                <div class="budget-options">
                  <label
                    v-for="budget in budgetOptions"
                    :key="budget"
                    class="budget-option"
                    :class="{ selected: form.budget === budget }"
                  >
                    <input type="radio" v-model="form.budget" :value="budget" name="budget" />
                    {{ budget }}
                  </label>
                </div>
              </div>

              <div class="form-group">
                <label for="contact-message">Ceritakan Kebutuhan Anda *</label>
                <textarea
                  id="contact-message"
                  v-model="form.message"
                  placeholder="Jelaskan proyek, tantangan, atau pertanyaan Anda secara singkat..."
                  rows="5"
                  required
                  :class="{ error: errors.message }"
                ></textarea>
                <span v-if="errors.message" class="field-error">{{ errors.message }}</span>
              </div>

              <button type="submit" class="btn btn-primary btn-lg submit-btn" :disabled="isSubmitting" id="contact-submit">
                <Loader2Icon v-if="isSubmitting" :size="18" class="spin" />
                <SendIcon v-else :size="18" />
                {{ isSubmitting ? 'Mengirim...' : 'Kirim Pesan' }}
              </button>
            </form>

            <!-- Success State -->
            <Transition name="fade">
              <div v-if="submitted" class="form-success">
                <div class="success-icon">
                  <CheckCircleIcon :size="48" />
                </div>
                <h3>Pesan Terkirim! 🎉</h3>
                <p>Tim kami akan menghubungi Anda dalam 24 jam. Terima kasih telah mempercayai Kolektix Lab.</p>
                <button @click="resetForm" class="btn btn-outline-primary">Kirim Pesan Lagi</button>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import {
  ChevronRightIcon, UserIcon, MailIcon, BuildingIcon, PhoneIcon,
  LayoutGridIcon, SendIcon, CheckCircleIcon, Loader2Icon, ClockIcon,
  ExternalLinkIcon, LinkedinIcon, TwitterIcon, InstagramIcon
} from 'lucide-vue-next'

const form = reactive({ name: '', email: '', company: '', phone: '', service: '', budget: '', message: '' })
const errors = reactive({})
const isSubmitting = ref(false)
const submitted = ref(false)

const serviceOptions = [
  'Konsultasi IT Strategis',
  'Pengembangan Software Kustom',
  'Integrasi Sistem',
  'Cloud & DevOps',
  'Aplikasi Mobile',
  'Lainnya',
]

const budgetOptions = ['< Rp 50 Juta', 'Rp 50–200 Juta', 'Rp 200–500 Juta', '> Rp 500 Juta']

const contactMethods = [
  { icon: MailIcon, label: 'Email', value: 'kolektixlab@gmail.com', href: 'mailto:kolektixlab@gmail.com', bg: 'rgba(0, 80, 209, 0.08)', color: '#0050D1' },
  { icon: PhoneIcon, label: 'Telepon', value: '+62 21 5001 2345', href: 'tel:+62215001234', bg: 'rgba(0, 80, 209, 0.08)', color: '#0050D1' },
  { icon: BuildingIcon, label: 'Kantor Pusat', value: 'Perumahan Diamond Valley Blok A2/1, Sawangan, Depok ', href: '#', bg: 'rgba(0, 80, 209, 0.08)', color: '#0050D1' },
]

const socials = [
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: LinkedinIcon },
  { name: 'Twitter', href: 'https://twitter.com', icon: TwitterIcon },
  { name: 'Instagram', href: 'https://instagram.com', icon: InstagramIcon },
]

function validate() {
  Object.keys(errors).forEach(k => delete errors[k])
  if (!form.name.trim()) errors.name = 'Nama wajib diisi'
  if (!form.email.trim()) errors.email = 'Email wajib diisi'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Format email tidak valid'
  if (!form.service) errors.service = 'Pilih layanan yang diminati'
  if (!form.message.trim()) errors.message = 'Pesan wajib diisi'
  return Object.keys(errors).length === 0
}

async function handleSubmit() {
  if (!validate()) return
  isSubmitting.value = true
  await new Promise(r => setTimeout(r, 1500))
  isSubmitting.value = false
  submitted.value = true
}

function resetForm() {
  Object.assign(form, { name: '', email: '', company: '', phone: '', service: '', budget: '', message: '' })
  submitted.value = false
}

const spin = { animation: 'spin 1s linear infinite' }
</script>

<style scoped>
.page-hero {
  position: relative; padding: 40px 0 32px;
  background: var(--bg); border-bottom: 1px solid var(--border);
}
.page-hero-inner { position: relative; z-index: 1; }

.page-hero-title { font-size: clamp(1.8rem, 3.5vw, 2.5rem); font-weight: 800; color: var(--text-dark); margin-bottom: 14px; letter-spacing: -0.025em; }
.page-hero-desc { color: var(--text-body); font-size: 1.05rem; max-width: 650px; line-height: 1.65; }

/* ── Layout ── */
.contact-inner {
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 64px;
  align-items: start;
}

/* ── Info ── */
.contact-info-title { font-size: 1.5rem; font-weight: 800; color: var(--text-dark); margin-bottom: 12px; }
.contact-info-desc { color: var(--text-muted); line-height: 1.75; margin-bottom: 28px; }

.contact-methods { display: flex; flex-direction: column; gap: 12px; margin-bottom: 32px; }

.contact-method {
  display: flex; align-items: center; gap: 14px;
  padding: 16px 20px;
  background: var(--white);
  border: 1px solid transparent;
  box-shadow: var(--shadow-sm);
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
  text-decoration: none;
}

.contact-method:hover {
  border-color: var(--primary);
  box-shadow: var(--shadow-md);
  transform: translateX(4px);
}

.contact-method-icon {
  width: 44px; height: 44px; border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}

.cm-label { display: block; font-size: 0.72rem; color: var(--text-muted); font-weight: 500; }
.cm-value { display: block; font-size: 0.9rem; font-weight: 600; color: var(--text-dark); }
.cm-arrow { margin-left: auto; color: var(--text-light); }

/* ── Office Hours ── */
.office-hours {
  background: var(--white);
  box-shadow: var(--shadow-sm);
  border-radius: var(--radius-md);
  padding: 20px;
  margin-bottom: 28px;
  border: 1px solid transparent;
}

.office-hours h4 {
  display: flex; align-items: center; gap: 8px;
  font-size: 0.875rem; font-weight: 700; color: var(--text-dark);
  margin-bottom: 16px;
}

.hours-list { display: flex; flex-direction: column; gap: 8px; }
.hours-row { display: flex; justify-content: space-between; font-size: 0.875rem; color: var(--text-body); }
.hours-row.muted { color: var(--text-muted); }

/* ── Social ── */
.contact-social h4 { font-size: 0.875rem; font-weight: 700; color: var(--text-dark); margin-bottom: 12px; }
.social-links { display: flex; gap: 10px; }
.social-btn {
  display: flex; align-items: center; gap: 6px;
  padding: 8px 14px;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius-full);
  font-size: 0.82rem; font-weight: 600; color: var(--text-body);
  transition: all var(--transition-base);
  text-decoration: none;
}
.social-btn:hover { background: var(--primary); color: white; border-color: var(--primary); }

/* ── Form ── */
.contact-form-card {
  background: var(--white);
  border: 1px solid transparent;
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  position: relative;
}

.form-header {
  padding: 32px 36px 24px;
  border-bottom: 1px solid var(--border);
  background: var(--bg);
}

.form-header h3 { font-size: 1.4rem; font-weight: 800; color: var(--text-dark); margin-bottom: 6px; }
.form-header p { font-size: 0.875rem; color: var(--text-muted); }
.form-header strong { color: var(--primary); }

.contact-form { padding: 32px 36px; display: flex; flex-direction: column; gap: 20px; }

.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }

.form-group { display: flex; flex-direction: column; gap: 6px; }

.form-group label { font-size: 0.85rem; font-weight: 600; color: var(--text-dark); }

.input-wrap { position: relative; }
.input-icon { position: absolute; left: 14px; top: 50%; transform: translateY(-50%); color: var(--text-muted); pointer-events: none; }

.contact-form input,
.contact-form select {
  width: 100%;
  padding: 12px 16px 12px 42px;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  font-size: 0.9rem;
  color: var(--text-dark);
  background: var(--white);
  transition: all var(--transition-base);
  appearance: none;
}

.contact-form input:focus,
.contact-form select:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(0,123,255,0.12);
}

.contact-form input.error,
.contact-form select.error { border-color: #ef4444; }

.contact-form textarea {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  font-size: 0.9rem;
  color: var(--text-dark);
  resize: vertical;
  min-height: 120px;
  transition: all var(--transition-base);
}

.contact-form textarea:focus { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(0,123,255,0.12); }
.contact-form textarea.error { border-color: #ef4444; }

.field-error { font-size: 0.78rem; color: #ef4444; font-weight: 500; }

/* ── Budget Options ── */
.budget-options { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 4px; }

.budget-option {
  display: flex; align-items: center; gap: 6px;
  padding: 8px 14px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-full);
  font-size: 0.82rem; font-weight: 500; color: var(--text-body);
  cursor: pointer;
  transition: all var(--transition-base);
}

.budget-option:hover { border-color: var(--primary); color: var(--primary); }
.budget-option.selected { background: var(--primary); color: white; border-color: var(--primary); }
.budget-option input { display: none; }

/* ── Submit ── */
.submit-btn { width: 100%; justify-content: center; }
.submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }

@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
.spin { animation: spin 1s linear infinite; }

/* ── Success ── */
.form-success {
  position: absolute; inset: 0;
  background: var(--white);
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  text-align: center; padding: 48px;
  gap: 16px;
}

.success-icon { color: #10b981; }
.form-success h3 { font-size: 1.5rem; font-weight: 800; color: var(--text-dark); }
.form-success p { color: var(--text-muted); max-width: 320px; line-height: 1.7; }

.fade-enter-active, .fade-leave-active { transition: all 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (max-width: 1100px) {
  .contact-inner { grid-template-columns: 1fr; gap: 48px; }
}

@media (max-width: 640px) {
  .form-row { grid-template-columns: 1fr; }
  .contact-form { padding: 24px 20px; }
  .form-header { padding: 24px 20px; }
  .budget-options {
    gap: 6px;
    flex-wrap: nowrap;
    justify-content: flex-start;
    overflow-x: auto;
    padding: 4px 20px 12px;
    margin-left: -20px;
    margin-right: -20px;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }
  .budget-options::-webkit-scrollbar {
    display: none;
  }
  .budget-option {
    flex-shrink: 0;
  }
}
</style>
