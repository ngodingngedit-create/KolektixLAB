<template>
  <div class="home">
    <HeroSection />
    <ClientLogosSection />
    <ServicesSection />
    <OurClientSection />
    <TechStackSection />
    <LocationSection />
    <PartnerSection />
  </div>
</template>

<script setup>
import HeroSection from '@/components/sections/HeroSection.vue'
import ClientLogosSection from '@/components/sections/ClientLogosSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import OurClientSection from '@/components/sections/OurClientSection.vue'
import TechStackSection from '@/components/sections/TechStackSection.vue'
import LocationSection from '@/components/sections/LocationSection.vue'
import PartnerSection from '@/components/sections/PartnerSection.vue'
</script>

<style scoped>
.home {
  padding-top: 90px; /* Navbar height */
}
</style>
