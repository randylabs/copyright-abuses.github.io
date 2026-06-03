<script setup lang="ts">
const navLinks = [
  { label: 'If you got a notice', href: '/#notices' },
  { label: 'Compliance', href: '/compliance' },
  { label: 'Tools', href: '/tools' },
]

const mobileOpen = ref(false)
</script>

<template>
  <nav
    class="sticky top-0 z-50 bg-rl-deep/95 backdrop-blur-xl border-b border-white/5"
    role="navigation"
    aria-label="Main navigation"
  >
    <div class="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-16 h-[72px] flex items-center justify-between">
      <NuxtLink to="/" class="text-white font-bold text-[16px] tracking-tight leading-none" aria-label="copyright-abuses.com home">
        copyright-abuses<span class="text-white/40 font-medium">.com</span>
      </NuxtLink>

      <div class="hidden md:flex items-center gap-9">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.href"
          :to="link.href"
          class="text-sm font-medium text-white/50 hover:text-white transition-colors"
        >
          {{ link.label }}
        </NuxtLink>
      </div>

      <button
        class="md:hidden text-white/60 p-2"
        :aria-expanded="mobileOpen"
        aria-label="Toggle navigation menu"
        @click="mobileOpen = !mobileOpen"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path v-if="!mobileOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <div v-if="mobileOpen" class="md:hidden border-t border-white/5 bg-rl-deep px-5 py-4 space-y-3">
      <NuxtLink
        v-for="link in navLinks"
        :key="link.href"
        :to="link.href"
        class="block text-sm font-medium text-white/60 hover:text-white"
        @click="mobileOpen = false"
      >
        {{ link.label }}
      </NuxtLink>
    </div>
  </nav>
</template>
