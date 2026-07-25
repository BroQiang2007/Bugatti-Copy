// 處理導覽列滾動變色
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 處理手機版漢堡選單的點擊事件
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    // 切換選單的顯示狀態
    navLinks.classList.toggle('active');
    // 讓漢堡圖示變成 X
    menuToggle.classList.toggle('is-active');
});

// 點擊選單連結後自動關閉選單（增加使用者體驗）
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('is-active');
    });
});
