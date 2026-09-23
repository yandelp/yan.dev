const nav = document.querySelector('nav');

function setNavHeight() {
    if (!nav) return;

    document.documentElement.style.setProperty(
        '--nav-height',
        `${nav.getBoundingClientRect().height}px`
    );
}

setNavHeight();

if (nav && 'ResizeObserver' in window) {
    new ResizeObserver(setNavHeight).observe(nav);
} else {
    window.addEventListener('resize', setNavHeight);
}

document.getElementById('year').textContent = new Date().getFullYear();