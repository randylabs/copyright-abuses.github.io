<script setup lang="ts">
useSeo({
  title: 'Copyright Takedown Notices from Randy labs | copyright-abuses.com',
  description: 'Documentation of the authorization, detection technology, and legal basis for copyright takedown notices issued by Randy labs. For recipients, platforms, and regulators.',
  path: '/',
})

const noticeBasics = [
  {
    label: 'Notice',
    title: 'What a takedown notice is',
    body: 'A formal request, sent under 17 U.S.C. § 512(c), asking a service provider (host, ISP, search engine, platform) to remove or disable access to material the sender claims infringes their copyright.',
  },
  {
    label: 'Counter-notice',
    title: 'Your right to respond',
    body: 'If your content was removed and you believe the takedown was a mistake or misidentification, or that you have a valid license, fair-use claim, or other authorization, § 512(g) lets you respond with a counter-notice. See the compliance page for the address to send it to.',
  },
  {
    label: 'Verify',
    title: 'Verifying a Randy labs notice',
    body: 'Notices issued by Randy labs are sent under a written mandate from the rights holder. Chain-of-authorization documentation is produced on demand to platforms, intermediaries, regulators, and courts. See the compliance page for the address to request mandate proof.',
  },
]

const posturePillars = [
  {
    title: 'Authorization',
    headline: 'Mandate from the rights holder',
    body: 'Every notice is sent under a written mandate from the rights holder. Scope, territory, and dates are tracked. Chain-of-authorization documentation is produced on demand to platforms, intermediaries, hosts, ISPs, regulators, and courts.',
  },
  {
    title: 'Technology',
    headline: 'Content match, not person match',
    body: 'The detection pipeline produces a content match: a determination that a given stream is a particular protected broadcast. It contains no facial recognition, no biometric identification, and no profiling of any natural person. Match signals are derived from the broadcast itself.',
  },
  {
    title: 'Legal basis',
    headline: 'Drafted to the applicable law',
    body: 'Notices reference the statute that applies to the recipient and the territory: CDPA 1988 (UK), CRRA 2000 (Ireland), 17 U.S.C. § 512 (US), and DSA Art. 16 (EU). UK/EU GDPR posture: lawful basis Art. 6(1)(f), outside Art. 9, aligned with ICO 2025, Recital 51, and EDPB.',
  },
]

const tools = [
  {
    slug: 'har-viewer',
    title: 'HAR Viewer',
    desc: 'Drag-and-drop a .har capture and inspect every request, response, and timing in your browser. Useful when reviewing evidence captured during enforcement or when documenting how a notice was sent.',
    status: 'Live',
    href: '/tools/har-viewer',
  },
]
</script>

<template>
  <div class="bg-white min-h-screen">
    <SiteNavbar />
    <main id="main">

      <!-- HERO (dark, per reference) -->
      <section class="relative bg-rl-deep overflow-hidden py-24 lg:py-32 px-5 md:px-8 lg:px-16 text-center" aria-labelledby="hero-heading">
        <div class="absolute inset-0 pointer-events-none" style="background-image:linear-gradient(rgba(255,255,255,0.018)1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.018)1px,transparent 1px);background-size:80px 80px" aria-hidden="true" />
        <div class="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(0,102,255,0.08)_0%,rgba(0,204,136,0.03)_40%,transparent_65%)] pointer-events-none" aria-hidden="true" />
        <div class="absolute bottom-0 left-0 right-0 h-px bg-[linear-gradient(90deg,transparent,rgba(0,102,255,0.3),rgba(0,204,136,0.2),transparent)]" aria-hidden="true" />

        <div class="relative z-10 max-w-[820px] mx-auto">
          <h1 id="hero-heading" class="text-[42px] md:text-[56px] lg:text-[64px] font-black leading-[1.04] tracking-[-2.5px] text-white mb-7">
            Copyright takedown notices from Randy labs.
          </h1>
          <p class="text-base lg:text-[19px] leading-relaxed text-white/55 max-w-[640px] mx-auto mb-12">
            Documentation of the authorization, detection technology, and legal basis for the notices issued from this domain. For recipients of a notice, the platforms that handle them, and the regulators that supervise them.
          </p>
          <div class="flex gap-3 justify-center flex-wrap">
            <a href="#notices" class="bg-white text-rl-navy px-8 py-[15px] rounded-[10px] text-[15px] font-bold shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 transition-transform">
              I received a notice
            </a>
            <NuxtLink to="/compliance" class="px-8 py-[15px] rounded-[10px] text-[15px] font-semibold text-white/60 border border-white/[0.12] hover:text-white hover:border-white/30 transition-all">
              Read the compliance posture
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- ABOUT (light) -->
      <section id="about" class="py-16 lg:py-24 px-5 md:px-8 lg:px-16 bg-[#fafbfc]" aria-labelledby="about-heading">
        <div class="max-w-[760px] mx-auto">
          <div class="text-xs uppercase tracking-[2px] font-bold text-rl-blue mb-4">About</div>
          <h2 id="about-heading" class="text-[28px] lg:text-4xl font-black tracking-tight leading-[1.1] mb-5">
            About this site
          </h2>
          <div class="space-y-4 text-[15px] leading-relaxed text-slate-500">
            <p>
              <strong class="text-slate-900">copyright-abuses.com</strong> is a public, non-commercial domain operated by <a href="https://randylabs.com" target="_blank" rel="noopener" class="text-slate-900 hover:text-rl-blue underline underline-offset-2">Randy labs</a>, a copyright enforcement operator that sends takedown notices on behalf of rights holders. This site documents the authorization, technology, and legal basis under which those notices are issued, and provides verification paths for recipients, platforms, and regulators.
            </p>
            <p>
              The content is descriptive, not legal advice. The tools are static and run entirely in your browser; uploaded data does not leave your machine. For matters with real consequences, consult counsel.
            </p>
          </div>
        </div>
      </section>

      <!-- NOTICES (light, plain cards) -->
      <section id="notices" class="py-16 lg:py-24 px-5 md:px-8 lg:px-16" aria-labelledby="notices-heading">
        <div class="max-w-[1200px] mx-auto">
          <div class="mb-12 max-w-[760px]">
            <div class="text-xs uppercase tracking-[2px] font-bold text-rl-blue mb-4">If you have received a notice</div>
            <h2 id="notices-heading" class="text-[28px] lg:text-4xl font-black tracking-tight leading-[1.1]">
              What it is, your right to respond, and how to verify it.
            </h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            <article
              v-for="b in noticeBasics"
              :key="b.label"
              class="rounded-[20px] border-[1.5px] border-slate-200 bg-white p-8 hover:border-rl-blue hover:shadow-[0_8px_32px_rgba(0,102,255,0.06)] transition-all"
            >
              <div class="text-[10px] uppercase tracking-[1.5px] font-bold text-rl-blue mb-3">{{ b.label }}</div>
              <h3 class="text-lg font-extrabold tracking-tight text-slate-900 mb-3 leading-snug">{{ b.title }}</h3>
              <p class="text-sm text-slate-500 leading-relaxed">{{ b.body }}</p>
            </article>
          </div>
        </div>
      </section>

      <!-- ENFORCEMENT POSTURE (light) -->
      <section id="posture" class="py-16 lg:py-24 px-5 md:px-8 lg:px-16 bg-[#fafbfc]" aria-labelledby="posture-heading">
        <div class="max-w-[1200px] mx-auto">
          <div class="mb-12 max-w-[760px]">
            <div class="text-xs uppercase tracking-[2px] font-bold text-rl-blue mb-4">Enforcement posture</div>
            <h2 id="posture-heading" class="text-[28px] lg:text-4xl font-black tracking-tight leading-[1.1] mb-4">
              Authorization. Technology. Legal basis.
            </h2>
            <p class="text-base text-slate-500 leading-relaxed">
              Three things every notice issued from this domain is required to satisfy. The full posture, with statutory references and contact paths, lives on the compliance page.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            <div
              v-for="p in posturePillars"
              :key="p.title"
              class="rounded-[20px] border-[1.5px] border-slate-200 bg-white p-8"
            >
              <div class="text-[10px] uppercase tracking-[1.5px] font-bold text-rl-blue mb-3">{{ p.title }}</div>
              <h3 class="text-lg font-extrabold tracking-tight text-slate-900 mb-3 leading-snug">{{ p.headline }}</h3>
              <p class="text-sm text-slate-500 leading-relaxed">{{ p.body }}</p>
            </div>
          </div>

          <NuxtLink to="/compliance" class="inline-flex items-center gap-1.5 text-sm font-bold text-rl-blue hover:gap-3 transition-all">
            Read the full compliance posture <span>&rarr;</span>
          </NuxtLink>
        </div>
      </section>

      <!-- TOOLS (light) -->
      <section id="tools" class="py-16 lg:py-24 px-5 md:px-8 lg:px-16" aria-labelledby="tools-heading">
        <div class="max-w-[1200px] mx-auto">
          <div class="mb-12 max-w-[760px]">
            <div class="text-xs uppercase tracking-[2px] font-bold text-rl-blue mb-4">Tools</div>
            <h2 id="tools-heading" class="text-[28px] lg:text-4xl font-black tracking-tight leading-[1.1] mb-4">
              Utilities for inspecting evidence and notices
            </h2>
            <p class="text-base text-slate-500 leading-relaxed">
              Static, in-browser tools. Files loaded into them are parsed locally and never leave your machine.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <NuxtLink
              v-for="t in tools"
              :key="t.slug"
              :to="t.href"
              class="group rounded-[20px] border-[1.5px] border-slate-200 bg-white p-8 hover:border-rl-blue hover:shadow-[0_8px_32px_rgba(0,102,255,0.06)] hover:-translate-y-1 transition-all relative"
            >
              <span class="absolute top-5 right-5 bg-slate-100 text-slate-500 px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-[0.5px]">{{ t.status }}</span>
              <h3 class="text-xl font-extrabold tracking-tight text-slate-900 mb-3 pr-20">{{ t.title }}</h3>
              <p class="text-sm text-slate-500 leading-relaxed mb-4">{{ t.desc }}</p>
              <div class="text-sm font-bold text-rl-blue flex items-center gap-1.5 group-hover:gap-3 transition-all">
                Open tool <span>&rarr;</span>
              </div>
            </NuxtLink>

            <div class="rounded-[20px] border-[1.5px] border-dashed border-slate-200 bg-slate-50 p-8 flex flex-col justify-center">
              <span class="inline-block w-fit bg-slate-100 text-slate-500 px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-[0.5px] mb-3">Coming soon</span>
              <p class="text-sm text-slate-500 leading-relaxed">
                Notice verifier, evidence packager, and counter-notice template helpers are on the roadmap.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
    <SiteFooter />
  </div>
</template>
