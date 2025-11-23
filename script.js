/* =========================
   GOAOXOR — script.js
   - language switch (zh/en)
   - carousel auto + controls
   - mobile menu
   - faq accordion
   - scroll reveal (fade-in)
   - hero parallax (performant)
   ========================= */

/* ---------- Language / i18n ---------- */
const i18n = {
  zh: {
    "nav.home":"首页","nav.teams":"经过认证的团队","nav.services":"热门服务","nav.submit":"提交项目",
    "nav.workflow":"工作流程","nav.reviews":"客户评价","nav.faq":"FAQ",
    "hero.title":"以比全球费率低20%-50%的成本找到最可靠的团队",
    "hero.subtitle":"我们经过验证的匹配流程将您与顶尖创意专业人士联系起来，扩展您的项目，同时让您专注于最重要的事情。",
    "hero.f1":"✓ 仅为成功匹配支付费用 - 无前期费用",
    "hero.f2":"✓ 为您完成的团队匹配，真正有效",
    "hero.f3":"✓ 全程监督的项目保证",
    "cta.start":"1分钟开始","cta.explore":"查看热门服务",
    "stats.projects":"Projects Delivered","stats.teams":"Certified Teams","stats.savings":"Client Savings",
    "teams.title":"经过认证的团队","teams.subtitle":"按类别快速浏览认证团队",
    "category.video":"影视与视频","category.animation":"动画","category.design":"视觉与设计","category.ecommerce":"电商","category.more":"更多",
    "services.title":"热门服务","services.subtitle":"浏览并快速下单热门服务",
    "submit.title":"Submit Your Project","submit.desc":"利用 GOAOXOR 的认证团队与匹配流程，让项目快速起航 — 我们负责筛选、监督与交付。",
    "submit.b1":"快速匹配团队，节省沟通成本","submit.b2":"专业项目监督，确保按时交付","submit.b3":"支持多币种结算（USD / EUR / GBP）",
    "adv.fast":"Fast Team Match","adv.fast_desc":"Minutes to vetted teams.",
    "adv.support":"Expert Support","adv.support_desc":"Project managers available.",
    "adv.safe":"Safe & Verified","adv.safe_desc":"Verified teams and escrow-ready workflows.",
    "video.title":"了解 GOAOXOR",
    "workflow.title":"工作流程",
    "workflow.s1.title":"客户提交项目需求","workflow.s1.desc":"填写简要需求与目标受众。",
    "workflow.s2.title":"平台在中国筛选团队","workflow.s2.desc":"我们筛选最匹配的制作方并审核资质。",
    "workflow.s3.title":"向客户推荐匹配团队","workflow.s3.desc":"客户查看样片、报价与案例。",
    "workflow.s4.title":"客户确认团队","workflow.s4.desc":"确认后进入项目合同阶段。",
    "workflow.s5.title":"平台生成项目合同","workflow.s5.desc":"合同与里程碑透明记录。",
    "workflow.s6.title":"客户与团队直接结算","workflow.s6.desc":"安全结算，支持多币种。",
    "advantages.title":"我们消除全球创意协作的障碍",
    "advantages.item1":"降低 20%-50% 成本","advantages.item2":"顶尖中国团队","advantages.item3":"国际化服务",
    "advantages.item4":"严格审核机制","advantages.item5":"项目监督保障","advantages.item6":"多领域专家",
    "testimonials.title":"全球客户的信赖",
    "faq.title":"常见问题","faq.q1":"下单流程是怎样的？","faq.a1":"选择服务 → 填写需求 → 确认报价 → 开始制作 → 交付与修改。",
    "faq.q2":"如何收费？","faq.a2":"定价基于项目复杂度；可在下单前获取免费报价。",
    "faq.q3":"如何保证沟通顺畅？","faq.a3":"我们支持邮件、Slack/Teams、以及平台内会话，所有需求会归档以便追踪。"
  },
  en: {
    "nav.home":"Home","nav.teams":"Certified Teams","nav.services":"Popular Services","nav.submit":"Submit Project",
    "nav.workflow":"Workflow","nav.reviews":"Testimonials","nav.faq":"FAQ",
    "hero.title":"Find the most reliable teams at 20%-50% lower cost globally",
    "hero.subtitle":"Our verified matching process connects you with top creative professionals, scaling your projects while you focus on what matters most.",
    "hero.f1":"✓ Only pay for successful matches - no upfront fees",
    "hero.f2":"✓ Team matches are effective and guaranteed",
    "hero.f3":"✓ Full project supervision",
    "cta.start":"Start Now","cta.explore":"Explore Services",
    "stats.projects":"Projects Delivered","stats.teams":"Certified Teams","stats.savings":"Client Savings",
    "teams.title":"Certified Teams","teams.subtitle":"Browse certified teams by category",
    "category.video":"Film & Video","category.animation":"Animation","category.design":"Visual & Design","category.ecommerce":"E-commerce","category.more":"More",
    "services.title":"Popular Services","services.subtitle":"Browse and order top services",
    "submit.title":"Submit Your Project","submit.desc":"Leverage GOAOXOR's vetted teams and matching to kick off your project — we screen, supervise and deliver.",
    "submit.b1":"Fast team matches to save communication time","submit.b2":"Professional project supervision","submit.b3":"Supports multi-currency settlement (USD / EUR / GBP)",
    "adv.fast":"Fast Team Match","adv.fast_desc":"Minutes to vetted teams.",
    "adv.support":"Expert Support","adv.support_desc":"Project managers available.",
    "adv.safe":"Safe & Verified","adv.safe_desc":"Verified teams and escrow-ready workflows.",
    "video.title":"Learn About GOAOXOR",
    "workflow.title":"Workflow",
    "workflow.s1.title":"Client submits project requirements","workflow.s1.desc":"Fill out brief and target audience.",
    "workflow.s2.title":"Platform screens teams in China","workflow.s2.desc":"We screen best-matched producers and verify credentials.",
    "workflow.s3.title":"Recommend matched teams to client","workflow.s3.desc":"Client reviews reels, quotes and case studies.",
    "workflow.s4.title":"Client confirms team","workflow.s4.desc":"Confirmed team moves to contract stage.",
    "workflow.s5.title":"Platform generates contract","workflow.s5.desc":"Contract and milestones are transparently recorded.",
    "workflow.s6.title":"Client settles directly with team","workflow.s6.desc":"Secure settlement supporting multiple currencies.",
    "advantages.title":"We Remove Barriers in Global Creative Collaboration",
    "advantages.item1":"Reduce 20%-50% Costs","advantages.item2":"Top Chinese Teams","advantages.item3":"International Service",
    "advantages.item4":"Strict Verification","advantages.item5":"Project Supervision Guarantee","advantages.item6":"Multi-field Experts",
    "testimonials.title":"Trusted by Global Clients",
    "faq.title":"Frequently Asked Questions","faq.q1":"How does ordering work?","faq.a1":"Choose a service → submit a brief → confirm quote → production → delivery & revisions.",
    "faq.q2":"How is pricing calculated?","faq.a2":"Pricing depends on complexity; free quote available prior to order.",
    "faq.q3":"How is communication ensured?","faq.a3":"We support email, Slack/Teams and in-platform chat; everything is archived for traceability."
  }
};

const DEFAULT_LANG = localStorage.getItem('site_lang') || 'zh';
let currentLang = DEFAULT_LANG;

function applyTranslations(lang){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    const txt = i18n[lang] && i18n[lang][key];
    if(!txt) return;
    // inputs placeholders
    if(el.tagName.toLowerCase()==='input' && el.type==='email'){
      el.placeholder = txt;
    } else {
      el.textContent = txt;
    }
  });
  // set lang button label (shows switch hint)
  const langToggle = document.getElementById('langToggle');
  if(langToggle) langToggle.textContent = (lang === 'zh') ? 'EN' : '中文';
  localStorage.setItem('site_lang', lang);
  currentLang = lang;
}

document.addEventListener('DOMContentLoaded', ()=>{
  applyTranslations(currentLang);
});

/* Toggle lang */
const langToggleBtn = document.getElementById('langToggle');
if(langToggleBtn){
  langToggleBtn.addEventListener('click', ()=>{
    const next = (currentLang === 'zh') ? 'en' : 'zh';
    applyTranslations(next);
  });
}

/* ---------- Mobile Menu ---------- */
const mobileToggle = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById('mobileMenu');
if(mobileToggle && mobileMenu){
  mobileToggle.addEventListener('click', ()=>{
    const expanded = mobileToggle.getAttribute('aria-expanded') === 'true';
    mobileToggle.setAttribute('aria-expanded', String(!expanded));
    mobileMenu.setAttribute('aria-hidden', String(expanded));
    mobileMenu.classList.toggle('open');
  });
  // close mobile menu when clicking a link
  mobileMenu.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', ()=> {
      mobileMenu.classList.remove('open');
      mobileToggle.setAttribute('aria-expanded','false');
      mobileMenu.setAttribute('aria-hidden','true');
    });
  });
}

/* ---------- FAQ accordion ---------- */
document.addEventListener('click', (e)=>{
  if(e.target.matches('.faq-q')){
    const btn = e.target;
    const item = btn.closest('.faq-item');
    const answer = item.querySelector('.faq-a');
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    // close other items (accordion)
    document.querySelectorAll('.faq-item .faq-q').forEach(q=>{
      if(q !== btn){
        q.setAttribute('aria-expanded','false');
        const a = q.closest('.faq-item').querySelector('.faq-a');
        if(a) a.hidden = true;
      }
    });
    btn.setAttribute('aria-expanded', String(!expanded));
    if(answer) answer.hidden = expanded;
  }
});

/* ---------- Carousel (services) ---------- */
const svcTrack = document.getElementById('svcTrack');
const svcPrev = document.getElementById('svcPrev');
const svcNext = document.getElementById('svcNext');
let svcAutoTimer = null;

function svcScrollBy(delta){
  if(!svcTrack) return;
  svcTrack.scrollBy({left: delta, behavior:'smooth'});
}

if(svcPrev) svcPrev.addEventListener('click', ()=>{ svcScrollBy(-300); resetSvcAuto(); });
if(svcNext) svcNext.addEventListener('click', ()=>{ svcScrollBy(300); resetSvcAuto(); });

function startSvcAuto(){
  stopSvcAuto();
  svcAutoTimer = setInterval(()=>{
    if(!svcTrack) return;
    const max = svcTrack.scrollWidth - svcTrack.clientWidth;
    const nextPos = Math.min(svcTrack.scrollLeft + 320, max);
    if(svcTrack.scrollLeft >= max - 10) svcTrack.scrollTo({left:0, behavior:'smooth'});
    else svcTrack.scrollTo({left: nextPos, behavior:'smooth'});
  }, 3500);
}
function stopSvcAuto(){ if(svcAutoTimer) clearInterval(svcAutoTimer); svcAutoTimer = null; }
function resetSvcAuto(){ stopSvcAuto(); startSvcAuto(); }

if(svcTrack) {
  svcTrack.addEventListener('mouseenter', stopSvcAuto);
  svcTrack.addEventListener('mouseleave', startSvcAuto);
  startSvcAuto();
}

/* ---------- Scroll reveal (fade-in) using IntersectionObserver ---------- */
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
},{threshold:0.12});

document.querySelectorAll('.fade-in').forEach(el => io.observe(el));
/* add fade-in class to some key blocks for initial effect */
document.querySelectorAll('.section').forEach(s => s.classList.add('fade-in'));

/* ---------- Hero parallax (use rAF for performance) ---------- */
const heroBg = document.getElementById('heroBg');
let lastScrollY = 0;
function onScroll(){
  lastScrollY = window.scrollY;
}
window.addEventListener('scroll', onScroll, {passive:true});
function rafLoop(){
  if(heroBg){
    const y = lastScrollY * 0.25;
    heroBg.style.transform = `translateY(${y}px)`;
  }
  requestAnimationFrame(rafLoop);
}
requestAnimationFrame(rafLoop);

/* ---------- Newsletter stub (demo) ---------- */
const newsletterForm = document.getElementById('newsletterForm');
if(newsletterForm){
  newsletterForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = document.getElementById('newsletterEmail').value.trim();
    if(!email){ alert(currentLang === 'zh' ? '请输入邮箱' : 'Please enter your email'); return; }
    // TODO: POST to your backend API
    alert(currentLang === 'zh' ? '订阅成功（示例）' : 'Subscribed (demo)');
    newsletterForm.reset();
  });
}

/* ---------- Accessibility: keyboard carousel support ---------- */
if(svcTrack){
  svcTrack.addEventListener('keydown', (e)=>{
    if(e.key === 'ArrowRight') svcScrollBy(300);
    if(e.key === 'ArrowLeft') svcScrollBy(-300);
  });
}

/* ---------- End of script ---------- */
