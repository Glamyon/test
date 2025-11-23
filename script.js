// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Language Switching
    const languages = {
        en: {
            home: 'Home',
            'certified-teams': 'Certified Teams',
            'popular-services': 'Popular Services',
            'submit-project': 'Submit Project',
            workflow: 'Workflow',
            testimonials: 'Client Testimonials',
            faq: 'FAQ',
            'hero-title': 'Find the most reliable teams at 20%-50% lower costs than global rates',
            'hero-paragraph': 'Our verified matching process connects you with top creative professionals, scaling your projects while you focus on what matters most.',
            'hero-point1': 'Pay only for successful matches - no upfront fees',
            'hero-point2': 'Team matching done for you, truly effective',
            'hero-point3': 'Full project supervision guarantee',
            'hero-cta': 'Start in 1 Minute',
            stat1: 'Projects Delivered',
            stat2: 'Certified Teams',
            stat3: 'Client Savings',
            team1: 'Film & Video',
            team2: 'Animation',
            team3: 'Visual & Design',
            team4: 'Ecommerce',
            team5: 'More',
            service1: 'Video Editing',
            service2: 'Animation Creation',
            'submit-title': 'Submit Your Project',
            'submit-paragraph': 'Leverage GOAOXOR\'s advantages for your creative needs.',
            'submit-cta': 'Start Now',
            adv1: 'Fast Team Match',
            adv2: 'Expert Support',
            adv3: 'Safe & Verified',
            'video-title': 'Learn about GOAOXOR',
            'step1-title': 'Client Submits Project Requirements',
            'step1-desc': 'Describe your needs and submit.',
            'step2-title': 'Platform Screens Teams in China',
            'step2-desc': 'We select the best matches.',
            'step3-title': 'Recommend Matching Teams to Client',
            'step3-desc': 'Review and choose.',
            'step4-title': 'Client Confirms Team',
            'step4-desc': 'Approve the selection.',
            'step5-title': 'Platform Generates Project Contract',
            'step5-desc': 'Secure agreement.',
            'step6-title': 'Client Settles Directly with Team',
            'step6-desc': 'Complete payment.',
            'barriers-title': 'We Eliminate Barriers in Global Creative Collaboration',
            barrier1: 'Reduce Costs by 20%-50%',
            barrier2: 'Top Chinese Teams',
            barrier3: 'International Services',
            barrier4: 'Strict Review Mechanism',
            barrier5: 'Project Supervision Guarantee',
            barrier6: 'Multi-Domain Experts',
            'testimonial-job1': 'Marketing Director',
            'testimonial-text1': 'Excellent service and cost savings.',
            'testimonial-name1': 'John Doe',
            'faq-q1': 'How does GOAOXOR work?',
            'faq-a1': 'We match you with certified teams.',
            'footer-about': 'About GOAOXOR',
            'footer-explore': 'Explore',
            'footer-connect': 'Connect With Us',
            'footer-update': 'Stay Updated',
            'newsletter-placeholder': 'Email',
            'footer-join': 'Join Now'
        },
        zh: {
            home: '首页',
            'certified-teams': '经过认证的团队',
            'popular-services': '热门服务',
            'submit-project': '提交项目',
            workflow: '工作流程',
            testimonials: '客户评价',
            faq: 'FAQ',
            'hero-title': '以比全球费率低20%-50%的成本找到最可靠的团队',
            'hero-paragraph': '我们经过验证的匹配流程将您与顶尖创意专业人士联系起来，扩展您的项目，同时让您专注于最重要的事情。',
            'hero-point1': '仅为成功匹配支付费用 - 无前期费用',
            'hero-point2': '为您完成的团队匹配，真正有效',
            'hero-point3': '全程监督的项目保证',
            'hero-cta': '1分钟开始',
            stat1: '已交付项目',
            stat2: '认证团队',
            stat3: '客户节省',
            team1: '影视与视频',
            team2: '动画',
            team3: '视觉与设计',
            team4: '电商',
            team5: '更多',
            service1: '视频编辑',
            service2: '动画创作',
            'submit-title': '提交您的项目',
            'submit-paragraph': '利用 GOAOXOR 的优势满足您的创意需求。',
            'submit-cta': '立即开始',
            adv1: '快速团队匹配',
            adv2: '专家支持',
            adv3: '安全且经过验证',
            'video-title': '了解 GOAOXOR',
            'step1-title': '客户提交项目需求',
            'step1-desc': '描述您的需求并提交。',
            'step2-title': '平台在中国筛选团队',
            'step2-desc': '我们选择最佳匹配。',
            'step3-title': '向客户推荐匹配团队',
            'step3-desc': '审查并选择。',
            'step4-title': '客户确认团队',
            'step4-desc': '批准选择。',
            'step5-title': '平台生成项目合同',
            'step5-desc': '安全协议。',
            'step6-title': '客户与团队直接结算',
            'step6-desc': '完成支付。',
            'barriers-title': '我们消除全球创意协作的障碍',
            barrier1: '降低 20%-50% 成本',
            barrier2: '顶尖中国团队',
            barrier3: '国际化服务',
            barrier4: '严格审核机制',
            barrier5: '项目监督保障',
            barrier6: '多领域专家',
            'testimonial-job1': '营销总监',
            'testimonial-text1': '优秀的服务和成本节省。',
            'testimonial-name1': '约翰·多伊',
            'faq-q1': 'GOAOXOR 如何运作？',
            'faq-a1': '我们将您与认证团队匹配。',
            'footer-about': '关于 GOAOXOR',
            'footer-explore': '探索',
            'footer-connect': '与我们联系',
            'footer-update': '保持更新',
            'newsletter-placeholder': '电子邮件',
            'footer-join': '立即加入'
        }
    };

    let currentLang = 'en';

    function switchLanguage(lang) {
        currentLang = lang;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (languages[lang][key]) el.textContent = languages[lang][key];
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (languages[lang][key]) el.placeholder = languages[lang][key];
        });
        document.querySelectorAll('.lang').forEach(el => {
            el.classList.toggle('active', el.getAttribute('data-lang') === lang);
        });
    }

    document.querySelectorAll('.lang').forEach(el => {
        el.addEventListener('click', () => switchLanguage(el.getAttribute('data-lang')));
    });

    switchLanguage('en'); // Default

    // Carousel
    const carouselInner = document.querySelector('.carousel-inner');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let index = 0;
    const cards = document.querySelectorAll('.service-card');
    const cardWidth = cards[0].offsetWidth + 20; // Including margin

    next.addEventListener('click', () => {
        index = (index + 1) % cards.length;
        carouselInner.style.transform = `translateX(-${index * cardWidth}px)`;
    });

    prev.addEventListener('click', () => {
        index = (index - 1 + cards.length) % cards.length;
        carouselInner.style.transform = `translateX(-${index * cardWidth}px)`;
    });

    // Auto scroll
    setInterval(() => next.click(), 5000);

    // FAQ Accordion
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Animations on Scroll
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in', 'slide-in');
            }
        });
    });

    document.querySelectorAll('section').forEach(sec => observer.observe(sec));
});
