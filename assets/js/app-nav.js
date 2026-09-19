// Omar Shalpy Government Licensing - Global Navigation & Interaction Controller
(function() {
  'use strict';

  const isSubdir = window.location.pathname.includes('/pages/');
  const pagePrefix = isSubdir ? '' : 'pages/';
  const rootPrefix = isSubdir ? '../' : '';

  // Define client portal modal logic
  window.openClientPortalModal = function() {
    let modal = document.getElementById('client-portal-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'client-portal-modal';
      modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fade-in';
      modal.innerHTML = `
        <div class="bg-[#00174a] border border-white/20 rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative text-white">
          <button onclick="closeClientPortalModal()" class="absolute top-4 right-4 text-white/60 hover:text-white transition-colors">
            <span class="material-symbols-outlined text-2xl">close</span>
          </button>
          
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 bg-gradient-to-br from-[#fed65b] to-[#d4af37] rounded-lg flex items-center justify-center shadow-md">
              <span class="material-symbols-outlined text-[#00113a] text-2xl font-bold">vpn_key</span>
            </div>
            <div>
              <h3 class="font-headline-md text-lg font-bold text-white leading-tight">Client Portal</h3>
              <p class="text-xs text-[#fed65b] uppercase tracking-wider font-semibold">Government Relations & Licensing</p>
            </div>
          </div>
          
          <p class="text-xs text-white/70 mb-5 leading-relaxed">
            Enter your Saudi Commercial Registration (CR) or MISA Investor License ID to access live case files and track ministry submissions.
          </p>
          
          <form onsubmit="handlePortalLogin(event)" class="space-y-4">
            <div>
              <label class="block text-[11px] font-semibold text-white/80 uppercase tracking-wider mb-1.5">CR or Investor License ID</label>
              <input type="text" required placeholder="e.g. 1010123456" class="w-full bg-[#00113a] border border-white/20 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#fed65b] transition-colors" />
            </div>
            <div>
              <label class="block text-[11px] font-semibold text-white/80 uppercase tracking-wider mb-1.5">Authorized Access PIN</label>
              <input type="password" required placeholder="••••••••" class="w-full bg-[#00113a] border border-white/20 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#fed65b] transition-colors" />
            </div>
            <button type="submit" class="w-full mt-2 bg-gradient-to-r from-[#fed65b] to-[#E5C76B] hover:from-[#ffe088] hover:to-[#fed65b] text-[#00113a] font-bold text-xs uppercase tracking-wider py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2">
              <span class="material-symbols-outlined text-sm">login</span>
              Access Licensing Portal
            </button>
          </form>
          
          <div id="portal-msg" class="hidden mt-4 p-3 bg-emerald-950/80 border border-emerald-500/50 rounded-lg text-emerald-300 text-xs text-center font-medium">
            Authenticated successfully. Redirecting to active cases...
          </div>
        </div>
      `;
      document.body.appendChild(modal);
    }
    modal.classList.remove('hidden');
    modal.style.display = 'flex';
  };

  window.closeClientPortalModal = function() {
    const modal = document.getElementById('client-portal-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.style.display = 'none';
    }
  };

  window.handlePortalLogin = function(e) {
    e.preventDefault();
    const msg = document.getElementById('portal-msg');
    if (msg) {
      msg.classList.remove('hidden');
      setTimeout(() => {
        alert('Welcome to the Omar Shalpy Client Portal. Your current government licensing files are up to date.');
        closeClientPortalModal();
        msg.classList.add('hidden');
        window.location.href = pagePrefix + 'profile.html';
      }, 1000);
    }
  };

  function initGlobalNavigation() {
    // 1. Mobile menu toggle
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-dropdown-menu');
    if (toggleBtn && mobileMenu) {
      toggleBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        mobileMenu.classList.toggle('hidden');
      });
      document.addEventListener('click', function(e) {
        if (!mobileMenu.contains(e.target) && e.target !== toggleBtn) {
          mobileMenu.classList.add('hidden');
        }
      });
    }

    // 2. Intelligent link wiring
    const routeMappings = {
      'home': rootPrefix + 'index.html',
      'services': pagePrefix + 'services.html',
      'our-services': pagePrefix + 'services.html',
      'administrative-services': pagePrefix + 'administrative-services.html',
      'hr-package': pagePrefix + 'hr-package.html',
      'knowledge-center': pagePrefix + 'knowledge-center.html',
      'blog': pagePrefix + 'blog.html',
      'article-detail': pagePrefix + 'article-detail.html',
      'customers': rootPrefix + 'index.html#customers',
      'about-us': pagePrefix + 'about-us.html',
      'contact': pagePrefix + 'contact-modal.html',
      'profile': pagePrefix + 'profile.html'
    };

    document.querySelectorAll('[data-path]').forEach(el => {
      const path = el.getAttribute('data-path');
      if (routeMappings[path]) {
        el.setAttribute('href', routeMappings[path]);
      }
    });

    // 3. Connect interactive buttons & links across pages
    document.querySelectorAll('button, a').forEach(el => {
      const text = (el.textContent || '').trim().toLowerCase();
      const href = el.getAttribute('href');

      // Consultations and contact
      if (text.includes('book free consultation') || text.includes('free consultation') || text.includes('open executive request')) {
        el.addEventListener('click', function(e) {
          if (!href || href === '#' || href.startsWith('javascript:')) {
            e.preventDefault();
            window.location.href = pagePrefix + 'contact-modal.html';
          }
        });
      }
      // Service exploration
      else if (text.includes('explore licensing solutions') || text.includes('explore services') || text.includes('view all services')) {
        el.addEventListener('click', function(e) {
          if (!href || href === '#' || href.startsWith('javascript:')) {
            e.preventDefault();
            window.location.href = pagePrefix + 'services.html';
          }
        });
      }
      // Administrative services
      else if (text.includes('administrative services') && el.tagName === 'A' && (!href || href === '#')) {
        el.setAttribute('href', pagePrefix + 'administrative-services.html');
      }
      // HR Package
      else if (text.includes('hr management') && el.tagName === 'A' && (!href || href === '#')) {
        el.setAttribute('href', pagePrefix + 'hr-package.html');
      }
      // Blog / Articles
      else if ((text.includes('read full article') || text.includes('read article') || text.includes('read insight')) && (!href || href === '#')) {
        el.setAttribute('href', pagePrefix + 'article-detail.html');
      }
      // Regulatory guide / FAQs in footers
      else if (text.includes('regulatory guide') || text.includes('vision 2030 faqs') || text.includes('investor licensing')) {
        if (el.tagName === 'A' && (!href || href === '#')) {
          el.setAttribute('href', pagePrefix + 'knowledge-center.html');
        }
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGlobalNavigation);
  } else {
    initGlobalNavigation();
  }
})();
