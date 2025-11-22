// ===== FAQ 折叠 =====
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

// ===== 团队分类点击跳转 =====
function openCategory(category) {
    window.location.href = `team-${category}.html`;
}

// ===== 热门服务轮播 =====
let currentIndex = 0;
const track = document.getElementById('carousel-track');
const total = track.children.length;

function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 220}px)`;
}

function prevSlide() {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateCarousel();
}

function nextSlide() {
    currentIndex = Math.min(currentIndex + 1, total - 3);
    updateCarousel();
}

// ===== 表单提交示例 =====
document.querySelectorAll('.cta-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        alert("提交成功！");
    });
});

// ===== 语言切换 =====
const translations = {
    zh: {
        nav: {
            home:"主页", teams:"团队浏览", services:"热门服务",
            submit:"提交项目", process:"项目流程", reviews:"客户评价", faq:"FAQ"
        }
    },
    en: {
        nav: {
            home:"Home", teams:"Browse Teams", services:"Popular Services",
            submit:"Submit Project", process:"Project Flow", reviews:"Client Reviews", faq:"FAQ"
        }
    }
};

const languageSelector = document.getElementById('language-switch');
function setLanguage(lang){
    document.querySelectorAll('[data-i18n]').forEach(el=>{
        const keys = el.getAttribute('data-i18n').split('.');
        let value = translations[lang];
        keys.forEach(k=>value=value[k]);
        if(value) el.textContent=value;
    });
    localStorage.setItem('lang', lang);
}
const savedLang = localStorage.getItem('lang') || 'zh';
setLanguage(savedLang);
languageSelector.addEventListener('change', e=> setLanguage(e.target.value));
