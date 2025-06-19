document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    });

    const showcase = document.querySelector('.showcase-image-container');
    if (showcase) {
        showcase.style.opacity = "0";
        showcase.style.transform = 'translateY(20px)';
        showcase.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(showcase);
    }
});
