function showPage(pageId) {
    const pages = document.querySelectorAll('.page-content');

    pages.forEach(page => {
        page.classList.remove('active');
        setTimeout(() => {
            if (!page.classList.contains('active')) {
                page.style.display = 'none';
            }
        }, 500);
    });

    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.style.display = 'block';

        setTimeout(() => {
            selectedPage.classList.add('active');
        }, 10);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const menu = document.querySelector('.menu');
    sidebar.style.display = 'flex';
    menu.style.display = 'none';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const menu = document.querySelector('.menu');
    sidebar.style.display = 'none';
    menu.style.display = 'flex';
}

document.addEventListener('DOMContentLoaded', function() {

    const joinBtn = document.getElementById('joinBtn');

    if (joinBtn) {
        joinBtn.addEventListener('click', function() {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const topic = document.getElementById('topic').value;
            const freq = document.getElementById('frequency').value;

            const nameError = document.getElementById('name-error');
            const emailError = document.getElementById('email-error');
            const phoneError = document.getElementById('phone-error');
            const topicError = document.getElementById('topic-error');
            const freqError = document.getElementById('freq-error');

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const phonePattern = /^[0-9]{10,14}$/;

            nameError.style.display = 'none';
            emailError.style.display = 'none';
            phoneError.style.display = 'none';
            topicError.style.display = 'none';
            freqError.style.display = 'none';
            
            document.getElementById('phone').classList.remove('invalid');
            let isError = false;

            if (name.trim() === "") {
                nameError.style.display = 'block';
                isError = true;
            }

            if (!emailPattern.test(email)) {
                emailError.style.display = 'block';
                isError = true;
            }

            if (!phonePattern.test(phone)) {
                phoneError.style.display = 'block';
                document.getElementById('phone').classList.add('invalid');
                isError = true;
            }

            if (topic === "") {
                topicError.style.display = 'block';
                isError = true;
            }

            if (freq === "") {
                freqError.style.display = 'block';
                isError = true;
            }

            if (!isError) {
                document.getElementById('name').value = "";
                document.getElementById('email').value = "";
                document.getElementById('phone').value = "";

                document.getElementById('topic').selectedIndex = 0;
                document.getElementById('frequency').selectedIndex = 0;

                nameError.style.display = 'none';
                emailError.style.display = 'none';
                phoneError.style.display = 'none';
                topicError.style.display = 'none';
                freqError.style.display = 'none';

                showPage('newsletter');
            }
        });
    }
});
