// window.onload = function () {
//     window.scrollTo(0, 0);
// }


// NAVIGATION BAR
let linksNavBar = [...document.getElementsByClassName('navlist')[0].getElementsByTagName('a')];

linksNavBar.forEach(link => {
    link.addEventListener('click', () => {
        const currentActive = document.getElementsByClassName('navlist')[0].getElementsByClassName('active')[0];
        currentActive.classList.remove('active');
        link.classList.add('active');
    })
});

