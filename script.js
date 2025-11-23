/* ==========================
   1. 国际化语言切换
========================== */
const translations = {
  zh: {
    "nav.home": "首页",
    "nav.teams": "经过认证的团队",
    "nav.services": "热门服务",
    "nav.submit": "提交项目",
    "nav.workflow": "工作流程",
    "nav.reviews": "客户评价",
    "nav.faq": "FAQ",
    "cta.start": "1分钟开始",
    "cta.explore": "查看热门服务",
    "hero.title": "以比全球费率低20%-50%的成本找到最可靠的团队",
    "hero.subtitle": "我们经过验证的匹配流程将您与顶尖创意专业人士联系起来，扩展您的项目，同时让您专注于最重要的事情。",
    "hero.f1": "✓ 仅为成功匹配支付费用 - 无前期费用",
    "hero.f2": "✓ 为您完成的团队匹配，真正有效",
    "hero.f3": "✓ 全程监督的项目保证",
    "stats.projects": "Projects Delivered",
    "stats.teams": "Certified Teams",
    "stats.savings": "Client Savings",
    "teams.title": "经过认证的团队",
    "teams.film": "影视与视频",
    "teams.animation": "动画",
    "teams.design": "视觉与设计",
    "teams.ecommerce": "电商",
    "teams.more": "更多",
    "services.title": "热门服务",
    "submit.title": "Submit Your Project",
    "submit.desc": "通过 GOAOXOR 平台快速匹配可靠团队",
    "submit.fast": "Fast Team Match",
    "submit.expert": "Expert Support",
    "submit.safe": "Safe & Verified",
    "video.title": "了解 GOAOXOR",
    "workflow.title": "工作流程",
    "workflow.step1": "客户提交项目需求",
    "workflow.step2": "平台在中国筛选团队",
    "workflow.step3": "向客户推荐匹配团队",
    "workflow.step4": "客户确认团队",
    "workflow.step5": "平台生成项目合同",
    "workflow.step6": "客户与团队直接结算",
    "advantages.title": "我们消除全球创意协作的障碍",
    "advantages.cost": "降低 20%-50% 成本",
    "advantages.topteams": "顶尖中国团队",
    "advantages.international": "国际化服务",
    "advantages.audit": "严格审核机制",
    "advantages.supervision": "项目监督保障",
    "advantages.experts": "多领域专家",
    "testimonials.title": "全球客户的信赖",
    "faq.title": "常见问题",
    "faq.q1": "GOAOXOR 如何匹配团队？",
    "faq.a1": "我们通过专业审核和智能筛选，为客户匹配最适合的团队。",
    "faq.q2": "费用如何收取？",
    "faq.a2": "仅为成功匹配支付费用，无前期费用。"
  },
  en: {
    "nav.home": "Home",
    "nav.teams": "Certified Teams",
    "nav.services": "Popular Services",
    "nav.submit": "Submit Project",
    "nav.workflow": "Workflow",
    "nav.reviews": "Testimonials",
    "nav.faq": "FAQ",
    "cta.start": "Start Now",
    "cta.explore": "Explore Services",
    "hero.title": "Find the most reliable teams at 20%-50% lower cost globally",
    "hero.subtitle": "Our verified matching process connects you with top creative professionals, expanding your projects while you focus on what matters most.",
    "hero.f1": "✓ Only pay for successful matches - no upfront fees",
    "hero.f2": "✓ Team matches are effective and guaranteed",
    "hero.f3": "✓ Full project supervision",
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
    "submit.desc": "Quickly match reliable teams via GOAOXOR platform",
    "submit.fast": "Fast Team Match",
    "submit.expert": "Expert Support",
    "submit.safe": "Safe & Verified",
    "video.title": "Learn About GOAOXOR",
    "workflow.title": "Workflow",
    "workflow.step1": "Client submits project requirements",
    "workflow.step2": "Platform screens teams in China",
    "workflow.step3": "Recommend matched teams to client",
    "workflow.step4": "Client confirms team",
    "workflow.step5": "Platform generates contract",
    "workflow.step6": "Client settles directly with team",
    "advantages.title": "We Remove Barriers in Global Creative Collaboration",
    "advantages.cost": "Reduce 20%-50% Costs",
    "advantages.topteams": "Top Chinese Teams",
    "advantages.international": "International Service",
    "advantages.audit": "Strict Verification",
    "advantages.supervision": "Project Supervision Guaranteed",
    "advantages.experts": "Multi-field Experts",
    "testimonials.title": "Trusted by Global Clients",
    "faq.title": "Frequently Asked Questions",
    "faq.q1": "How does GOAOXOR match teams?",
    "faq.a1": "We match clients with the best teams via professional screening and intelligent selection.",
    "faq.q2": "How are fees charged?",
    "faq.a2": "You only pay for successful matches, no upfront fees."
  }
};

let currentLang = "zh";
const langBtn = document.getElementById("langToggle");

function switchLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) el.innerText = translations[lang][key];
  });
  langBtn.innerText = lang === "zh" ? "EN" : "中文";
}

langBtn.addEventListener("click", () => {
  switchLanguage(currentLang === "zh" ? "en" : "zh");
});

// 初始化
switchLanguage(currentLang);

/* ==========================
   2. FAQ 折叠
========================== */
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    const expanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", !expanded);
    answer.hidden = expanded;
  });
});

/* ==========================
   3. Hero 渐入动画
========================== */
const heroSection = document.querySelector(".hero-section");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  heroSection.style.backgroundPositionY = `${scrollY * 0.3}px`;
});

/* ==========================
   4. 服务轮播
========================== */
const carousel = document.querySelector(".services-carousel");
let scrollAmount = 0;
const scrollStep = 220;
const maxScroll = carousel.scrollWidth - carousel.clientWidth;

function scrollRight() {
  scrollAmount += scrollStep;
  if (scrollAmount > maxScroll) scrollAmount = 0;
  carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
}
function scrollLeft() {
  scrollAmount -= scrollStep;
  if (scrollAmount < 0) scrollAmount = maxScroll;
  carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
}

// 自动滚动
setInterval(scrollRight, 4000);

/* ==========================
   5. 移动菜单切换
========================== */
const mobileBtn = document.getElementById("mobileToggle");
const mobileMenu = document.getElementById("mobileMenu");
mobileBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

