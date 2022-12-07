function ready(fn) {
    if (document.readyState != 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(() => {
    document.getElementById('adDefendBG')?.remove();
    document.getElementById('adDefendWrapper')?.remove();
    document.getElementById('adBlockerLayer')?.remove()
    document.body.className = document.body.className.replace('adDefendBodyNoScroll','');
    document.body.className = document.body.className.replace('fixedBackground','');
});
