<script setup lang="ts">
useSeo({
  title: 'HAR Viewer | In-Browser Network Capture Inspector | Copyright Abuses',
  description: 'Inspect HAR (HTTP Archive) files in your browser: requests, responses, headers, bodies, timings. A Randy labs tool.',
  path: '/tools/har-viewer',
})
</script>

<template>
  <div class="bg-white min-h-screen flex flex-col">
    <SiteNavbar />

    <main id="main" class="flex-1 flex flex-col">
      <!-- Header strip (light) -->
      <section class="bg-[#fafbfc] border-b border-slate-200 px-5 md:px-8 lg:px-16 py-6">
        <div class="max-w-[1400px] mx-auto">
          <div class="text-xs uppercase tracking-[2px] font-bold text-rl-blue mb-1">Tool</div>
          <h1 class="text-2xl md:text-[28px] font-black tracking-[-1px] text-slate-900">HAR Viewer</h1>
          <p class="text-[13px] text-slate-500 mt-1 max-w-[720px]">
            Drop a <code class="text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded">.har</code> file below to inspect requests, responses, headers, bodies, and timings. Files stay in your browser.
          </p>
        </div>
      </section>

      <!-- Embedded standalone tool -->
      <section class="flex-1 flex flex-col bg-white">
        <iframe
          src="/tools/har-viewer-app/index.html"
          title="HAR Viewer"
          class="w-full flex-1 border-0"
          style="min-height: calc(100vh - 220px)"
        />
      </section>

      <!-- Privacy note (light) -->
      <section class="bg-[#fafbfc] border-t border-slate-200 px-5 md:px-8 lg:px-16 py-4">
        <div class="max-w-[1400px] mx-auto text-[12px] text-slate-500">
          The HAR file you load is parsed entirely in your browser. Nothing is uploaded to any server.
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>
