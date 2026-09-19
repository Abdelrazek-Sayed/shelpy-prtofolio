// Omar Shalpy Government Licensing - Interactive Customers Carousel
(function() {
  'use strict';

  let currentIndex = 0;
  let autoPlayInterval = null;
  let activeCategory = 'all';

  function initCustomerCarousel() {
    const track = document.getElementById('customers-track');
    const prevBtn = document.getElementById('customers-carousel-prev');
    const nextBtn = document.getElementById('customers-carousel-next');
    const dotsContainer = document.getElementById('customers-carousel-dots');
    const filterBtns = document.querySelectorAll('.customer-filter-btn');

    if (!track) return;

    function getVisibleCards() {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }

    function getAllCards() {
      return Array.from(track.querySelectorAll('.customer-card'));
    }

    function getFilteredCards() {
      const all = getAllCards();
      if (activeCategory === 'all') return all;
      return all.filter(card => card.getAttribute('data-category') === activeCategory);
    }

    function updateCarousel() {
      const cards = getAllCards();
      const filtered = getFilteredCards();

      // Show or hide based on filter
      cards.forEach(card => {
        if (activeCategory === 'all' || card.getAttribute('data-category') === activeCategory) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });

      const visibleCount = getVisibleCards();
      const totalFiltered = filtered.length;
      const maxIndex = Math.max(0, totalFiltered - visibleCount);

      if (currentIndex > maxIndex) currentIndex = maxIndex;
      if (currentIndex < 0) currentIndex = 0;

      // Calculate shift percentage
      const isRtl = document.documentElement.dir === 'rtl';
      const cardWidthPercent = 100 / visibleCount;
      const shift = currentIndex * cardWidthPercent;

      track.style.transform = isRtl ? `translateX(${shift}%)` : `translateX(-${shift}%)`;

      // Update dots
      if (dotsContainer) {
        dotsContainer.innerHTML = '';
        const numDots = Math.max(1, maxIndex + 1);
        for (let i = 0; i < numDots; i++) {
          const dot = document.createElement('button');
          dot.className = `w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-[#fed65b] w-7' : 'bg-white/30 hover:bg-white/60'}`;
          dot.setAttribute('aria-label', `Slide ${i + 1}`);
          dot.addEventListener('click', () => {
            currentIndex = i;
            updateCarousel();
            restartAutoPlay();
          });
          dotsContainer.appendChild(dot);
        }
      }
    }

    // Prev / Next actions
    function nextSlide() {
      const visibleCount = getVisibleCards();
      const totalFiltered = getFilteredCards().length;
      const maxIndex = Math.max(0, totalFiltered - visibleCount);

      if (currentIndex < maxIndex) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateCarousel();
    }

    function prevSlide() {
      const visibleCount = getVisibleCards();
      const totalFiltered = getFilteredCards().length;
      const maxIndex = Math.max(0, totalFiltered - visibleCount);

      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = maxIndex;
      }
      updateCarousel();
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        restartAutoPlay();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevSlide();
        restartAutoPlay();
      });
    }

    // Filter Buttons
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => {
          b.classList.remove('bg-[#fed65b]', 'text-[#00113a]', 'font-bold');
          b.classList.add('bg-white/10', 'text-white/80', 'font-medium');
        });
        btn.classList.remove('bg-white/10', 'text-white/80', 'font-medium');
        btn.classList.add('bg-[#fed65b]', 'text-[#00113a]', 'font-bold');

        activeCategory = btn.getAttribute('data-filter') || 'all';
        currentIndex = 0;
        updateCarousel();
        restartAutoPlay();
      });
    });

    // Auto-play
    function startAutoPlay() {
      stopAutoPlay();
      autoPlayInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoPlay() {
      if (autoPlayInterval) clearInterval(autoPlayInterval);
    }

    function restartAutoPlay() {
      stopAutoPlay();
      startAutoPlay();
    }

    const container = document.getElementById('customers-carousel-container');
    if (container) {
      container.addEventListener('mouseenter', stopAutoPlay);
      container.addEventListener('mouseleave', startAutoPlay);
    }

    window.addEventListener('resize', updateCarousel);

    // Initial render
    updateCarousel();
    startAutoPlay();
  }

  window.initCustomerCarousel = initCustomerCarousel;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCustomerCarousel);
  } else {
    initCustomerCarousel();
  }
})();
