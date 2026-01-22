// about-us.js - Xử lý trang giới thiệu thành viên
console.log('about-us.js đang chạy...');

document.addEventListener('DOMContentLoaded', function() {
    // Hiệu ứng scroll cho các section
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Quan sát các member card
    document.querySelectorAll('.member-card').forEach(card => {
        observer.observe(card);
    });

    // Thêm CSS cho animation
    const style = document.createElement('style');
    style.textContent = `
        .member-card {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .member-card.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .mission-card, .contact-card {
            opacity: 0;
            transform: scale(0.95);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .mission-card.animate-in, .contact-card.animate-in {
            opacity: 1;
            transform: scale(1);
        }
    `;
    document.head.appendChild(style);

    // Hiển thị tất cả các phần tử ban đầu
    setTimeout(() => {
        document.querySelectorAll('.member-card, .mission-card, .contact-card').forEach(el => {
            el.classList.add('animate-in');
        });
    }, 100);

    // Xử lý click vào email để copy
    document.querySelectorAll('.contact-btn[href^="mailto"]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const email = this.href.replace('mailto:', '');
            navigator.clipboard.writeText(email).then(() => {
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i> Đã sao chép';
                setTimeout(() => {
                    this.innerHTML = originalText;
                }, 2000);
            });
        });
    });

    // Smooth scroll cho anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});