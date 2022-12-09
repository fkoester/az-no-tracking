function ready(fn) {
    if (document.readyState != 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(() => {
    setInterval(() => {
        document.querySelector('.adBlockerLayer')?.remove();
        document.documentElement.className = document.documentElement.className.replace('fixedBackground', '');
    }, 100);
});
