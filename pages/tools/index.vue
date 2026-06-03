<script setup lang="ts">
useSeo({
  title: 'Tools | Copyright Abuses | A Randy labs Domain',
  description: 'Static in-browser utilities for inspecting evidence and copyright takedown notices. Files loaded into them are parsed locally and never leave your machine.',
  path: '/tools',
})

const tools = [
  {
    slug: 'har-viewer',
    title: 'HAR Viewer',
    tagline: 'Inspect captured network traffic',
    desc: 'Drag-and-drop a .har file (or paste a URL) to explore every request, response header, body, and timing. Useful when reviewing evidence captured during enforcement or when documenting how a notice was sent.',
    status: 'Live',
    href: '/tools/har-viewer',
  },
]
</script>

<template>
  <div class="bg-white min-h-screen">
    <SiteNavbar />
    <main id="main">

      <!-- HEADER (dark) -->
      <section class="relative bg-rl-deep overflow-hidden py-20 lg:py-24 px-5 md:px-8 lg:px-16" aria-labelledby="tools-page-heading">
        <div class="absolute inset-0 pointer-events-none" style="background-image:linear-gradient(rgba(255,255,255,0.018)1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.018)1px,transparent 1px);background-size:80px 80px" aria-hidden="true" />
        <div class="relative z-10 max-w-[920px] mx-auto">
          <div class="text-xs uppercase tracking-[2px] font-bold text-[#4d9fff] mb-4">Tools</div>
          <h1 id="tools-page-heading" class="text-[36px] md:text-[48px] lg:text-[56px] font-black tracking-[-2px] text-white mb-5 leading-[1.05]">
            Utilities for inspecting evidence and notices.
          </h1>
          <p class="text-base lg:text-lg text-white/55 leading-relaxed max-w-[640px]">
            Static, in-browser tools. Files loaded into them are parsed locally and never leave your machine.
          </p>
        </div>
      </section>

      <!-- TOOLS (light) -->
      <section class="py-16 lg:py-24 px-5 md:px-8 lg:px-16">
        <div class="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          <NuxtLink
            v-for="t in tools"
            :key="t.slug"
            :to="t.href"
            class="group rounded-[20px] border-[1.5px] border-slate-200 bg-white p-8 hover:border-rl-blue hover:shadow-[0_8px_32px_rgba(0,102,255,0.06)] hover:-translate-y-1 transition-all relative"
          >
            <span class="absolute top-5 right-5 bg-slate-100 text-slate-500 px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-[0.5px]">{{ t.status }}</span>
            <h2 class="text-xl font-extrabold tracking-tight text-slate-900 mb-1 pr-20">{{ t.title }}</h2>
            <p class="text-[13px] text-rl-blue font-semibold mb-3">{{ t.tagline }}</p>
            <p class="text-sm text-slate-500 leading-relaxed mb-5">{{ t.desc }}</p>
            <div class="text-sm font-bold text-rl-blue flex items-center gap-1.5 group-hover:gap-3 transition-all">
              Open tool <span>&rarr;</span>
            </div>
          </NuxtLink>

          <div class="rounded-[20px] border-[1.5px] border-dashed border-slate-200 bg-slate-50 p-8 flex flex-col justify-center">
            <span class="inline-block w-fit bg-slate-100 text-slate-500 px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-[0.5px] mb-3">Roadmap</span>
            <p class="text-sm text-slate-500 leading-relaxed">
              Notice verifier, evidence packager, and counter-notice template helpers are coming next.
            </p>
          </div>
        </div>
      </section>

    </main>
    <SiteFooter />
  </div>
</template>
