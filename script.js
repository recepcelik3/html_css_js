document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const title = document.querySelector('.title');

    // Add hover effect to the container
    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const xPercent = (x / rect.width - 0.5) * 20;
        const yPercent = (y / rect.height - 0.5) * 20;

        container.style.transform = `perspective(1000px) rotateX(${-yPercent}deg) rotateY(${xPercent}deg)`;
    });

    container.addEventListener('mouseleave', () => {
        container.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });

    // Add pulsing animation to title
    setInterval(() => {
        title.style.transform = 'scale(1.1)';
        setTimeout(() => {
            title.style.transform = 'scale(1)';
        }, 200);
    }, 2000);
}));