// 監聽網頁滾動事件
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    
    // 如果頁面向下滾動超過 50px，就加上 'scrolled' class
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
