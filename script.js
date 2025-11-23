/* ===========================
   GOAOXOR — script.js
   =========================== */

document.addEventListener('DOMContentLoaded', () => {

  /* -------------------------
     Language (i18n) - basic
     ------------------------- */
  const translations = {
    zh: {
      nav: { home: "主页", teams: "经过认证的团队", services: "热门服务", submit: "提交项目", process: "工作流程", reviews: "全球客户的信赖", faq: "FAQ", login: "登录", signup: "注册" },
      hero: {
        title: "以比全球费率低20%-50%的成本找到最可靠的团队",
        subtitle: "我们经过验证的匹配流程将您与顶尖创意专业人士联系起来，扩展您的项目，同时让您专注于最重要的事情。",
        f1: "仅为成功匹配支付费用 - 无前期费用",
        f2: "为您完成的团队匹配，真正有效",
        f3: "全程监督的项目保证",
        cta: "1 分钟开始"
      },
      stats: { s1: "Projects Delivered", s2: "Certified Teams", s3: "Client Savings" },
      teams: { title: "经过认证的团队", subtitle: "按类别浏览 — 点击任意类目查看我们的认证服务团队" },
      services: { title: "热门服务" },
      submit: { title: "提交项目", subtitle: "连接中国顶尖创意团队，为您的影视、动画与电商项目提供专业交付。", cta: "立即匹配" },
      video: { title: "了解 GOAOXOR" },
      process: { title: "工作流程" },
      advantages: { title: "我们消除全球创意协作的障碍" },
      reviews: { title: "全球客户的信赖" },
      faq: { title: "FAQ" }
    },
    en: {
      nav: { home: "Home", teams: "Certified Teams", services: "Popular Services", submit: "Submit Project", process: "Process", reviews: "Trusted by Clients", faq: "FAQ", login: "Login", signup: "Sign Up" },
      hero: {
        title: "Find the Most Reliable Team at 20%-50% Lower Cost Than Global Rates",
        subtitle: "Our proven matching process connects you with elite creative professionals to scale your projects while you focus on what matters most.",
        f1: "Pay only for successful matches - no upfront fees",
        f2: "Done-for-you team matching that actually works",
        f3: "Full project guarantee with supervision",
        cta: "Start in 1 Minute"
      },
      stats: { s1: "Projects Delivered", s2: "Certified Teams", s3: "Client Savings" },
      teams: { title: "Certified Teams", subtitle: "Browse by category — click to see certified teams per category" },
      services: { title: "Popular Services" },
      submit: { title: "Submit Project", subtitle: "Connect with elite Chinese creative teams for film, animation, and ecommerce projects.", cta: "Match Now" },
      video: { title: "About GOAOXOR" },
      process: { title: "Process" },
      advantages: { title: "We Remove Barriers to Global Creative Collaboration" },
      reviews: { title: "Trusted by Clients Worldwide" },
      faq: { title: "FAQ" }
    }
  };

  const languageSelector = document.getElementById('language-switch');
  const savedLang = localStorage.getItem('goaoxor_lang') || 'zh';
  languageSelector.value = savedLang;
  applyLanguage(savedLang);

  languageSelector.addEventListener('change', (e) => {
    applyLanguage(e.target.value);
    localStorage.setItem('goaoxor_lang', e.target.value);
  });

  function applyLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const parts = key.split('.');
      let value = translations[lang];
      for (const p of parts) {
        if (value && value[p]) value = value[p]; else { value = null; break; }
      }
      if (value) el.textContent = value;
    });
  }

  /* -------------------------
     Open category (placeholder)
     ------------------------- */
  window.openCategory = function(category) {
    // placeholder: in real app route to e.g. /team-film.html
    alert(`即将打开类目页面：${category}`);
  };

  /* -------------------------
     Carousel (services)
     ------------------------- */
  const track = document.getElementById('carousel-track');
  let index = 0;
  const cardWidth = 280 + 18; // card width + gap
  function updateCarousel() {
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }
  window.prevSlide = function() { index = Math.max(0, index - 1); updateCarousel(); };
  window.nextSlide = function() { index = Math.min(track.children.length - 1, index + 1); updateCarousel(); };

  // auto slide loop
  let autoSlide = setInterval(() => {
    index++;
    if (index > track.children.length - 3) index = 0;
    updateCarousel();
  }, 3800);

  // pause on hover
  track.parentElement.addEventListener('mouseenter', () => clearInterval(autoSlide));
  track.parentElement.addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => {
      index++;
      if (index > track.children.length - 3) index = 0;
      updateCarousel();
    }, 3800);
  });

  /* -------------------------
     Reviews vertical auto-scroll
     ------------------------- */
  const reviewsTrack = document.getElementById('reviews-track');
  if (reviewsTrack) {
    let revIndex = 0;
    setInterval(() => {
      revIndex++;
      if (revIndex >= reviewsTrack.children.length) revIndex = 0;
      // scroll to element
      reviewsTrack.children[revIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 4800);
  }

  /* -------------------------
     FAQ toggle
     ------------------------- */
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const ans = btn.nextElementSibling;
      ans.style.display = ans.style.display === 'block' ? 'none' : 'block';
    });
  });

  /* -------------------------
     CTA buttons (placeholder)
     ------------------------- */
  document.getElementById('startBtn').addEventListener('click', () => {
    document.getElementById('submit').scrollIntoView({ behavior: 'smooth' });
  });
  document.getElementById('submitStart').addEventListener('click', () => {
    alert('感谢提交，我们会尽快与您联系（示例交互）');
  });
  document.getElementById('joinNow').addEventListener('click', () => {
    const email = document.getElementById('newsletterEmail').value.trim();
    if (!email) { alert('请输入邮箱地址'); return; }
    alert('已订阅：' + email);
    document.getElementById('newsletterEmail').value = '';
  });

  /* -------------------------
     reveal on scroll (fade-up)
     ------------------------- */
  const faders = document.querySelectorAll('.fade-up');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('show');
    });
  }, { threshold: 0.12 });

  faders.forEach(f => io.observe(f));

  /* -------------------------
     Accessibility small: keyboard for category cards
     ------------------------- */
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') card.click();
    });
  });

});
