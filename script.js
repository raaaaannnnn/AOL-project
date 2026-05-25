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

document.getElementById('join-button').addEventListener('click', function() {
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const phoneError = document.getElementById('phone-error');
    const topicError = document.getElementById('topic-error');
    const freqError = document.getElementById('freq-error');

    nameError.innerText = "";
    emailError.innerText = "";
    phoneError.innerText = "";
    topicError.innerText = "";
    freqError.innerText = "";

    const fullName = document.querySelector('.full-name input').value.trim();
    const email = document.querySelector('.email input').value.trim();
    const phone = document.querySelector('.phone-number input').value.trim();
    const selectedTopic = document.querySelector('input[name="topic"]:checked');
    const selectedFreq = document.getElementById('times-frequency').value;

    let error = false;

    if (fullName === "") {
        nameError.innerText = "Name must be filled!";
        error = true;
    } else if (fullName.length < 3) {
        nameError.innerText = "Name must be at least 3 characters!";
        error = true;
    } else if (fullName < 'A' || fullName > 'Z' && fullName < 'a' || fullName > 'z') {
        nameError.innerText = "Name must be an alphabet!";
        error = true;
    } else if (fullName === " ") {
        nameError.innerText = "Name can not contain space!";
        error = true;
    }

    if (email === "") {
        emailError.innerText = "Email must be filled!";
        error = true;
    } else if (!email.includes('@gmail.com')) {
        emailError.innerText = "Email must be @gmail.com";
        error = true;
    } 

    if (phone === "") {
        phoneError.innerText = "Phone number must be filled!";
        error = true;
    } else if (phone.length < 10) {
        phoneError.innerText = "Phone must be at least 10 numbers!";
        error = true;
    } else {
        for (let i = 0; i < phone.length; i++) {
            const char = phone[i];

            if (i === 0 && char === '+') {
                continue;
            }

            if (char === ' ') {
                continue;
            }

            if (isNaN(char)) {
                phoneError.innerText = "Phone number must be a numbers!";
                error = true;
                break;
            }
        }
    }

    if (!selectedTopic) {
        topicError.innerText = "Topic must be selected at least one!";
        error = true;
    }

    if (selectedFreq === "") {
        freqError.innerText = "Freq must be selected at least one!";
        error = true;
    }
    
    if (error) return;

    document.getElementById('newsletter').reset();
});

document.getElementById('scroll-to').addEventListener('click', function(){
    const infoSection = document.querySelector('.main-information');

    if (infoSection) {
        infoSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
});
