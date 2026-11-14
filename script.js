// Автоматическая дата
const options = { weekday: 'long', day: 'numeric', month: 'long' };
document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-US', options);

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
    let name = 'Light';

    if (mode === 'dark') {
        body.classList.add('theme-dark');
        icon = '🌙';
        name = 'Dark';
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

// Логика плавного слайдера навигации и фильтрации разделов
const navTabs = document.querySelectorAll('.nav-tab');
const navGlider = document.getElementById('navGlider');
const sections = document.querySelectorAll('.tab-section');

function moveGlider(activeTab) {
    navGlider.style.width = `${activeTab.offsetWidth}px`;
    navGlider.style.transform = `translateX(${activeTab.offsetLeft - 4}px)`;
}

function filterSections(target) {
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

    const initialActiveTab = document.querySelector('.nav-tab.active');
    if (initialActiveTab) {
        moveGlider(initialActiveTab);
    }
});

window.addEventListener('resize', () => {
    const activeTab = document.querySelector('.nav-tab.active');
    if (activeTab) moveGlider(activeTab);
});
