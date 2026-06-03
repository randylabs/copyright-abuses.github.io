<template>
  <footer class="border-t border-slate-100 bg-white">
    <div class="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-16 pt-14 pb-8">
      <div class="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-12 mb-10">
        <div>
          <NuxtLink to="/" class="inline-block mb-3 font-bold text-[16px] tracking-tight leading-none text-slate-900" aria-label="copyright-abuses.com home">
            copyright-abuses<span class="text-slate-400 font-medium">.com</span>
          </NuxtLink>
          <p class="text-[13px] text-slate-500 leading-relaxed max-w-sm">
            A <a href="https://randylabs.com" target="_blank" rel="noopener" class="text-slate-700 hover:text-rl-blue underline-offset-2 hover:underline">Randy labs</a> domain documenting the authorization, detection technology, and legal basis for the copyright takedown notices issued by Randy labs. Not legal advice.
          </p>
        </div>

        <div>
          <h4 class="text-[11px] uppercase tracking-[1.5px] text-slate-400 font-semibold mb-4">Site</h4>
          <NuxtLink to="/" class="block text-sm text-slate-500 hover:text-rl-blue py-1 transition-colors">Home</NuxtLink>
          <NuxtLink to="/#notices" class="block text-sm text-slate-500 hover:text-rl-blue py-1 transition-colors">If you got a notice</NuxtLink>
          <NuxtLink to="/compliance" class="block text-sm text-slate-500 hover:text-rl-blue py-1 transition-colors">Legal &amp; compliance</NuxtLink>
          <NuxtLink to="/tools" class="block text-sm text-slate-500 hover:text-rl-blue py-1 transition-colors">Tools</NuxtLink>
        </div>

        <div>
          <h4 class="text-[11px] uppercase tracking-[1.5px] text-slate-400 font-semibold mb-4">Operated by</h4>
          <a href="https://randylabs.com" target="_blank" rel="noopener" class="block text-sm text-slate-500 hover:text-rl-blue py-1 transition-colors">Randy labs &rarr;</a>
          <a href="https://www.linkedin.com/company/randy-labs/" target="_blank" rel="noopener" class="block text-sm text-slate-500 hover:text-rl-blue py-1 transition-colors">LinkedIn &rarr;</a>
        </div>
      </div>

      <div class="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-slate-100">
        <p class="text-xs text-slate-400">
          &copy; {{ new Date().getFullYear() }} Randy labs. Information on this site is provided for general understanding only and does not constitute legal advice.
        </p>
      </div>
    </div>
  </footer>
</template>
