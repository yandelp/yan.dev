const nav = document.querySelector('nav');

function setNavHeight() {
    if (!nav) return;

    // getBoundingClientRect is fractional; offsetHeight rounds to an integer
    // and can leave a sub-pixel gap or overlap at some zoom levels.
    document.documentElement.style.setProperty(
        '--nav-height',
        `${nav.getBoundingClientRect().height}px`
    );
}

setNavHeight();

// ResizeObserver catches nav height changes from *any* cause (font loading,
// links wrapping to a second row), not just window resizes.
if (nav && 'ResizeObserver' in window) {
    new ResizeObserver(setNavHeight).observe(nav);
} else {
    window.addEventListener('resize', setNavHeight);
}
