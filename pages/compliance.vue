<script setup lang="ts">
useSeo({
  title: 'Legal & Compliance: DMCA Authorization, UK Copyright Law, GDPR | Copyright Abuses',
  description: 'How copyright takedowns are sent lawfully: rights-holder authorization on demand, UK/IE copyright statute (CDPA 1988, CRRA 2000), and UK/EU GDPR posture for content identification.',
  path: '/compliance',
})

const authorizationFacts = [
  'Every enforcement action is backed by a written mandate from the rights-holder (or their authorized representative) covering the specific work, jurisdiction, and time window.',
  'Mandates are versioned and timestamped. Scope changes (new competitions, new territories, expiry) are tracked.',
  'On demand, we produce the chain-of-authorization documentation to the platform, intermediary, host, ISP, regulator, or court that requests it.',
  'A platform that has received a notice and wants proof of mandate can request it through the contact channel below. Same-day turnaround for active enforcement.',
]

const ukLawPoints = [
  { ref: 'CDPA 1988', body: 'Copyright, Designs and Patents Act 1988, the primary UK statute. Notices identify the specific work, the exclusive right asserted (e.g. communication to the public, s.20), and the infringing material.' },
  { ref: 'CRRA 2000 (IE)', body: 'Copyright and Related Rights Act 2000, the Irish equivalent for cross-border enforcement involving Ireland.' },
  { ref: 'DMCA § 512 (US)', body: 'For US-hosted material or US-based intermediaries, notices follow the form and substance requirements of 17 U.S.C. § 512(c)(3), including the "good-faith belief" and authorization statements.' },
  { ref: 'DSA (EU)', body: 'Where the EU Digital Services Act applies to the recipient, notice content also satisfies Art. 16 form requirements.' },
]

const gdprAnchors = [
  { label: 'Art. 4(14)', body: 'The processing outcome is a <strong class="text-slate-900">content match</strong>, not a person match. It is therefore not biometric data within the meaning of UK/EU GDPR Art. 4(14).' },
  { label: 'Art. 9', body: 'Because no special-category data is processed, no Art. 9 condition is required.' },
  { label: 'Art. 6(1)(f)', body: 'The lawful basis for processing is <strong class="text-slate-900">legitimate interests in IP enforcement</strong>, balanced against the rights of any data subject incidentally captured.' },
  { label: 'Recital 51', body: 'Aligned with the GDPR&apos;s Recital 51 framing of biometric data, which the content-identification pipeline does not engage.' },
  { label: 'ICO 2025', body: 'Aligned with ICO 2025 guidance on biometric and facial-recognition technologies, none of which are used.' },
  { label: 'EDPB', body: 'Aligned with EDPB guidance on facial recognition; the pipeline contains no facial-recognition stage.' },
]

const matchSignals = [
  { kind: 'Visual chrome', detail: 'Broadcaster logos and on-screen channel bugs' },
  { kind: 'On-pitch signals', detail: 'Team jerseys, pitch colors, and other on-field visual cues' },
  { kind: 'Advertising', detail: 'Pitch-side advertising-board OCR' },
  { kind: 'Audio', detail: 'Audio language, commentary and subtitle correlation' },
  { kind: 'Stream', detail: 'Stream quality, codec, and per-frame CMYK profile' },
]

const notDone = [
  'Facial recognition',
  'Biometric identification of natural persons',
  'Profiling of viewers, subscribers, or any natural person',
  'Special-category data processing under GDPR Art. 9',
]
</script>

<template>
  <div class="bg-white min-h-screen">
    <SiteNavbar />
    <main id="main">

      <!-- HERO (dark) -->
      <section class="relative bg-rl-deep overflow-hidden py-20 lg:py-24 px-5 md:px-8 lg:px-16" aria-labelledby="compliance-heading">
        <div class="absolute inset-0 pointer-events-none" style="background-image:linear-gradient(rgba(255,255,255,0.018)1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.018)1px,transparent 1px);background-size:80px 80px" aria-hidden="true" />
        <div class="absolute top-[-30%] right-1/3 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(0,102,255,0.06)_0%,transparent_65%)] pointer-events-none" aria-hidden="true" />

        <div class="relative z-10 max-w-[920px] mx-auto">
          <div class="text-xs uppercase tracking-[2px] font-bold text-[#4d9fff] mb-4">Legal &amp; compliance</div>
          <h1 id="compliance-heading" class="text-[36px] md:text-[48px] lg:text-[56px] font-black leading-[1.05] tracking-[-2px] text-white mb-5">
            How takedowns are sent, and the legal framework behind them.
          </h1>
          <p class="text-base lg:text-lg text-white/55 leading-relaxed max-w-[720px]">
            Copyright enforcement is only legitimate when three things are true: the sender is authorized to act on behalf of the rights-holder, the notice is grounded in a real cause of action, and the underlying processing complies with data-protection law. This page explains how Randy labs satisfies each of those tests.
          </p>
        </div>
      </section>

      <!-- AUTHORIZATION (light) -->
      <section class="py-16 lg:py-24 px-5 md:px-8 lg:px-16 bg-[#fafbfc]" aria-labelledby="auth-heading">
        <div class="max-w-[1200px] mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
          <div>
            <div class="text-xs uppercase tracking-[2px] font-bold text-rl-blue mb-4">Authorization</div>
            <h2 id="auth-heading" class="text-[26px] md:text-[34px] font-black tracking-tight leading-[1.15] mb-5">
              We act only on behalf of rights-holders, and we can prove it on demand.
            </h2>
            <p class="text-[15px] leading-relaxed text-slate-500">
              A takedown notice from an unauthorized party is itself a legal problem (see <a href="https://www.law.cornell.edu/uscode/text/17/512" target="_blank" rel="noopener" class="text-slate-900 hover:text-rl-blue underline underline-offset-2">17 U.S.C. § 512(f)</a> in the US, and equivalent misrepresentation rules in the UK and EU). The first question any responsible enforcement program has to answer is: <em>who authorized you to send this?</em>
            </p>
          </div>

          <ul class="space-y-3">
            <li
              v-for="(fact, i) in authorizationFacts"
              :key="i"
              class="flex gap-3 bg-white border border-slate-200 rounded-[14px] p-5"
            >
              <span class="shrink-0 w-7 h-7 rounded-md bg-rl-blue/10 border border-rl-blue/20 flex items-center justify-center text-xs font-extrabold text-rl-blue">{{ i + 1 }}</span>
              <span class="text-[14px] leading-relaxed text-slate-600">{{ fact }}</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- STATUTES (light) -->
      <section class="py-16 lg:py-24 px-5 md:px-8 lg:px-16" aria-labelledby="statute-heading">
        <div class="max-w-[1200px] mx-auto">
          <div class="mb-12 max-w-[760px]">
            <div class="text-xs uppercase tracking-[2px] font-bold text-rl-blue mb-4">Statutes</div>
            <h2 id="statute-heading" class="text-[26px] md:text-[34px] font-black tracking-tight leading-[1.15] mb-4">
              The substantive law a notice has to satisfy.
            </h2>
            <p class="text-[15px] leading-relaxed text-slate-500">
              Different recipients sit under different statutes. Notices are drafted to the law that actually applies to the recipient and the territory of the infringement, not to a generic template.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <article
              v-for="p in ukLawPoints"
              :key="p.ref"
              class="rounded-[14px] border border-slate-200 bg-white p-6"
            >
              <div class="text-[11px] uppercase tracking-[1.5px] font-bold text-rl-blue mb-2">{{ p.ref }}</div>
              <p class="text-[14px] leading-relaxed text-slate-600">{{ p.body }}</p>
            </article>
          </div>
        </div>
      </section>

      <!-- GDPR (light) -->
      <section class="py-16 lg:py-24 px-5 md:px-8 lg:px-16 bg-[#fafbfc]" aria-labelledby="gdpr-heading">
        <div class="max-w-[1200px] mx-auto">
          <div class="mb-12 max-w-[760px]">
            <div class="text-xs uppercase tracking-[2px] font-bold text-rl-blue mb-4">UK / EU GDPR posture</div>
            <h2 id="gdpr-heading" class="text-[26px] md:text-[34px] font-black tracking-tight leading-[1.15] mb-4">
              We identify the match, not any person.
            </h2>
            <p class="text-[15px] leading-relaxed text-slate-500">
              Anti-piracy detection is sometimes assumed to involve facial recognition or viewer profiling. It does not, at any stage of our pipeline. The processing outcome is a <strong class="text-slate-900">content match</strong>: a determination that a given stream is a particular protected broadcast. It is not a determination about any natural person.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <article
              v-for="g in gdprAnchors"
              :key="g.label"
              class="rounded-[14px] border border-slate-200 bg-white p-6"
            >
              <div class="text-[11px] uppercase tracking-[1.5px] font-bold text-rl-blue mb-2">{{ g.label }}</div>
              <p class="text-[14px] leading-relaxed text-slate-600" v-html="g.body" />
            </article>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div class="rounded-[20px] border border-slate-200 bg-white p-7">
              <h3 class="text-sm font-extrabold tracking-tight text-slate-900 mb-4">
                Signals used to identify a match
              </h3>
              <ul class="space-y-2.5">
                <li v-for="s in matchSignals" :key="s.kind" class="text-[13px] leading-relaxed">
                  <span class="text-rl-blue font-semibold">{{ s.kind }}</span>
                  <span class="text-slate-500">: {{ s.detail }}</span>
                </li>
              </ul>
              <p class="text-[11px] text-slate-400 italic mt-4 pt-4 border-t border-slate-100">
                All signals are derived from the broadcast stream itself, not from anyone watching it.
              </p>
            </div>
            <div class="rounded-[20px] border border-slate-200 bg-white p-7">
              <h3 class="text-sm font-extrabold tracking-tight text-slate-900 mb-4">
                What the pipeline does not do
              </h3>
              <ul class="space-y-2">
                <li v-for="n in notDone" :key="n" class="flex gap-2 text-[13px] leading-relaxed text-slate-600">
                  <span class="text-slate-300 shrink-0">&times;</span>
                  <span>{{ n }}</span>
                </li>
              </ul>
              <p class="text-[11px] text-slate-400 italic mt-4 pt-4 border-t border-slate-100">
                Proportionate, purpose-limited, and aligned with UK and EU data-protection law.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- HOW TO REQUEST (light) -->
      <section class="py-16 lg:py-24 px-5 md:px-8 lg:px-16" aria-labelledby="requests-heading">
        <div class="max-w-[1200px] mx-auto">
          <div class="mb-12 max-w-[760px]">
            <div class="text-xs uppercase tracking-[2px] font-bold text-rl-blue mb-4">Legitimate requests</div>
            <h2 id="requests-heading" class="text-[26px] md:text-[34px] font-black tracking-tight leading-[1.15]">
              How to ask for proof of mandate, file a counter-notice, or contact us.
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <article class="rounded-[20px] border border-slate-200 bg-white p-7">
              <div class="text-[11px] uppercase tracking-[1.5px] font-bold text-rl-blue mb-2">Platforms &amp; intermediaries</div>
              <h3 class="text-base font-extrabold tracking-tight text-slate-900 mb-3">Authorization proof</h3>
              <p class="text-[13px] text-slate-500 leading-relaxed mb-4">
                If you have received a notice and want to verify the chain of authorization before acting, request the mandate documentation. Reference the notice ID in your request.
              </p>
              <img src="/images/email-legal.png" alt="legal email address" class="h-5 w-auto select-none pointer-events-none" draggable="false" />
            </article>

            <article class="rounded-[20px] border border-slate-200 bg-white p-7">
              <div class="text-[11px] uppercase tracking-[1.5px] font-bold text-rl-blue mb-2">Notice recipients</div>
              <h3 class="text-base font-extrabold tracking-tight text-slate-900 mb-3">Counter-notice / rebuttal</h3>
              <p class="text-[13px] text-slate-500 leading-relaxed mb-4">
                If your content was removed and you believe the takedown was a mistake or misidentification, you can submit a counter-notice. We respond to all counter-notices on the merits, not by default.
              </p>
              <img src="/images/email-abuse.png" alt="counter-notice email address" class="h-5 w-auto select-none pointer-events-none" draggable="false" />
            </article>

            <article class="rounded-[20px] border border-slate-200 bg-white p-7">
              <div class="text-[11px] uppercase tracking-[1.5px] font-bold text-rl-blue mb-2">Regulators &amp; courts</div>
              <h3 class="text-base font-extrabold tracking-tight text-slate-900 mb-3">Formal correspondence</h3>
              <p class="text-[13px] text-slate-500 leading-relaxed mb-4">
                Regulators, ICO, EDPB-coordinated authorities, and courts can reach Randy labs at the address below. We provide formal responses within statutory deadlines.
              </p>
              <img src="/images/email-legal.png" alt="legal email address" class="h-5 w-auto select-none pointer-events-none" draggable="false" />
            </article>
          </div>
        </div>
      </section>

      <!-- DISCLAIMER (light) -->
      <section class="border-t border-slate-100 bg-[#fafbfc] py-10 px-5 md:px-8 lg:px-16">
        <div class="max-w-[920px] mx-auto text-center">
          <p class="text-[12px] text-slate-400 leading-relaxed">
            This page is an informational summary of how Randy labs operates as a copyright enforcement agent on behalf of rights-holders. It is not legal advice and is not a substitute for consulting qualified counsel. Statutory citations are simplified for readability. Refer to the original instruments for authoritative text.
          </p>
        </div>
      </section>

    </main>
    <SiteFooter />
  </div>
</template>
