document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );

        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelector('.form')?.addEventListener('submit', e => {
    e.preventDefault();

    alert('Заявка отправлена!');
});// Обработка кнопок тарифов
document.addEventListener('DOMContentLoaded', function() {
    const btns = document.querySelectorAll('.btn-order');
    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const tariffInfo = btn.getAttribute('data-tariff') || 'выбранный тариф';
            alert(`Спасибо за интерес к тарифу «${tariffInfo}»! \nС вами свяжется менеджер ООО «Альт».\nИли звоните: +7(8512)26-25-26`);
        });
    });

   

    // Кнопка на герой-блоке (переход в раздел "О нас")
    const aboutBtn = document.getElementById('aboutBtn');
    if(aboutBtn) {
        aboutBtn.addEventListener('click', () => {
            const aboutSection = document.getElementById('about');
            if(aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    // Кнопка онлайн-чата
    const chatBtn = document.getElementById('chatBtn');
    if(chatBtn) {
        chatBtn.addEventListener('click', () => {
            alert('Чат поддержки: Напишите свой вопрос, и оператор ответит в ближайшее время.\n\nРежим работы: 24/7');
        });
    }

    // Кнопка личного кабинета
    const lkBtn = document.getElementById('lkBtn');
    if(lkBtn) {
        lkBtn.addEventListener('click', () => {
            alert('Переход в личный кабинет. Для входа используйте свой логин и пароль.\n\nЕсли у вас нет доступа, обратитесь в поддержку.');
        });
    }

    // Плавная прокрутка для навигации
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Аккордеон для FAQ
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Закрываем другие открытые вопросы
            faqItems.forEach(otherItem => {
                if(otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            // Переключаем текущий
            item.classList.toggle('active');
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== БУРГЕР-МЕНЮ ==========
    const burger = document.getElementById('mobileMenuBtn');
    const nav = document.querySelector('nav');
    
    if (burger && nav) {
        burger.addEventListener('click', function() {
            nav.classList.toggle('show');
            
            // Меняем иконку: ☰ → ✕
            if (nav.classList.contains('show')) {
                burger.innerHTML = '✕';
            } else {
                burger.innerHTML = '☰';
            }
        });
        
        // Закрываем меню при клике на ссылку
        const links = document.querySelectorAll('.menu a');
        links.forEach(function(link) {
            link.addEventListener('click', function() {
                nav.classList.remove('show');
                burger.innerHTML = '☰';
            });
        });
    }
    
    // ========== КНОПКА ТЕЛЕФОНА ==========
    const callBtn = document.getElementById('callBtn');
    if (callBtn) {
        callBtn.addEventListener('click', function() {
            window.location.href = 'tel:+78512262526';
        });
    }
    
    // ========== ПЛАВНАЯ ПРОКРУТКА ==========
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const targetId = href.substring(1);
            const target = document.getElementById(targetId);
            
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
});