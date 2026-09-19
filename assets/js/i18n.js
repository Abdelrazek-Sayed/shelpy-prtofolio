// Omar Shalpy Government Licensing - Internationalization & Animation Controller (AR / EN)
(function() {
  'use strict';

  const translations = {
    en: {
      brand_title: 'OMAR SHALPY',
      brand_subtitle: 'GOVERNMENT LICENSING',
      nav_home: 'HOME',
      nav_services: 'SERVICES',
      nav_our_services: 'Our Services',
      nav_admin_services: 'Administrative Services',
      nav_hr_package: 'HR Management Package',
      nav_knowledge: 'KNOWLEDGE CENTER',
      nav_blog: 'BLOG',
      nav_customers: 'CUSTOMERS',
      nav_about: 'ABOUT US',
      nav_contact: 'CONTACT',
      nav_profile: 'CLIENT PROFILE',
      client_portal: 'Client Portal',
      lang_toggle: 'العربية',
      
      // Portal Modal
      portal_title: 'Client Portal',
      portal_sub: 'Government Relations & Licensing',
      portal_desc: 'Enter your Saudi Commercial Registration (CR) or MISA Investor License ID to access live case files and track ministry submissions.',
      portal_id_label: 'CR or Investor License ID',
      portal_pin_label: 'Authorized Access PIN',
      portal_btn: 'Access Licensing Portal',
      portal_success: 'Authenticated successfully. Redirecting to active cases...',
      portal_alert: 'Welcome to the Omar Shalpy Client Portal. Your current government licensing files are up to date.',

      // Hero Elements
      home_badge: 'Vision 2030 Aligned',
      home_title_html: 'Mastering Regulatory Complexity for <span class="gold-shimmer-text">Global Visionaries</span>.',
      home_subtitle: 'Premium government relations and licensing consultancy. We navigate the intricacies of Saudi Arabian regulations so you can focus on scale, innovation, and market dominance.',
      btn_explore_licensing: 'Explore Licensing Solutions',
      btn_case_studies: 'View Case Studies',
      cust_badge: 'PARTNERS IN SUCCESS • شركاء النجاح',
      cust_title: 'Trusted by Premier Enterprises & <span class="gold-shimmer-text">Global Investors</span>',
      cust_subtitle: 'Over 200+ multinational firms, investment funds, and industrial leaders rely on Omar Shalpy for licensing agility and ministerial mastery in Saudi Arabia.',
      cust_tab_all: 'All Partners (All)',
      cust_tab_rhq: 'Investment & RHQ',
      cust_tab_infra: 'Mega-Projects & Infra',
      cust_tab_tech: 'Tech & Innovation',
      cust_verified_partners: 'INTER-MINISTERIAL ACCREDITATIONS & CLIENT CONSORTIUMS',


      // Knowledge Center Page
      kc_badge: 'Strategic Intelligence',
      kc_title_html: 'Curated Intelligence & <span class="gold-shimmer-text">Regulatory Knowledge</span>',
      kc_subtitle: 'Navigate the Saudi regulatory landscape with confidence. Access our curated repository of thought leadership, legislative updates, and strategic insights designed for high-growth enterprises and international investors.',
      kc_total_res: 'Total Resources',

      // Services Page
      services_badge: 'Executive Advisory',
      services_title_html: 'Saudi Arabia\'s Premier Partner for <span class="gold-shimmer-text">Government Licensing</span>',
      services_subtitle: 'Simplifying complex regulatory landscapes for businesses in every sector. We provide tailored solutions for your business setup and government licensing from concept to completion.',

      // About Us
      about_badge: 'Company Profile',
      about_title_html: 'Our Legacy of Institutional Trust & <span class="gold-shimmer-text">Visionary Leadership</span>',
      about_subtitle: 'Empowering visionaries and investors to navigate the Kingdom\'s regulatory landscape with precision, transparency, and executive-level expertise.',

      // Contact Page
      contact_badge: 'Liaison Directorate • Kingdom of Saudi Arabia',
      contact_title_html: 'Diplomatic & Corporate <span class="gold-shimmer-text">Advisory Channels</span>',
      contact_subtitle: 'Direct administrative conduits to the Ministry of Investment (MISA), Ministry of Commerce, and ZATCA through our central Riyadh headquarters.',

      // Stats
      stat_1_label: 'EXECUTIVE SUPPORT',
      stat_2_label: 'COMPLIANCE RATE',
      stat_3_label: 'LICENSES SECURED',
      stat_4_label: 'YEARS EXPERTISE'
    },

    ar: {
      brand_title: 'عمر شلبي',
      brand_subtitle: 'حلول التراخيص الحكومية',
      nav_home: 'الرئيسية',
      nav_services: 'الخدمات',
      nav_our_services: 'خدماتنا',
      nav_admin_services: 'الخدمات الإدارية',
      nav_hr_package: 'باقة إدارة الموارد البشرية',
      nav_knowledge: 'مركز المعرفة',
      nav_blog: 'المدونة',
      nav_customers: 'عملاؤنا',
      nav_about: 'من نحن',
      nav_contact: 'تواصل معنا',
      nav_profile: 'الملف الشخصي',
      client_portal: 'بوابة العملاء',
      lang_toggle: 'English',
      
      // Portal Modal
      portal_title: 'بوابة العملاء',
      portal_sub: 'العلاقات الحكومية والتراخيص',
      portal_desc: 'أدخل رقم السجل التجاري السعودي أو رقم ترخيص وزارة الاستثمار (MISA) للاطلاع على المعاملات ومتابعة التقديمات لدى الوزارات.',
      portal_id_label: 'رقم السجل التجاري أو ترخيص المستثمر',
      portal_pin_label: 'رمز الدخول المعتمد',
      portal_btn: 'دخول بوابة التراخيص',
      portal_success: 'تم التحقق بنجاح. جاري تحويلك إلى الملفات النشطة...',
      portal_alert: 'مرحباً بك في بوابة عملاء عمر شلبي. جميع ملفات التراخيص الحكومية الخاصة بك محدثة.',

      // Hero Elements
      home_badge: 'متوافق مع رؤية المملكة 2030',
      home_title_html: 'ريادة حلول التراخيص والأنظمة الحكومية <span class="gold-shimmer-text">لنخبة المستثمرين</span>',
      home_subtitle: 'استشارات متخصصة في العلاقات الحكومية وتأسيس الأعمال في المملكة العربية السعودية، لتمكين أعمالكم من التوسع والنمو بأمان تشريعي متكامل.',
      btn_explore_licensing: 'استكشف حلول التراخيص',
      btn_case_studies: 'استعراض دراسات الحالة',
      cust_badge: 'شركاء النجاح • PARTNERS IN SUCCESS',
      cust_title: 'ثقة نخبة الشركات والمستثمرين <span class="gold-shimmer-text">العالميين</span>',
      cust_subtitle: 'أكثر من 200 شركة متعددة الجنسيات وصناديق استثمارية ومجموعات صناعية تعتمد على عمر شلبي في إصدار التراخيص وتيسير الموافقات الحكومية في المملكة.',
      cust_tab_all: 'جميع الشركاء (الكل)',
      cust_tab_rhq: 'الاستثمار والمقرات الإقليمية',
      cust_tab_infra: 'المشاريع الكبرى والبنية التحتية',
      cust_tab_tech: 'التقنية والابتكار',
      cust_verified_partners: 'الاعتمادات الوزارية وكونسورتيوم العملاء المعتمدين',


      // Knowledge Center Page
      kc_badge: 'المعرفة الاستراتيجية',
      kc_title_html: 'مركز المعرفة والأنظمة <span class="gold-shimmer-text">التشريعية المعتمدة</span>',
      kc_subtitle: 'تصفح المنظومة التنظيمية والتشريعية في المملكة العربية السعودية بكل ثقة. نوفر لكم دليلاً شاملاً من الرؤى القانونية، التحديثات التشريعية، والاستراتيجيات المصممة للمستثمرين والشركات العالمية.',
      kc_total_res: 'إجمالي المراجع المعتمدة',

      // Services Page
      services_badge: 'الاستشارات التنفيذية',
      services_title_html: 'شريكك الأول في استخراج التراخيص وتأسيس الشركات <span class="gold-shimmer-text">بالمملكة</span>',
      services_subtitle: 'تيسير المتطلبات التنظيمية المعقدة في كافة القطاعات الاقتصادية. نقدم حلولاً متكاملة تبدأ من دراسة الجدوى التنظيمية وحتى إصدار التراخيص النهائية.',

      // About Us
      about_badge: 'الملف التعريفي للشركة',
      about_title_html: 'مسيرة من الثقة المؤسسية والريادة في <span class="gold-shimmer-text">الأنظمة الحكومية</span>',
      about_subtitle: 'تمكين رواد الأعمال والمستثمرين العالميين من خوض البيئة التنظيمية السعودية بدقة واحترافية استشارية متقدمة.',

      // Contact Page
      contact_badge: 'الإدارة الدبلوماسية والاستشارية • المملكة العربية السعودية',
      contact_title_html: 'قنوات التواصل الاستشاري والتنفيذي <span class="gold-shimmer-text">المباشر</span>',
      contact_subtitle: 'قنوات اتصال مباشرة وموثوقة مع وزارة الاستثمار (MISA)، وزارة التجارة، وهيئة الزكاة والضريبة والجمارك من خلال مقرنا الرئيسي بالرياض.',

      // Stats
      stat_1_label: 'دعم تنفيذي متواصل',
      stat_2_label: 'نسبة الامتثال التنظيمي',
      stat_3_label: 'ترخيصاً حكومياً منجزاً',
      stat_4_label: 'عاماً من الخبرة والريادة'
    }
  };

  const phraseReplacements = [
    { en: 'Book Free Consultation', ar: 'احجز استشارة مجانية' },
    { en: 'Explore Services', ar: 'استكشف الخدمات' },
    { en: 'Explore Licensing Solutions', ar: 'استكشف حلول التراخيص' },
    { en: 'View Case Studies', ar: 'استعراض دراسات الحالة' },
    { en: 'Strategic Intelligence', ar: 'المعرفة الاستراتيجية' },
    { en: 'Vision 2030 Aligned', ar: 'متوافق مع رؤية المملكة 2030' },
    { en: 'Total Resources', ar: 'إجمالي المراجع المعتمدة' },
    { en: 'Company Profile', ar: 'الملف التعريفي للشركة' },
    { en: 'Client Portal', ar: 'بوابة العملاء' },
    { en: 'Since 1991', ar: 'منذ عام 1991' },
    { en: 'Open Executive Request', ar: 'تقديم طلب تنفيذي' },
    { en: 'All', ar: 'الكل' },
    { en: 'Regulatory Guide', ar: 'دليل الأنظمة' },
    { en: 'Vision 2030 FAQs', ar: 'أسئلة شائعة حول الرؤية' },
    { en: 'Investor Licensing', ar: 'تراخيص المستثمرين' },
    { en: 'Privacy Policy', ar: 'سياسة الخصوصية' },
    { en: 'Our Legacy of Excellence', ar: 'مسيرتنا من التميز' },
    { en: 'Insights & Regulatory Updates', ar: 'أحدث الرؤى والتحديثات التنظيمية' },
    { en: 'EXECUTIVE SUPPORT', ar: 'دعم تنفيذي متواصل' },
    { en: 'COMPLIANCE RATE', ar: 'نسبة الامتثال التنظيمي' },
    { en: 'LICENSES SECURED', ar: 'ترخيصاً حكومياً منجزاً' },
    { en: 'YEARS EXPERTISE', ar: 'عاماً من الخبرة والريادة' }
  ];

  function getSavedLanguage() {
    return localStorage.getItem('omar_shalpy_lang') || 'en';
  }

  function setLanguage(lang) {
    localStorage.setItem('omar_shalpy_lang', lang);
    applyLanguage(lang);
  }

  window.toggleLanguage = function() {
    const current = getSavedLanguage();
    const target = current === 'en' ? 'ar' : 'en';
    setLanguage(target);
  };

  function applyLanguage(lang) {
    const html = document.documentElement;
    const isAr = (lang === 'ar');
    const t = translations[lang] || translations.en;

    // 1. Set document direction and language code
    html.lang = lang;
    html.dir = isAr ? 'rtl' : 'ltr';

    // 2. Language toggle button text
    const langBtnText = document.getElementById('lang-btn-text');
    if (langBtnText) {
      langBtnText.textContent = t.lang_toggle;
    }

    // 3. Header branding
    const brandTitle = document.querySelector('header [data-i18n="brand_title"]');
    if (brandTitle) brandTitle.textContent = t.brand_title;

    const brandSubtitle = document.querySelector('header [data-i18n="brand_subtitle"]');
    if (brandSubtitle) brandSubtitle.textContent = t.brand_subtitle;

    // 4. Header nav links
    const navItems = {
      'home': t.nav_home,
      'services': t.nav_services,
      'our-services': t.nav_our_services,
      'administrative-services': t.nav_admin_services,
      'hr-package': t.nav_hr_package,
      'knowledge-center': t.nav_knowledge,
      'blog': t.nav_blog,
      'customers': t.nav_customers,
      'about-us': t.nav_about,
      'contact': t.nav_contact,
      'profile': t.nav_profile
    };

    document.querySelectorAll('header [data-path]').forEach(el => {
      const p = el.getAttribute('data-path');
      if (navItems[p]) {
        const icon = el.querySelector('.material-symbols-outlined');
        if (icon) {
          const iconClone = icon.cloneNode(true);
          el.textContent = navItems[p] + ' ';
          el.appendChild(iconClone);
        } else {
          el.textContent = navItems[p];
        }
      }
    });

    // 5. Client Portal button text
    document.querySelectorAll('.client-portal-btn-text').forEach(el => {
      el.textContent = t.client_portal;
    });

    // 6. Wider Hero Title & Subtitle
    const path = window.location.pathname.toLowerCase();
    const mainH1 = document.querySelector('main h1');
    const mainP = document.querySelector('main section p');
    const heroContainer = document.querySelector('main section .max-w-2xl');
    if (heroContainer) {
      heroContainer.classList.remove('max-w-2xl');
      heroContainer.classList.add('hero-wide-container');
    }

    if (mainH1) {
      mainH1.classList.add('hero-title-text');
      if (path.includes('knowledge-center')) {
        mainH1.innerHTML = t.kc_title_html;
        if (mainP) mainP.textContent = t.kc_subtitle;
      } else if (path.includes('services')) {
        mainH1.innerHTML = t.services_title_html;
        if (mainP) mainP.textContent = t.services_subtitle;
      } else if (path.includes('about-us')) {
        mainH1.innerHTML = t.about_title_html;
        if (mainP) mainP.textContent = t.about_subtitle;
      } else if (path.includes('contact')) {
        mainH1.innerHTML = t.contact_title_html;
        if (mainP) mainP.textContent = t.contact_subtitle;
      } else if (path.endsWith('/') || path.includes('index') || path.includes('home')) {
        mainH1.innerHTML = t.home_title_html;
        if (mainP) mainP.textContent = t.home_subtitle;
      }
    }

    // 7. Hero action buttons with icons
    document.querySelectorAll('button, a').forEach(el => {
      const text = el.textContent.trim();
      if (text.includes('Explore Licensing Solutions') || text.includes('استكشف حلول التراخيص')) {
        const icon = el.querySelector('.material-symbols-outlined');
        el.innerHTML = t.btn_explore_licensing + (icon ? ` <span class="material-symbols-outlined text-[20px] rtl-flip-icon group-hover:translate-x-1 transition-transform">arrow_forward</span>` : '');
      } else if (text.includes('View Case Studies') || text.includes('استعراض دراسات الحالة')) {
        el.textContent = t.btn_case_studies;
      } else if (text.includes('Vision 2030 Aligned') || text.includes('متوافق مع رؤية المملكة 2030')) {
        el.textContent = t.home_badge;
      }
    });

    // 8. General phrase replacements
    phraseReplacements.forEach(item => {
      const fromText = isAr ? item.en : item.ar;
      const toText = isAr ? item.ar : item.en;

      document.querySelectorAll('button, a, span, h4, h3, p').forEach(node => {
        if (node.children.length === 0 && node.textContent.trim() === fromText) {
          node.textContent = toText;
        }
      });
    });

    
    // Customer Carousel Elements
    const custBadge = document.querySelector('[data-i18n="cust_badge"]');
    if (custBadge && t.cust_badge) custBadge.textContent = t.cust_badge;

    const custTitle = document.querySelector('[data-i18n="cust_title"]');
    if (custTitle && t.cust_title) custTitle.innerHTML = t.cust_title;

    const custSub = document.querySelector('[data-i18n="cust_subtitle"]');
    if (custSub && t.cust_subtitle) custSub.textContent = t.cust_subtitle;

    const custTabAll = document.querySelector('[data-i18n="cust_tab_all"]');
    if (custTabAll && t.cust_tab_all) custTabAll.textContent = t.cust_tab_all;

    const custTabRhq = document.querySelector('[data-i18n="cust_tab_rhq"]');
    if (custTabRhq && t.cust_tab_rhq) custTabRhq.textContent = t.cust_tab_rhq;

    const custTabInfra = document.querySelector('[data-i18n="cust_tab_infra"]');
    if (custTabInfra && t.cust_tab_infra) custTabInfra.textContent = t.cust_tab_infra;

    const custTabTech = document.querySelector('[data-i18n="cust_tab_tech"]');
    if (custTabTech && t.cust_tab_tech) custTabTech.textContent = t.cust_tab_tech;

    const custVerified = document.querySelector('[data-i18n="cust_verified_partners"]');
    if (custVerified && t.cust_verified_partners) custVerified.textContent = t.cust_verified_partners;

    // 9. Stat labels
    const statLabels = document.querySelectorAll('main section p.text-label-sm, main section .font-label-sm');
    statLabels.forEach(el => {
      const txt = el.textContent.trim();
      if (txt === 'EXECUTIVE SUPPORT' || txt === 'دعم تنفيذي متواصل') el.textContent = t.stat_1_label;
      if (txt === 'COMPLIANCE RATE' || txt === 'نسبة الامتثال التنظيمي') el.textContent = t.stat_2_label;
      if (txt === 'LICENSES SECURED' || txt === 'ترخيصاً حكومياً منجزاً') el.textContent = t.stat_3_label;
      if (txt === 'YEARS EXPERTISE' || txt === 'عاماً من الخبرة والريادة') el.textContent = t.stat_4_label;
    });
  }

  // Animation Enhancement on Load
  function initAnimations() {
    // Add entrance animation classes to hero elements
    const heroSection = document.querySelector('main section');
    if (heroSection) {
      const badge = heroSection.querySelector('.inline-flex');
      if (badge) {
        badge.classList.add('animate-fade-in-up', 'badge-glow');
      }

      const title = heroSection.querySelector('h1');
      if (title) {
        title.classList.add('animate-fade-in-up', 'animate-delay-100');
      }

      const desc = heroSection.querySelector('p');
      if (desc) {
        desc.classList.add('animate-fade-in-up', 'animate-delay-200');
      }

      const btns = heroSection.querySelector('.flex.flex-col.sm\\:flex-row, .flex.flex-wrap');
      if (btns) {
        btns.classList.add('animate-fade-in-up', 'animate-delay-300');
      }

      // Add luxury button classes
      heroSection.querySelectorAll('button, a.bg-secondary, a.bg-primary').forEach(b => {
        b.classList.add('btn-primary-luxury');
      });
      heroSection.querySelectorAll('button.bg-surface-white\\/10, a.bg-surface-white\\/10').forEach(b => {
        b.classList.add('btn-outline-luxury');
      });
    }

    // Add interactive card effects to grid containers
    document.querySelectorAll('.grid > div.bg-surface-white, .grid > div.bg-surface-container-lowest, .grid > div.border').forEach(card => {
      card.classList.add('interactive-card');
    });
  }

  window.initI18n = function() {
    const currentLang = getSavedLanguage();
    applyLanguage(currentLang);
    initAnimations();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.initI18n);
  } else {
    window.initI18n();
  }
})();
