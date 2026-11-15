// Локализация для даты под каждый из 10 языков
const locales = {
    en: 'en-US', ru: 'ru-RU', uz: 'uz-UZ', es: 'es-ES',
    fr: 'fr-FR', de: 'de-DE', it: 'it-IT', zh: 'zh-CN',
    ar: 'ar-SA', tr: 'tr-TR'
};

function updateDate(lang) {
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const locale = locales[lang] || 'en-US';
    let dateStr = new Date().toLocaleDateString(locale, options);
    
    // Делаем первую букву всегда заглавной
    dateStr = dateStr.charAt(0).toUpperCase() + dateStr.slice(1);
    
    document.getElementById('currentDate').textContent = dateStr;
}

// Словарь переводов
const translations = {
    en: {
        nav_all: "All", nav_exp: "Experience", nav_edu: "Education", nav_skills: "Skills",
        theme_light: "Light", theme_dark: "Dark",
        hero_title: "Hi, I'm Nodirjon!",
        hero_sub: "Student at Westminster International University in Tashkent (WIUT)",
        hero_p1: "Interested in logic, patterns, and systemic relationships.",
        hero_p2: "My curiosity spans analytical systems, quantitative methods, business administration, and operational compliance.",
        hero_p3: "Dedicated to structured problem-solving and continuous professional growth.",
        exp_heading: "Professional Experience",
        exp_title: "Road Transport Health and Safety Manager",
        exp_sub: "Safety & Fleet Department (US Logistics)",
        btn_show: "Show details", btn_hide: "Hide details",
        exp_li1: "Monitored and audited driver Hours of Service (HOS) logs via Electronic Logging Device (ELD) systems to ensure 100% compliance with FMCSA and DOT regulations.",
        exp_li2: "Conducted daily operational control of shifts, tracked target performance metrics, and managed active task statuses.",
        exp_li3: "Prepared comprehensive shift-handover reports for management, ensuring complete business continuity and transparency.",
        exp_li4: "Onboarded new employees on operational workflows, compliance SOPs, and ELD troubleshooting.",
        edu_heading: "Education & Training",
        edu_wiut_title: "Westminster International University in Tashkent",
        edu_wiut_sub: "Certificate of International Foundation Studies (CIFS)",
        edu_wiut_text: "Academic Communication Skills, Quantitative Methods, Critical Thinking, Professional Skills, Understanding Finance, Introduction to Business and Economics.",
        edu_lyc_title: "Academic Lyceum of WIUT",
        edu_lyc_sub: "Exact Sciences (GPA: 4.0 / 5.0)",
        edu_lyc_text: "Specialized in advanced Mathematics, Algebra, Geometry, Statistics, and English.",
        skills_heading: "Skills & Competencies",
        skills_analyt_title: "Analytical & Operational",
        skills_analyt_sub: "Data Analysis, Finance Basics & Compliance",
        skills_analyt_text: "Quantitative Data Analysis, Finance Basics, SOP Compliance, Staff Onboarding, Shift-to-Shift Reporting, ELD Web Tracking.",
        skills_lang_title: "Languages", skills_lang_sub: "Russian & English",
        skills_lang_text: "Russian (Native), English (B2 - IELTS certified).",
        footer_email: "Email"
        

    },
    ru: {
        nav_all: "Все", nav_exp: "Опыт", nav_edu: "Учеба", nav_skills: "Навыки",
        theme_light: "Светлая", theme_dark: "Тёмная",
        hero_title: "Привет, я Нодиржон!",
        hero_sub: "Студент Международного Вестминстерского университета в Ташкенте (WIUT)",
        hero_p1: "Увлечен логикой, паттернами и системными взаимосвязями.",
        hero_p2: "Мои интересы охватывают аналитические системы, количественные методы, бизнес-администрирование и операционный комплаенс.",
        hero_p3: "Стремлюсь к структурированному решению задач и непрерывному профессиональному росту.",
        exp_heading: "Профессиональный опыт",
        exp_title: "Менеджер по безопасности дорожного транспорта",
        exp_sub: "Отдел безопасности и автопарка (Логистика США)",
        btn_show: "Подробнее", btn_hide: "Скрыть",
        exp_li1: "Мониторинг и аудит журналов рабочего времени водителей (HOS) через системы ELD для обеспечения 100% соответствия правилам FMCSA и DOT.",
        exp_li2: "Ведение ежедневного операционного контроля смен, отслеживание целевых показателей и управление статусами задач.",
        exp_li3: "Подготовка комплексных отчетов о сдаче смен для руководства, обеспечение непрерывности и прозрачности бизнеса.",
        exp_li4: "Онбординг новых сотрудников по рабочим процессам, регламентам SOP и устранению неполадок ELD.",
        edu_heading: "Образование и тренинги",
        edu_wiut_title: "Международный Вестминстерский университет в Ташкенте",
        edu_wiut_sub: "Сертификат международного фонда (CIFS)",
        edu_wiut_text: "Академические коммуникативные навыки, Количественные методы, Критическое мышление, Профессиональные навыки, Основы финансов, Введение в бизнес и экономику.",
        edu_lyc_title: "Академический лицей при WIUT",
        edu_lyc_sub: "Точные науки (GPA: 4.0 / 5.0)",
        edu_lyc_text: "Углубленное изучение математики, алгебры, геометрии, статистики и английского языка.",
        skills_heading: "Навыки и компетенции",
        skills_analyt_title: "Аналитика и операции",
        skills_analyt_sub: "Анализ данных, основы финансов и комплаенс",
        skills_analyt_text: "Количественный анализ данных, основы финансов, соблюдение SOP, онбординг персонала, отчетность по сменам, веб-трекинг ELD.",
        skills_lang_title: "Языки", skills_lang_sub: "Русский и английский",
        skills_lang_text: "Русский (родной), английский (B2 — сертификат IELTS).",
        footer_email: "Почта"
        

    },
    uz: {
        nav_all: "Barchasi", nav_exp: "Tajriba", nav_edu: "Ta'lim", nav_skills: "Ko'nikmalar",
        theme_light: "Yorug'", theme_dark: "Qorong'i",
        hero_title: "Salom, men Nodirjon!",
        hero_sub: "Toshkentdagi Xalqaro Vestminster Universiteti (WIUT) talabasi",
        hero_p1: "Mantiq, naqshlar va tizimli aloqalar bilan qiziqaman.",
        hero_p2: "Qiziqishlarim tahliliy tizimlar, miqdoriy usullar, biznesni boshqarish va operatsion muvofiqlikni o'z ichiga oladi.",
        hero_p3: "Tuzilmali muammolarni hal qilish va doimiy professional o'sishga intilaman.",
        exp_heading: "Kasbiy tajriba",
        exp_title: "Yo'l transporti salomatligi va xavfsizligi menejeri",
        exp_sub: "Xavfsizlik va avtopark bo'limi (AQSh logistikasi)",
        btn_show: "Batafsil", btn_hide: "Yashirish",
        exp_li1: "FMCSA va DOT qoidalariga 100% rioya etilishini ta'minlash uchun ELD tizimlari orqali haydovchilarning xizmat ko'rsatish soatlari (HOS) jurnallarini kuzatdim va tekshirdim.",
        exp_li2: "Kunlik operatsion smenalarni nazorat qildim, maqsadli ko'rsatkichlarni kuzatib bordim va faol vazifa statuslarini boshqardim.",
        exp_li3: "Biznesning uzluksizligi va shaffofligini ta'minlash uchun rahbariyatga har tomonlama smena topshirish hisobotlarini tayyorladim.",
        exp_li4: "Yangi xodimlarni ish jarayonlari, muvofiqlik qoidalari va ELD nosozliklarini bartaraf etish bo'yicha o'qitdim.",
        edu_heading: "Ta'lim va treninglar",
        edu_wiut_title: "Toshkent shahridagi Xalqaro Vestminster Universiteti",
        edu_wiut_sub: "Xalqaro poydevor ta'limi sertifikati (CIFS)",
        edu_wiut_text: "Akademik muloqot ko'nikmalari, Miqdoriy usullar, Tanqidiy fikrlash, Professional ko'nikmalar, Moliyani tushunish, Biznes va iqtisodiyotga kirish.",
        edu_lyc_title: "WIUT akademik litseyi",
        edu_lyc_sub: "Aniq fanlar (GPA: 4.0 / 5.0)",
        edu_lyc_text: "Chuqurlashtirilgan matematika, algebra, geometriya, statistika va ingliz tili.",
        skills_heading: "Ko'nikmalar va malakalar",
        skills_analyt_title: "Tahliliy va operatsion",
        skills_analyt_sub: "Ma'lumotlar tahlili, Moliya asoslari va Muvofiqlik",
        skills_analyt_text: "Miqdoriy ma'lumotlar tahlili, Moliya asoslari, SOP qoidalariga rioya qilish, Xodimlarni ishga tushirish, Smena hisobotlari, ELD veb-kuzatuvi.",
        skills_lang_title: "Tillar", skills_lang_sub: "Rus va ingliz tillari",
        skills_lang_text: "Rus tili (ona tili), Ingliz tili (B2 - IELTS sertifikati).",
        footer_email: "Elektron pochta"
    },
    es: {
        nav_all: "Todo", nav_exp: "Experiencia", nav_edu: "Educación", nav_skills: "Habilidades",
        theme_light: "Claro", theme_dark: "Oscuro",
        hero_title: "¡Hola, soy Nodirjon!",
        hero_sub: "Estudiante de la Universidad Internacional Westminster en Taskent (WIUT)",
        hero_p1: "Interesado en la lógica, los patrones y las relaciones sistémicas.",
        hero_p2: "Mi curiosidad abarca sistemas analíticos, métodos cuantitativos, administración de empresas y cumplimiento operativo.",
        hero_p3: "Dedicado a la resolución estructurada de problemas y al crecimiento profesional continuo.",
        exp_heading: "Experiencia Profesional",
        exp_title: "Gerente de Salud y Seguridad en el Transporte por Carretera",
        exp_sub: "Departamento de Seguridad y Flota (Logística de EE. UU.)",
        btn_show: "Mostrar detalles", btn_hide: "Ocultar detalles",
        exp_li1: "Monitoreé y audité los registros de Horas de Servicio (HOS) de los conductores a través de sistemas ELD para garantizar el 100% de cumplimiento con las regulaciones de FMCSA y DOT.",
        exp_li2: "Realicé control operativo diario de turnos, rastreé métricas de rendimiento y gestioné estados de tareas activas.",
        exp_li3: "Preparé informes completos de transferencia de turno para la gerencia, asegurando la continuidad y transparencia del negocio.",
        exp_li4: "Incorporé a nuevos empleados en flujos de trabajo operativos, SOPs de cumplimiento y solución de problemas de ELD.",
        edu_heading: "Educación y Formación",
        edu_wiut_title: "Universidad Internacional Westminster en Taskent",
        edu_wiut_sub: "Certificado de Estudios de Fundación Internacional (CIFS)",
        edu_wiut_text: "Habilidades de Comunicación Académica, Métodos Cuantitativos, Pensamiento Crítico, Habilidades Profesionales, Comprensión de Finanzas, Introducción a los Negocios y la Economía.",
        edu_lyc_title: "Liceo Académico de WIUT",
        edu_lyc_sub: "Ciencias Exactas (GPA: 4.0 / 5.0)",
        edu_lyc_text: "Especialización en Matemáticas avanzadas, Álgebra, Geometría, Estadística e Inglés.",
        skills_heading: "Habilidades y Competencias",
        skills_analyt_title: "Analíticas y Operativas",
        skills_analyt_sub: "Análisis de Datos, Conceptos Básicos de Finanzas y Cumplimiento",
        skills_analyt_text: "Análisis de Datos Cuantitativos, Finanzas Básicas, Cumplimiento de SOP, Incorporación de Personal, Informes de Turno, Rastreo Web ELD.",
        skills_lang_title: "Idiomas", skills_lang_sub: "Ruso e Inglés",
        skills_lang_text: "Ruso (Nativo), Inglés (B2 - certificado IELTS).",
        footer_email: "Correo electrónico"
    },
    fr: {
        nav_all: "Tout", nav_exp: "Expérience", nav_edu: "Éducation", nav_skills: "Compétences",
        theme_light: "Clair", theme_dark: "Sombre",
        hero_title: "Bonjour, je suis Nodirjon !",
        hero_sub: "Étudiant à l'Université Internationale Westminster de Tachkent (WIUT)",
        hero_p1: "Intéressé par la logique, les motifs et les relations systémiques.",
        hero_p2: "Ma curiosité s'étend aux systèmes analytiques, aux méthodes quantitatives, à l'administration des affaires et à la conformité opérationnelle.",
        hero_p3: "Dédié à la résolution structurée de problèmes et à la croissance professionnelle continue.",
        exp_heading: "Expérience Professionnelle",
        exp_title: "Gestionnaire de la Santé et de la Sécurité du Transport Routier",
        exp_sub: "Département Sécurité et Flotte (Logistique US)",
        btn_show: "Afficher les détails", btn_hide: "Masquer les détails",
        exp_li1: "Surveillance et audit des journaux des heures de service (HOS) des conducteurs via les systèmes ELD pour assurer une conformité à 100 % avec les réglementations FMCSA et DOT.",
        exp_li2: "Contrôle opérationnel quotidien des équipes, suivi des indicateurs de performance et gestion des statuts de tâches.",
        exp_li3: "Préparation de rapports de passation d'équipe complets pour la direction, garantissant la continuité et la transparence.",
        exp_li4: "Intégration des nouveaux employés sur les flux de travail opérationnels, les SOP de conformité et le dépannage ELD.",
        edu_heading: "Éducation et Formation",
        edu_wiut_title: "Université Internationale Westminster de Tachkent",
        edu_wiut_sub: "Certificat d'Études Fondamentales Internationales (CIFS)",
        edu_wiut_text: "Compétences en communication académique, Méthodes quantitatives, Pensée critique, Compétences professionnelles, Compréhension financière, Introduction aux affaires et à l'économie.",
        edu_lyc_title: "Lycée Académique de WIUT",
        edu_lyc_sub: "Sciences Exactes (GPA : 4.0 / 5.0)",
        edu_lyc_text: "Spécialisation en mathématiques avancées, algèbre, géométrie, statistiques et anglais.",
        skills_heading: "Compétences et Aptitudes",
        skills_analyt_title: "Analytiques et Opérationnelles",
        skills_analyt_sub: "Analyse de données, bases financières et conformité",
        skills_analyt_text: "Analyse de données quantitatives, bases financières, conformité SOP, intégration du personnel, rapports d'équipe, suivi web ELD.",
        skills_lang_title: "Langues", skills_lang_sub: "Russe et Anglais",
        skills_lang_text: "Russe (Natif), Anglais (B2 - certifié IELTS).",
        footer_email: "E-mail"
    },
    de: {
        nav_all: "Alle", nav_exp: "Erfahrung", nav_edu: "Bildung", nav_skills: "Fähigkeiten",
        theme_light: "Hell", theme_dark: "Dunkel",
        hero_title: "Hallo, ich bin Nodirjon!",
        hero_sub: "Student an der Westminster International University in Taschkent (WIUT)",
        hero_p1: "Interessiert an Logik, Mustern und systemischen Zusammenhängen.",
        hero_p2: "Meine Neugier erstreckt sich auf analytische Systeme, quantitative Methoden, Betriebswirtschaft und operative Compliance.",
        hero_p3: "Engagiert für strukturiertes Problemlösen und kontinuierliches berufliches Wachstum.",
        exp_heading: "Berufserfahrung",
        exp_title: "Manager für Gesundheit und Sicherheit im Straßentransport",
        exp_sub: "Sicherheits- und Flottenabteilung (US-Logistik)",
        btn_show: "Details anzeigen", btn_hide: "Details ausblenden",
        exp_li1: "Überwachung und Prüfung der Lenk- und Ruhezeitenprotokolle (HOS) der Fahrer über ELD-Systeme zur Sicherstellung der 100%igen Einhaltung der FMCSA- und DOT-Vorschriften.",
        exp_li2: "Durchführung der täglichen operativen Schichtkontrolle, Verfolgung von Leistungsmetriken und Verwaltung von Aufgabenstatus.",
        exp_li3: "Erstellung umfassender Schichtübergabeberichte für das Management zur Gewährleistung von Geschäftskontinuität und Transparenz.",
        exp_li4: "Einarbeitung neuer Mitarbeiter in operative Abläufe, Compliance-SOPs und ELD-Fehlerbehebung.",
        edu_heading: "Bildung & Ausbildung",
        edu_wiut_title: "Westminster International University in Taschkent",
        edu_wiut_sub: "Zertifikat für internationale Grundstudien (CIFS)",
        edu_wiut_text: "Akademische Kommunikationsfähigkeiten, Quantitative Methoden, Kritisches Denken, Professionelle Fähigkeiten, Finanzverständnis, Einführung in Wirtschaft und Management.",
        edu_lyc_title: "Akademisches Lyzeum der WIUT",
        edu_lyc_sub: "Exakte Wissenschaften (GPA: 4.0 / 5.0)",
        edu_lyc_text: "Spezialisierung auf fortgeschrittene Mathematik, Algebra, Geometrie, Statistik und Englisch.",
        skills_heading: "Fähigkeiten & Kompetenzen",
        skills_analyt_title: "Analytisch & Operativ",
        skills_analyt_sub: "Datenanalyse, Finanzgrundlagen & Compliance",
        skills_analyt_text: "Quantitative Datenanalyse, Finanzgrundlagen, SOP-Einhaltung, Personaleinarbeitung, Schichtberichte, ELD-Web-Tracking.",
        skills_lang_title: "Sprachen", skills_lang_sub: "Russisch & Englisch",
        skills_lang_text: "Russisch (Muttersprache), Englisch (B2 - IELTS zertifiziert).",
        footer_email: "E-Mail"
    },
    it: {
        nav_all: "Tutti", nav_exp: "Esperienza", nav_edu: "Formazione", nav_skills: "Competenze",
        theme_light: "Chiaro", theme_dark: "Scuro",
        hero_title: "Ciao, sono Nodirjon!",
        hero_sub: "Studente presso la Westminster International University di Tashkent (WIUT)",
        hero_p1: "Interessato alla logica, ai pattern e alle relazioni sistemiche.",
        hero_p2: "La mia curiosità spazia dai sistemi analitici ai metodi quantitativi, dall'amministrazione aziendale alla conformità operativa.",
        hero_p3: "Dedicato alla risoluzione strutturata dei problemi e alla continua crescita professionale.",
        exp_heading: "Esperienza Professionale",
        exp_title: "Manager della Salute e Sicurezza nel Trasporto su Strada",
        exp_sub: "Dipartimento Sicurezza e Flota (Logistica USA)",
        btn_show: "Mostra dettagli", btn_hide: "Nascondi dettagli",
        exp_li1: "Monitoraggio e audit dei registri delle Ore di Servizio (HOS) dei conducenti tramite sistemi ELD per garantire la conformità al 100% con le normative FMCSA e DOT.",
        exp_li2: "Controllo operativo giornaliero dei turni, monitoraggio delle metriche di prestazione e gestione dello stato delle attività.",
        exp_li3: "Preparazione di report completi di passaggio di turno per il management, garantendo continuità e trasparenza aziendale.",
        exp_li4: "Onboarding dei nuovi dipendenti sui flussi operativi, SOP di conformità e risoluzione dei problemi ELD.",
        edu_heading: "Formazione e Istruzione",
        edu_wiut_title: "Westminster International University di Tashkent",
        edu_wiut_sub: "Certificato di Studi Fondamentali Internazionali (CIFS)",
        edu_wiut_text: "Abilità di comunicazione accademica, Metodi quantitativi, Pensiero critico, Abilità professionali, Comprensione finanziaria, Introduzione all'economia e al business.",
        edu_lyc_title: "Liceo Accademico della WIUT",
        edu_lyc_sub: "Scienze Esatte (GPA: 4.0 / 5.0)",
        edu_lyc_text: "Specializzazione in Matematica avanzata, Algebra, Geometria, Statistica e Inglese.",
        skills_heading: "Competenze e Abilità",
        skills_analyt_title: "Analitiche e Operative",
        skills_analyt_sub: "Analisi dati, Nozioni di base finanziarie e Conformità",
        skills_analyt_text: "Analisi dati quantitativi, Nozioni di base finanziarie, Conformità SOP, Onboarding del personale, Report di turno, Tracciamento web ELD.",
        skills_lang_title: "Lingue", skills_lang_sub: "Russo e Inglese",
        skills_lang_text: "Russo (Madrelingua), Inglese (B2 - certificato IELTS).",
        footer_email: "Email"
    },
    zh: {
        nav_all: "全部", nav_exp: "经历", nav_edu: "教育", nav_skills: "技能",
        theme_light: "浅色", theme_dark: "深色",
        hero_title: "你好，我是Nodirjon！",
        hero_sub: "塔什干威斯敏斯特国际大学（WIUT）学生",
        hero_p1: "对逻辑、模式和系统性关系充满兴趣。",
        hero_p2: "我的好奇心涵盖分析系统、定量方法、企业管理和运营合规。",
        hero_p3: "致力于结构化问题解决和持续的职业成长。",
        exp_heading: "工作经历",
        exp_title: "公路运输健康与安全经理",
        exp_sub: "安全与车队部门（美国物流）",
        btn_show: "显示详情", btn_hide: "隐藏详情",
        exp_li1: "通过电子日志设备（ELD）系统监控和审计司机服务时间（HOS）日志，确保100%符合FMCSA和DOT法规。",
        exp_li2: "进行每日班次运营控制，跟踪目标绩效指标，并管理活跃任务状态。",
        exp_li3: "为管理层准备全面的交接班报告，确保业务连续性和透明度。",
        exp_li4: "在新员工的运营工作流程、合规SOP和ELD故障排除方面进行入职培训。",
        edu_heading: "教育与培训",
        edu_wiut_title: "塔什干威斯敏斯特国际大学",
        edu_wiut_sub: "国际预科证书（CIFS）",
        edu_wiut_text: "学术沟通技能、定量方法、批判性思维、专业技能、财务理解、商业与经济学导论。",
        edu_lyc_title: "WIUT学术高级中学",
        edu_lyc_sub: "精确科学（GPA：4.0 / 5.0）",
        edu_lyc_text: "专注于高等数学、代数、几何、统计学和英语。",
        skills_heading: "技能与能力",
        skills_analyt_title: "分析与运营",
        skills_analyt_sub: "数据分析、财务基础与合规性",
        skills_analyt_text: "定量数据分析、财务基础、SOP合规、员工入职、换班报告、ELD网络跟踪。",
        skills_lang_title: "语言", skills_lang_sub: "俄语与英语",
        skills_lang_text: "俄语（母语）、英语（B2 - IELTS认证）。",
        footer_email: "电子邮箱"
    },
    ar: {
        nav_all: "الكل", nav_exp: "الخبرة", nav_edu: "التعليم", nav_skills: "المهارات",
        theme_light: "فاتح", theme_dark: "داكن",
        hero_title: "مرحباً، أنا نوديرجون!",
        hero_sub: "طالب في جامعة ويستمنستر الدولية في طشقند (WIUT)",
        hero_p1: "مهتم بالمنطق والأنماط والعلاقات النظامية.",
        hero_p2: "تمتد فضولي نحو الأنظمة التحليلية والأساليب الكمية وإدارة الأعمال والامتثال التشغيلي.",
        hero_p3: "ملتزم بالحل المنظم للمشكلات والنمو المهني المستمر.",
        exp_heading: "الخبرة المهنية",
        exp_title: "مدير الصحة والسلامة للنقل البري",
        exp_sub: "قسم السلامة والأسطول (لوجستيات الولايات المتحدة)",
        btn_show: "عرض التفاصيل", btn_hide: "إخفاء التفاصيل",
        exp_li1: "مراقبة وتدقيق سجلات ساعات الخدمة (HOS) للسائقين عبر أنظمة أجهزة تسجيل السفر (ELD) لضمان الامتثال بنسبة 100% للوائح FMCSA و DOT.",
        exp_li2: "إجراء الرقابة التشغيلية اليومية للورديات، وتتبع مقاييس الأداء المستهدفة، وإدارة حالات المهام النشطة.",
        exp_li3: "إعداد تقارير تسليم الورديات الشاملة للإدارة، مما يضمن استمرارية الأعمال وشفافيتها.",
        exp_li4: "تأهيل الموظفين الجدد على سير العمل التشغيلي، وإجراءات التشغيل القياسية للامتثال (SOP)، واستكشاف أخطاء ELD وإصلاحها.",
        edu_heading: "التعليم والتدريب",
        edu_wiut_title: "جامعة ويستمنستر الدولية في طشقند",
        edu_wiut_sub: "شهادة الدراسات التأسيسية الدولية (CIFS)",
        edu_wiut_text: "مهارات الاتصال الأكاديمي، الأساليب الكمية، التفكير النقدي، المهارات المهنية، فهم الشؤون المالية، مقدمة في الأعمال والاقتصاد.",
        edu_lyc_title: "المدرسة الأكاديمية التابعة لـ WIUT",
        edu_lyc_sub: "العلوم الدقيقة (المعدل التراكمي: 4.0 / 5.0)",
        edu_lyc_text: "تخصص في الرياضيات المتقدمة، الجبر، الهندسة، الإحصاء، واللغة الإنجليزية.",
        skills_heading: "المهارات والكفاءات",
        skills_analyt_title: "التحليلية والتشغيلية",
        skills_analyt_sub: "تحليل البيانات، أساسيات التمويل والامتثال",
        skills_analyt_text: "تحليل البيانات الكمية، أساسيات التمويل، الامتثال لإجراءات SOP، تأهيل الموظفين، تقارير الورديات، تتبع ELD عبر الويب.",
        skills_lang_title: "اللغات", skills_lang_sub: "الروسية والإنجليزية",
        skills_lang_text: "الروسية (اللغة الأم)، الإنجليزية (B2 - معتمدة من IELTS).",
        footer_email: "البريد الإلكتروني"
    },
    tr: {
        nav_all: "Tümü", nav_exp: "Deneyim", nav_edu: "Eğitim", nav_skills: "Yetenekler",
        theme_light: "Açık", theme_dark: "Koyu",
        hero_title: "Merhaba, ben Nodirjon!",
        hero_sub: "Taşkent Westminster Uluslararası Üniversitesi (WIUT) Öğrencisi",
        hero_p1: "Mantık, kalıplar ve sistemik ilişkilerle ilgileniyorum.",
        hero_p2: "Merakım analitik sistemler, nicel yöntemler, işletme yönetimi ve operasyonel uyumluluğu kapsamaktadır.",
        hero_p3: "Yapılandırılmış problem çözmeye ve sürekli profesyonel gelişime adanmış durumdayım.",
        exp_heading: "Profesyonel Deneyim",
        exp_title: "Karayolu Taşımacılığı Sağlık ve Güvenlik Yöneticisi",
        exp_sub: "Güvenlik ve Filo Departmanı (ABD Lojistiği)",
        btn_show: "Detayları göster", btn_hide: "Detayları gizle",
        exp_li1: "FMCSA ve DOT düzenlemelerine %100 uyum sağlamak için ELD sistemleri aracılığıyla sürücü Çalışma Süresi (HOS) kayıtlarını izledim ve denetledim.",
        exp_li2: "Günlük vardiya operasyonel kontrolünü gerçekleştirdim, hedef performans metriklerini takip ettim ve aktif görev durumlarını yönettim.",
        exp_li3: "İş sürekliliğini ve şeffaflığı sağlamak için yönetim için kapsamlı vardiya devir raporları hazırladım.",
        exp_li4: "Yeni çalışanları operasyonel iş akışları, uyumluluk SOP'leri ve ELD sorun giderme konularında işe alıştım.",
        edu_heading: "Eğitim & Öğretim",
        edu_wiut_title: "Taşkent Westminster Uluslararası Üniversitesi",
        edu_wiut_sub: "Uluslararası Temel Çalışmalar Sertifikası (CIFS)",
        edu_wiut_text: "Akademik İletişim Becerileri, Nicel Yöntemler, Eleştirel Düşünme, Profesyonel Beceriler, Finans Anlayışı, İşletme ve Ekonomiye Giriş.",
        edu_lyc_title: "WIUT Akademik Lisesi",
        edu_lyc_sub: "Fen Bilimleri / Kesin Bilimler (GPA: 4.0 / 5.0)",
        edu_lyc_text: "İleri düzey Matematik, Cebir, Geometri, İstatistik ve İngilizce alanlarında uzmanlaşma.",
        skills_heading: "Yetenekler & Yetkinlikler",
        skills_analyt_title: "Analitik & Operasyonel",
        skills_analyt_sub: "Veri Analizi, Finans Temelleri ve Uyumluluk",
        skills_analyt_text: "Nicel Veri Analizi, Finans Temelleri, SOP Uyumluluğu, Personel Oryantasyonu, Vardiya Raporlaması, ELD Web Takibi.",
        skills_lang_title: "Diller", skills_lang_sub: "Rusça ve İngilizce",
        skills_lang_text: "Rusça (Anadil), İngilizce (B2 - IELTS sertifikalı).",
        footer_email: "E-posta"
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    document.getElementById('activeLangText').textContent = lang.toUpperCase();
    localStorage.setItem('portfolio_lang', lang);

    // Обновляем дату в зависимости от выбранного языка
    updateDate(lang);

    // Обновляем тексты на сайте
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Обновляем название активной темы на кнопке
    const currentTheme = document.body.classList.contains('theme-dark') ? 'dark' : 'light';
    setThemeText(currentTheme);

    const activeTab = document.querySelector('.nav-tab.active');
    if (activeTab) moveGlider(activeTab);
    closeAllMenus();
}

function setThemeText(mode) {
    const langDict = translations[currentLang] || translations['en'];
    const themeName = mode === 'dark' ? langDict.theme_dark : langDict.theme_light;
    const icon = mode === 'dark' ? '🌙' : '☀️';
    document.getElementById('activeThemeIcon').textContent = icon;
    document.getElementById('activeThemeName').textContent = themeName;
}

const langMenuBtn = document.getElementById('langMenuBtn');
const langMenu = document.getElementById('langMenu');

function toggleLangMenu() {
    themeMenu.classList.remove('show');
    themeMenuBtn.classList.remove('open');
    const isOpen = langMenu.classList.toggle('show');
    langMenuBtn.classList.toggle('open', isOpen);
}

const themeMenuBtn = document.getElementById('themeMenuBtn');
const themeMenu = document.getElementById('themeMenu');

function toggleThemeMenu() {
    langMenu.classList.remove('show');
    langMenuBtn.classList.remove('open');
    const isOpen = themeMenu.classList.toggle('show');
    themeMenuBtn.classList.toggle('open', isOpen);
}

function closeAllMenus() {
    langMenu.classList.remove('show');
    langMenuBtn.classList.remove('open');
    themeMenu.classList.remove('show');
    themeMenuBtn.classList.remove('open');
}

window.addEventListener('click', (e) => {
    if (!e.target.closest('.top-controls')) {
        closeAllMenus();
    }
});

function setTheme(mode) {
    const body = document.body;
    body.classList.remove('theme-dark');

    if (mode === 'dark') {
        body.classList.add('theme-dark');
    }

    setThemeText(mode);
    localStorage.setItem('portfolio_theme', mode);
    closeAllMenus();
}

function toggleDetails(btn) {
    const content = btn.nextElementSibling;
    const textSpan = btn.querySelector('span');
    const isExpanded = content.classList.toggle('expanded');
    
    btn.classList.toggle('open', isExpanded);
    
    const langDict = translations[currentLang];
    if (isExpanded) {
        textSpan.textContent = langDict.btn_hide || 'Hide details';
    } else {
        textSpan.textContent = langDict.btn_show || 'Show details';
    }
}

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

window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('portfolio_lang') || 'en';
    setLanguage(savedLang);

    const savedTheme = localStorage.getItem('portfolio_theme') || 'light';
    setTheme(savedTheme);

    const initialActiveTab = document.querySelector('.nav-tab.active');
    if (initialActiveTab) {
        moveGlider(initialActiveTab);
    }
});

window.addEventListener('resize', () => {
    const activeTab = document.querySelector('.nav-tab.active');
    if (activeTab) moveGlider(activeTab);
});
