window.addEventListener('load', () => {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('mainnav');
    hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    });
});