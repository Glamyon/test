// ===== FAQ 折叠 =====
document.querySelectorAll('.faq-question').forEach(btn=>{
    btn.addEventListener('click',()=>{
        const ans = btn.nextElementSibling;
        ans.style.display = ans.style.display==='block'?'none':'block';
    });
});

// ===== 热门服务轮播 =====
let currentIndex=0;
const track=document.getElementById('carousel-track');
const total=track.children.length;
function updateCarousel(){ track.style.transform=`translateX(-${currentIndex*220}px)`; }
function prevSlide(){ currentIndex=Math.max(currentIndex-1,0); updateCarousel();}
function nextSlide(){ currentIndex=Math.min(currentIndex+1,total-3); updateCarousel(); }
// 自动轮播
setInterval(()=>{ nextSlide(); if(currentIndex>=total-3) currentIndex=0; },4000);

// ===== 团队分类点击 =====
function openCategory(cat){ window.location.href=`team-${cat}.html`; }

// ===== CTA 按钮示例 =====
document.querySelectorAll('.cta-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{ alert("提交成功！"); });
});

// ===== 语言切换 =====
const translations={zh:{nav:{home:"主页",teams:"团队浏览",services:"热门服务",submit:"提交项目",process:"项目流程",reviews:"客户评价",faq:"FAQ"}},
en:{nav:{home:"Home",teams:"Browse Teams",services:"Popular Services",submit:"Submit Project",process:"Project Flow",reviews:"Client Reviews",faq:"FAQ"}}};
const languageSelector=document.getElementById('language-switch');
function setLanguage(lang){
    document.querySelectorAll('[data-i18n]').forEach(el=>{
        const keys=el.getAttribute('data-i18n').split('.');
        let val=translations[lang]; keys.forEach(k=>val=val[k]);
        if(val) el.textContent=val;
    });
    localStorage.setItem('lang',lang);
}
const savedLang=localStorage.getItem('lang')||'zh';
setLanguage(savedLang);
languageSelector.addEventListener('change',e=>setLanguage(e.target.value));

// ===== 页面滚动 fade-up 动画 =====
const faders=document.querySelectorAll('.fade-up');
const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){ entry.target.classList.add('show'); }
    });
},{threshold:0.1});
faders.forEach(fader=>observer.observe(fader));
