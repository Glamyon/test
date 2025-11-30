/**
 * GOAOXOR 平台 - 优化后的 JavaScript
 * 功能：国际化、交互效果、性能优化
 */

class GOAOXORApp {
  constructor() {
    this.state = {
      lang: 'zh',
      carouselIndex: 0,
      isAutoScrolling: true
    };
    
    this.i18n = {
      en: {
        "brand.name": "GOAOXOR",
        "nav.home": "Home",
        "nav.teams": "Certified Teams", 
        "nav.popular": "Popular Services",
        "nav.submit": "Submit Project",
        "nav.workflow": "Workflow",
        "nav.testimonials": "Testimonials",
        "nav.faq": "FAQ",
        "hero.title": "Global Creative Production, Seamlessly Coordinated",
        "hero.subtitle": "Find vetted Chinese elite teams for video, animation, and design projects. Achieve international quality at 20%-50% lower costs.",
        "hero.point1": "Pay only when a match succeeds",
        "hero.point2": "Effective team matching", 
        "hero.point3": "End-to-end project supervision",
        "hero.cta": "Start in 1 Minute",
        "hero.watch": "Watch Intro",
        "hero.stat1": "Projects Delivered",
        "hero.stat2": "Certified Teams",
        "hero.stat3": "Client Savings",
        "teams.title": "Certified Teams",
        "teams.cta": "Need help deciding? Contact us",
        "teams.c1": "Film & Video",
        "teams.c2": "Animation",
        "teams.c3": "Visual & Design", 
        "teams.c4": "E-commerce",
        "teams.c5": "More",
        "services.title": "Popular Services",
        "services.s1.title": "Product Promo Video",
        "services.s1.projects": "120+ done",
        "services.s2.title": "2D/3D Explainer",
        "services.s2.projects": "200+ done",
        "services.s3.title": "Brand & Visual Design",
        "services.s3.projects": "150+ done", 
        "services.s4.title": "Motion Graphics",
        "services.s4.projects": "90+ done",
        "services.s5.title": "E-commerce Short Video",
        "services.s5.projects": "300+ done",
        "submit.title": "Submit Your Project",
        "submit.desc": "GOAOXOR efficiently recommends suitable creative teams through strict vetting and smart matching. Transparent end-to-end tracking ensures on-time, quality delivery.",
        "submit.cta": "Start Now",
        "submit.help": "Questions? See FAQ", 
        "submit.a1.title": "Fast Team Match",
        "submit.a1.desc": "Receive shortlists within 48 hours to kick off quickly.",
        "submit.a2.title": "Expert Support",
        "submit.a2.desc": "Advisors accompany you throughout, clarifying scope and risks.",
        "submit.a3.title": "Safe & Verified",
        "submit.a3.desc": "Strict verification and compliant contracts protect funds and delivery.",
        "video.title": "Discover GOAOXOR",
        "workflow.title": "Workflow",
        "workflow.s1.title": "Submit Requirements",
        "workflow.s1.desc": "Specify goals, budget, timeline, and references.", 
        "workflow.s2.title": "Platform Screening",
        "workflow.s2.desc": "Filter by domain expertise and availability with due diligence.",
        "workflow.s3.title": "Recommend Matches",
        "workflow.s3.desc": "Share 2–3 candidates and arrange intro calls.",
        "workflow.s4.title": "Confirm Team",
        "workflow.s4.desc": "Finalize the partner and collaboration model.",
        "workflow.s5.title": "Contract Issued", 
        "workflow.s5.desc": "Define deliverables, schedule, milestones; multi-currency supported.",
        "workflow.s6.title": "Settle Payments",
        "workflow.s6.desc": "Release by milestones and complete after acceptance.",
        "adv.title": "Removing Barriers to Global Creative Collaboration",
        "adv.a1.title": "20%-50% Cost Reduction",
        "adv.a1.desc": "Optimize budgets without compromising quality.", 
        "adv.a2.title": "Elite Chinese Teams",
        "adv.a2.desc": "Top-tier studios in major cities with proven experience.",
        "adv.a3.title": "International Service",
        "adv.a3.desc": "Bilingual communication and cross-timezone management.",
        "adv.a4.title": "Rigorous Vetting",
        "adv.a4.desc": "Portfolios, credentials, and reviews evaluated continuously.",
        "adv.a5.title": "Project Oversight", 
        "adv.a5.desc": "Milestone reviews, risk alerts, and quality audits.",
        "adv.a6.title": "Multi-domain Experts",
        "adv.a6.desc": "One-stop delivery across video, animation, design, and ecommerce assets.",
        "testimonials.title": "Trusted by Global Clients",
        "testimonials.subtitle": "Real feedback from North America, Europe, and Southeast Asia",
        "testimonials.t1.role": "Head of Marketing, SaaS", 
        "testimonials.t1.text": "They delivered a high-quality explainer in two weeks; our conversion rate increased by 27%. Smooth comms and professional process.",
        "testimonials.t1.name": "Alicia P.",
        "testimonials.t1.company": "San Francisco, US",
        "testimonials.t2.role": "Ecommerce Director",
        "testimonials.t2.text": "Our ecommerce video timeline was cut in half, with lower costs and zero quality trade-offs.",
        "testimonials.t2.name": "Marco T.", 
        "testimonials.t2.company": "Milan, IT",
        "testimonials.t3.role": "Producer, Agency",
        "testimonials.t3.text": "GOAOXOR's vetting standards gave us confidence, and cross-timezone collaboration was seamless.",
        "testimonials.t3.name": "Hannah R.",
        "testimonials.t3.company": "London, UK",
        "faq.title": "FAQ",
        "faq.q1.q": "How do I start and get matched?", 
        "faq.q1.a": "Click \"Start Now\", submit your brief, and receive candidates within 48 hours. Talk to them and choose the best fit.",
        "faq.q2.q": "How are fees calculated? Any hidden costs?",
        "faq.q2.a": "No subscriptions. We only charge a transparent service fee upon successful match. No hidden charges.",
        "faq.q3.q": "How is quality and timeline ensured?",
        "faq.q3.a": "With milestone management, staged acceptance, and advisor oversight. Team replacement can be initiated if needed.", 
        "footer.about.title": "About GOAOXOR",
        "footer.about.desc": "GOAOXOR connects global clients with elite Chinese creative teams for film, animation, and video projects, delivering quality at 20%-50% lower costs.",
        "footer.explore.title": "Explore",
        "footer.explore.teams": "Certified Teams",
        "footer.explore.popular": "Popular Services",
        "footer.explore.submit": "Submit Project", 
        "footer.explore.workflow": "Workflow",
        "footer.explore.faq": "FAQ",
        "footer.connect.title": "Connect With Us",
        "footer.news.title": "Stay Updated",
        "footer.news.desc": "Subscribe for insights on creative production and cross-border collaboration.",
        "footer.news.cta": "Join Now",
        "footer.copyright": "© 2025 GOAOXOR. All Rights Reserved."
      },
      zh: {
        "brand.name": "GOAOXOR",
        "nav.home": "首页",
        "nav.teams": "经过认证的团队", 
        "nav.popular": "热门服务",
        "nav.submit": "提交项目",
        "nav.workflow": "工作流程",
        "nav.testimonials": "客户评价",
        "nav.faq": "FAQ",
        "hero.title": "全球跨境创意制作，一站式高效协作",
        "hero.subtitle": "在 GOAOXOR 寻找经过审核的中国精英团队，完成视频、动画与设计项目，以 20%-50% 的成本优势获得国际水准成果。",
        "hero.point1": "仅为成功匹配支付费用",
        "hero.point2": "有效团队匹配", 
        "hero.point3": "全程监督项目保证",
        "hero.cta": "1 分钟开始",
        "hero.watch": "了解平台",
        "hero.stat1": "完成项目",
        "hero.stat2": "认证团队", 
        "hero.stat3": "客户节省",
        "teams.title": "经过认证的团队",
        "teams.cta": "需要帮助选择？联系我们",
        "teams.c1": "影视与视频",
        "teams.c2": "动画",
        "teams.c3": "视觉与设计", 
        "teams.c4": "电商",
        "teams.c5": "更多",
        "services.title": "热门服务",
        "services.s1.title": "产品宣传视频",
        "services.s1.projects": "完成 120+",
        "services.s2.title": "2D/3D 解说动画",
        "services.s2.projects": "完成 200+",
        "services.s3.title": "品牌与视觉设计",
        "services.s3.projects": "完成 150+", 
        "services.s4.title": "Motion Graphics",
        "services.s4.projects": "完成 90+",
        "services.s5.title": "电商短视频",
        "services.s5.projects": "完成 300+",
        "submit.title": "提交你的项目",
        "submit.desc": "GOAOXOR 通过严格审核与智能匹配，快速为您推荐最合适的创意团队。平台全程透明跟进，确保按时按质交付。",
        "submit.cta": "立即开始",
        "submit.help": "有问题？查看 FAQ", 
        "submit.a1.title": "快速匹配团队",
        "submit.a1.desc": "48 小时内给出候选团队，快速推进项目。",
        "submit.a2.title": "专家顾问支持",
        "submit.a2.desc": "项目顾问全程陪伴，需求澄清、风险预警。",
        "submit.a3.title": "安全与认证",
        "submit.a3.desc": "严格审核与合规合同，保障资金与交付。",
        "video.title": "了解 GOAOXOR",
        "workflow.title": "工作流程",
        "workflow.s1.title": "客户提交项目需求",
        "workflow.s1.desc": "填写目标、预算与时间表，上传参考资料。", 
        "workflow.s2.title": "平台筛选团队",
        "workflow.s2.desc": "基于领域经验与可用性进行筛选与尽调。",
        "workflow.s3.title": "推荐匹配团队",
        "workflow.s3.desc": "提供 2-3 个候选，与客户进行初次沟通。",
        "workflow.s4.title": "客户确认团队",
        "workflow.s4.desc": "确定最终合作团队与工作方式。",
        "workflow.s5.title": "平台生成合同", 
        "workflow.s5.desc": "明确交付物、时间与里程碑，支持多币种。",
        "workflow.s6.title": "客户与团队结算",
        "workflow.s6.desc": "按里程碑放款，交付验收后完成支付。",
        "adv.title": "消除全球创意协作障碍",
        "adv.a1.title": "降低 20%-50% 成本",
        "adv.a1.desc": "在保证质量的前提下，显著优化预算。", 
        "adv.a2.title": "顶尖中国团队",
        "adv.a2.desc": "覆盖一线城市与成熟制作公司，经验丰富。",
        "adv.a3.title": "国际化服务",
        "adv.a3.desc": "英语/中文双语沟通与跨时区项目管理。",
        "adv.a4.title": "严格审核",
        "adv.a4.desc": "作品集、资质与评价多维评估，动态淘汰。",
        "adv.a5.title": "项目监督", 
        "adv.a5.desc": "里程碑复盘、风险预警与质量抽检机制。",
        "adv.a6.title": "多领域专家",
        "adv.a6.desc": "视频、动画、设计、电商素材一站式交付。",
        "testimonials.title": "全球客户信赖",
        "testimonials.subtitle": "来自北美、欧洲、东南亚等客户的真实反馈",
        "testimonials.t1.role": "SaaS 市场负责人", 
        "testimonials.t1.text": "他们在两周内交付了高质量解释动画，转化率提升了 27%。沟通顺畅、流程专业。",
        "testimonials.t1.name": "Alicia P.",
        "testimonials.t1.company": "San Francisco, US",
        "testimonials.t2.role": "电商总监",
        "testimonials.t2.text": "我们的电商视频周期缩短一半，成本更低，质量不打折。",
        "testimonials.t2.name": "Marco T.", 
        "testimonials.t2.company": "Milan, IT",
        "testimonials.t3.role": "广告公司制片",
        "testimonials.t3.text": "GOAOXOR 的审核标准很放心，跨时区协作非常顺滑。",
        "testimonials.t3.name": "Hannah R.",
        "testimonials.t3.company": "London, UK",
        "faq.title": "常见问题",
        "faq.q1.q": "如何开始项目并匹配团队？", 
        "faq.q1.a": "点击\"立即开始\"，提交需求，48 小时内收到候选团队，与之沟通后选择最合适的团队。",
        "faq.q2.q": "费用如何计算？是否有隐藏收费？",
        "faq.q2.a": "平台不收订阅费，仅对成功匹配的项目收取透明服务费，无任何隐藏费用。",
        "faq.q3.q": "如何保障项目质量与交付时间？",
        "faq.q3.a": "通过里程碑管理、阶段验收与顾问监督确保质量与进度，必要时可启动替换机制。", 
        "footer.about.title": "关于 GOAOXOR",
        "footer.about.desc": "GOAOXOR 连接全球客户与中国精英创意团队，专注影视、动画与视频项目，以更低成本交付国际品质。",
        "footer.explore.title": "探索",
        "footer.explore.teams": "经过认证的团队",
        "footer.explore.popular": "热门服务",
        "footer.explore.submit": "提交项目", 
        "footer.explore.workflow": "工作流程",
        "footer.explore.faq": "FAQ",
        "footer.connect.title": "联系我们",
        "footer.news.title": "订阅更新",
        "footer.news.desc": "订阅跨境创意制作与协作的洞见与案例。",
        "footer.news.cta": "立即加入",
        "footer.copyright": "© 2025 GOAOXOR. 保留所有权利。"
      }
    };

    this.carouselInterval = null;
    this.init();
  }

  /**
   * 初始化应用
   */
  init() {
    this.setupLanguage();
    this.setupSmoothScroll();
    this.setupScrollAnimations();
    this.setupCarousel();
    this.setupFAQ();
    this.setupNavigation();
    this.setupParallax();
    this.setupFormValidation();
    
    console.log('GOAOXOR 应用初始化完成');
  }

  /**
   * 设置语言功能
   */
  setupLanguage() {
    const savedLang = localStorage.getItem('goaoxor-lang') || 
                     navigator.language.split('-')[0] || 
                     'zh';
    
    this.applyLanguage(savedLang);
    this.bindLanguageEvents();
  }

  /**
   * 应用语言
   */
  applyLanguage(lang) {
    if (!this.i18n[lang]) {
      console.warn(`语言 "${lang}" 不支持，回退到中文`);
      lang = 'zh';
    }

    this.state.lang = lang;
    document.documentElement.lang = lang;
    localStorage.setItem('goaoxor-lang', lang);

    this.updateAllTextContent(lang);
    this.updateLanguageSelector(lang);
    this.updateLanguageButton(lang);
  }

  /**
   * 更新所有文本内容
   */
  updateAllTextContent(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = this.i18n[lang][key];
      
      if (translation) {
        if (element.children.length > 0 && 
            (element.classList.contains('primary-button') || 
             element.classList.contains('secondary-button') ||
             element.tagName === 'BUTTON')) {
          const textNodes = Array.from(element.childNodes).filter(node => 
            node.nodeType === Node.TEXT_NODE || 
            (node.nodeName !== 'IMG' && !node.classList?.contains('icon'))
          );
          textNodes.forEach(node => node.remove());
          element.prepend(document.createTextNode(translation));
        } else {
          element.textContent = translation;
        }
      } else {
        console.warn(`缺少翻译: ${key} 语言: ${lang}`);
      }
    });
  }

  /**
   * 更新语言选择器状态
   */
  updateLanguageSelector(lang) {
    document.querySelectorAll('.lang-option img').forEach(img => {
      img.style.opacity = '0';
    });
    
    const currentOption = document.querySelector(`[data-lang="${lang}"] img`);
    if (currentOption) {
      currentOption.style.opacity = '1';
    }
  }

  /**
   * 更新语言按钮文本
   */
  updateLanguageButton(lang) {
    const button = document.getElementById('lang-toggle');
    if (!button) return;

    const labels = {
      en: 'English',
      zh: '中文',
      de: 'Deutsch',
      fr: 'Français',
      es: 'Español'
    };
    
    button.textContent = `${labels[lang]} ∨`;
  }

  /**
   * 绑定语言事件
   */
  bindLanguageEvents() {
    document.addEventListener('click', (e) => {
      const langOption = e.target.closest('[data-lang]');
      if (langOption) {
        const lang = langOption.getAttribute('data-lang');
        this.applyLanguage(lang);
        this.closeAllDropdowns();
      }
    });

    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
      langToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const langPanel = document.getElementById('lang-panel');
        if (langPanel) {
          langPanel.classList.toggle('is-open');
          langToggle.setAttribute('aria-expanded', 
            langPanel.classList.contains('is-open').toString());
        }
      });
    }
  }

  /**
   * 设置平滑滚动
   */
  setupSmoothScroll() {
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (link) {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const headerHeight = document.querySelector('.header-navbar').offsetHeight || 80;
          const targetPosition = targetElement.getBoundingClientRect().top + 
                               window.pageYOffset - 
                               headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          history.pushState(null, null, `#${targetId}`);
        }
      }
    });
  }

  /**
   * 设置滚动动画
   */
  setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          
          if (entry.target.classList.contains('stat-card')) {
            this.animateCounter(entry.target.querySelector('.stat-number'));
          }
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });
  }

  /**
   * 数字计数动画
   */
  animateCounter(element) {
    if (!element) return;
    
    const targetText = element.textContent;
    const isCurrency = targetText.includes('$');
    const isPercentage = targetText.includes('%');
    
    let targetNumber = parseFloat(targetText.replace(/[^0-9.]/g, ''));
    if (isNaN(targetNumber)) return;
    
    const duration = 2000;
    const steps = 60;
    const stepValue = targetNumber / steps;
    let currentStep = 0;
    
    const timer = setInterval(() => {
      currentStep++;
      let currentValue = stepValue * currentStep;
      
      if (currentStep >= steps) {
        currentValue = targetNumber;
        clearInterval(timer);
      }
      
      if (isCurrency) {
        element.textContent = `$${Math.round(currentValue).toLocaleString()}+`;
      } else if (isPercentage) {
        element.textContent = `${Math.round(currentValue)}%`;
      } else {
        element.textContent = `${Math.round(currentValue).toLocaleString()}+`;
      }
    }, duration / steps);
  }

  /**
   * 设置轮播功能
   */
  setupCarousel() {
    const track = document.querySelector('.carousel-track');
    const prevBtn = document.querySelector('[data-control="prev"]');
    const nextBtn = document.querySelector('[data-control="next"]');
    
    if (!track) return;

    const getVisibleCardsCount = () => {
      const viewport = document.querySelector('.carousel-viewport');
      const card = track.querySelector('.service-card');
      if (!card || !viewport) return 1;
      
      const cardWidth = card.offsetWidth + 20;
      const viewportWidth = viewport.offsetWidth;
      return Math.floor(viewportWidth / cardWidth);
    };

    const moveCarousel = (direction) => {
      const visibleCount = getVisibleCardsCount();
      const totalCards = track.children.length;
      const maxIndex = Math.max(0, totalCards - visibleCount);
      
      this.state.carouselIndex = Math.max(0, Math.min(
        this.state.carouselIndex + direction, 
        maxIndex
      ));
      
      const cardWidth = track.querySelector('.service-card').offsetWidth + 20;
      track.style.transform = `translateX(-${this.state.carouselIndex * cardWidth}px)`;
    };

    if (prevBtn) {
      prevBtn.addEventListener('click', () => moveCarousel(-1));
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', () => moveCarousel(1));
    }

    this.startAutoCarousel(() => moveCarousel(1));

    [track, prevBtn, nextBtn].forEach(el => {
      if (el) {
        el.addEventListener('mouseenter', () => this.stopAutoCarousel());
        el.addEventListener('mouseleave', () => this.startAutoCarousel(() => moveCarousel(1)));
      }
    });

    window.addEventListener('resize', this.debounce(() => {
      moveCarousel(0);
    }, 250));
  }

  /**
   * 开始自动轮播
   */
  startAutoCarousel(callback) {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
    
    this.carouselInterval = setInterval(() => {
      if (this.state.isAutoScrolling) {
        callback();
      }
    }, 4000);
  }

  /**
   * 停止自动轮播
   */
  stopAutoCarousel() {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
      this.carouselInterval = null;
    }
  }

  /**
   * 设置 FAQ 功能
   */
  setupFAQ() {
    document.querySelectorAll('.faq-item').forEach(item => {
      const button = item.querySelector('.faq-question-button');
      const content = item.querySelector('.faq-answer');
      
      if (button && content) {
        button.addEventListener('click', () => {
          const isExpanded = item.getAttribute('aria-expanded') === 'true';
          
          if (!isExpanded) {
            document.querySelectorAll('.faq-item[aria-expanded="true"]').forEach(otherItem => {
              if (otherItem !== item) {
                otherItem.setAttribute('aria-expanded', 'false');
                this.animateFAQContent(otherItem, false);
              }
            });
          }
          
          item.setAttribute('aria-expanded', (!isExpanded).toString());
          this.animateFAQContent(item, !isExpanded);
        });
      }
    });
  }

  /**
   * FAQ 内容动画
   */
  animateFAQContent(item, shouldOpen) {
    const content = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-toggle-icon');
    
    if (!content || !icon) return;
    
    if (shouldOpen) {
      content.style.maxHeight = content.scrollHeight + 'px';
      icon.style.transform = 'rotate(45deg)';
    } else {
      content.style.maxHeight = '0';
      icon.style.transform = 'rotate(0)';
    }
  }

  /**
   * 设置导航功能
   */
  setupNavigation() {
    const setupDropdown = (buttonId, panelId) => {
      const button = document.getElementById(buttonId);
      const panel = document.getElementById(panelId);
      
      if (button && panel) {
        button.addEventListener('click', (e) => {
          e.stopPropagation();
          const isOpen = panel.classList.contains('is-open');
          
          this.closeAllDropdowns();
          
          if (!isOpen) {
            panel.classList.add('is-open');
            button.setAttribute('aria-expanded', 'true');
          }
        });
      }
    };

    setupDropdown('ibp1t1', 'nav-services-panel');
    setupDropdown('i5ykss', 'nav-more-panel');

    document.addEventListener('click', () => {
      this.closeAllDropdowns();
    });

    this.setupNavbarScroll();
  }

  /**
   * 关闭所有下拉菜单
   */
  closeAllDropdowns() {
    document.querySelectorAll('.nav-submenu, .lang-panel').forEach(panel => {
      panel.classList.remove('is-open');
    });
    
    document.querySelectorAll('.nav-acc-btn, #lang-toggle').forEach(button => {
      button.setAttribute('aria-expanded', 'false');
    });
  }

  /**
   * 导航栏滚动效果
   */
  setupNavbarScroll() {
    const navbar = document.querySelector('.header-navbar');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', this.throttle(() => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        navbar.style.backdropFilter = 'blur(20px)';
        
        if (currentScrollY > lastScrollY) {
          navbar.style.transform = 'translateY(-100%)';
        } else {
          navbar.style.transform = 'translateY(0)';
        }
      } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.transform = 'translateY(0)';
      }
      
      lastScrollY = currentScrollY;
    }, 100));
  }

  /**
   * 设置视差效果
   */
  setupParallax() {
    const glow = document.querySelector('.parallax-glow');
    
    if (glow) {
      window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        
        glow.style.setProperty('--x', `${x}%`);
        glow.style.setProperty('--y', `${y}%`);
      });

      window.addEventListener('scroll', () => {
        const scrollY = Math.min(40, window.scrollY / 20);
        glow.style.opacity = String(1 - scrollY / 60);
      });
    }
  }

  /**
   * 设置表单验证
   */
  setupFormValidation() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        
        if (this.validateEmail(emailInput.value)) {
          this.handleNewsletterSignup(emailInput.value);
          emailInput.value = '';
          this.showNotification('订阅成功！感谢您的关注。', 'success');
        } else {
          this.showNotification('请输入有效的邮箱地址', 'error');
          emailInput.focus();
        }
      });
    }
  }

  /**
   * 邮箱验证
   */
  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * 处理新闻订阅
   */
  handleNewsletterSignup(email) {
    console.log('新闻订阅:', email);
    
    setTimeout(() => {
      // 实际项目中这里会调用后端 API
    }, 500);
  }

  /**
   * 显示通知
   */
  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    Object.assign(notification.style, {
      position: 'fixed',
      top: '20px',
      right: '20px',
      padding: '12px 20px',
      borderRadius: '8px',
      color: 'white',
      fontWeight: '500',
      zIndex: '1000',
      transform: 'translateX(100%)',
      transition: 'transform 0.3s ease',
      maxWidth: '300px'
    });
    
    const colors = {
      success: '#10b981',
      error: '#ef4444',
      info: '#3b82f6',
      warning: '#f59e0b'
    };
    notification.style.backgroundColor = colors[type] || colors.info;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 4000);
  }

  /**
   * 防抖函数
   */
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  /**
   * 节流函数
   */
  throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
}

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
  window.goaoxorApp = new GOAOXORApp();
});

// 错误处理
window.addEventListener('error', (e) => {
  console.error('GOAOXOR 应用错误:', e.error);
});

// 在页面卸载前清理资源
window.addEventListener('beforeunload', () => {
  if (window.goaoxorApp) {
    window.goaoxorApp.stopAutoCarousel();
  }
});
