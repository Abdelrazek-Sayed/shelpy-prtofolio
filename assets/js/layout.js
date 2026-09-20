/**
 * Omar Shalpy Government Licensing - Unified Layout & Component Loader System
 */
(function () {
  'use strict';

  const isSubdir = window.location.pathname.includes('/pages/');
  const rootPrefix = isSubdir ? '../' : '';
  const pagePrefix = isSubdir ? '' : 'pages/';

  const HEADER_PARTIAL = `
<header class="fixed top-0 w-full z-50 bg-[#00113a]/95 backdrop-blur-md border-b border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.3)]">
  <div class="h-20 max-w-[1280px] mx-auto px-margin-mobile lg:px-margin-desktop flex items-center justify-between">
    <!-- Logo -->
    <a href="${rootPrefix}index.html" class="flex items-center gap-3 group text-decoration-none" title="Omar Shalpy Government Licensing">
      <div class="w-10 h-10 bg-gradient-to-br from-[#fed65b] to-[#d4af37] rounded-lg flex items-center justify-center shadow-md shadow-black/20 group-hover:scale-105 transition-transform">
        <span class="material-symbols-outlined text-[#00113a] text-2xl font-bold" style="font-variation-settings: 'FILL' 1;">account_balance</span>
      </div>
      <div class="flex flex-col">
        <span data-i18n="brand_title" class="font-headline-md text-headline-md text-white font-bold tracking-wider leading-none">OMAR SHALPY</span>
        <span data-i18n="brand_subtitle" class="text-[9px] font-bold text-[#fed65b] tracking-[0.22em] uppercase mt-1">GOVERNMENT LICENSING</span>
      </div>
    </a>

    <!-- Desktop Navigation Links -->
    <nav class="hidden lg:flex items-center gap-3 xl:gap-6 text-[13px] tracking-wider uppercase font-label-md whitespace-nowrap">
      <a href="${rootPrefix}index.html" class="text-white/85 hover:text-[#fed65b] font-semibold transition-colors whitespace-nowrap" data-path="home">HOME</a>
      
      <!-- Services Dropdown -->
      <div class="relative group/nav flex-shrink-0">
        <a href="${pagePrefix}services.html" class="text-white/85 hover:text-[#fed65b] font-semibold transition-colors flex items-center gap-1 whitespace-nowrap" data-path="services">
          <span>SERVICES</span>
          <span class="material-symbols-outlined text-[16px] group-hover/nav:rotate-180 transition-transform flex-shrink-0">expand_more</span>
        </a>
        <div class="absolute left-0 rtl:right-0 rtl:left-auto top-full pt-2 hidden group-hover/nav:block z-50">
          <div class="bg-[#00174a] shadow-2xl rounded-xl py-2 min-w-[240px] border border-white/15 backdrop-blur-xl flex flex-col">
            <a class="flex items-center gap-2.5 px-5 py-3 text-xs uppercase tracking-wider text-white/85 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap" data-path="our-services" href="${pagePrefix}services.html">
              <span class="material-symbols-outlined text-sm text-[#fed65b]">workspace_premium</span>
              <span>Our Services</span>
            </a>
            <a class="flex items-center gap-2.5 px-5 py-3 text-xs uppercase tracking-wider text-white/85 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap" data-path="administrative-services" href="${pagePrefix}administrative-services.html">
              <span class="material-symbols-outlined text-sm text-[#fed65b]">admin_panel_settings</span>
              <span>Administrative Services</span>
            </a>
            <a class="flex items-center gap-2.5 px-5 py-3 text-xs uppercase tracking-wider text-white/85 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap" data-path="hr-package" href="${pagePrefix}hr-package.html">
              <span class="material-symbols-outlined text-sm text-[#fed65b]">badge</span>
              <span>HR Management Package</span>
            </a>
          </div>
        </div>
      </div>

      <a href="${pagePrefix}knowledge-center.html" class="text-white/85 hover:text-[#fed65b] font-semibold transition-colors whitespace-nowrap" data-path="knowledge-center">KNOWLEDGE CENTER</a>
      <a href="${pagePrefix}blog.html" class="text-white/85 hover:text-[#fed65b] font-semibold transition-colors whitespace-nowrap" data-path="blog">BLOG</a>
      <a href="${rootPrefix}index.html#customers" class="text-white/85 hover:text-[#fed65b] font-semibold transition-colors whitespace-nowrap" data-path="customers">CUSTOMERS</a>
      <a href="${pagePrefix}about-us.html" class="text-white/85 hover:text-[#fed65b] font-semibold transition-colors whitespace-nowrap" data-path="about-us">ABOUT US</a>
      <a href="${pagePrefix}contact-modal.html" class="text-white/85 hover:text-[#fed65b] font-semibold transition-colors whitespace-nowrap" data-path="contact">CONTACT</a>
    </nav>

    <!-- Right Actions -->
    <div class="flex items-center gap-2.5 sm:gap-3">
      <!-- Language Switcher Button -->
      <button id="lang-toggle-btn" onclick="toggleLanguage()" class="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer active:scale-95 shadow-sm" title="Change Language / تغيير اللغة">
        <span class="material-symbols-outlined text-[17px] text-[#fed65b]">language</span>
        <span id="lang-btn-text">العربية</span>
      </button>

      <!-- Client Portal Button -->
      <button onclick="openClientPortalModal()" class="bg-gradient-to-r from-[#fed65b] to-[#E5C76B] hover:from-[#ffe088] hover:to-[#fed65b] text-[#00113a] font-bold text-xs uppercase tracking-wider px-3.5 sm:px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 active:scale-95 cursor-pointer">
        <span class="material-symbols-outlined text-[18px]">vpn_key</span>
        <span class="client-portal-btn-text">Client Portal</span>
      </button>

      <!-- Profile Avatar -->
      <a href="${pagePrefix}profile.html" class="relative group/avatar cursor-pointer hidden sm:flex transition-transform hover:scale-105 active:scale-95" title="Client Profile / الملف الشخصي">
        <div class="w-10 h-10 rounded-full border-2 border-[#fed65b] p-0.5 bg-[#001c4a] flex items-center justify-center overflow-hidden shadow-md group-hover:border-[#fed65b] group-hover:bg-[#002866] transition-all">
          <span class="material-symbols-outlined text-[#fed65b] text-2xl">person</span>
        </div>
        <span class="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-[#00113a] rounded-full" title="Active Verified Client"></span>
      </a>

      <!-- Mobile Hamburger Button -->
      <button id="mobile-menu-toggle" class="lg:hidden text-white hover:text-[#fed65b] p-1.5 focus:outline-none transition-colors" aria-label="Toggle Navigation">
        <span class="material-symbols-outlined text-2xl">menu</span>
      </button>
    </div>
  </div>

  <!-- Mobile Dropdown Menu -->
  <div id="mobile-dropdown-menu" class="hidden lg:hidden bg-[#00113a]/98 border-b border-white/10 px-margin-mobile py-4 space-y-3">
    <a href="${rootPrefix}index.html" class="block font-label-md text-xs uppercase tracking-wider text-white/90 hover:text-[#fed65b] py-1.5" data-path="home">HOME</a>
    <a href="${pagePrefix}services.html" class="block font-label-md text-xs uppercase tracking-wider text-white/90 hover:text-[#fed65b] py-1.5" data-path="services">SERVICES</a>
    <a href="${pagePrefix}administrative-services.html" class="block pl-4 font-label-md text-xs uppercase tracking-wider text-white/70 hover:text-[#fed65b] py-1" data-path="administrative-services">↳ Administrative Services</a>
    <a href="${pagePrefix}hr-package.html" class="block pl-4 font-label-md text-xs uppercase tracking-wider text-white/70 hover:text-[#fed65b] py-1" data-path="hr-package">↳ HR Management</a>
    <a href="${pagePrefix}knowledge-center.html" class="block font-label-md text-xs uppercase tracking-wider text-white/90 hover:text-[#fed65b] py-1.5" data-path="knowledge-center">KNOWLEDGE CENTER</a>
    <a href="${pagePrefix}blog.html" class="block font-label-md text-xs uppercase tracking-wider text-white/90 hover:text-[#fed65b] py-1.5" data-path="blog">BLOG</a>
    <a href="${rootPrefix}index.html#customers" class="block font-label-md text-xs uppercase tracking-wider text-white/90 hover:text-[#fed65b] py-1.5" data-path="customers">CUSTOMERS</a>
    <a href="${pagePrefix}about-us.html" class="block font-label-md text-xs uppercase tracking-wider text-white/90 hover:text-[#fed65b] py-1.5" data-path="about-us">ABOUT US</a>
    <a href="${pagePrefix}contact-modal.html" class="block font-label-md text-xs uppercase tracking-wider text-white/90 hover:text-[#fed65b] py-1.5" data-path="contact">CONTACT</a>
    <a href="${pagePrefix}profile.html" class="block font-label-md text-xs uppercase tracking-wider text-[#fed65b] font-bold py-2 border-t border-white/10 mt-2 flex items-center gap-2" data-path="profile">
      <span class="material-symbols-outlined text-sm">person</span>
      CLIENT PROFILE
    </a>
  </div>
</header>
  `;

  const FOOTER_PARTIAL = `
<footer class="w-full bg-primary text-on-primary pt-section-gap pb-12 mt-section-gap">
  <div class="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin-desktop">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-16">
      <div class="col-span-1 md:col-span-1">
        <div class="flex items-center gap-2 mb-6">
          <span class="material-symbols-outlined text-soft-gold">verified</span>
          <span class="font-headline-md text-headline-md text-surface-white">SHALPY</span>
        </div>
        <p class="font-body-md text-label-md text-on-primary-container leading-relaxed">Premium government relations and licensing consultancy for the visionaries of tomorrow.</p>
      </div>
      <div class="flex flex-col gap-4">
        <h4 class="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-widest">Resources</h4>
        <a class="font-body-md text-label-md text-on-primary-container hover:text-on-primary" href="${pagePrefix}knowledge-center.html">Regulatory Guide</a>
        <a class="font-body-md text-label-md text-on-primary-container hover:text-on-primary" href="${pagePrefix}knowledge-center.html">Vision 2030 FAQs</a>
        <a class="font-body-md text-label-md text-on-primary-container hover:text-on-primary" href="${pagePrefix}services.html">Investor Licensing</a>
      </div>
      <div class="flex flex-col gap-4">
        <h4 class="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-widest">Legal</h4>
        <p class="font-body-md text-label-md text-on-primary-container">CR: 10101234567</p>
        <p class="font-body-md text-label-md text-on-primary-container">VAT: 312345678900003</p>
        <a class="font-body-md text-label-md text-on-primary-container hover:text-on-primary" href="#">Privacy Policy</a>
      </div>
      <div class="flex flex-col gap-4">
        <h4 class="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-widest">Connect</h4>
        <div class="flex gap-4">
          <span class="material-symbols-outlined cursor-pointer hover:text-soft-gold">public</span>
          <span class="material-symbols-outlined cursor-pointer hover:text-soft-gold">work</span>
          <span class="material-symbols-outlined cursor-pointer hover:text-soft-gold">mail</span>
        </div>
      </div>
    </div>
    <div class="pt-8 border-t border-on-primary-fixed-variant text-center">
      <p class="font-label-sm text-label-sm text-on-primary-container">© 2024 Omar Shalpy Government Licensing. All rights reserved.</p>
    </div>
  </div>
</footer>
  `;

  // Render Layout Parts
  function initLayout() {
    // Inject Header
    let headerEl = document.getElementById('app-header') || document.querySelector('header');
    if (!headerEl) {
      headerEl = document.createElement('div');
      headerEl.id = 'app-header';
      document.body.insertAdjacentElement('afterbegin', headerEl);
    }
    headerEl.outerHTML = HEADER_PARTIAL;

    // Inject Footer
    let footerEl = document.getElementById('app-footer') || document.querySelector('footer');
    if (!footerEl) {
      footerEl = document.createElement('div');
      footerEl.id = 'app-footer';
      document.body.insertAdjacentElement('beforeend', footerEl);
    }
    footerEl.outerHTML = FOOTER_PARTIAL;

    // Highlight active link
    highlightActiveNav();

    // Dynamically include core scripts if missing
    ensureScript(`${rootPrefix}assets/js/i18n.js?v=3.0`);
    ensureScript(`${rootPrefix}assets/js/app-nav.js?v=3.0`);
  }

  function highlightActiveNav() {
    const activeNav = document.body.getAttribute('data-active-nav');
    const currentPath = window.location.pathname;

    document.querySelectorAll('nav > a[data-path], nav > .relative > a[data-path]').forEach(link => {
      const pathAttr = link.getAttribute('data-path');
      let isActive = false;

      if (activeNav) {
        isActive = (pathAttr === activeNav);
      } else {
        if (pathAttr === 'home' && (currentPath.endsWith('index.html') || currentPath.endsWith('/'))) isActive = true;
        else if (pathAttr === 'services' && currentPath.includes('services.html')) isActive = true;
        else if (pathAttr === 'knowledge-center' && currentPath.includes('knowledge-center')) isActive = true;
        else if (pathAttr === 'blog' && currentPath.includes('blog')) isActive = true;
        else if (pathAttr === 'about-us' && currentPath.includes('about-us')) isActive = true;
        else if (pathAttr === 'contact' && currentPath.includes('contact')) isActive = true;
      }

      if (isActive) {
        link.classList.add('text-[#fed65b]', 'font-bold', 'border-b-2', 'border-[#fed65b]', 'pb-1');
        link.classList.remove('text-white/85');
      } else {
        link.classList.remove('text-[#fed65b]', 'font-bold', 'border-b-2', 'border-[#fed65b]', 'pb-1');
        link.classList.add('text-white/85');
      }
    });

    if (activeNav) {
      document.querySelectorAll('nav .group\\/nav a[data-path]').forEach(subLink => {
        if (subLink.getAttribute('data-path') === activeNav) {
          subLink.classList.add('text-[#fed65b]', 'bg-white/10');
        }
      });
    }
  }

  function ensureScript(src) {
    const existing = Array.from(document.querySelectorAll('script')).find(s => s.src && s.src.includes(src.split('?')[0]));
    if (!existing) {
      const script = document.createElement('script');
      script.src = src;
      document.body.appendChild(script);
    }
  }

  // Execute synchronously on DOM parse
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLayout);
  } else {
    initLayout();
  }
})();
