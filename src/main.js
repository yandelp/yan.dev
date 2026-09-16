function setNavHeight() {
    const header = document.querySelector('header');

    document.documentElement.style.setProperty(
        '--nav-height',
        `${header.offsetHeight}px`
    );
}

setNavHeight();
window.addEventListener('resize', setNavHeight);