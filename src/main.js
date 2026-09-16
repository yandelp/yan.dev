function setNavHeight() {
    const nav = document.querySelector('nav');

    document.documentElement.style.setProperty(
        '--nav-height',
        `${nav.offsetHeight}px`
    );
}

setNavHeight();
window.addEventListener('resize', setNavHeight);