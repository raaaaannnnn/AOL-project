function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    const navbar = document.querySelector('.head');

    pages.forEach(page => {
        page.style.display = 'none';
    });

    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.style.display = 'block';
    }
    
    const sidebar = document.querySelector('.sidebar');
    if (sidebar.classList.contains('active')) {
        sidebarToggle();
    }

    if (pageId !== 'home') {
        navbar.classList.add('nav-active');
    } else if (window.scrollY <= 5) {
        navbar.classList.remove('nav-active');
    }
}

function sidebarToggle() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');

    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.head');
    const homePage = document.getElementById('home');
    const isHomeVisible = homePage && homePage.style.display !== 'none';

    if (window.scrollY > 5) {
        navbar.classList.add('nav-active');
    } else {
        if (isHomeVisible) {
            navbar.classList.remove('nav-active');
        }
    }
});

window.addEventListener('click', function(event) {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    const hamburger = document.querySelector('.hamburger-menu');

    if (event.target === overlay) {
        sidebarToggle();
    }
});
