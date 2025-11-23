/* script.js — GOAOXOR
   - i18n language switch (default: en)
   - carousel auto + controls
   - mobile menu toggle
   - faq accordion
   - hero parallax (rAF)
   - simple fade-in reveal (IntersectionObserver)
*/

/* -------------------
   1) Translations (i18n)
   ------------------- */
const translations = {
  en: {
    "nav.home":"Home","nav.teams":"Certified Teams","nav.services":"Popular Services","nav.submit":"Submit Project","nav.workflow":"Workflow","nav.reviews":"Testimonials","nav.faq":"FAQ",
    "hero.title":"Find the most reliable teams at 20%-50% lower cost globally",
    "hero.subtitle":"Our verified matching process connects you with top creative professionals, scaling your project while you focus on what matters most.",
    "hero.f1":"✓ Only pay for successful matches — no upfront fees",
    "hero.f2":"✓ Team matches are effective and guaranteed",
    "hero.f3":"✓ Full project supervision",
    "cta.start":"Start Now","cta.explore":"Explore Services",
    "stats.projects":"Projects Delivered","stats.teams":"Certified Teams","stats.savings":"Client Savings",
    "teams.title":"Certified Teams","teams.subtitle":"Browse major categories",
    "category.film":"Film & Video","category.animation":"Animation","category.design":"Visual & Design","category.ecom":"E-Commerce","category.more":"More",
    "services.title":"Popular Services","services.subtitle":"Browse trending services",
    "submit.title":"Submit Your Project","submit.desc":"Quickly match with trusted Chinese creative teams via our verified process.",
    "submit.p1":"Fast Team Match","submit.p2":"Expert Support","submit.p3":"Safe & Verified",
    "video.title":"Learn About GOAOXOR",
    "workflow.title":"Workflow",
    "workflow.s1.title":"Client submits project requirements","workflow.s1.desc":"Submit brief and objectives.",
    "workflow.s2.title":"Platform screens teams in China","workflow.s2.desc":"We shortlist and vet teams.",
    "workflow.s3.title":"Recommend matched teams","workflow.s3.desc":"Review reels and quotes.",
    "workflow.s4.title":"Client confirms team","workflow.s4.desc":"Approve and start contract.",
    "workflow.s5.title":"Platform generates contract","workflow.s5.desc":"Milestones and terms recorded.",
    "workflow.s6.title":"Client settles with team","workflow.s6.desc":"Secure multi-currency payments.",
    "advantages.title":"We remove barriers in global creative collaboration",
    "advantages.item1":"Reduce 20%-50% Costs","advantages.item2":"Top Chinese Teams","advantages.item3":"International Service","advantages.item4":"Strict Verification","advantages.item5":"Project Supervision","advantages.item6":"Multi-field Experts",
    "testimonials.title":"Trusted by Global Clients",
    "faq.title":"Frequently Asked Questions",
    "faq.q1":"How does GOAOXOR match teams?","faq.a1":"We match clients with vetted teams through screening and selection.",
    "faq.q2":"How are fees charged?","faq.a2":"You only pay for successful matches; no upfront fees.",
    "faq.q3":"What payment methods are supported?","faq.a3":"We support USD, EUR, GBP and other major payment methods."
  },
  zh: {
    "nav.home":"首页","nav.teams":"经过认证的团队","nav.services":"热门服务","nav.submit":"提交项目","nav.workflow":"工作流程","nav.reviews":"客户评价","nav.faq":"FAQ",
    "hero.title":"以比全球费率低20%-50%的成本找到最可靠的团队",
    "hero.subtitle":"我们经过验证的匹配流程将您与顶尖创意专业人士联系起来，扩展您的项目，同时让您专注于最重要的事情。",
    "hero.f1":"✓ 仅为成功匹配支付费用 - 无前期费用",
    "hero.f2":"✓ 为您完成的团队匹配，真正有效",
    "hero.f3":"✓ 全程监督的项目保证",
    "cta.start":"1分钟开始","cta.explore":"查看热门服务",
    "stats.projects":"完成项目","stats.teams":"认证团队","stats.savings":"客户节省",
    "teams.title":"经过认证的团队","teams.subtitle":"按类别浏览",
    "category.film":"影视与视频","category.animation":"动画","category.design":"视觉与设计","category.ecom":"电商","category.more":"更多",
    "services.title":"热门服务","services.subtitle":"浏览热门服务",
    "submit.title":"提交项目","submit.desc":"通过我们的认证流程快速匹配可信赖的中国制作团队。",
    "submit.p1":"快速匹配团队","submit.p2":"专家支持","submit.p3":"安全认证",
    "video.title":"了解 GOAOXOR",
    "workflow.title":"工作流程",
    "workflow.s1.title":"客户提交项目需求","workflow.s1.desc":"提交简要与目标。",
    "workflow.s2.title":"平台在中国筛选团队","workflow.s2.desc":"我们筛选并审核团队。",
    "workflow.s3.title":"推荐匹配团队","workflow.s3.desc":"查看样片和报价。",
    "workflow.s4.title":"客户确认团队","workflow.s4.desc":"确认并进入合同阶段。",
    "workflow.s5.title":"平台生成合同","workflow.s5.desc":"里程碑与条款记录。",
    "workflow.s6.title":"客户与团队结算","workflow.s6.desc":"安全支持多币种结算。",
    "advantages.title":"我们消除全球创意协作的障碍",
    "advantages.item1":"降低 20%-50% 成本","advantages.item2":"顶尖中国团队","advantages.item3":"国际化服务","advantages.item4":"严格审核机制","advantages.item5":"项目监督保障","advantages.item6":"多领域专家",
    "testimonials.title":"全球客户的信赖",
    "faq.title":"常见问题",
    "faq.q1":"GOAOXOR 如何匹配团队？","faq.a1":"我们通过筛选和审核为客户匹配合适团队。",
    "faq.q2":"费用如何收取？","faq.a2":"仅为成功匹配支付费用，无前期费用。",
    "faq.q3":"支持哪些支付方式？","faq.a3":"支持 USD、EUR、GBP 等主流支付方式。"
  }
};

const defaultLang = localStorage.getItem('goaoxor_lang') || 'en';
let currentLang = defaultLang;

function applyI18n(lang){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(!key) return;
    const txt = translations[lang] && translations[lang][key];
    if(!txt) return;
    el.textContent = txt;
  });
  // update lang toggle label
  const btn = document.getElementById('langToggle');
  if(btn) btn.textContent = (lang === 'zh') ? '中文' : 'EN';
  localStorage.setItem('goaoxor_lang', lang);
  currentLang = lang;
}

document.addEventListener('DOMContentLoaded', ()=>{
  applyI18n(currentLang);

  /* ---------- Mobile menu ---------- */
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  if(mobileToggle && mobileMenu){
    mobileToggle.addEventListener('click', ()=>{
      const open = mobileMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', String(open));
      mobileMenu.setAttribute('aria-hidden', String(!open));
    });
  }

  /* ---------- Language switch ---------- */
  const langToggle = document.getElementById('langToggle');
  if(langToggle){
    langToggle.addEventListener('click', ()=>{
      const next = (currentLang === 'zh') ? 'en' : 'zh';
      applyI18n(next);
    });
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll('.faq-q').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const item = btn.closest('.faq-item');
      const answer = item.querySelector('.faq-a');
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      // close others
      document.querySelectorAll('.faq-item .faq-q').forEach(q=>{
        if(q !== btn){
          q.setAttribute('aria-expanded','false');
          q.closest('.faq-item').querySelector('.faq-a').hidden = true;
        }
      });
      btn.setAttribute('aria-expanded', String(!expanded));
      if(answer) answer.hidden = expanded;
    });
  });

  /* ---------- Carousel controls ---------- */
  const svcTrack = document.getElementById('svcTrack');
  const svcPrev = document.getElementById('svcPrev');
  const svcNext = document.getElementById('svcNext');
  let svcTimer = null;

  function svcScroll(delta){
    if(!svcTrack) return;
    svcTrack.scrollBy({left: delta, behavior:'smooth'});
  }
  if(svcPrev) svcPrev.addEventListener('click', ()=>{ svcScroll(-320); restartSvcAuto(); });
  if(svcNext) svcNext.addEventListener('click', ()=>{ svcScroll(320); restartSvcAuto(); });

  function startSvcAuto(){
    stopSvcAuto();
    svcTimer = setInterval(()=>{
      if(!svcTrack) return;
      const max = svcTrack.scrollWidth - svcTrack.clientWidth;
      if(svcTrack.scrollLeft >= max - 10) svcTrack.scrollTo({left:0, behavior:'smooth'});
      else svcTrack.scrollBy({left: 320, behavior:'smooth'});
    }, 3600);
  }
  function stopSvcAuto(){ if(svcTimer) clearInterval(svcTimer); svcTimer = null; }
  function restartSvcAuto(){ stopSvcAuto(); startSvcAuto(); }
  if(svcTrack){ svcTrack.addEventListener('mouseenter', stopSvcAuto); svcTrack.addEventListener('mouseleave', startSvcAuto); startSvcAuto(); }

  /* ---------- Hero parallax (rAF) ---------- */
  const heroBg = document.getElementById('heroBg');
  let lastY = 0;
  window.addEventListener('scroll', ()=> lastY = window.scrollY, {passive:true});
  (function raf(){
    if(heroBg) heroBg.style.transform = `translateY(${lastY * 0.22}px)`;
    requestAnimationFrame(raf);
  })();

  /* ---------- Fade-in reveal ---------- */
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, {threshold:0.12});
  document.querySelectorAll('.section').forEach(s=> io.observe(s));

  /* ---------- Newsletter demo ---------- */
  const newsletter = document.getElementById('newsletterForm');
  if(newsletter){
    newsletter.addEventListener('submit', (ev)=>{
      ev.preventDefault();
      const email = document.getElementById('newsletterEmail').value.trim();
      if(!email) return alert(currentLang==='zh' ? '请输入邮箱' : 'Please enter your email');
      alert(currentLang==='zh' ? '订阅成功（示例）' : 'Subscribed (demo)');
      newsletter.reset();
    });
  }
});
