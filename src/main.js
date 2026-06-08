import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/styles/main.css'

// Views
import HomeView from './views/HomeView.vue'
import ServicesView from './views/ServicesView.vue'
import AboutView from './views/AboutView.vue'
import ContactView from './views/ContactView.vue'
import PortfolioView from './views/PortfolioView.vue'
import PrivacyPolicyView from './views/PrivacyPolicyView.vue'
import TermsConditionsView from './views/TermsConditionsView.vue'
import CookiesPolicyView from './views/CookiesPolicyView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/layanan', name: 'Services', component: ServicesView },
    { path: '/tentang', name: 'About', component: AboutView },
    { path: '/portfolio', name: 'Portfolio', component: PortfolioView },
    { path: '/kontak', name: 'Contact', component: ContactView },
    { path: '/kebijakan-privasi', name: 'PrivacyPolicy', component: PrivacyPolicyView },
    { path: '/syarat-ketentuan', name: 'TermsConditions', component: TermsConditionsView },
    { path: '/kebijakan-cookie', name: 'CookiesPolicy', component: CookiesPolicyView },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  }
})

const app = createApp(App)
app.use(router)
app.mount('#app')
