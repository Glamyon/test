// ==============================
// 1. 国际化语言切换
// ==============================
const langToggle = document.getElementById('langToggle');
const translations = {
  en: {
    "nav.home": "Home",
    "nav.teams": "Certified Teams",
    "nav.services": "Popular Services",
    "nav.submit": "Submit Project",
    "nav.workflow": "Workflow",
    "nav.reviews": "Reviews",
    "nav.faq": "FAQ",
    "hero.title": "Find the most reliable teams at 20%-50% lower cost than global rates",
    "hero.subtitle": "Our verified matching process connects you with top creative professionals, scaling your projects while you focus on what matters most.",
    "hero.f1": "✓ Pay only for successful matches - No upfront fees",
    "hero.f2": "✓ Effective team matches for your project",
    "hero.f3": "✓ Supervised project guarantee",
    "cta.start": "Start in 1 minute",
    "stats.projects": "Projects Delivered",
    "stats.teams": "Certified Teams",
    "stats.savings": "Client Savings",
    "teams.title": "Certified Teams",
    "teams.film": "Film & Video",
    "teams.animation": "Animation",
    "teams.design": "Visual & Design",
    "teams.ecommerce": "E-commerce",
    "teams.more": "More",
    "services.title": "Popular Services",
    "submit.title": "Submit Your Project",
    "submit.desc": "Quickly match reliable teams via GOAOXOR",
    "submit.fast": "Fast Team Match",
    "submit.expert": "Expert Support",
    "submit.safe": "Safe & Verified"
  },
  zh: {
    "nav.home": "首页",
    "nav.teams": "经过认证的团队",
    "nav.services": "热门服务",
    "nav.submit": "提交项目",
    "nav.workflow": "工作流程",
    "nav.reviews": "客户评价",
    "nav.faq": "FAQ",
    "hero.title": "以比全球费率低20%-50%的成本找到最可靠的团队",
    "hero.subtitle": "我们经过验证的匹配流程将您与顶尖创意专业人士联系起来，扩展您的项目，同时让您专注于最重要的事情。",
    "hero.f1": "✓ 仅为成功匹配支付费用 - 无前期费用",
    "hero.f2": "✓ 为您完成的团队匹配，真正有效",
    "hero.f3": "✓ 全程监督的项目保证",
    "cta.start": "1分钟开始",
    "stats.projects": "完成项目",
    "stats.teams": "认证团队",
    "stats.savings": "客户节省",
    "teams.title": "经过认证的团队",
    "teams.film": "影视与视频",
    "teams.animation": "动画",
    "teams.design": "视觉与设计",
    "teams.ecommerce": "电商",
    "teams.more": "更多",
    "services.title": "热门服务",
    "submit.title": "提交项目",
    "submit.desc": "通过 GOAOXOR 平台快速匹配可靠团队",
    "submit.fast": "快速匹配团队",
    "submit.expert": "专家支持",
    "submit.safe": "安全认证"
  }
};

function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  localStorage.setItem('siteLang', lang);
}

let currentLang = localStorage.getItem('siteLang') || 'zh';
setLanguage(currentLang);

langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'zh' ? 'en' : 'zh';
  setLanguage(currentLang);
  langToggle.textContent = currentLang === 'zh' ? 'EN' : '中文';
});

// ==============================
// 2. 移动端菜单
// ==============================
const mobileToggle = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById('mobileMenu');

mobileToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// ==============================
// 3. FAQ 折叠逻辑（示例）
// ==============================
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
    const content = item.querySelector('.faq-content');
    if(item.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = null;
    }
  });
});

// ==============================
// 4. 热门服务轮播
// ==============================
const carousel = document.querySelector('.services-carousel');
let scrollAmount = 0;
let scrollStep = 220; // 卡片宽度+gap

function autoScroll() {
  if(carousel) {
    scrollAmount += scrollStep;
    if(scrollAmount >= carousel.scrollWidth - carousel.clientWidth) scrollAmount = 0;
    carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  }
}

setInterval(autoScroll, 3000);

// ==============================
// 5. Hero Parallax 效果
// ==============================
const heroBg = document.querySelector('.hero-bg');
window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY;
  if(heroBg) {
    heroBg.style.transform = `translateY(${scrollPos * 0.3}px)`;
  }
});

