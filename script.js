/* ======================
   全局语言包
====================== */
const languageData = {
    en: {
        nav_home: "Home",
        nav_teams: "Certified Teams",
        nav_services: "Popular Services",
        nav_submit: "Submit Project",
        nav_workflow: "Workflow",
        nav_reviews: "Reviews",
        nav_faq: "FAQ",
        hero_title: "Find the Most Reliable Teams at 20%-50% Lower Global Rates",
        hero_desc: "Our verified matching process connects you with top creative professionals, scaling your projects while you focus on what matters most.",
        hero_points: [
            "Only pay for successful matches - no upfront cost",
            "Teams completed for you, truly effective",
            "Fully supervised project guarantee"
        ],
        hero_button: "Start in 1 Minute"
        // 可继续扩展其他模块文本
    },
    zh: {
        nav_home: "首页",
        nav_teams: "经过认证的团队",
        nav_services: "热门服务",
        nav_submit: "提交项目",
        nav_workflow: "工作流程",
        nav_reviews: "客户评价",
        nav_faq: "FAQ",
        hero_title: "以比全球费率低20%-50%的成本找到最可靠的团队",
        hero_desc: "我们经过验证的匹配流程将您与顶尖创意专业人士联系起来，扩展您的项目，同时让您专注于最重要的事情。",
        hero_points: [
            "仅为成功匹配支付费用 - 无前期费用",
            "为您完成的团队匹配，真正有效",
            "全程监督的项目保证"
        ],
        hero_button: "1分钟开始"
    }
};

/* ======================
   语言切换逻辑
====================== */
const langButtons = document.querySelectorAll('.language-switch button');
let currentLang = 'en';

function updateLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (key.includes('.')) {
            const parts = key.split('.');
            el.innerText = languageData[lang][parts[0]][parseInt(parts[1])] || '';
        } else {
            el.innerText = languageData[lang][key] || '';
        }
    });
}

langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        updateLanguage(btn.dataset.lang);
    });
});

updateLanguage(currentLang);

/* ======================
   FAQ 展开/收缩逻辑
====================== */
document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
        const answer = q.nextElementSibling;
        answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
    });
});

/* ======================
   热门服务轮播逻辑
====================== */
const carousel = document.querySelector('.services-carousel');
let scrollAmount = 0;
const scrollPerClick = 240; // 每次滚动像素
const scrollInterval = 3000; // 自动滚动时间间隔

function autoScrollCarousel() {
    scrollAmount += scrollPerClick;
    if(scrollAmount >= carousel.scrollWidth - carousel.clientWidth){
        scrollAmount = 0;
    }
    carousel.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
}
setInterval(autoScrollCarousel, scrollInterval);

/* ======================
   滚动动画 & Hero parallax
====================== */
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');
const heroBg = document.querySelector('.hero');

function scrollAnimation() {
    const triggerBottom = window.innerHeight / 5 * 4;

    faders.forEach(fader => {
        const top = fader.getBoundingClientRect().top;
        if(top < triggerBottom) fader.classList.add('show');
    });

    sliders.forEach(slider => {
        const top = slider.getBoundingClientRect().top;
        if(top < triggerBottom) slider.classList.add('show');
    });

    // Hero parallax
    if(heroBg) {
        const offset = window.scrollY * 0.3;
        heroBg.style.backgroundPosition = `center ${offset}px`;
    }
}

window.addEventListener('scroll', scrollAnimation);
window.addEventListener('load', scrollAnimation);

/* ======================
   可扩展其他前端交互
====================== */
// 例如：登录/注册弹窗逻辑，导航汉堡菜单逻辑等
