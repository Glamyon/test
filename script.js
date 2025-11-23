// ======================
// 语言包
// ======================
const languageData = {
    en: {
        nav: {
            home: "Home",
            teams: "Certified Teams",
            services: "Popular Services",
            submit: "Submit Project",
            workflow: "Workflow",
            testimonials: "Testimonials",
            faq: "FAQ"
        },
        hero: {
            title: "Find the most reliable teams at 20%-50% lower costs",
            desc: "Our verified matching process connects you with top creative professionals, expanding your project while letting you focus on what matters.",
            points: [
                "Pay only for successful matches - no upfront fees",
                "Team matches are truly effective",
                "Full supervision guarantee"
            ],
            cta: "Start in 1 Minute"
        },
        submit: {
            title: "Save Time, Energy and the Headache of Team Hunting",
            line1: "One-time Matching Fee",
            line2: "No hidden costs - no ongoing fees, just results",
            line3: "Pay when you match - never upfront",
            line4: "Full supervision guarantee - risk-free collaboration",
            btn: "Submit Your Project Now"
        },
        faq: [
            {q: "What is GOAOXOR?", a: "GOAOXOR connects global clients with elite Chinese creative teams for film, animation, and video projects."},
            {q: "How much does it cost?", a: "Pricing depends on the project. Only pay a one-time matching fee upon successful match."}
        ]
    },
    zh: {
        nav: {
            home: "首页",
            teams: "经过认证的团队",
            services: "热门服务",
            submit: "提交项目",
            workflow: "工作流程",
            testimonials: "客户评价",
            faq: "FAQ"
        },
        hero: {
            title: "以比全球费率低20%-50%的成本找到最可靠的团队",
            desc: "我们经过验证的匹配流程将您与顶尖创意专业人士联系起来，扩展您的项目，同时让您专注于最重要的事情。",
            points: [
                "仅为成功匹配支付费用 - 无前期费用",
                "为您完成的团队匹配，真正有效",
                "全程监督的项目保证"
            ],
            cta: "1分钟开始"
        },
        submit: {
            title: "节省寻找团队的时间、精力和头疼",
            line1: "一次性匹配费用",
            line2: "无隐藏费用 - 无持续费用，仅付成果",
            line3: "匹配成功再付款 - 永不预付",
            line4: "全程监督保证 - 风险零合作",
            btn: "立即提交项目"
        },
        faq: [
            {q: "什么是 GOAOXOR?", a: "GOAOXOR 连接全球客户与中国顶尖创意团队，涵盖影视、动画和视频项目。"},
            {q: "费用是多少?", a: "费用取决于项目。仅在成功匹配时支付一次性匹配费用。"}
        ]
    }
};

// ======================
// 语言切换
// ======================
const langEnBtn = document.getElementById("lang-en");
const langZhBtn = document.getElementById("lang-zh");

function setLanguage(lang) {
    // 导航
    const navItems = document.querySelectorAll(".nav ul li a");
    const navKeys = ["home","teams","services","submit","workflow","testimonials","faq"];
    navItems.forEach((item,i)=>item.textContent = languageData[lang].nav[navKeys[i]]);

    // Hero
    document.querySelector(".hero-left h1").textContent = languageData[lang].hero.title;
    document.querySelector(".hero-left p").textContent = languageData[lang].hero.desc;
    const points = document.querySelectorAll(".hero-left ul li");
    languageData[lang].hero.points.forEach((p,i)=>points[i].textContent = p);
    document.querySelector(".hero-left .hero-cta").textContent = languageData[lang].hero.cta;

    // Submit Project
    const submit = languageData[lang].submit;
    const submitCard = document.querySelector(".submit-left");
    submitCard.querySelector("h2").textContent = submit.title;
    const ps = submitCard.querySelectorAll("p");
    ps[0].textContent = submit.line1;
    ps[1].textContent = submit.line2;
    ps[2].textContent = submit.line3;
    ps[3].textContent = submit.line4;
    submitCard.querySelector(".btn-submit").textContent = submit.btn;

    // FAQ
    const faqItems = document.querySelectorAll(".faq-item");
    languageData[lang].faq.forEach((item,i)=>{
        faqItems[i].querySelector(".faq-question").textContent = item.q;
        faqItems[i].querySelector(".faq-answer").textContent = item.a;
    });
}

langEnBtn.addEventListener("click", ()=>setLanguage("en"));
langZhBtn.addEventListener("click", ()=>setLanguage("zh"));

// 默认语言
setLanguage("en");

// ======================
// FAQ 展开收缩
// ======================
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(q=>{
    q.addEventListener("click", ()=>{
        const ans = q.nextElementSibling;
        ans.style.display = (ans.style.display === "block") ? "none" : "block";
    });
});

// ======================
// 热门服务轮播
// ======================
const carousel = document.querySelector(".services-carousel");
let scrollAmount = 0;
function autoScrollCarousel() {
    scrollAmount += 1;
    if(scrollAmount >= carousel.scrollWidth - carousel.clientWidth) scrollAmount = 0;
    carousel.scrollLeft = scrollAmount;
    requestAnimationFrame(autoScrollCarousel);
}
if(carousel) requestAnimationFrame(autoScrollCarousel);

// ======================
// 渐入动画（Hero + Submit）
const fadeElements = document.querySelectorAll(".hero-card, .submit-card, .workflow-card, .adv-card, .testimonial-card");
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting) entry.target.classList.add("fade-in");
    });
},{threshold:0.2});
fadeElements.forEach(el=>observer.observe(el));
