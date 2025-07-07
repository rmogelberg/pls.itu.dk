window.addEventListener('load', () => {
    const hamburger = document.getElementById('hamburger');
    const blur = document.getElementById('blur');
    const nav = document.getElementById('mainnav');
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('open');
        blur.classList.toggle('open');
        hamburger.classList.toggle('open');
    });
});