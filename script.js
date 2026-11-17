// === ТОЧНАЯ СИСТЕМА ИНТЕНСИВНОСТИ ГЛИТЧЕЙ И ПЕРЕКЛЮЧАТЕЛЬ ===
const glitchSteps = [3, 5, 7, 11, 13, 17, 19];
let stepIndex = 0;
let isGlitchMasterOn = true;

function scheduleNextGlitch() {
    if (!isGlitchMasterOn) return;
    
    const currentSec = glitchSteps[stepIndex];
    // Определяем количество одновременных глитчей согласно вашему правилу:
    // 3, 5, 7 -> 1 объект; 11, 13 -> 2 объекта; 17, 19 -> 3 объекта
    let count = 1;
    if (currentSec === 11 || currentSec === 13) count = 2;
    if (currentSec >= 17) count = 3;

    stepIndex = (stepIndex + 1) % glitchSteps.length;

    setTimeout(() => {
        if (isGlitchMasterOn) triggerMultipleChaos(count);
        scheduleNextGlitch();
    }, currentSec * 1000);
}

function triggerMultipleChaos(count) {
    const targets = document.querySelectorAll('.card-block, h1, h2, p, .hero-subtitle');
    if (targets.length === 0) return;

    for (let i = 0; i < count; i++) {
        const randomTarget = targets[Math.floor(Math.random() * targets.length)];
        randomTarget.classList.add('element-glitch');
        
        setTimeout(() => {
            randomTarget.classList.remove('element-glitch');
        }, 2200);
    }
}

// Управление кнопкой хаоса внизу (Иконка глитча + Знак Стоп сверху)
function toggleGlitchMaster() {
    isGlitchMasterOn = !isGlitchMasterOn;
    const iconSpan = document.getElementById('glitchIcon');
    const textSpan = document.getElementById('glitchStatusText');

    if (isGlitchMasterOn) {
        iconSpan.textContent = '⚡';
        textSpan.textContent = 'Chaos Active';
        scheduleNextGlitch();
    } else {
        iconSpan.textContent = '⚡⛔'; // Знак глитча + СТОП сверху
        textSpan.textContent = 'Chaos Stopped';
    }
}

// === ГЕНЕРАЦИЯ 100+ ФОНОВЫХ МИНИ-ЗНАЧКОВ TELEGRAM / WHATSAPP ===
window.addEventListener('DOMContentLoaded', () => {
    const bgContainer = document.createElement('div');
    bgContainer.style.cssText = "position:fixed; top:0; left:0; width:100vw; height:100vh; pointer-events:none; z-index:-1; overflow:hidden; opacity:0.15;";
    
    for (let i = 0; i < 110; i++) {
        const icon = document.createElement('span');
        icon.textContent = Math.random() > 0.5 ? '✈️' : '💬'; // Символы мессенджеров
        icon.style.position = 'absolute';
        icon.style.left = `${Math.random() * 100}vw`;
        icon.style.top = `${Math.random() * 100}vh`;
        icon.style.fontSize = `${10 + Math.random() * 12}px`; // Чуть меньше размером, чтобы 100 штук смотрелись аккуратно
        icon.style.transform = `rotate(${Math.random() * 360}deg)`;
        bgContainer.appendChild(icon);
    }
    document.body.appendChild(bgContainer);

    // Запуск таймера глитчей
    scheduleNextGlitch();
});