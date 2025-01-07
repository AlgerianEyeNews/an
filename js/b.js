document.getElementById('sidebar').style.display = sidebar.style.display = "none";
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
}
const backToTop = document.getElementById('backToTop');

window.onscroll = function() {
    if (document.documentElement.scrollTop > 100) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.onreadystatechange = function() {
    const loadingBar = document.getElementById('loadingBar');
    if (document.readyState === 'interactive') {
        loadingBar.style.width = '50%';
    } else if (document.readyState === 'complete') {
        loadingBar.style.width = '100%';
        setTimeout(() => loadingBar.style.display = 'none', 500);
    }
};
￼Enter
