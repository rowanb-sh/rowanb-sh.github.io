// Автоматическая дата
const options = { weekday: 'long', day: 'numeric', month: 'long' };
document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-US', options);

// Словарь переводов
const translations = {
    en: {
        nav_all: "All",
        nav_exp: "Experience",
        nav_edu: "Education",
        nav_skills: "Skills",
        hero_title: "Hi, I'm Nodirjon!",
        hero_sub: "Student at Westminster International University in Tashkent (WIUT)",
        hero_p1: "Interested in logic, patterns, and systemic relationships.",
        hero_p2: "My curiosity spans analytical systems, quantitative methods, business administration, and operational compliance.",
        hero_p3: "Dedicated to structured problem-solving and continuous professional growth.",
        exp_heading: "Professional Experience",
        exp_title: "Road Transport Health and Safety Manager",
        exp_sub: "Safety & Fleet Department (US Logistics)",
        btn_show_details: "Show details",
        btn_hide_details: "Hide details",
        exp_li1: "Monitored and audited driver Hours of Service (HOS) logs via Electronic Logging Device (ELD) systems to ensure 100% compliance with FMCSA and DOT regulations.",
        exp_li2: "Conducted daily operational control of shifts, tracked target performance metrics, and managed active task statuses.",
        exp_li3: "Prepared comprehensive shift-handover reports for management, ensuring complete business continuity and transparency.",
        exp_li4: "Onboarded new employees on operational workflows, compliance SOPs, and ELD troubleshooting.",
        edu_heading: "Education & Training",
        edu_wiut_title: "Westminster International University in Tashkent",
        edu_wiut_sub: "Certificate of International Foundation Studies (CIFS)",
        btn_show_modules: "Show modules",
        btn_hide_modules: "Hide modules",
        edu_wiut_text: "Academic Communication Skills, Quantitative Methods, Critical Thinking, Professional Skills, Understanding Finance, Introduction to Business and Economics.",
        edu_lyc_title: "Academic Lyceum of WIUT",
        edu_lyc_sub: "Exact Sciences (GPA: 4.0 / 5.0)",
        btn_show_subjects: "Show subjects",
        btn_hide_subjects: "Hide subjects",
        edu_lyc_text: "Specialized in advanced Mathematics, Algebra, Geometry, Statistics, and English.",
        skills_heading: "Skills & Competencies",
        skills_analyt_title: "Analytical & Operational",
        skills_analyt_sub: "Data Analysis, Finance Basics & Compliance",
        btn_show_skills: "Show skills",
        btn_hide_skills: "Hide skills",
        skills_analyt_text: "Quantitative Data Analysis, Finance Basics, SOP Compliance, Staff Onboarding, Shift-to-Shift Reporting, ELD Web Tracking.",
        skills_lang_title: "Languages",
        skills_lang_sub: "Russian & English",
        btn_show_prof: "Show proficiency",
        btn_hide_prof: "Hide proficiency",
        skills_lang_text: "Russian (Native), English (B2 - IELTS certified).",
        footer_email: "Email"
    },
    ru: {
        nav_all: "Все",
        nav_exp: "Опыт",
        nav_edu: "Учеба",
        nav_skills: "Навыки",
        hero_title: "Привет, я Нодиржон!",
        hero_sub: "Студент Международного Вестминстерского университета в Ташкенте (WIUT)",
        hero_p1: "Увлечен логикой, паттернами и системными взаимосвязями.",
        hero_p2: "Мои интересы охватывают аналитические системы, количественные методы, бизнес-администрирование и операционный комплаенс.",
        hero_p3: "Стремлюсь к структурированному решению задач и непрерывному профессиональному росту.",
        exp_heading: "Профессиональный опыт",
        exp_title: "Менеджер по безопасности дорожного транспорта",
        exp_sub: "Отдел безопасности и автопарка (Логистика США)",
        btn_show_details: "Подробнее",
        btn_hide_details: "Скрыть",
        exp_li1: "Мониторинг и аудит журналов рабочего времени водителей (HOS) через системы ELD для обеспечения 100% соответствия правилам FMCSA и DOT.",
        exp_li2: "Ведение ежедневного операционного контроля смен, отслеживание целевых показателей и управление статусами задач.",
        exp_li3: "Подготовка комплексных отчетов о сдаче смен для руководства, обеспечение непрерывности и прозрачности бизнеса.",
        exp_li4: "Онбординг новых сотрудников по рабочим процессам, регламентам SOP и устранению неполадок ELD.",
        edu_heading: "Образование и тренинги",
        edu_wiut_title: "Международный Вестминстерский университет в Ташкенте",
        edu_wiut_sub: "Сертификат международного фонда (CIFS)",
        btn_show_modules: "Показать модули",
        btn_hide_modules: "Скрыть модули",
        edu_wiut_text: "Академические коммуникативные навыки, Количественные методы, Критическое мышление, Профессиональные навыки, Основы финансов, Введение в бизнес и экономику.",
        edu_lyc_title: "Академический лицей при WIUT",
        edu_lyc_sub: "Точные науки (GPA: 4.0 / 5.0)",
        btn_show_subjects: "Показать предметы",
        btn_hide_subjects: "Скрыть предметы",
        edu_lyc_text: "Углубленное изучение математики, алгебры, геометрии, статистики и английского языка.",
        skills_heading: "Навыки и компетенции",
        skills_analyt_title: "Аналитика и операции",
        skills_analyt_sub: "Анализ данных, основы финансов и комплаенс",
        btn_show_skills: "Показать навыки",
        btn_hide_skills: "Скрыть навыки",
        skills_analyt_text: "Количественный анализ данных, основы финансов, соблюдение SOP, онбординг персонала, отчетность по сменам, веб-трекинг ELD.",
        skills_lang_title: "Языки",
        skills_lang_sub: "Русский и английский",
        btn_show_prof: "Показать уровень",
        btn_hide_prof: "Скрыть уровень",
        skills_lang_text: "Русский (родной), английский (B2 — сертификат IELTS).",
        footer_email: "Почта"
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    document.getElementById('activeLangText').textContent = lang.toUpperCase();
    localStorage.setItem('portfolio_lang', lang);

    // Переводим все элементы с атрибутом data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Пересчитываем слайдер навигации под новую длину текста
    const activeTab = document.querySelector('.nav-tab.active');
    if (activeTab) moveGlider(activeTab);
}

function toggleLanguage() {
    const newLang = currentLang === 'en' ? 'ru' : 'en';
    setLanguage(newLang);
}

// Меню тем со стрелкой
const themeMenuBtn = document.getElementById('themeMenuBtn');
const themeMenu = document.getElementById('themeMenu');

function toggleThemeMenu() {
    const isOpen = themeMenu.classList.toggle('show');
    themeMenuBtn.classList.toggle('open', isOpen);
}

window.addEventListener('click', (e) => {
    if (!e.target.closest('.theme-dropdown-wrapper')) {
        themeMenu.classList.remove('show');
        themeMenuBtn.classList.remove('open');
    }
});

function setTheme(mode) {
    const body = document.body;
    body.classList.remove('theme-dark', 'theme-midnight');

    let icon = '☀️';
    let name = currentLang === 'en' ? 'Light' : 'Светлая';

    if (mode === 'dark') {
        body.classList.add('theme-dark');
        icon = '🌙';
        name = currentLang === 'en' ? 'Dark' : 'Темная';
    } else if (mode === 'midnight') {
        body.classList.add('theme-midnight');
        icon = '🌌';
        name = 'Midnight';
    }

    document.getElementById('activeThemeIcon').textContent = icon;
    document.getElementById('activeThemeName').textContent = name;
    localStorage.setItem('portfolio_theme', mode);
    themeMenu.classList.remove('show');
    themeMenuBtn.classList.remove('open');
}

// Раскрытие подробностей
function toggleDetails(btn) {
    const content = btn.nextElementSibling;
    const textSpan = btn.querySelector('span');
    const isExpanded = content.classList.toggle('expanded');
    
    btn.classList.toggle('open', isExpanded);
    const langDict = translations[currentLang];
    
    if (isExpanded) {
        if (currentLang === 'ru') {
            textSpan.textContent = textSpan.textContent.replace('Показать', 'Скрыть');
        } else {
            textSpan.textContent = textSpan.textContent.replace('Show', 'Hide');
        }
    } else {
        if (currentLang === 'ru') {
            textSpan.textContent = textSpan.textContent.replace('Скрыть', 'Показать');
        } else {
            textSpan.textContent = textSpan.textContent.replace('Hide', 'Show');
        }
    }
}

// Навигация и слайдер
const navTabs = document.querySelectorAll('.nav-tab');
const navGlider = document.getElementById('navGlider');
const sections = document.querySelectorAll('.tab-section');
const heroSection = document.getElementById('hero');

function moveGlider(activeTab) {
    navGlider.style.width = `${activeTab.offsetWidth}px`;
    navGlider.style.transform = `translateX(${activeTab.offsetLeft - 4}px)`;
}

function filterSections(target) {
    if (target === 'all') {
        heroSection.style.marginBottom = '';
    } else {
        heroSection.style.marginBottom = '36px';
    }

    sections.forEach(sec => {
        if (target === 'all' || sec.getAttribute('data-section') === target) {
            sec.classList.remove('hidden');
            sec.style.animation = 'none';
            sec.offsetHeight; 
            sec.style.animation = null;
        } else {
            sec.classList.add('hidden');
        }
    });
}

navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        navTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        moveGlider(tab);
        filterSections(tab.getAttribute('data-target'));
    });
});

// Инициализация при загрузке
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('portfolio_theme');
    if (savedTheme === 'dark' || savedTheme === 'midnight') {
        setTheme(savedTheme);
    } else {
        setTheme('light');
    }

    const savedLang = localStorage.getItem('portfolio_lang') || 'en';
    setLanguage(savedLang);

    const initialActiveTab = document.querySelector('.nav-tab.active');
    if (initialActiveTab) {
        moveGlider(initialActiveTab);
    }
});

window.addEventListener('resize', () => {
    const activeTab = document.querySelector('.nav-tab.active');
    if (activeTab) moveGlider(activeTab);
});
